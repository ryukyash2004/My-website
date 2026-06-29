import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import Navbar from "./components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Wireframe",
  description: "A clean, modern multi-page portfolio wireframe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative text-zinc-950 dark:text-zinc-50 overflow-x-hidden antialiased">
        {/* Global Aurora/Flowy Gradient Background */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500">
          {/* Moving color gradients (aurora nodes) */}
          <div className="absolute -inset-[10px] opacity-45 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen filter blur-[85px] sm:blur-[120px] transition-opacity duration-500">
            {/* Blob 1: Purple/Indigo */}
            <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 dark:from-purple-900/60 dark:to-indigo-800/60 animate-blob-slow animate-duration-[25s]" />
            
            {/* Blob 2: Fuchsia/Pink */}
            <div className="absolute top-[20%] right-[-10%] w-[55%] h-[55%] rounded-full bg-gradient-to-br from-fuchsia-400 to-pink-500 dark:from-fuchsia-900/40 dark:to-pink-900/40 animate-blob-slower animate-duration-[30s]" />

            {/* Blob 3: Violet/Blue */}
            <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-violet-400 to-blue-500 dark:from-violet-950/50 dark:to-blue-900/50 animate-blob-slowest animate-duration-[35s]" />
          </div>
          
          {/* Subtle noise/grid pattern overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#8080800d_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        {/* Sticky Header */}
        <header
          style={{ viewTransitionName: "site-header" } as React.CSSProperties}
          className="sticky top-0 z-50 w-full border-b border-dashed border-zinc-200/50 bg-zinc-50/40 backdrop-blur-md dark:border-zinc-800/40 dark:bg-zinc-950/40 transition-colors duration-500"
        >
          <Navbar />
        </header>


        {/* Main Content Area */}
        <main className="flex-1 flex flex-col">
          <div className="mx-auto w-full max-w-6xl flex-grow px-4 py-12 sm:px-6 lg:px-8">
            <ViewTransition name="page-content">
              {children}
            </ViewTransition>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full border-t border-dashed border-zinc-200/50 py-6 dark:border-zinc-800/40 bg-zinc-100/20 dark:bg-zinc-900/20 backdrop-blur-sm transition-colors duration-500">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
            <p className="text-sm text-zinc-500">&copy; {new Date().getFullYear()} RyukV/Abhishek. All rights reserved.</p>
            <div className="flex items-center gap-5 text-zinc-400">
              <a
                href="https://github.com/ryukyash2004"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"
                title="GitHub"
              >
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/abhishek-swarnakar24/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"
                title="LinkedIn"
              >
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://x.com/roocks_42069"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"
                title="Twitter / X"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="mailto:abhishek.business.acc01@gmail.com"
                className="hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"
                title="Email"
              >
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
