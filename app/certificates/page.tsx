"use client";

import React, { useState } from "react";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
}

const certificatesData: Certificate[] = [
  {
    id: 1,
    title: "International Journal Publication Certification",
    issuer: "International Journal of Scientific Research in Engineering and Management (IJSREM)",
    date: "Issued: May 2026",
    image: "/certificates/publication certificate.png",
    description: "Official publication certificate for the research paper 'Aegis: A Privacy-Adaptable Human-In-The-Loop Agentic Medical AI Ecosystem with Dual-Mode Inference and Autonomous Emergency Response' published in IJSREM Volume 10, Issue 5.",
  },
  {
    id: 2,
    title: "Space Technology & Applications Certificate",
    issuer: "Indian Space Research Organisation (ISRO)",
    date: "Issued: Nov 2025",
    image: "/certificates/isrocertificate.png",
    description: "Conducted under the ISRO START Program (Space Science and Technology Awareness Training), covering principles of satellite payloads, applications, and space exploration.",
  },
  {
    id: 3,
    title: "Artificial Intelligence in Industry and Management",
    issuer: "NPTEL (National Programme on Technology Enhanced Learning)",
    date: "Issued: Jan 2024",
    image: "/certificates/NPTELArtificialIntelligenceinIndusttrialandManagement.png",
    description: "Advanced course and certification in AI principles, search strategies, machine learning algorithms, and operational optimization in industrial contexts.",
  },
  {
    id: 4,
    title: "Robotic Enterprise Framework (REFramework)",
    issuer: "UiPath Academy",
    date: "Issued: Mar 2024",
    image: "/certificates/ref-framwork_uipath.png",
    description: "Mastery of the standard State Machine-based enterprise template in UiPath Studio for building robust, scalable, and transactional robotic process automation (RPA) workflows.",
  },
  {
    id: 5,
    title: "Advanced Data Manipulation with Studio",
    issuer: "UiPath Academy",
    date: "Issued: Feb 2024",
    image: "/certificates/Advanced Data Manipulation with Studio_UIpath.png",
    description: "Advanced curriculum covering complex data manipulation techniques, regular expressions, collection types, DataTable operations, and debugging in UiPath Studio.",
  },
  {
    id: 7,
    title: "Machine Learning Training Certificate",
    issuer: "Internshala Trainings",
    date: "Issued: Dec 2023",
    image: "/certificates/Internshala_MachineLearning.png",
    description: "6-week online training certification covering introduction to Machine Learning, data exploration/preprocessing, linear and logistic regression, decision trees, ensemble models, and unsupervised clustering.",
  },
  {
    id: 6,
    title: "Programming in Python",
    issuer: "Infosys Springboard",
    date: "Issued: Jul 2023",
    image: "/certificates/infosys-Python_certificate.jpg",
    description: "Comprehensive curriculum covering Python basics, advanced syntax, data structures, algorithm design, and object-oriented programming paradigms.",
  },
];

function CertCard({ cert, onEnlarge }: { cert: Certificate; onEnlarge: () => void }) {
  return (
    <div className="group flex flex-col rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-4 space-y-3 shadow-sm hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300">
      {/* 1. Thumbnail Container */}
      <div
        onClick={onEnlarge}
        className="aspect-[1.414] w-full rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-900 overflow-hidden cursor-zoom-in relative"
      >
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 dark:group-hover:bg-black/20 transition-colors" />
      </div>

      {/* 2. Certificate Info */}
      <div className="space-y-1.5 flex-grow">
        <h3 className="font-bold text-sm tracking-tight leading-snug text-zinc-900 dark:text-zinc-50 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
          {cert.title}
        </h3>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">{cert.issuer}</p>
        <p className="text-[10px] text-zinc-400 dark:text-zinc-500 font-mono">{cert.date}</p>
      </div>

      {/* 3. Action Block */}
      <div className="pt-1">
        <button
          onClick={onEnlarge}
          className="w-full py-1.5 text-xs font-medium text-center border border-zinc-200 dark:border-zinc-850 rounded bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 active:scale-[0.98] transition-all"
        >
          View Credentials
        </button>
      </div>
    </div>
  );
}

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Page Header */}
      <div className="border-b border-dashed border-zinc-200 dark:border-zinc-800 pb-6">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Licenses & Certificates</h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Professional certifications, technical training milestones, and academic awards.
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certificatesData.map((cert) => (
          <CertCard
            key={cert.id}
            cert={cert}
            onEnlarge={() => setSelectedCert(cert)}
          />
        ))}
      </div>

      {/* Interactive Lightbox Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center font-bold text-2xl transition-colors cursor-pointer focus:outline-none"
              aria-label="Close modal"
            >
              &times;
            </button>

            <div className="flex flex-col overflow-y-auto">
              <div className="w-full bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center p-4 md:p-8 min-h-[180px] shrink-0">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-h-[45vh] w-auto h-auto object-contain rounded border border-zinc-200 dark:border-zinc-800 shadow-sm"
                />
              </div>
              <div className="p-6 space-y-2 border-t border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">{selectedCert.title}</h4>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{selectedCert.issuer}</p>
                  </div>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 self-start sm:self-auto whitespace-nowrap">
                    {selectedCert.date}
                  </span>
                </div>
                {selectedCert.description && (
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 pt-2 leading-relaxed">
                    {selectedCert.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
