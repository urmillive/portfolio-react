import { useEffect, useRef, useState } from "react";
import {
  profile, socials, projects, earlierBuilds, story, skills, education, openSource,
} from "./data";

const NAV = [
  ["work", "Work"],
  ["story", "Story"],
  ["skills", "Skills"],
  ["about", "About"],
  ["contact", "Contact"],
];

// Adds .in to [data-reveal] elements as they scroll into view (CSS handles motion).
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      }),
      { rootMargin: "0px 0px -10% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const External = ({ href, children, className }) => (
  <a href={href} className={className} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <a href="#top" className="logo">{profile.short}<span aria-hidden="true">.</span></a>
      <nav id="menu" aria-label="Sections" className={open ? "show" : undefined}>
        {NAV.map(([id, label]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
      <span className="pill"><i aria-hidden="true" />{profile.status}</span>
      <button
        type="button"
        className="burger"
        aria-expanded={open}
        aria-controls="menu"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "Close" : "Menu"}
      </button>
    </header>
  );
}

// 8x8 board whose squares light up in a slow wave. Purely decorative.
function Board() {
  return (
    <div className="board" aria-hidden="true">
      {Array.from({ length: 64 }, (_, i) => {
        const r = Math.floor(i / 8);
        const c = i % 8;
        return <span key={i} className={(r + c) % 2 ? "d" : undefined} style={{ "--i": r + c }} />;
      })}
      <code>{"</>"}</code>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-text">
        <p className="lede">{profile.tagline}</p>
        <h1>
          <span>Hi, I&apos;m <b>{profile.name}.</b></span>
          <span>{profile.intro}</span>
        </h1>
        <div className="hero-cta">
          <a className="btn" href="#work">See the work</a>
          <a className="btn ghost" href={`mailto:${profile.email}`}>Say hello</a>
        </div>
      </div>
      <Board />
    </section>
  );
}

function ProjectCard({ p }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <article className={`card${flipped ? " flip" : ""}${p.featured ? " featured" : ""}`}>
      <div className="shot">
        <div className="flipper">
          <div className={`face front plate t-${p.tone}`} aria-hidden={flipped}>
            <span className="word">{p.word}</span>
            {p.featured && <span className="tag">Featured</span>}
          </div>
          <div className="face back" aria-hidden={!flipped}>
            <p>{p.description}</p>
            <ul className="chips">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
        </div>
      </div>
      <div className="card-foot">
        <div>
          <h3>{p.title}</h3>
          <p>{p.summary}</p>
        </div>
        <button type="button" className="read" aria-pressed={flipped} onClick={() => setFlipped((v) => !v)}>
          {flipped ? "Back" : "Read"}
          <span className="sr-only"> about {p.title}</span>
        </button>
      </div>
      <div className="links">
        {p.links.map((l) => <External key={l.href} href={l.href}>{l.label} ↗</External>)}
      </div>
    </article>
  );
}

function Work() {
  const rail = useRef(null);
  const nudge = (dir) => {
    const el = rail.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };
  return (
    <section className="section work" id="work" aria-labelledby="work-h">
      <div className="head" data-reveal>
        <h2 id="work-h">Things I&apos;ve <em>built</em></h2>
        <div className="arrows">
          <button type="button" onClick={() => nudge(-1)} aria-label="Scroll projects left">‹</button>
          <button type="button" onClick={() => nudge(1)} aria-label="Scroll projects right">›</button>
        </div>
      </div>
      <div className="rail" ref={rail} tabIndex={0} role="region" aria-label="Projects, scroll sideways">
        {projects.map((p) => <ProjectCard key={p.title} p={p} />)}
      </div>
      <div className="earlier" data-reveal>
        <h3>Earlier builds</h3>
        <ul>
          {earlierBuilds.map((b) => (
            <li key={b.title}>
              <strong>{b.title}</strong>
              <span>{b.note}</span>
              <code>{b.stack}</code>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="section" id="story" aria-labelledby="story-h">
      <h2 id="story-h" data-reveal>The story <em>so far</em></h2>
      <ol className="story">
        {story.map((s) => (
          <li key={s.year + s.title} data-reveal>
            <time>{s.year}</time>
            <div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-h">
      <h2 id="skills-h" data-reveal>What I <em>work with</em></h2>
      <div className="skills">
        {skills.map((g) => (
          <div key={g.group} data-reveal>
            <h3>{g.group}</h3>
            <ul className="chips">{g.items.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-h">
      <figure data-reveal>
        <img src={profile.photo} alt={`Portrait of ${profile.name}`} width="460" height="460" loading="lazy" decoding="async" />
      </figure>
      <div data-reveal>
        <h2 id="about-h">From the chessboard <em>to the codebase.</em></h2>
        <p>
          I started with HTML and CSS in school, picked up C++ and Python, and have been building for
          the web, Android and now React Native ever since: freelance work, hackathons, internships,
          and engineering roles at Asite Solutions and Upsquare Technologies.
        </p>
        <p>I solve a DSA problem a day and like contributing to open source.</p>
        <h3>Education</h3>
        <ul className="edu">
          {education.map((e) => (
            <li key={e.place}>
              <strong>{e.course}</strong> · {e.place}
              <span>{[e.years, e.note].filter(Boolean).join(" · ")}</span>
            </li>
          ))}
        </ul>
        <h3>Open source</h3>
        <ul className="chips">{openSource.map((o) => <li key={o}>{o}</li>)}</ul>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="foot" id="contact">
      <div>
        <p className="foot-lede">That&apos;s the story so far. Your move.</p>
        <a className="big" href={`mailto:${profile.email}`}>Say hello <span aria-hidden="true">→</span></a>
        <p className="mail">{profile.email}</p>
      </div>
      <ul className="socials">
        {socials.map((s) => <li key={s.href}><External href={s.href}>{s.label}</External></li>)}
      </ul>
      <p className="copy">© {new Date().getFullYear()} {profile.name}</p>
    </footer>
  );
}

export default function App() {
  useReveal();
  return (
    <>
      <a className="skip" href="#work">Skip to content</a>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Story />
        <Skills />
        <About />
      </main>
      <Footer />
    </>
  );
}
