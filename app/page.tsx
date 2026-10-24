import Image from "next/image";
export default function Home() {
  return (
    <main 
    style={{fontFamily: "Nunito"}}
    className="min-h-screen bg-[#fff9db] px-6 py-16 text-black-900">
      <div className="mx-auto max-w-2xl">

        
        <div className="mb-6">
          <Image
            src="/profile.jpg"
            alt="Akshaya's profile picture"
            width={180}
            height={180}
            className="h-60 w-40 rounded-full object-cover border-4 border-white shadow-md"
            priority
          />
        </div>

      <section className="mb-6">
        <h1 className="text-4xl font-bold text-black">
          About Me
        </h1>
        <div className="mt-4 rounded-xl bg-[#fce4ec] p-6 shadow-sm">
        <h1 className="text-4xl font-bold text-black">
          Hi, I'm Akshaya!
        </h1>
        <p className="mt-4 text-lg text-black-600 leading-relaxed text-black">
        As an aspiring Computer Engineer at the University of Texas at Dallas, I am hoping to create real world impact by bringing together Tech and Business. I am passionate about learning new ways to bring forward innovative solutions and I am always looking for opportunities to grow and learn. I am currently seeking internships and opportunities to gain experience in the field of computer engineering.
        </p>
        </div>
</section>
        
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-black">
            Education
          </h2>
          <div className="mt-4 rounded-xl bg-[#fce4ec] p-6 shadow-sm text-black">
            <h3 className="text-xl font-bold text-black">
              University of Texas at Dallas
            </h3>
            <p className="mt-2 text-black-600">
              Bachelor of Science in Computer Engineering
            </p>
            <p className="mt-3 text-black-500 font-bold">
              Current Relevant courses: ECS 1210, MATH 2417 (Calculus I), ECS 1100
            </p>
            <p className="mt-1 text-sm text-black-500">
              <strong>Graduation:</strong> 2026-2030
            </p>
            <p className="mt-1 text-sm text-black-500">
              <strong> Skills:</strong> Learning Python, Git, JavaScript 
          </p>
          </div>
        </section>

      
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-black">
            Contact Information:
          </h2>

          <div className="mt-5 flex flex-wrap gap-4">
            <a
              href="https://github.com/akshayarasakatla"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-red-900 px-5 py-3 text-black hover:bg-red-700 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/akshaya-shree-rasakatla-0aa85b433/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-700 px-5 py-3 text-white hover:bg-blue-800 transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:akshaya.rasakatla@gmail.com"
              className="rounded-lg bg-green-500 px-5 py-3 text-white hover:bg-green-600 transition"
            >
akshaya.rasakatla@gmail.com
            </a>
          </div> 
          </section>
          <section id="Projects" className="mt-12">
          <h2 className="text-2xl font-semibold text-black">My projects:</h2>
      <div className="Projects-grid">
      <div className="Project-card"> 
        <h3 className="text-lg font-bold text-black"> Projects coming soon! </h3>
      </div>
      </div>
      </section>
    </div>
</main>
);
}

