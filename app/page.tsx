import React from "react"
import "./globals.css"

const projects: any[] = []

const skills: any[] = []

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 16 16">
      {diagonal ? (
        <path d="M3 13 13 3M5 3h8v8" stroke="currentColor" strokeWidth="1.4" />
      ) : (
        <path
          d="M2 8h12m-4-4 4 4-4 4"
          stroke="currentColor" strokeWidth="1.4"
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
              Computer Engineer Portfolio
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
                <a className="nav-link" href="#education">
                  Education
                </a>
              </li>
              <li>
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="top">
       
        <section className="mx-auto flex min-h-[calc(100svh-58px)] max-w-[1440px] flex-col justify-between px-5 pb-8 pt-16 md:px-10 md:pb-10 md:pt-24 lg:px-16">
          <div>
            
            <div className="mb-8 md:ml-[34%]">
              <img
                src="/profile.jpg"
                alt="Profile Picture"
                className="h-44 w-44 rounded-full object-cover border-4 border-white shadow-md"
              />
            </div>

            <p className="mb-7 max-w-md text-sm leading-relaxed text-[#19324C]/55 md:ml-[34%]">
              Aspiring Computer Engineer hoping to create real world impact by bringing together Tech and Business.
            </p>
            <h1 className="max-w-[1200px] text-[clamp(4.5rem,12.3vw,11rem)] font-medium leading-[0.78] tracking-[-0.075em]">
              Tech &
              <br />
              <span className="ml-[9vw] font-serif font-normal italic tracking-[-0.055em]">
                Business.
              </span>
            </h1>
          </div>
          <div className="mt-16 flex items-end justify-between border-t border-[#19324C]/20 pt-5">
            <span className="text-xs uppercase tracking-[0.12em] text-[#19324C]/50">
              University of Texas at Dallas
            </span>
            <a
              className="flex items-center gap-2 text-sm font-medium transition-[gap] hover:gap-4"
              href="#about"
            >
              Learn more <Arrow />
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
              I am passionate about learning new ways to bring forward innovative solutions.
            </p>
            <div className="mt-12 grid gap-6 text-[15px] leading-relaxed text-[#19324C]/60 sm:grid-cols-2 md:mt-16">
              <p>
                As a student at the University of Texas at Dallas, I focus on the intersection of technical hardware/software systems and strategic growth. I am always looking for opportunities to grow, expand my capabilities, and apply classroom theory to real engineering problems.
              </p>
              <p>
                I am actively seeking internships and opportunities to gain hands-on experience in the field of computer engineering. Let's connect to build something impactful!
              </p>
            </div>
          </div>
        </section>

      
        <section
          className="mx-auto grid max-w-[1440px] gap-10 border-t border-[#19324C]/20 px-5 py-24 md:grid-cols-12 md:px-10 md:py-32 lg:px-16"
          id="education"
        >
          <div className="md:col-span-3">
            <p className="section-label">02 — Education</p>
          </div>
          <div className="md:col-span-8 md:col-start-5">
            <h2 className="text-3xl font-bold tracking-[-0.03em] md:text-4xl text-[#19324C]">
              University of Texas at Dallas
            </h2>
            <p className="mt-2 text-lg font-medium text-[#19324C]/80">
              Bachelor of Science in Computer Engineering
            </p>
            <p className="mt-1 text-sm text-[#19324C]/60">
              Graduation Timeline: 2026 — 2030
            </p>
            
            <div className="mt-6 border-t border-[#19324C]/10 pt-4">
              <span className="text-xs uppercase font-semibold tracking-wider text-[#19324C]/50 block mb-2">
                Current Relevant Courses & Skills
              </span>
              <p className="text-sm text-[#19324C]/70 font-mono mb-2">
                ECS 1210 | MATH 2417 (Calculus I) | ECS 1100
              </p>
              <p className="text-sm text-[#19324C]/70">
                <strong>Skills in development:</strong> Python, Git, JavaScript
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          className="mx-auto grid max-w-[1440px] gap-10 border-t border-[#19324C]/20 px-5 py-24 md:grid-cols-12 md:px-10 md:py-32 lg:px-16"
          id="contact"
        >
          <div className="md:col-span-3">
            <p className="section-label">03 — Contact Information</p>
          </div>
          <div className="md:col-span-8 md:col-start-5">
            <p className="text-2xl font-medium tracking-[-0.03em] text-[#19324C] mb-6">
              Let's build something together.
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold uppercase tracking-wider underline hover:text-[#729BBF] transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold uppercase tracking-wider underline hover:text-[#729BBF] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:your-email@utdallas.edu"
                className="text-sm font-semibold uppercase tracking-wider underline hover:text-[#729BBF] transition-colors"
              >
                Email Me
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
