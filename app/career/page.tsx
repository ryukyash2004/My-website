import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Career | RyukV/Abhishek",
  description: "Professional career history and full-time role availability.",
};

export default function CareerPage() {
  return (
    <div className="space-y-12 py-8 animate-in fade-in duration-500 max-w-3xl">
      {/* Page Header */}
      <section className="space-y-4">
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-none text-zinc-900 dark:text-zinc-50">
          Career
        </h1>
        <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
          Full-time professional experience and job history.
        </p>
      </section>

      {/* Professional Status Block */}
      <section className="p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 space-y-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-dashed border-zinc-100 dark:border-zinc-900 pb-6">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">Current Professional Status</h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Availability and targets</p>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-800 self-start sm:self-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Open to Opportunities
          </span>
        </div>

        {/* Profile Focus Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
          <div className="space-y-4">
            <h3 className="font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider text-xs">Target Roles</h3>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
                Software Engineer
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
                Backend Developer
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
                RPA & Automations Architect
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider text-xs">Core Focus</h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Designing scalable backend services, optimizing database schemas (PostgreSQL/SQL Server), developing robust REST APIs (FastAPI/Node.js), and orchestrating agentic AI workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Target Timeline Section */}
      <section className="space-y-8">
        <div className="border-b border-dashed border-zinc-200 dark:border-zinc-800 pb-4">
          <h2 className="text-xl font-bold tracking-tight">Timeline</h2>
          <p className="text-xs text-zinc-400">Full-time employment history records.</p>
        </div>

        {/* Clean Job Placeholder */}
        <div className="relative border-l border-dashed border-zinc-300 dark:border-zinc-800 pl-6 ml-2">
          {/* Target Milestone */}
          <div className="relative">
            <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-400 dark:border-zinc-600">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-600 dark:bg-zinc-400"></span>
            </span>
            <span className="text-xs font-semibold text-zinc-400 block mb-1">Present — Future</span>
            <h3 className="font-bold text-lg leading-tight text-zinc-900 dark:text-zinc-50">Next Step: Software Engineer / Backend Developer</h3>
            <p className="text-sm text-zinc-500 font-medium mb-3">Your Organization</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
              Actively seeking full-time roles to build production backend systems, integrate LLM agents, and optimize operations. Ready to deploy to your stack and begin contributing immediately.
            </p>
            <div className="pt-4 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="px-4 py-2 rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-xs font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-sm"
              >
                Let's Discuss
              </Link>
              <Link
                href="/skills"
                className="px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-xs font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-zinc-700 dark:text-zinc-300"
              >
                Review Technical Stack
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
