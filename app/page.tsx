import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white-50 px-6 py-16 text-white-900">
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

      
        <h1 className="text-4xl font-bold">
          Hi, I'm Akshaya!
        </h1>

        <p className="mt-4 text-lg text-white-600 leading-relaxed">
        As an aspiring Computer Engineer at the University of Texas at Dallas, I am hoping to create real world impact by bringing together Tech and Business. I am passionate about learning new ways to bring forward innovative solutions and I am always looking for opportunities to grow and learn. I am currently seeking internships and opportunities to gain experience in the field of computer engineering.
        </p>

        
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Education
          </h2>

          <div className="mt-4 rounded-xl bg-black p-6 shadow-sm">
            <h3 className="text-xl font-medium">
              University of Texas at Dallas
            </h3>
            <p className="mt-2 text-black-600">
              Bachelor of Science in Computer Engineering
            </p>
            <p className="mt-3 text-black-500">
              Current relevant courses: ECS 1210, MATH 2417 (Calculus I), ECS 1100
            </p>
            <p className="mt-1 text-sm text-black-500">
              2026-2030
            </p>
          </div>
        </section>

      
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Contact Information:
          </h2>

          <div className="mt-5 flex flex-wrap gap-4">
            <a
              href="https://github.com/akshayarasakatla"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white-900 px-5 py-3 text-white hover:bg-white-700 transition"
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
              href="akshaya.rasakatla@gmail.com"
              className="rounded-lg border border-white-300 px-5 py-3 hover:bg-white-100 transition"
            >
              Email
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}