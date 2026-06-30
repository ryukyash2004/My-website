"use client";

import React, { useState } from "react";

interface Publication {
  id: number;
  title: string;
  authors: string[];
  venue: string;
  date: string;
  type: "Journal" | "Conference" | "Preprint";
  abstract: string;
  pdfUrl: string;
  publisherUrl: string;
  codeUrl?: string;
  tags: string[];
  bibtex: string;
}

const publicationsData: Publication[] = [
  {
    id: 1,
    title: "Aegis: A Privacy-Adaptable Human-In-The-Loop Agentic Medical AI Ecosystem with Dual-Mode Inference and Autonomous Emergency Response",
    authors: ["Abhishek Swarnakar"],
    venue: "International Journal of Scientific Research in Engineering and Management (IJSREM)",
    date: "May 2026",
    type: "Journal",
    abstract: "Aegis is an agentic AI ecosystem for healthcare designed to address critical challenges in clinical AI: patient privacy, model hallucinations, and autonomous emergency response coordination. Aegis operates in a Dual-Mode Inference configuration, combining a local quantized model (e.g., Meditron 7B via Ollama) for on-device privacy-sensitive tasks with cloud-based LLMs (e.g., Gemini 1.5 Pro) for complex diagnostics over large clinical context windows. By grounding patient context through Retrieval-Augmented Generation (RAG) against ICD-11 guidelines and PubMed, Aegis minimizes clinical hallucinations. The system incorporates a Human-in-the-Loop (HITL) Action Agent for critical procedures (such as booking appointments and emergency dispatches) requiring patient verification. In emergency scenarios, it triggers a multipathway response system utilizing NG911 integrations, a 112 direct shortcut, a Hospital Redirect helper, and an autonomous dispatch countdown if the patient becomes unresponsive.",
    pdfUrl: "/publications/IJSREM63122_1778673891796.pdf",
    publisherUrl: "https://ijsrem.com/download/aegis-a-privacy-adaptable-human-in-the-loop-agentic-medical-ai-ecosystem-with-dual-mode-inference-and-autonomous-emergency-response",
    codeUrl: "https://github.com/ryukyash2004/Health-Infrastructure-project",
    tags: ["Clinical AI", "Dual-Mode Inference", "Human-in-the-Loop", "Emergency Response", "Retrieval-Augmented Generation"],
    bibtex: `@article{swarnakar2026aegis,
  title={Aegis: A Privacy-Adaptable Human-In-The-Loop Agentic Medical AI Ecosystem with Dual-Mode Inference and Autonomous Emergency Response},
  author={Swarnakar, Abhishek},
  journal={International Journal of Scientific Research in Engineering and Management (IJSREM)},
  volume={10},
  number={5},
  year={2026},
  month={May},
  publisher={IJSREM},
  url={https://ijsrem.com/download/aegis-a-privacy-adaptable-human-in-the-loop-agentic-medical-ai-ecosystem-with-dual-mode-inference-and-autonomous-emergency-response}
}`
  }
];

