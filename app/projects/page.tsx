import React from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  repoUrl: string;
  demoUrl: string;
  gradient: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Project Aegis",
    description: "A comprehensive healthcare triage system built as a monorepo. Features a patient-facing triage chat, a clinician dashboard, and a FastAPI/PostgreSQL backend, integrated with Gemini AI for automated routing and intake assessments.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Gemini AI", "Zustand", "Turborepo"],
    repoUrl: "https://github.com/ryukyash2004/Health-Infrastructure-project",
    demoUrl: "",
    gradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
  },
  {
    id: 2,
    title: "Cloud Expense Tracker",
    description: "A full-stack personal finance manager with AI-powered receipt scanning. Uses Azure Computer Vision for OCR extraction and Azure SQL Database for real-time syncing, auto-categorizing expenses by merchant name.",
    tags: ["Next.js", "TypeScript", "Azure SQL", "Azure Computer Vision", "TailwindCSS"],
    repoUrl: "https://github.com/ryukyash2004/expense-tracking-app-Next.js-and-Azure-SQL",
    demoUrl: "",
    gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
  },
  {
    id: 3,
    title: "AI Sales Pitch Coach",
    description: "An AI-powered pitch analysis platform built with Streamlit and OpenAI GPT-4. Tailored for automotive sales, it evaluates user pitches on popular Indian car models and generates detailed, actionable coaching feedback.",
    tags: ["Python", "Streamlit", "GPT-4", "OpenAI API", "Sales Tech"],
    repoUrl: "https://github.com/ryukyash2004/ai-sales-coach",
    demoUrl: "",
    gradient: "from-violet-500/10 via-purple-500/5 to-transparent",
  },
  {
    id: 4,
    title: "SafeRouteSOS",
    description: "A personal security web application enabling real-time location sharing, immediate one-tap SOS alerting, and emergency contact management. Built on Next.js with a Firebase/Genkit backend and Google Maps API.",
    tags: ["Next.js", "Firebase", "Google Maps API", "Genkit", "Shadcn UI"],
    repoUrl: "https://github.com/ryukyash2004/SaferouteSOS",
    demoUrl: "",
    gradient: "from-rose-500/10 via-red-500/5 to-transparent",
  },
  {
    id: 5,
    title: "Enterprise Video SaaS",
    description: "A secure, multi-tenant video streaming and automated sensitivity analysis SaaS platform. Features tenant-scoped database isolation, seekable playback via HTTP Range Requests, and live progress updates via Socket.io.",
    tags: ["Node.js", "Express", "React", "MongoDB", "Socket.io", "SaaS"],
    repoUrl: "https://github.com/ryukyash2004/video-management-saas",
    demoUrl: "",
    gradient: "from-amber-500/10 via-orange-500/5 to-transparent",
  },
];

function ProjectIcon({ id }: { id: number }) {
  switch (id) {
    case 1:
      return (
        <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case 2:
      return (
        <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      );
    case 3:
      return (
        <svg className="w-8 h-8 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      );
    case 4:
      return (
        <svg className="w-8 h-8 text-rose-600 dark:text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case 5:
      return (
        <svg className="w-8 h-8 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      );
    default:
      return (
        <svg className="w-8 h-8 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
  }
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 overflow-hidden p-5 space-y-4 shadow-sm hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300">
      {/* 1. 16:9 Visual Placeholder / Card Header */}
      <div className={`aspect-video w-full rounded-lg bg-gradient-to-br ${project.gradient} border border-zinc-100 dark:border-zinc-900 flex flex-col items-center justify-center gap-2 relative overflow-hidden`}>
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800b_1px,transparent_1px),linear-gradient(to_bottom,#8080800b_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]" />
        
        {/* Project Icon */}
        <div className="relative z-10 p-3 rounded-full bg-white dark:bg-zinc-900 shadow-sm border border-zinc-100 dark:border-zinc-800 group-hover:scale-110 transition-transform duration-300">
          <ProjectIcon id={project.id} />
        </div>
      </div>

      {/* 2. Title & Description Area */}
      <div className="space-y-2 flex-grow">
        <h3 className="font-bold text-xl tracking-tight text-zinc-900 dark:text-zinc-50 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{project.description}</p>
      </div>

      {/* 3. Tech-Stack Badge Row */}
      <div className="flex flex-wrap gap-1.5 pt-1">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/80 text-zinc-600 dark:text-zinc-400"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* 4. Two-Button Flex Row (Repo & Demo CTAs) */}
      <div className="flex items-center gap-3 pt-3 border-t border-dashed border-zinc-100 dark:border-zinc-900">
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-grow py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-xs font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-center text-zinc-700 dark:text-zinc-300"
        >
          Code Repo
        </a>
        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-grow py-2 rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-xs font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors text-center"
          >
            Live Demo
          </a>
        ) : (
          <button
            disabled
            className="flex-grow py-2 rounded-lg bg-zinc-50 dark:bg-zinc-900 text-zinc-400 dark:text-zinc-600 text-xs font-medium cursor-not-allowed text-center border border-transparent"
          >
            Demo Coming Soon
          </button>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="border-b border-dashed border-zinc-200 dark:border-zinc-800 pb-6">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Featured Projects</h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          A collection of my work, spanning healthcare infrastructure, AI-powered applications, personal security, and finance managers.
        </p>
      </div>

      {/* 3-Column Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

