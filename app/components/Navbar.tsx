"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Manage view transition direction classes on the html root element
  useEffect(() => {
    if (pathname !== prevPathname) {
      const pageOrder = [
        "/",
        "/projects",
        "/publications",
        "/skills",
        "/career",
        "/certificates",
        "/contact",
      ];
      const prevIndex = pageOrder.indexOf(prevPathname);
      const currIndex = pageOrder.indexOf(pathname);

      if (prevIndex !== -1 && currIndex !== -1) {
        if (currIndex > prevIndex) {
          document.documentElement.classList.add("nav-forward");
          document.documentElement.classList.remove("nav-back");
        } else {
          document.documentElement.classList.add("nav-back");
          document.documentElement.classList.remove("nav-forward");
        }
      }
      setPrevPathname(pathname);
    }
  }, [pathname, prevPathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/publications", label: "Publications" },
    { href: "/skills", label: "Skills" },
    { href: "/career", label: "Career" },
    { href: "/certificates", label: "Certificates" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="mx-auto flex flex-col max-w-6xl w-full">
      {/* Top Main Navigation Bar */}
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 w-full relative">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold tracking-tight">
          <Image
            src="/images/logoprofile.png"
            alt="RyukV/Abhishek Logo"
            width={32}
            height={32}
            className="h-8 w-8 rounded-lg object-cover"
          />
          <span className="text-zinc-950 dark:text-zinc-50">RyukV/Abhishek</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-200 py-2 px-1 relative ${
                  isActive
                    ? "text-purple-600 dark:text-purple-400 font-semibold"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1 right-1 h-0.5 bg-purple-500 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close main navigation menu" : "Open main navigation menu"}
          aria-expanded={isOpen}
          className="md:hidden flex items-center justify-center w-11 h-11 -mr-2 rounded-lg border border-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors z-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
        >
          <div className={`icon-menu ${isOpen ? "menu-open" : ""}`} aria-hidden="true">
            <div className="bar bar--1"></div>
            <div className="bar bar--2"></div>
            <div className="bar bar--3"></div>
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown (Takes space in flow, pushing content down) */}
      {isOpen && (
        <div className="md:hidden w-full border-t border-dashed border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 py-3 px-4 sm:px-6 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1 pb-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center w-full min-h-[44px] px-4 py-2 rounded-xl border border-transparent text-sm font-semibold transition-all duration-200 active:scale-[0.99] ${
                    isActive
                      ? "bg-purple-500/10 dark:bg-purple-400/10 border-purple-500/20 text-purple-600 dark:text-purple-400"
                      : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100/50 dark:hover:bg-zinc-900/50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
}
