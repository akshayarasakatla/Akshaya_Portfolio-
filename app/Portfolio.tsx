import React from "react"


const projects: { title: string; description: string; tags: string[]; href: string }[] = []

const courses = ["ECS 1210", "MATH 2417 (Calculus I)", "ECS 1100"]
const skills = ["Python", "Git", "JavaScript"]

const links = {
  github: "https://github.com/akshayarasakatla",
  linkedin: "https://www.linkedin.com/in/akshaya-shree-rasakatla-0aa85b433/",
  email: "akshaya.rasakatla@gmail.com",
}



function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 16 16">
      {diagonal ? (
        <path d="M3 13 13 3M5 3h8v8" stroke="currentColor" strokeWidth="1.5" />
      ) : (
        <path d="M2 8h12m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
      )}
    </svg>
  )
}

const GitHubIcon = () => (
  <svg aria-hidden="true" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg aria-hidden="true" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
)

const MailIcon = () => (
  <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
  </svg>
)



function SectionShell({
  id,
  label,
  children,
}: {
  id: string
  label: string
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      className="relative mx-auto max-w-[1200px] px-5 py-24 md:px-10 md:py-32"
    >
      <div className="reveal mb-12 md:mb-16">
        <p className="section-label">{label}</p>
      </div>
      {children}
    </section>
  )
}

function Divider() {
  return (
    <div
      aria-hidden="true"
      className="mx-auto h-px max-w-[1200px] bg-gradient-to-r from-transparent via-[#3B1229]/20 to-transparent"
    />
  )
}



