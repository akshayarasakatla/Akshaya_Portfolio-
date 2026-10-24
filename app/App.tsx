import { useEffect, useState } from 'react'

const projects = [
  {
    number: '01',
    type: 'Climate & Community',
    title: 'Field Notes',
    description:
      'A solar-powered garden companion that turns local climate data into simple, useful growing cues.',
    tags: ['STM32', 'LoRaWAN', 'C++'],
    accent: 'lime',
    href: '#contact',
  },
  {
    number: '02',
    type: 'Calm Technology',
    title: 'Daylight',
    description:
      'An ambient desk light that gently reflects focus time, daily rhythm, and the weather outside.',
    tags: ['ESP32', 'Sensors', 'React'],
    accent: 'blue',
    href: '#contact',
  },
  {
    number: '03',
    type: 'Interactive Objects',
    title: 'Common Ground',
    description:
      'A playful tabletop installation that responds to touch and makes collaborative patterns with light.',
    tags: ['Touch', 'LEDs', 'C++'],
    accent: 'orange',
    href: '#contact',
  },
]

const experience = [
  {
    year: '2024—NOW',
    role: 'Embedded Systems Engineer',
    company: 'Vertex Dynamics',
    detail: 'Developing low-power firmware and edge-compute systems.',
  },
  {
    year: '2023—24',
    role: 'Hardware Engineering Intern',
    company: 'Northstar Labs',
    detail: 'Prototyped sensor hardware and automated validation tooling.',
  },
  {
    year: '2022—23',
    role: 'Robotics Researcher',
    company: 'Autonomous Systems Lab',
    detail: 'Built control systems for multi-agent ground robots.',
  },
]

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <span aria-hidden="true" className="arrow">
      {diagonal ? '↗' : '→'}
    </span>
  )
}

function ProjectVisual({ accent, number }: { accent: string; number: string }) {
  if (number === '01') {
    return (
      <div className={`project-visual ${accent}`} aria-hidden="true">
        <div className="radar">
          <span className="radar-ring ring-1" />
          <span className="radar-ring ring-2" />
          <span className="radar-ring ring-3" />
          <span className="radar-line" />
          <i className="radar-dot dot-1" />
          <i className="radar-dot dot-2" />
          <i className="radar-dot dot-3" />
        </div>
        <span className="visual-label">GARDEN / SPRING 2024</span>
      </div>
    )
  }

  if (number === '02') {
    return (
      <div className={`project-visual ${accent}`} aria-hidden="true">
        <div className="chip">
          {Array.from({ length: 6 }).map((_, index) => (
            <span key={index} />
          ))}
          <div className="chip-core">
            <small>DAY</small>
            <strong>01</strong>
          </div>
        </div>
        <span className="visual-label">AMBIENT LIGHT / 06:42</span>
      </div>
    )
  }

  return (
    <div className={`project-visual ${accent}`} aria-hidden="true">
      <div className="hand-map">
        <span className="palm" />
        <span className="finger f1" />
        <span className="finger f2" />
        <span className="finger f3" />
        <span className="finger f4" />
        <span className="finger f5" />
        <i className="joint j1" />
        <i className="joint j2" />
        <i className="joint j3" />
      </div>
      <span className="visual-label">TOUCH / LIGHT / TOGETHER</span>
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [time, setTime] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Intl.DateTimeFormat('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
          timeZone: 'America/Los_Angeles',
        }).format(new Date()),
      )
    }
    updateTime()
    const timer = window.setInterval(updateTime, 60_000)
    return () => window.clearInterval(timer)
  }, [])

  const copyEmail = async () => {
    await navigator.clipboard.writeText('hello@alexchen.dev')
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Alex Chen, home">
          AC<span>/</span>25
        </a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          <a href="#work" onClick={() => setMenuOpen(false)}>
            01 Work
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            02 About
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            03 Contact
          </a>
        </nav>
        <div className="availability">
          <span />
          Open to kind collaborations
        </div>
        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? 'CLOSE' : 'MENU'}
        </button>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-eyebrow">
            <span>ENGINEER & CREATIVE TECHNOLOGIST</span>
            <span>BASED IN SAN FRANCISCO</span>
          </div>
          <div className="hero-heading">
            <h1>
              I MAKE <span className="outline">THOUGHTFUL</span>
              <br />
              THINGS <span className="signal">TOGETHER.</span>
            </h1>
            <div className="orbit-mark" aria-hidden="true">
              <span className="orbit orbit-a" />
              <span className="orbit orbit-b" />
              <span className="orbit-center" />
              <span className="orbit-code">MAKE</span>
            </div>
          </div>
          <div className="hero-footer">
            <p>
              Blending hardware, code, and curiosity to make technology feel a little
              more useful—and a lot more human.
            </p>
            <a href="#work" className="text-link">
              EXPLORE SELECTED WORK <Arrow />
            </a>
            <div className="coordinates">
              <span>DESIGN WITH CARE</span>
              <span>BUILD WITH PURPOSE</span>
              <span>{time || '--:--'} PST</span>
            </div>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="section-heading">
            <div>
              <span className="section-index">01 / SELECTED WORK</span>
              <h2>Made with care.</h2>
            </div>
            <p>
              A few favorite experiments across objects, interfaces, and the spaces
              between them.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <ProjectVisual accent={project.accent} number={project.number} />
                <div className="project-meta">
                  <span>{project.number}</span>
                  <span>{project.type}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-bottom">
                  <ul>
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <a href={project.href} aria-label={`Learn more about ${project.title}`}>
                    <Arrow diagonal />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="section-heading about-heading">
            <div>
              <span className="section-index">02 / PROFILE</span>
              <h2>
                Curious by nature.
                <br />
                Human at heart.
              </h2>
            </div>
            <div className="about-copy">
              <p>
                I’m Alex, a computer engineer who likes making warm, approachable
                things from circuits, code, and good questions.
              </p>
              <p>
                I’m happiest moving between sketchbooks and schematics—taking ideas
                from a messy first prototype to something clear, useful, and joyful.
              </p>
            </div>
          </div>

          <div className="experience-wrap">
            <div className="skills">
              <span className="section-index">CORE TOOLKIT</span>
              <div className="skill-list">
                <span>Creative Coding</span>
                <span>Physical Prototyping</span>
                <span>Electronics</span>
                <span>Interaction Design</span>
                <span>Embedded Systems</span>
                <span>Research</span>
              </div>
            </div>
            <div className="timeline">
              {experience.map((item) => (
                <div className="experience-row" key={item.company}>
                  <span className="experience-year">{item.year}</span>
                  <div>
                    <h3>{item.role}</h3>
                    <p>{item.company}</p>
                  </div>
                  <p className="experience-detail">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <span className="section-index">03 / START A CONVERSATION</span>
          <h2>
            Have a curious idea?
            <br />
            <span>Let’s make it real.</span>
          </h2>
          <div className="contact-bottom">
            <a href="mailto:hello@alexchen.dev" className="contact-link">
              hello@alexchen.dev <Arrow diagonal />
            </a>
            <button type="button" className="copy-button" onClick={copyEmail}>
              {copied ? 'COPIED TO CLIPBOARD' : 'COPY EMAIL'}
            </button>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2025 ALEX CHEN</span>
        <div>
          <a href="#top">LINKEDIN</a>
          <a href="#top">GITHUB</a>
          <a href="#top">RESUMÉ</a>
        </div>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </div>
  )
}