function PublicationCard({ pub }: { pub: Publication }) {
  const [showAbstract, setShowAbstract] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyBibtex = () => {
    navigator.clipboard.writeText(pub.bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-5 sm:p-6 space-y-4 shadow-sm hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300">
      {/* Type badge and Date */}
      <div className="flex items-center justify-between text-xs font-mono">
        <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800">
          {pub.type}
        </span>
        <span className="text-zinc-500">{pub.date}</span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-snug group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
        {pub.title}
      </h3>

      {/* Authors list - highlighting Swarnakar */}
      <div className="text-sm text-zinc-600 dark:text-zinc-400">
        {pub.authors.map((author, index) => {
          const isUser = author === "Abhishek Swarnakar" || author === "A. Swarnakar";
          return (
            <span key={author}>
              {isUser ? (
                <strong className="text-zinc-900 dark:text-zinc-100 font-semibold underline decoration-dotted">
                  {author}
                </strong>
              ) : (
                author
              )}
              {index < pub.authors.length - 1 ? ", " : ""}
            </span>
          );
        })}
      </div>

      {/* Publication Venue */}
      <div className="text-sm italic text-zinc-500 dark:text-zinc-400">
        {pub.venue}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 pt-1">
        {pub.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/80 text-zinc-600 dark:text-zinc-400"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Collapsible Abstract */}
      <div className="pt-2 border-t border-dashed border-zinc-100 dark:border-zinc-900">
        <button
          onClick={() => setShowAbstract(!showAbstract)}
          className="flex items-center gap-1.5 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          <svg
            className={`w-4 h-4 transform transition-transform ${showAbstract ? "rotate-90" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
          {showAbstract ? "Hide Abstract" : "Show Abstract"}
        </button>
        {showAbstract && (
          <div className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 bg-zinc-50/50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-900 rounded-lg p-4 animate-in fade-in slide-in-from-top-2 duration-300">
            {pub.abstract}
          </div>
        )}
      </div>

      {/* Links and Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-dashed border-zinc-100 dark:border-zinc-900">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <a
            href={pub.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors"
          >
            <svg className="w-4 h-4 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF
          </a>
          <a
            href={pub.publisherUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors"
          >
            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Publisher Link
          </a>
          {pub.codeUrl && (
            <a
              href={pub.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors"
            >
              <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Code Repo
            </a>
          )}
        </div>

        <button
          onClick={handleCopyBibtex}
          className="relative inline-flex items-center justify-center gap-1.5 w-full sm:w-auto px-3 py-1.5 text-xs font-mono font-medium rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-200 transition-all active:scale-95"
        >
          {copied ? (
            <>
              <svg className="w-3.5 h-3.5 text-emerald-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              Copy BibTeX
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default function Publications() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeType, setActiveType] = useState<string>("All");

  const filteredPublications = publicationsData.filter((pub) => {
    const matchesSearch =
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesType = activeType === "All" || pub.type === activeType;

    return matchesSearch && matchesType;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Page Header */}
      <div className="border-b border-dashed border-zinc-200 dark:border-zinc-800 pb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Research & Publications</h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            A listing of peer-reviewed publications, technical reports, and preprints.
          </p>
        </div>

        {/* Scholar / ORCID / ResearchGate profiles */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://scholar.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-xs font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors shadow-sm text-zinc-700 dark:text-zinc-300"
          >
            Google Scholar
          </a>
          <a
            href="https://orcid.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-xs font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors shadow-sm text-zinc-700 dark:text-zinc-300"
          >
            ORCID
          </a>
          <a
            href="https://www.researchgate.net"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-xs font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors shadow-sm text-zinc-700 dark:text-zinc-300"
          >
            ResearchGate
          </a>
        </div>
      </div>

      {/* Search & Filter Controls */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-zinc-50/50 dark:bg-zinc-900/10 p-4 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-xl">
        {/* Search input */}
        <div className="relative flex-grow max-w-md">
          <input
            type="text"
            placeholder="Search papers, abstracts, keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 focus:outline-none focus:ring-1 focus:ring-zinc-400 focus:border-zinc-400 dark:focus:ring-zinc-600 dark:focus:border-zinc-600 transition-all text-zinc-900 dark:text-zinc-50"
          />
          <svg
            className="absolute left-3 top-2.5 w-4 h-4 text-zinc-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Filter Tabs */}
        <div
          style={{ scrollbarWidth: "none" }}
          className="flex items-center gap-1 p-1 bg-zinc-100 dark:bg-zinc-900 rounded-lg self-start sm:self-auto border border-zinc-200/50 dark:border-zinc-800/50 max-w-full overflow-x-auto whitespace-nowrap"
        >
          {["All", "Journal", "Conference", "Preprint"].map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all shrink-0 ${
                activeType === type
                  ? "bg-white dark:bg-zinc-950 text-zinc-950 dark:text-white shadow-sm"
                  : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
              }`}
            >
              {type}s
            </button>
          ))}
        </div>
      </div>

      {/* Publications Listing */}
      <div className="space-y-6">
        {filteredPublications.length > 0 ? (
          filteredPublications.map((pub) => (
            <PublicationCard key={pub.id} pub={pub} />
          ))
        ) : (
          <div className="text-center py-16 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50/20">
            <svg
              className="w-12 h-12 text-zinc-300 dark:text-zinc-700 mx-auto mb-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <h3 className="font-bold text-lg text-zinc-700 dark:text-zinc-300">No publications found</h3>
            <p className="text-sm text-zinc-500 mt-1">Try adjusting your search query or filter settings.</p>
          </div>
        )}
      </div>
    </div>
  );
}
