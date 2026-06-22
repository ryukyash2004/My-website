import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | RyukV/Abhishek",
  description: "A detailed matrix of my technical skills, covering programming languages, backend frameworks, RPA tools, AI/ML models, and databases.",
};

interface Skill {
  name: string;
  description: string;
  rating: number; // out of 5
  icon: React.ReactNode;
}

interface SkillCategory {
  categoryName: string;
  skills: Skill[];
}

export default function SkillsPage() {
  const categories: SkillCategory[] = [
    {
      categoryName: "Languages",
      skills: [
        {
          name: "Python",
          description: "Primary language for backend systems, machine learning pipelines, and data manipulation scripts.",
          rating: 5,
          icon: (
            <svg className="w-8 h-8 text-zinc-700 dark:text-zinc-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.968 0C5.394 0 5.61 5.753 5.61 5.753l1.178 1.588s4.116-.508 5.727.026c1.611.534 2.502 1.637 2.502 3.195 0 1.558-1.077 2.802-2.585 3.097-1.508.295-5.322.076-5.322.076l-1.127 1.688s-.216 5.253 6.002 5.584c6.218.332 6.577-4.417 6.577-4.417s.467-5.066-.35-7.39c-.818-2.325-2.73-3.66-4.526-3.66h-.518V2.193S15.688.083 11.968 0zM8.88 2.22a.965.965 0 1 1 0 1.93.965.965 0 0 1 0-1.93zM6.02 9.071c-6.218-.331-6.578 4.417-6.578 4.417s-.466 5.065.351 7.39c.818 2.324 2.73 3.66 4.526 3.66h.518v3.428s.328 2.11 4.048 2.192c3.72.083 3.504-5.67 3.504-5.67l-1.178-1.671s-4.116.508-5.727-.026c-1.611-.534-2.502-1.637-2.502-3.195 0-1.558 1.077-2.802 2.585-3.098 1.508-.295 5.322-.075 5.322-.075l1.127-1.688s.216-5.253-6.002-5.584zm3.088 18.286a.965.965 0 1 1 0-1.93.965.965 0 0 1 0 1.93z" />
            </svg>
          ),
        },
        {
          name: "TypeScript",
          description: "Used to build robust, strongly-typed frontends and backend services, ensuring code reliability.",
          rating: 4,
          icon: (
            <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 0h24v24H0V0zm21.6 19.2c0-1.2-.5-2.2-1.4-2.8-1-.7-2.4-1.1-4.2-1.3-.8-.1-1.3-.2-1.7-.4-.3-.1-.4-.3-.4-.6 0-.3.1-.5.4-.6.3-.1.8-.2 1.4-.2.8 0 1.4.2 1.8.5.3.3.6.7.7 1.3h2.6c-.1-1.2-.6-2.1-1.5-2.7-.9-.6-2.2-.9-3.7-.9-1.5 0-2.8.3-3.7 1-.9.6-1.3 1.5-1.3 2.7 0 1 .4 1.8 1.2 2.3.8.5 2 .8 3.6 1.1 1.2.2 2 .4 2.3.6.3.2.5.4.5.8 0 .4-.2.7-.6.9-.4.2-1.1.3-2.1.3-1.1 0-2-.2-2.5-.7-.6-.5-.9-1.2-1-2.2H9c.1 1.6.7 2.8 1.8 3.5 1.1.7 2.7 1.1 4.7 1.1 1.7 0 3-.3 3.9-.9 1-.7 1.2-1.7 1.2-2.9zm-10.2.8v-2.3H8.8V9.3h2.6V7.7H3.5v1.6h2.6v10.7h5.3z" />
            </svg>
          ),
        },
        {
          name: "JavaScript",
          description: "Core scripting language used for dynamic UI logic, node server utilities, and integration endpoints.",
          rating: 5,
          icon: (
            <svg className="w-8 h-8 text-yellow-500 dark:text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 0h24v24H0V0zm20.8 18.4c0-1.2-.5-2.2-1.4-2.8-1-.7-2.4-1.1-4.2-1.3-.8-.1-1.3-.2-1.7-.4-.3-.1-.4-.3-.4-.6 0-.3.1-.5.4-.6.3-.1.8-.2 1.4-.2.8 0 1.4.2 1.8.5.3.3.6.7.7 1.3h2.6c-.1-1.2-.6-2.1-1.5-2.7-.9-.6-2.2-.9-3.7-.9-1.5 0-2.8.3-3.7 1-.9.6-1.3 1.5-1.3 2.7 0 1 .4 1.8 1.2 2.3.8.5 2 .8 3.6 1.1 1.2.2 2 .4 2.3.6.3.2.5.4.5.8 0 .4-.2.7-.6.9-.4.2-1.1.3-2.1.3-1.1 0-2-.2-2.5-.7-.6-.5-.9-1.2-1-2.2H9.2c.1 1.6.7 2.8 1.8 3.5 1.1.7 2.7 1.1 4.7 1.1 1.7 0 3-.3 3.9-.9 1-.7 1.2-1.7 1.2-2.9z" />
            </svg>
          ),
        },
        {
          name: "SQL",
          description: "Writing, optimizing, and debugging complex queries, schemas, and indexing for relational databases.",
          rating: 4,
          icon: (
            <svg className="w-8 h-8 text-zinc-700 dark:text-zinc-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <ellipse cx="12" cy="5" rx="9" ry="3" />
              <path d="M3 5V19A9 3 0 0 0 21 19V5" />
              <path d="M3 12A9 3 0 0 0 21 12" />
            </svg>
          ),
        },
      ],
    },
    {
      categoryName: "Backend & Frameworks",
      skills: [
        {
          name: "FastAPI",
          description: "Building production-ready, high-performance async REST APIs with automated OpenAPI documentation.",
          rating: 5,
          icon: (
            <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          ),
        },
        {
          name: "Next.js",
          description: "Developing responsive full-stack applications utilizing the App Router, RSC, and static generation.",
          rating: 4,
          icon: (
            <svg className="w-8 h-8 text-zinc-900 dark:text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 18.5v-10.5h1.5l5.25 7v-7h1.75v10.5h-1.5l-5.25-7v7h-1.75z" />
            </svg>
          ),
        },
        {
          name: "Node.js",
          description: "Creating asynchronous backend services, scripting CLI tools, and integrating third-party APIs.",
          rating: 4,
          icon: (
            <svg className="w-8 h-8 text-green-600 dark:text-green-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-6h2v6zm0-8h-2V6h2v2z" />
            </svg>
          ),
        },
        {
          name: "Express.js",
          description: "Structuring clean, robust middleware, routing subsystems, and RESTful service layers in Node.",
          rating: 4,
          icon: (
            <span className="font-mono font-black text-xl text-zinc-700 dark:text-zinc-300">ex</span>
          ),
        },
        {
          name: "Streamlit",
          description: "Rapidly deploying interactive data science visualization dashboards and ML model interfaces.",
          rating: 4,
          icon: (
            <svg className="w-8 h-8 text-red-500 dark:text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          ),
        },
      ],
    },
    {
      categoryName: "Robotic Process Automation (RPA)",
      skills: [
        {
          name: "UiPath Studio",
          description: "Designing workflows to automate tedious corporate processes, handling dynamic data entry.",
          rating: 5,
          icon: (
            <svg className="w-8 h-8 text-orange-600 dark:text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <path d="M9 9h6v6H9z" />
            </svg>
          ),
        },
        {
          name: "REFramework",
          description: "Structuring transactional, enterprise-grade automations using the standard Robotic Enterprise Framework.",
          rating: 5,
          icon: (
            <svg className="w-8 h-8 text-orange-700 dark:text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v8M8 12h8" />
            </svg>
          ),
        },
        {
          name: "UiPath Advanced",
          description: "Advanced manipulation of structured files, complex orchestrator cues, and error-handling schemes.",
          rating: 5,
          icon: (
            <svg className="w-8 h-8 text-orange-600 dark:text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
          ),
        },
      ],
    },
    {
      categoryName: "AI / Machine Learning",
      skills: [
        {
          name: "Gemini AI",
          description: "Integrating Gemini LLMs into backend services using prompt engineering, structured JSON outputs, and agents.",
          rating: 5,
          icon: (
            <svg className="w-8 h-8 text-indigo-500 dark:text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v20M2 12h20" strokeLinecap="round" />
              <path d="M12 12l5.5-5.5M12 12l-5.5 5.5M12 12l5.5 5.5M12 12l-5.5-5.5" strokeLinecap="round" />
            </svg>
          ),
        },
        {
          name: "OpenAI API",
          description: "Deploying generative workflows, custom system contexts, semantic embeddings, and agent orchestration.",
          rating: 5,
          icon: (
            <svg className="w-8 h-8 text-green-700 dark:text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4.5 16.5c-1.5 1.26-2.5 3.19-2.5 5.5h20c0-2.31-1-4.24-2.5-5.5" />
              <circle cx="12" cy="10" r="6" />
            </svg>
          ),
        },
        {
          name: "Genkit",
          description: "Utilizing Genkit frameworks for structured AI pipeline development, logging, and evaluation.",
          rating: 4,
          icon: (
            <svg className="w-8 h-8 text-orange-500 dark:text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
              <line x1="12" y1="2" x2="12" y2="12" />
            </svg>
          ),
        },
        {
          name: "Scikit-Learn",
          description: "Implementing standard predictive models (regression, classification, clustering) and feature engineering.",
          rating: 4,
          icon: (
            <svg className="w-8 h-8 text-zinc-700 dark:text-zinc-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="18" r="3" />
              <circle cx="6" cy="6" r="3" />
              <circle cx="6" cy="18" r="3" />
              <path d="M18 15V9a4 4 0 0 0-4-4h-5" />
              <path d="M9 18h6" />
            </svg>
          ),
        },
      ],
    },
    {
      categoryName: "Databases",
      skills: [
        {
          name: "PostgreSQL",
          description: "Designing schemas, tuning indexing strategies, and writing complex analytical queries.",
          rating: 5,
          icon: (
            <svg className="w-8 h-8 text-blue-700 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          ),
        },
        {
          name: "SQL Server (Azure)",
          description: "Enterprise database querying, handling cloud Azure DB infrastructure, and stored procedures.",
          rating: 4,
          icon: (
            <svg className="w-8 h-8 text-sky-600 dark:text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="8" rx="2" />
              <rect x="2" y="14" width="20" height="8" rx="2" />
              <line x1="6" y1="6" x2="6.01" y2="6" />
              <line x1="6" y1="18" x2="6.01" y2="18" />
            </svg>
          ),
        },
        {
          name: "Firebase Firestore",
          description: "Structuring real-time NoSQL databases, writing collection rules, and frontend integration.",
          rating: 4,
          icon: (
            <svg className="w-8 h-8 text-amber-500 dark:text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
            </svg>
          ),
        },
      ],
    },
  ];

  return (
    <div className="space-y-12 py-8 animate-in fade-in duration-500">
      {/* Page Header */}
      <section className="max-w-3xl space-y-4">
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-none text-zinc-900 dark:text-zinc-50">
          Skills
        </h1>
        <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
          An evaluation of the technologies, tools, and languages that define my professional stack.
        </p>
      </section>

      {/* Skills Matrix Grid */}
      <section className="space-y-16">
        {categories.map((cat, idx) => (
          <div key={idx} className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-650">
              {cat.categoryName}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 flex flex-col justify-between min-h-[190px] shadow-sm hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    {/* Skill Icon */}
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 flex items-center justify-center bg-zinc-50 dark:bg-zinc-900 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-lg">
                        {skill.icon}
                      </div>
                    </div>

                    {/* Skill Title & Description */}
                    <div className="space-y-1">
                      <h4 className="font-bold text-base tracking-tight text-zinc-900 dark:text-zinc-50">{skill.name}</h4>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-normal">
                        {skill.description}
                      </p>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div className="flex items-center gap-0.5 pt-4 border-t border-dashed border-zinc-100 dark:border-zinc-900 mt-4">
                    {Array.from({ length: 5 }).map((_, starIdx) => {
                      const active = starIdx < skill.rating;
                      return (
                        <svg
                          key={starIdx}
                          className={`w-3.5 h-3.5 ${active ? "text-amber-500 fill-amber-500" : "text-zinc-300 dark:text-zinc-800 fill-transparent"}`}
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
