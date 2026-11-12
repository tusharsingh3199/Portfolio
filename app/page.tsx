import Sky from "@/components/Sky";
import Sound from "@/components/Sound";
import Reveal from "@/components/Reveal";
import { links, email, stack, projects, jobs, wins, skills } from "@/lib/data";

const nav = ["about", "stack", "projects", "experience", "achievements", "skills", "contact"];

export default function Page() {
  return (
    <>
      <Sky />
      <Sound />
      <nav className="mono">{nav.map((n) => <a key={n} href={`#${n}`}>{n}</a>)}</nav>
      <main>
        <header className="hero">
          <p className="mono">AI/ML engineer, web and DevOps engineer</p>
          <h1>Tushar<br />Singh</h1>
          <p className="tag">Every build is a small eureka.</p>
          <svg className="rider" viewBox="0 0 220 90" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            <path d="M8 66 Q110 82 212 48 Q110 70 8 66Z" />
            <circle cx="112" cy="20" r="6" />
            <path d="M112 28 L106 52 M108 36 L86 30 M108 36 L134 26 M106 52 L94 66 M106 52 L120 64" />
          </svg>
          <div className="row">
            <a className="btn" href="/Tushar-Singh-Resume.pdf" download>Download resume</a>
            <a className="btn ghost" href="#projects">See projects</a>
          </div>
        </header>

        <Reveal><section id="about" className="glass">
          <h2>About</h2>
          <p>B.Tech student in AI and ML at GGSIPU EDC (2025 to 2029). Builds models, the services around them, and the pipelines that ship them, from 3D medical imaging to LLM agents that play games.</p>
        </section></Reveal>

        <Reveal><section id="stack" className="glass">
          <h2>Tech stack</h2>
          <dl>{stack.map(([k, v]) => <div key={k}><dt className="mono">{k}</dt><dd>{v}</dd></div>)}</dl>
        </section></Reveal>

        <div id="projects">
          {projects.map((p) => (
            <Reveal key={p.id}><article className="proj glass">
              <div className="shots">
                {[1, 2, 3].map((n) => <div key={n} className={`shot s${n}`} style={{ backgroundImage: `url(/assets/${p.id}/${n}.png)` }} />)}
              </div>
              <div className="info">
                <span className="mono">{p.when}</span>
                <h3>{p.title}</h3>
                <p>{p.blurb}</p>
                <ul>{p.facts.map((f) => <li key={f}>{f}</li>)}</ul>
                <p className="tags mono">{p.tags.join(", ")}</p>
                <a className="btn" href={p.repo} target="_blank" rel="noreferrer">View source on GitHub</a>
              </div>
            </article></Reveal>
          ))}
        </div>

        <Reveal><section id="experience" className="glass">
          <h2>Experience</h2>
          {jobs.map((j) => (
            <div key={j.org}>
              <h3>{j.org}</h3><p className="mono">{j.role}, {j.where}</p>
              <ul>{j.points.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          ))}
        </section></Reveal>

        <Reveal><section id="achievements" className="glass">
          <h2>Achievements</h2>
          <ul>{wins.map((w) => <li key={w}>{w}</li>)}</ul>
        </section></Reveal>

        <Reveal><section id="skills" className="glass">
          <h2>Skills</h2>
          <dl>{skills.map(([k, v]) => <div key={k}><dt className="mono">{k}</dt><dd>{v}</dd></div>)}</dl>
        </section></Reveal>

        <Reveal><section id="contact" className="glass">
          <h2>Contact</h2>
          <p><a className="big" href={`mailto:${email}`}>{email}</a></p>
          <p className="row">{links.map(([n, h]) => <a key={n} className="btn ghost" href={h} target="_blank" rel="noreferrer">{n}</a>)}</p>
        </section></Reveal>
        <footer className="mono">eureka7.xyz</footer>
      </main>
    </>
  );
}
