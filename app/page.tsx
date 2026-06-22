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
            className="px-6 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-sm"
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
              Real names Abhishek Swarnakar, I am a Computer Science undergraduate with hands-on experience developing backend systems, REST APIs, authentication workflows, and data-driven applications. I specialize in Python, TypeScript, JavaScript, and SQL, and I am experienced in designing scalable backend services, structured data pipelines, and API integrations.
            </p>
            <p>
              I have a strong foundation in backend architecture, database systems, version control, and containerized deployments. I am passionate about building reliable integration systems, backend services, and scalable applications that support real-world operational requirements.
            </p>
            {/* Visual Text Skeleton Lines */}
            <div className="space-y-2 pt-2">
              <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded-md w-full"></div>
              <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded-md w-5/6"></div>
              <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded-md w-4/6"></div>
            </div>
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

      {/* 3. Resume CTA Section */}
      <section className="p-8 rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-800 bg-zinc-100/50 dark:bg-zinc-900/50 text-center max-w-2xl mx-auto space-y-4">
        <h3 className="text-xl font-bold tracking-tight">Need a physical copy of my credentials?</h3>
        <p className="text-sm text-zinc-500 max-w-md mx-auto">
          Download my comprehensive resume outlining my technical skill set, full project experience, and academic details.
        </p>
        <div className="pt-2">
          <a
            href="https://drive.google.com/file/d/17gd_tgwLZ7341q5qUDUNpRJ9e6CAwa6P/view?usp=sharing"
            download="Abhishek_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-sm cursor-pointer"
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
