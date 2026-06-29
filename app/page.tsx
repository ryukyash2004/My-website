import InteractiveAvatar from "./components/InteractiveAvatar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-20 py-8">
      {/* 1. Hero Section */}
      <section className="flex flex-col items-center text-center gap-6 py-12 md:py-20 max-w-3xl mx-auto">
        <InteractiveAvatar />

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none">
          Hi, I am <span className="text-zinc-400 dark:text-zinc-600 font-normal">Ryuk</span>
        </h1>

        <p className="text-lg sm:text-xl text-zinc-500 max-w-2xl leading-relaxed">
          learning is a constant process — Crafting digital experiences with structure, style, and performance.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg bg-zinc-900 text-white font-medium hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors text-sm"
          >
            Get In Touch
          </Link>
          <Link
            href="/projects"
            className="px-6 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white/40 backdrop-blur-md dark:bg-zinc-950/40 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-sm"
          >
            View Work
          </Link>
        </div>
      </section>

      {/* 2. Bio & Education Sections */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-dashed border-zinc-200 dark:border-zinc-800">
        {/* Bio Block */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Biography</h2>
          <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <p>
              My Real name's Abhishek Swarnakar, I am a Computer Science undergraduate with hands-on experience developing backend systems, REST APIs, authentication workflows, and data-driven applications. I specialize in Python, TypeScript, JavaScript, and SQL, and I am experienced in designing scalable backend services, structured data pipelines, and API integrations.
            </p>
            <p>
              I have a strong foundation in backend architecture, database systems, version control, and containerized deployments. I am passionate about building reliable integration systems, backend services, and scalable applications that support real-world operational requirements.
            </p>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Education Timeline</h2>

          <div className="relative border-l border-dashed border-zinc-300 dark:border-zinc-800 pl-6 ml-2 space-y-8">
            {/* Timeline Item 1 */}
            <div className="relative">
              <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-800 border border-zinc-400 dark:border-zinc-600">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-600 dark:bg-zinc-400"></span>
              </span>
              <span className="text-xs font-semibold text-zinc-400 block mb-1">2022 — Present</span>
              <h3 className="font-bold text-lg leading-tight"> Bachlores of Science in Computer Science</h3>
              <p className="text-sm text-zinc-500">Amity University Chattishgarh / Raipur </p>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative">
              <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-800 border border-zinc-400 dark:border-zinc-600">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-600 dark:bg-zinc-400"></span>
              </span>
              <span className="text-xs font-semibold text-zinc-400 block mb-1">2021 — 2022</span>
              <h3 className="font-bold text-lg leading-tight">Higher Secondary School</h3>
              <p className="text-sm text-zinc-500">Maharshi Vidya Mandir Bilaspur</p>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative">
              <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-800 border border-zinc-400 dark:border-zinc-600">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-600 dark:bg-zinc-400"></span>
              </span>
              <span className="text-xs font-semibold text-zinc-400 block mb-1">2018 — 2020</span>
              <h3 className="font-bold text-lg leading-tight">Middle School</h3>
              <p className="text-sm text-zinc-500">Maharshi Vidya Mandir Bilaspur</p>
            </div>
          </div>
        </div>
      </section>
      <section className="space-y-8 pt-8 border-t border-dashed border-zinc-200 dark:border-zinc-800">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight">Core Skills</h2>
            <p className="text-sm text-zinc-500">A preview of my primary tools and technology stack.</p>
          </div>
          <Link
            href="/skills"
            className="text-sm font-semibold text-zinc-900 dark:text-white hover:underline inline-flex items-center gap-1.5 cursor-pointer"
          >
            <span>View All Skills</span>
            <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Skill 1: Python */}
          <div className="p-6 rounded-xl border border-zinc-200/50 dark:border-zinc-800/50 bg-white/40 dark:bg-zinc-950/40 backdrop-blur-md flex flex-col justify-between min-h-[190px] shadow-sm hover:shadow-md hover:border-zinc-300/80 dark:hover:border-zinc-700/80 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-10 h-10 flex items-center justify-center bg-zinc-50 dark:bg-zinc-900 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-lg">
                <svg className="w-8 h-8 text-zinc-700 dark:text-zinc-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.968 0C5.394 0 5.61 5.753 5.61 5.753l1.178 1.588s4.116-.508 5.727.026c1.611.534 2.502 1.637 2.502 3.195 0 1.558-1.077 2.802-2.585 3.097-1.508.295-5.322.076-5.322.076l-1.127 1.688s-.216 5.253 6.002 5.584c6.218.332 6.577-4.417 6.577-4.417s.467-5.066-.35-7.39c-.818-2.325-2.73-3.66-4.526-3.66h-.518V2.193S15.688.083 11.968 0zM8.88 2.22a.965.965 0 1 1 0 1.93.965.965 0 0 1 0-1.93zM6.02 9.071c-6.218-.331-6.578 4.417-6.578 4.417s-.466 5.065.351 7.39c.818 2.324 2.73 3.66 4.526 3.66h.518v3.428s.328 2.11 4.048 2.192c3.72.083 3.504-5.67 3.504-5.67l-1.178-1.671s-4.116.508-5.727-.026c-1.611-.534-2.502-1.637-2.502-3.195 0-1.558 1.077-2.802 2.585-3.098 1.508-.295 5.322-.075 5.322-.075l1.127-1.688s.216-5.253-6.002-5.584zm3.088 18.286a.965.965 0 1 1 0-1.93.965.965 0 0 1 0 1.93z" />
                </svg>
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-base tracking-tight">Python</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-normal">
                  Primary language for backend systems, machine learning pipelines, and scripting.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-0.5 pt-4 border-t border-dashed border-zinc-200 dark:border-zinc-900 mt-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
          </div>

          {/* Skill 2: FastAPI */}
          <div className="p-6 rounded-xl border border-zinc-200/50 dark:border-zinc-800/50 bg-white/40 dark:bg-zinc-950/40 backdrop-blur-md flex flex-col justify-between min-h-[190px] shadow-sm hover:shadow-md hover:border-zinc-300/80 dark:hover:border-zinc-700/80 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-10 h-10 flex items-center justify-center bg-zinc-50 dark:bg-zinc-900 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-lg">
                <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-base tracking-tight">FastAPI</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-normal">
                  Building production-ready, high-performance async REST APIs and integrations.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-0.5 pt-4 border-t border-dashed border-zinc-200 dark:border-zinc-900 mt-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
          </div>

          {/* Skill 3: Next.js */}
          <div className="p-6 rounded-xl border border-zinc-200/50 dark:border-zinc-800/50 bg-white/40 dark:bg-zinc-950/40 backdrop-blur-md flex flex-col justify-between min-h-[190px] shadow-sm hover:shadow-md hover:border-zinc-300/80 dark:hover:border-zinc-700/80 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-10 h-10 flex items-center justify-center bg-zinc-50 dark:bg-zinc-900 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-lg">
                <svg className="w-8 h-8 text-zinc-900 dark:text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 18.5v-10.5h1.5l5.25 7v-7h1.75v10.5h-1.5l-5.25-7v7h-1.75z" />
                </svg>
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-base tracking-tight">Next.js</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-normal">
                  Developing responsive full-stack applications with the App Router & React 19.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-0.5 pt-4 border-t border-dashed border-zinc-200 dark:border-zinc-900 mt-4">
              {Array.from({ length: 5 }).map((_, i) => {
                const active = i < 4;
                return (
                  <svg key={i} className={`w-3.5 h-3.5 ${active ? "text-amber-500 fill-amber-500" : "text-zinc-300 dark:text-zinc-800 fill-transparent"}`} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                );
              })}
            </div>
          </div>

          {/* Skill 4: Gemini AI */}
          <div className="p-6 rounded-xl border border-zinc-200/50 dark:border-zinc-800/50 bg-white/40 dark:bg-zinc-950/40 backdrop-blur-md flex flex-col justify-between min-h-[190px] shadow-sm hover:shadow-md hover:border-zinc-300/80 dark:hover:border-zinc-700/80 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-10 h-10 flex items-center justify-center bg-zinc-50 dark:bg-zinc-900 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-lg">
                <svg className="w-8 h-8 text-indigo-500 dark:text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M2 12h20" strokeLinecap="round" />
                  <path d="M12 12l5.5-5.5M12 12l-5.5 5.5M12 12l5.5 5.5M12 12l-5.5-5.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-base tracking-tight">Gemini AI</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-normal">
                  Integrating LLMs into backend services using prompt engineering and agents.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-0.5 pt-4 border-t border-dashed border-zinc-200 dark:border-zinc-900 mt-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-2">
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white/40 backdrop-blur-md dark:bg-zinc-950/40 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-sm cursor-pointer"
          >
            <span>Show More Skills</span>
            <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* 4. Resume CTA Section */}
      <section className="p-8 rounded-2xl border border-dashed border-zinc-200/50 dark:border-zinc-800/40 bg-zinc-100/30 dark:bg-zinc-900/30 backdrop-blur-md text-center max-w-2xl mx-auto space-y-4">
        <h3 className="text-xl font-bold tracking-tight">Need a physical copy of my credentials?</h3>
        <p className="text-sm text-zinc-500 max-w-md mx-auto">
          Download my comprehensive resume outlining my technical skill set, full project experience, and academic details.
        </p>
        <div className="pt-2">
          <a
            href="https://drive.google.com/file/d/17gd_tgwLZ7341q5qUDUNpRJ9e6CAwa6P/view?usp=sharing"
            download="Abhishek_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white/40 backdrop-blur-md dark:bg-zinc-950/40 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-sm cursor-pointer"
          >
            <span>Download Resume PDF</span>
            <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
