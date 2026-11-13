import Image from "next/image";
import Reveal from "@/components/Reveal";
import TechBadge from "@/components/TechBadge";
import { links, email, stack, projects, jobs, wins, skills } from "@/lib/data";

const nav = [
  ["About", "about"],
  ["Toolkit", "stack"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Milestones", "achievements"],
  ["Contact", "contact"],
];

export default function Page() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="site-shell">
        <header className="topbar">
          <a className="wordmark" href="#top" aria-label="Tushar Singh, back to top">
            <span>Tushar Singh<span className="wordmark-dot">.</span></span>
          </a>
          <nav aria-label="Main navigation">
            {nav.map(([label, target], index) => (
              <a key={target} href={`#${target}`}>
                <span className="nav-index">0{index + 1}</span>{label}
              </a>
            ))}
          </nav>
          <a className="topbar-contact" href={`mailto:${email}`}>Say hello <span aria-hidden="true">↗</span></a>
        </header>

        <main id="main">
          <section className="hero" id="top" aria-labelledby="hero-title">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-line" />AI / ML · WEB · DEVOPS</p>
              <h1 id="hero-title">Tushar<br /><span>Singh</span></h1>
              <p className="hero-tagline">Every build is a <em>small eureka.</em></p>
              <p className="hero-description">
                I build intelligent systems, thoughtful interfaces, and the infrastructure that brings them to life.
              </p>
              <div className="hero-actions">
                <a className="button button-dark" href="#projects">Explore my work <span aria-hidden="true">↓</span></a>
                <a className="button button-light" href="/Tushar-Singh-Resume.pdf" download>Download résumé <span aria-hidden="true">↗</span></a>
              </div>
              <div className="hero-footnote mono">
                <span>CURIOUS BY NATURE</span><span className="hero-footnote-rule" /><span>BUILT WITH INTENTION</span>
              </div>
            </div>

            <a className="scroll-cue mono" href="#about"><span className="scroll-cue-line" />SCROLL TO EXPLORE</a>
          </section>

          <Reveal><section id="about" className="section about-section" aria-labelledby="about-title">
            <div className="section-marker mono"><span>01</span> A LITTLE ABOUT ME</div>
            <div className="about-grid">
              <h2 id="about-title">A foot in the clouds.<br /><span>Both hands in the build.</span></h2>
              <div className="about-copy">
                <p>B.Tech student in AI and ML at GGSIPU EDC (2025 to 2029). I like working across the whole journey: exploring an idea, training a model, building the product around it, and making sure it can run reliably.</p>
                <p>My recent work moves between 3D medical imaging, weather and disaster research, and game-playing agents. Different problems, same curiosity about what happens when the pieces come together.</p>
              </div>
            </div>
            <div className="about-rule"><span>MODEL THINKING</span><span className="rule-dash" /><span>PRODUCT BUILDING</span><span className="rule-dash" /><span>SYSTEMS THAT SHIP</span></div>
          </section></Reveal>

          <Reveal><section id="stack" className="section toolkit-section" aria-labelledby="stack-title">
            <div className="section-marker mono"><span>02</span> WHAT I BUILD WITH</div>
            <div className="section-heading">
              <h2 id="stack-title">A versatile <span>toolkit.</span></h2>
              <p>Tools are only as interesting as what you make with them.</p>
            </div>
            <div className="toolkit-grid">
              {stack.map(({ category, items }, index) => (
                <article className="toolkit-group" key={category}>
                  <span className="toolkit-index mono">0{index + 1}</span>
                  <h3>{category}</h3>
                  <div className="toolkit-badges">
                    {items.map((item) => <TechBadge key={item.name} {...item} />)}
                  </div>
                </article>
              ))}
            </div>
          </section></Reveal>

          <section id="projects" className="section projects-section" aria-labelledby="projects-title">
            <Reveal>
              <div className="section-marker mono"><span>03</span> SELECTED WORK</div>
              <div className="section-heading projects-heading">
                <h2 id="projects-title">Ideas, <span>in motion.</span></h2>
                <p>Research, experiments, and systems built to solve real problems.</p>
              </div>
            </Reveal>
            <div className="project-list">
              {projects.map((project, index) => (
                <Reveal key={project.id}>
                  <article className={`project-card project-${project.id}`}>
                    <div className="project-visual">
                      <Image
                        src={`/assets/${project.id}/cover.svg`}
                        alt={`${project.title} — original project illustration`}
                        fill
                        sizes="(max-width: 760px) 100vw, 48vw"
                      />
                      <span className="project-number mono">PROJECT / 0{index + 1}</span>
                      <span className="project-year mono">{project.when}</span>
                    </div>
                    <div className="project-copy">
                      <div className="project-kicker mono"><span>FIELD NOTES</span><span>↗</span></div>
                      <h3>{project.title}</h3>
                      <p className="project-description">{project.blurb}</p>
                      <ul className="project-facts">
                        {project.facts.map((fact) => <li key={fact}><span aria-hidden="true">↳</span>{fact}</li>)}
                      </ul>
                      <div className="project-tags mono">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                      <a className="text-link" href={project.repo} target="_blank" rel="noreferrer">Explore the repository <span aria-hidden="true">↗</span></a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <Reveal><section id="experience" className="section experience-section" aria-labelledby="experience-title">
            <div className="section-marker mono"><span>04</span> WHERE I HAVE WORKED</div>
            <div className="experience-layout">
              <h2 id="experience-title">Learning by<br /><span>making it real.</span></h2>
              <div className="experience-list">
                {jobs.map((job) => (
                  <article className="experience-entry" key={job.org}>
                    <div className="experience-meta mono"><span>{job.where}</span><span>FREELANCE</span></div>
                    <h3>{job.org}</h3>
                    <p className="experience-role">{job.role}</p>
                    <ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul>
                  </article>
                ))}
              </div>
            </div>
          </section></Reveal>

          <Reveal><section id="achievements" className="section milestones-section" aria-labelledby="achievements-title">
            <div className="section-marker mono"><span>05</span> SMALL WINS, GOOD COMPANY</div>
            <div className="section-heading">
              <h2 id="achievements-title">A few <span>mile markers.</span></h2>
              <p>Some nice moments from the journey so far.</p>
            </div>
            <ul className="milestone-list">
              {wins.map((win, index) => (
                <li key={win}><span className="milestone-index mono">0{index + 1}</span><span>{win}</span><span className="milestone-arrow" aria-hidden="true">↗</span></li>
              ))}
            </ul>
          </section></Reveal>

          <Reveal><section id="skills" className="section skills-section" aria-labelledby="skills-title">
            <div className="section-marker mono"><span>06</span> THE KIND OF PROBLEMS I LIKE</div>
            <div className="skills-grid">
              <h2 id="skills-title">Different worlds.<br /><span>One connected craft.</span></h2>
              <div className="skill-list">
                {skills.map(([name, description], index) => (
                  <article className="skill-item" key={name}>
                    <span className="skill-index mono">0{index + 1}</span><div><h3>{name}</h3><p>{description}</p></div>
                  </article>
                ))}
              </div>
            </div>
          </section></Reveal>

          <Reveal><section id="contact" className="contact-section" aria-labelledby="contact-title">
            <div className="contact-orbit contact-orbit-one" /><div className="contact-orbit contact-orbit-two" />
            <div className="section-marker mono"><span>07</span> YOUR MOVE</div>
            <div className="contact-content">
              <p className="contact-pretitle mono">GOOD THINGS START WITH A CONVERSATION</p>
              <h2 id="contact-title">Have a good<br /><em>one in mind?</em></h2>
              <a className="contact-email" href={`mailto:${email}`}>{email}<span aria-hidden="true">↗</span></a>
              <div className="social-links">
                {links.map(([name, url, icon]) => (
                  <a key={name} href={url} target="_blank" rel="noreferrer" aria-label={name} title={name}>
                    <span className="social-icon"><img src={icon} alt="" loading="lazy" decoding="async" /></span>
                    <span className="social-label">{name}</span>
                  </a>
                ))}
              </div>
            </div>
          </section></Reveal>
        </main>

        <footer className="site-footer mono">
          <a className="footer-mark" href="#top">TS<span>.</span></a>
          <span>KEEP LOOKING UP.</span>
          <span>© {new Date().getFullYear()} TUSHAR SINGH · EUREKA7.XYZ</span>
        </footer>
      </div>
    </>
  );
}