export default function Portfolio() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#FFF1F5] font-sans text-[#3B1229]">
      
      <header className="sticky top-0 z-30 border-b border-[#3B1229]/10 bg-[#FFF1F5]/70 backdrop-xl">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-3.5 md:px-10">
          <a className="group flex items-center gap-3" href="#top">
            <span className="relative flex h-2.5 w-2.5">
              <span className="pulse-dot absolute inset-0 rounded-full bg-pink-500 blur-[3px]" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-pink-500 transition-transform group-hover:scale-125" />
            </span>
            <span className="text-sm font-semibold tracking-[-0.02em] text-[#3B1229]">
              Computer Engineer Portfolio
            </span>
          </a>
          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-0.5 text-[12px] font-medium md:gap-1 md:text-sm">
              <li><a className="nav-link" href="#about">About</a></li>
              <li><a className="nav-link" href="#education">Education</a></li>
              <li><a className="nav-link" href="#projects">Projects</a></li>
              <li><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="top">
        
        <section className="relative isolate flex min-h-[calc(100svh-58px)] flex-col items-center justify-center overflow-hidden px-5 pb-10 pt-16 text-center md:px-10">
          
          <div aria-hidden="true" className="grid-bg absolute inset-0 -z-10" />
          <div aria-hidden="true" className="noise absolute inset-0 -z-10 opacity-60" />
          <div
            aria-hidden="true"
            className="float-slow absolute left-1/2 top-[8%] -z-10 h-[520px] w-[520px] -translate-x-[85%] rounded-full bg-pink-400/30-blur-[30px]"
          />
          <div
            aria-hidden="true"
            className="float-slow absolute left-1/2 top-[18%] -z-10 h-[560px] w-[560px] -translate-x-[5%] rounded-full bg-pink-400/35-[140px] [animation-delay:-4s]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#FFF1F5] to-transparent"
          />

          <div className="hero-in hero-in-1 relative mb-8">
            <div className="absolute -inset-1.5 rounded-full bg-to-br from-white-400 via-white-400 to-pink-500" />
            <div className="relative rounded-full bg-to-br from-white-400/80 via-white-400/80 to-white-500/80 p-[3px]">
              <div className="rounded-full bg-[#FFF1F5] p-1">
                <img
                  src="/profile.jpg"
                  alt="Profile Picture"
                  className="h-36 w-36 rounded-full bg-pink-100 object-cover md:h-70 md:w-44"
                />
              </div>
            </div>
          </div>

          <p className="hero-in hero-in-2 glass mb-8 inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[#5B2A44]">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-pink-400 shadow-[0_0_10px_#f472b6]" />
            University of Texas at Dallas
          </p>

          <h1 className="hero-in hero-in-3 max-w-[1100px] text-[clamp(3.75rem,13vw,10.5rem)] font-bold leading-[0.88] tracking-[-0.06em]">
            <span className="bg-gradient-to-b from-[#3B1229] to-[#A0527A] bg-clip-text text-transparent">
              Akshaya
            </span>
            <br />
            <span className="bg-gradient-to-b from-[#3B1229] to-[#A0527A] bg-clip-text text-transparent">Rasakatla</span>
          </h1>

          <p className="hero-in hero-in-4 mt-8 max-w-xl text-base leading-relaxed text-[#7A4A62] md:text-lg">
            Aspiring Computer Engineer hoping to create real world impact by bringing together Tech and Business.
          </p>

          <div className="hero-in hero-in-4 mt-10 flex flex-wrap items-center justify-center gap-3">
            <a className="btn btn-primary" href="#about">
              Learn more <Arrow />
            </a>
            <a
              className="btn btn-ghost"
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon /> GitHub
            </a>
          </div>
        </section>

        <Divider />

        
        <SectionShell id="about" label="01 — About me">
          <div className="grid gap-12 md:grid-cols-12">
            <p className="reveal text-3xl font-semibold leading-[1.1] tracking-[-0.04em] text-[#3B1229] md:col-span-12 md:text-5xl lg:text-6xl lg:leading-[1.05]">
              <span className="text">I am passionate</span> about learning new ways to bring forward innovative solutions.
            </p>

            <div className="reveal card glass rounded-2xl p-7 md:col-span-6 md:p-8">
              <p className="text-[15px] leading-relaxed text-[#7A4A62]">
                As a student at the University of Texas at Dallas, I focus on the intersection of technical hardware/software systems and strategic growth. I am always looking for opportunities to grow, expand my capabilities, and apply classroom theory to real engineering problems.
              </p>
            </div>
            <div className="reveal card glass rounded-2xl p-7 md:col-span-6 md:p-8">
              <p className="text-[15px] leading-relaxed text-[#7A4A62]">
                I am actively seeking internships and opportunities to gain hands-on experience in the field of computer engineering. Let's connect to build something impactful!
              </p>
            </div>
          </div>
        </SectionShell>

        <Divider />

        
        <SectionShell id="education" label="02 — Education">
          <div className="grid gap-4 md:grid-cols-3">
            {/* Main card */}
            <div className="reveal card glass relative overflow-hidden rounded-3xl p-8 md:col-span-2 md:p-10">
              <div
                aria-hidden="true"
                className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-pink-500/15 blur-[90px]"
              />
              <p className="meta-label mb-6">Degree</p>
              <h2 className="text-3xl font-bold tracking-[-0.04em] text-[#3B1229] md:text-5xl">
                University of Texas at Dallas
              </h2>
              <p className="mt-4 text-lg font-medium text-[#5B2A44] md:text-xl">
                Bachelor of Science in Computer Engineering
              </p>
            </div>

            
            <div className="reveal card glass relative overflow-hidden rounded-3xl p-8">
              <div
                aria-hidden="true"
                className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-fuchsia-400/25 blur-[80px]"
              />
              <p className="meta-label mb-6">Graduation Timeline</p>
              <p className="text text-5xl font-bold tracking-[-0.05em] md:text-6xl">
                2026 —
              </p>
              <p className="text-5xl font-bold tracking-[-0.05em] text-[#3B1229] md:text-6xl">2030</p>
            </div>

           
            <div className="reveal card glass rounded-3xl p-8 md:col-span-2">
              <p className="meta-label mb-5">Current Relevant Courses &amp; Skills</p>
              <ul className="flex flex-wrap gap-2.5">
                {courses.map((c) => (
                  <li key={c} className="badge badge-pink">
                    <i /> {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div className="reveal card glass rounded-3xl p-8">
              <p className="meta-label mb-5">Skills in development</p>
              <ul className="flex flex-wrap gap-2.5">
                {skills.map((s) => (
                  <li key={s} className="badge badge-violet">
                    <i /> {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SectionShell>

        <Divider />

        
        <SectionShell id="projects" label="03 — My projects">
          {projects.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-3">
              {projects.map((p, i) => (
                <a
                  key={p.title}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`reveal card glass group flex flex-col justify-between rounded-3xl p-8 ${
                    i === 0 ? "md:col-span-2 md:row-span-2" : ""
                  }`}
                >
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.03em]">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#7A4A62]">{p.description}</p>
                  </div>
                  <div className="mt-8 flex items-end justify-between">
                    <ul className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <li key={t} className="badge badge-violet">{t}</li>
                      ))}
                    </ul>
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-[#3B1229]/15 transition-colors group-hover:bg-[#db2777] group-hover:text-white">
                      <Arrow diagonal />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
              
              <div className="reveal card glass relative flex min-h-[280px] flex-col items-center justify-center overflow-hidden rounded-3xl p-10 text-center md:col-span-2 md:row-span-2 md:min-h-[420px]">
                <div aria-hidden="true" className="grid-bg absolute inset-0 opacity-60" />
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-pink-400/35 to-fuchsia-400/35 blur-[90px]"
                />
                <div className="relative">
                  <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-2xl border border-[#3B1229]/10 bg-white/80 text-pink-600 shadow-[0_0_30px_-4px_rgba(244,114,182,0.7)]">
                    <svg aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                      <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold tracking-[-0.04em] md:text-5xl">
                    <span className="text">Projects coming soon!</span>
                  </h3>
                </div>
              </div>

              
              {[0, 1].map((n) => (
                <div
                  key={n}
                  aria-hidden="true"
                  className="reveal card glass flex min-h-[200px] flex-col justify-between rounded-3xl p-7"
                >
                  <div className="space-y-3">
                    <div className="shimmer h-4 w-2/3 rounded-full" />
                    <div className="shimmer h-3 w-full rounded-full" />
                    <div className="shimmer h-3 w-4/5 rounded-full" />
                  </div>
                  <div className="flex gap-2">
                    <div className="shimmer h-6 w-16 rounded-full" />
                    <div className="shimmer h-6 w-12 rounded-full" />
                    <div className="shimmer h-6 w-20 rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </SectionShell>

        <Divider />

        
        <SectionShell id="contact" label="04 — Contact Information">
          <div className="reveal glass relative overflow-hidden rounded-[2rem] px-6 py-16 text-center md:px-16 md:py-24">
            <div aria-hidden="true" className="grid-bg absolute inset-0 opacity-50" />
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-0 h-64 w-[36rem] max-w-full -translate-x-1/2 rounded-full bg-fuchsia-200/30"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-1/4 h-48 w-72 rounded-full bg-fuchsia-500/20 blur-[100px]"
            />
            <div className="relative">
              <p className="mx-auto max-w-3xl text-4xl font-bold leading-[1.02] tracking-[-0.05em] md:text-7xl">
                <span className="bg-gradient-to-b from-black to-400 bg-clip-text">
                  Let's Connect!
                </span>
              </p>

              <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  <GitHubIcon /> GitHub
                </a>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost bg-pink-800 text-white hover:bg-pink-700"
                >
                  <LinkedInIcon /> LinkedIn
                </a>
                <a href={`mailto:${links.email}`} className="btn btn-primary">
                  <MailIcon /> {links.email}
                </a>
              </div>
            </div>
          </div>
        </SectionShell>
      </main>

      <footer className="border-t border-white/[0.07] px-5 py-8 md:px-10">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between">
          <span className="meta-label">University of Texas at Dallas</span>
          <a
            href="#top"
            aria-label="Back to top"
            className="flex items-center gap-2 text-sm text-[#7A4A62] transition-colors hover:text-[#3B1229]"
          >
            <span className="-rotate-90"><Arrow /></span>
          </a>
        </div>
      </footer>
    </div>
  )
}