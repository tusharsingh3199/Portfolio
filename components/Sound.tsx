"use client";
import { useRef, useState } from "react";

// Wind (filtered noise with a slow sweep) and a soft pad, synthesised live. No audio files.
export default function Sound() {
  const [on, setOn] = useState(false);
  const ref = useRef<{ c: AudioContext; m: GainNode } | null>(null);
  const toggle = async () => {
    if (!ref.current) {
      const c = new AudioContext(), m = c.createGain();
      m.gain.value = 0; m.connect(c.destination);
      const b = c.createBuffer(1, c.sampleRate * 2, c.sampleRate), d = b.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      const s = c.createBufferSource(); s.buffer = b; s.loop = true;
      const f = c.createBiquadFilter(); f.type = "bandpass"; f.frequency.value = 500; f.Q.value = 0.6;
      const wg = c.createGain(); wg.gain.value = 0.35; s.connect(f); f.connect(wg); wg.connect(m);
      const l = c.createOscillator(); l.frequency.value = 0.07;
      const lg = c.createGain(); lg.gain.value = 250; l.connect(lg); lg.connect(f.frequency);
      const lp = c.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 900;
      const pg = c.createGain(); pg.gain.value = 0.05; lp.connect(pg); pg.connect(m);
      [146.83, 220, 277.18, 369.99].forEach((hz, i) => { const o = c.createOscillator(); o.frequency.value = hz; o.detune.value = i * 4 - 6; o.connect(lp); o.start(); });
      s.start(); l.start(); ref.current = { c, m };
    }
    const { c, m } = ref.current;
    m.gain.setValueAtTime(m.gain.value, c.currentTime);
    if (!on) { await c.resume(); m.gain.linearRampToValueAtTime(0.6, c.currentTime + 2); }
    else { m.gain.linearRampToValueAtTime(0, c.currentTime + 0.8); setTimeout(() => c.suspend(), 900); }
    setOn(!on);
  };
  return <button className="snd mono" onClick={toggle} aria-pressed={on}>{on ? "Wind on" : "Wind off"}</button>;
}
