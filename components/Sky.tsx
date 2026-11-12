"use client";
import { useEffect, useRef } from "react";

const VS = "attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}";
// Clouds (fbm), scroll-driven altitude, light ribbons, cursor wind and ripple trail.
const FS = `precision highp float;uniform vec2 R;uniform float T,S;uniform vec3 P[6];
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1.,0.)),f.x),mix(h(i+vec2(0.,1.)),h(i+vec2(1.,1.)),f.x),f.y);}
float fbm(vec2 p){float a=.5,s=0.;for(int i=0;i<5;i++){s+=a*n(p);p=p*2.03+7.;a*=.5;}return s;}
void main(){
  vec2 uv=gl_FragCoord.xy/R;float ar=R.x/R.y;vec2 p=vec2(uv.x*ar,uv.y);
  vec2 w=vec2(0.);float rg=0.;
  for(int i=0;i<6;i++){
    vec2 q=vec2(P[i].x*ar,P[i].y);float d=distance(p,q);float a=T-P[i].z;
    float r=sin(d*38.-a*7.)*exp(-a*1.6)*exp(-d*7.);
    rg+=r;w+=normalize(p-q+1e-4)*r*.05;
  }
  vec2 c=p*vec2(1.6,2.4)+w;
  float f=fbm(c+vec2(T*.03,S*.5))*.6+fbm(c*2.+vec2(T*.06,3.))*.4;
  float cl=smoothstep(.45,.85,f);
  vec3 low=vec3(.98,.78,.62),mid=vec3(.55,.80,.95),top=vec3(.08,.27,.58);
  float k=clamp(uv.y*1.1+S*.7,0.,1.);
  vec3 sky=mix(low,mid,smoothstep(0.,.45,k));sky=mix(sky,top,smoothstep(.4,1.,k));
  vec3 col=mix(sky,vec3(1.),cl*(.85-.45*S));
  float rb=pow(max(0.,sin(p.x*2.+p.y*4.5-T*.3+fbm(p*1.5)*3.)),60.);
  col+=vec3(.2,.9,.9)*rb*.35+vec3(.5,1.,1.)*rg*.25;
  gl_FragColor=vec4(col,1.);
}`;

export default function Sky() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current!;
    const gl = cv.getContext("webgl");
    if (!gl) return; // CSS gradient on <body> stays as the fallback
    const sh = (t: number, s: string) => { const o = gl.createShader(t)!; gl.shaderSource(o, s); gl.compileShader(o); return o; };
    const pr = gl.createProgram()!;
    gl.attachShader(pr, sh(gl.VERTEX_SHADER, VS));
    gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, FS));
    gl.linkProgram(pr); gl.useProgram(pr);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const a = gl.getAttribLocation(pr, "a");
    gl.enableVertexAttribArray(a); gl.vertexAttribPointer(a, 2, gl.FLOAT, false, 0, 0);
    const u = (n: string) => gl.getUniformLocation(pr, n);
    const P = new Float32Array(18); for (let i = 2; i < 18; i += 3) P[i] = -100;
    let k = 0, last = 0, s = 0, raf = 0;
    const t0 = performance.now(), now = () => (performance.now() - t0) / 1000;
    const size = () => { const q = innerWidth < 768 ? 0.5 : 0.75; cv.width = innerWidth * q; cv.height = innerHeight * q; gl.viewport(0, 0, cv.width, cv.height); };
    const draw = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      s += ((max > 0 ? scrollY / max : 0) - s) * 0.06;
      gl.uniform2f(u("R"), cv.width, cv.height); gl.uniform1f(u("T"), now()); gl.uniform1f(u("S"), s);
      gl.uniform3fv(u("P"), P); gl.drawArrays(gl.TRIANGLES, 0, 3);
    };
    const loop = () => { draw(); raf = requestAnimationFrame(loop); };
    const move = (e: PointerEvent) => {
      const t = now(); if (t - last < 0.07) return; last = t; k = (k + 1) % 6;
      P[k * 3] = e.clientX / innerWidth; P[k * 3 + 1] = 1 - e.clientY / innerHeight; P[k * 3 + 2] = t;
    };
    size(); addEventListener("resize", size);
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { s = 0; draw(); }
    else { addEventListener("pointermove", move); loop(); }
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", size); removeEventListener("pointermove", move); };
  }, []);
  return <canvas ref={ref} className="sky" aria-hidden="true" />;
}
