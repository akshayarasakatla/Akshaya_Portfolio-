import React from "react"

const projects = [
  {
    number: "01",
    title: "Field Notes",
    description:
      "A calm, offline-first journaling app designed to make daily reflection feel effortless.",
    tags: ["Product design", "React", "2024"],
    color: "#C9DDEA",
  },
  {
    number: "02",
    title: "Common Ground",
    description:
      "A digital platform connecting independent growers with their local communities.",
    tags: ["Strategy", "Identity", "Web design"],
    color: "#BFD2E3",
  },
  {
    number: "03",
    title: "Index",
    description:
      "A flexible publishing system for a cultural archive of objects, stories, and ideas.",
    tags: ["UX research", "Design system", "Development"],
    color: "#D4E4EE",
  },
]

const skills = [
  {
    title: "Design",
    items: [
      "Product design",
      "Visual identity",
      "Design systems",
      "Prototyping",
    ],
  },
  {
    title: "Development",
    items: [
      "React & TypeScript",
      "HTML & CSS",
      "Creative coding",
      "Accessibility",
    ],
  },
  {
    title: "Approach",
    items: ["Research", "Art direction", "Facilitation", "Clear writing"],
  },
]

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 16 16">
      {diagonal ? (
        <path d="M3 13 13 3M5 3h8v8" stroke="currentColor" strokeWidth="1.4" />
      ) : (
        <path
          d="M2 8h12m-4-4 4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      )}
    </svg>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#EAF2F8] text-[#19324C]">
      <header className="sticky top-0 z-20 border-b border-[#19324C]/15 bg-[#EAF2F8]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 md:px-10 lg:px-16">
          <a className="group flex items-center gap-3" href="#top">
            <span className="h-2.5 w-2.5 rounded-full bg-[#729BBF] transition-transform group-hover:scale-125" />
            <span className="text-sm font-semibold tracking-[-0.02em]">
              Alex Morgan
            </span>
          </a>
          <nav aria-label="Main navigation">
            <ul className="flex gap-5 text-[12px] font-medium md:gap-8 md:text-sm">
              <li>
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link" href="#work">
                  Work
                </a>
              </li>
              <li>
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto flex min-h-[calc(100svh-58px)] max-w-[1440px] flex-col justify-between px-5 pb-8 pt-16 md:px-10 md:pb-10 md:pt-24 lg:px-16">
          <div>
            <p className="mb-7 max-w-md text-sm leading-relaxed text-[#19324C]/55 md:ml-[34%]">
              Independent designer and developer shaping thoughtful digital
              experiences for people and culture.
            </p>
            <h1 className="max-w-[1200px] text-[clamp(4.5rem,12.3vw,11rem)] font-medium leading-[0.78] tracking-[-0.075em]">
              Ideas, made
              <br />
              <span className="ml-[9vw] font-serif font-normal italic tracking-[-0.055em]">
                tangible.
              </span>
            </h1>
          </div>
          <div className="mt-16 flex items-end justify-between border-t border-[#19324C]/20 pt-5">
            <span className="text-xs uppercase tracking-[0.12em] text-[#19324C]/50">
              Based in New York
            </span>
            <a
              className="flex items-center gap-2 text-sm font-medium transition-[gap] hover:gap-4"
              href="#work"
            >
              Selected work <Arrow />
            </a>
          </div>
        </section>

        <section
          className="mx-auto grid max-w-[1440px] gap-10 border-t border-[#19324C]/20 px-5 py-24 md:grid-cols-12 md:px-10 md:py-32 lg:px-16"
          id="about"
        >
          <div className="md:col-span-3">
            <p className="section-label">01 — About me</p>
          </div>
          <div className="md:col-span-8 md:col-start-5">
            <p className="text-3xl leading-[1.14] tracking-[-0.04em] md:text-5xl lg:text-6xl">
              I bridge design and technology to create work that is useful,
              expressive, and built to last.
            </p>
            <div className="mt-12 grid gap-6 text-[15px] leading-relaxed text-[#19324C]/60 sm:grid-cols-2 md:mt-16">
              <p>
                My practice moves between strategy, visual design, and
                development. I care about the small details, but always start
                with the bigger question: what should this experience feel like?
              </p>
              <p>
                For the past six years, I’ve partnered with early-stage teams,
                cultural institutions, and independent founders to turn complex
                ideas into simple, human products.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#243F59] text-[#EFF6FA]" id="work">
          <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32 lg:px-16">
            <div className="mb-16 flex items-end justify-between md:mb-24">
              <p className="section-label !text-white/50">
                02 — Selected projects
              </p>
              <p className="hidden text-sm text-white/45 md:block">
                2022 — 2024
              </p>
            </div>
            <div>
              {projects.map((project) => (
                <article
                  className="project-row group grid gap-8 border-t border-white/20 py-8 md:grid-cols-12 md:items-center md:gap-6 md:py-10"
                  key={project.title}
                >
                  <div className="md:col-span-1">
                    <span className="font-mono text-xs text-white/40">
                      {project.number}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <div
                      className="project-visual relative aspect-[16/10] overflow-hidden"
                      style={{ backgroundColor: project.color }}
                    >
                      <div className="absolute inset-[16%] border border-[#19324C]/15" />
                      <div className="absolute left-[24%] top-[28%] h-[45%] w-[52%] bg-[#EFF6FA] shadow-[0_18px_40px_rgba(25,50,76,.16)] transition-transform duration-500 group-hover:-translate-y-2">
                        <div className="mx-4 mt-4 h-px bg-[#19324C]/20" />
                        <div className="mx-4 mt-3 h-1 w-1/3 bg-[#19324C]/50" />
                        <div className="mx-4 mt-2 h-px w-2/3 bg-[#19324C]/20" />
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-6 md:pl-8">
                    <h2 className="text-4xl tracking-[-0.045em] md:text-5xl">
                      {project.title}
                    </h2>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-white/55">
                      {project.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                      {project.tags.map((tag) => (
                        <span className="text-xs text-white/40" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="hidden justify-end md:col-span-1 md:flex">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-transform group-hover:scale-105">
                      <Arrow diagonal />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}