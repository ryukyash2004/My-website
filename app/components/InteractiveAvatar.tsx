"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

export default function InteractiveAvatar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [swipeOffset, setSwipeOffset] = useState(0);
  const [isScrubbing, setIsScrubbing] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const dragStartPos = useRef(0);
  const initialIndexForDrag = useRef(0);

  const images = [
    { src: "/images/logoprofile.png", alt: "Abhishek's Logo" },
    { src: "/images/Profile-pic.jpeg", alt: "Abhishek's Profile Picture" }
  ];

  // Prevent drag image ghosting default browser behavior
  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
  };

  // Image swipe handling (works on both mobile touch and desktop mouse via Pointer Events)
  const handleImagePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return; // Only trigger for left-click/primary touch
    setIsSwiping(true);
    dragStartPos.current = e.clientX;
    initialIndexForDrag.current = currentIndex;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handleImagePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isSwiping) return;
    const dx = e.clientX - dragStartPos.current;

    // Dampen swipe when reaching borders
    if (currentIndex === 0 && dx > 0) {
      setSwipeOffset(dx * 0.4);
    } else if (currentIndex === images.length - 1 && dx < 0) {
      setSwipeOffset(dx * 0.4);
    } else {
      setSwipeOffset(dx);
    }
  };

  const handleImagePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isSwiping) return;
    setIsSwiping(false);
    e.currentTarget.releasePointerCapture(e.pointerId);

    // If swiped more than 40px, transition to the next slide
    if (Math.abs(swipeOffset) > 40) {
      if (swipeOffset > 0 && currentIndex > 0) {
        setCurrentIndex(0);
      } else if (swipeOffset < 0 && currentIndex < images.length - 1) {
        setCurrentIndex(1);
      }
    }
    setSwipeOffset(0);
  };

  const handleImagePointerCancel = () => {
    setIsSwiping(false);
    setSwipeOffset(0);
  };

  // Dots indicator scrubbing dial handling
  const handleScrubberPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    setIsScrubbing(true);
    dragStartPos.current = e.clientX;

    // Check if we tapped directly on a dot
    const target = e.target as HTMLElement;
    const dotIndexAttr = target.closest("[data-dot-index]")?.getAttribute("data-dot-index");
    if (dotIndexAttr !== null && dotIndexAttr !== undefined) {
      const targetIndex = parseInt(dotIndexAttr, 10);
      setCurrentIndex(targetIndex);
      initialIndexForDrag.current = targetIndex;
    } else {
      initialIndexForDrag.current = currentIndex;
    }

    e.currentTarget.setPointerCapture(e.pointerId);
    e.stopPropagation();
  };

  const handleScrubberPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isScrubbing) return;
    const dx = e.clientX - dragStartPos.current;

    // Sensitivity: how many pixels of drag maps to changing index
    const sensitivity = 20;
    const indexShift = Math.round(dx / sensitivity);

    let newIndex = initialIndexForDrag.current + indexShift;
    newIndex = Math.max(0, Math.min(images.length - 1, newIndex));

    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  const handleScrubberPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isScrubbing) return;
    setIsScrubbing(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
    e.stopPropagation();
  };

  const handleScrubberPointerCancel = () => {
    setIsScrubbing(false);
  };

  return (
    <div className="relative group/avatar select-none">
      {/* 3D card tilt effect on hover wrapper */}
      <div
        ref={containerRef}
        className="w-40 h-40 rounded-full bg-zinc-200 dark:bg-zinc-800 border-2 border-dashed border-zinc-400 dark:border-zinc-600 overflow-hidden relative shadow-md cursor-grab active:cursor-grabbing transition-transform duration-300 hover:scale-102 hover:shadow-lg"
        onPointerDown={handleImagePointerDown}
        onPointerMove={handleImagePointerMove}
        onPointerUp={handleImagePointerUp}
        onPointerCancel={handleImagePointerCancel}
        onDragStart={handleDragStart}
      >
        {/* Sliding images track */}
        <div
          className="flex h-full w-[200%]"
          style={{
            transform: isSwiping
              ? `translateX(calc(-${currentIndex * 50}% + ${swipeOffset}px))`
              : `translateX(-${currentIndex * 50}%)`,
            transition: isSwiping ? "none" : "transform 500ms cubic-bezier(0.16, 1, 0.3, 1)"
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-1/2 h-full relative shrink-0 bg-zinc-100 dark:bg-zinc-900">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="160px"
                className="object-cover pointer-events-none"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Subtle navigation overlays on hover */}
        <div className="absolute inset-y-0 left-0 w-8 flex items-center justify-start pl-1 bg-gradient-to-r from-black/10 to-transparent opacity-0 group-hover/avatar:opacity-100 transition-opacity pointer-events-none">
          {currentIndex > 0 && (
            <span className="text-white drop-shadow font-bold text-sm">‹</span>
          )}
        </div>
        <div className="absolute inset-y-0 right-0 w-8 flex items-center justify-end pr-1 bg-gradient-to-l from-black/10 to-transparent opacity-0 group-hover/avatar:opacity-100 transition-opacity pointer-events-none">
          {currentIndex < images.length - 1 && (
            <span className="text-white drop-shadow font-bold text-sm">›</span>
          )}
        </div>
      </div>

      {/* Floating glassmorphism dots scrubber indicator */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 group/indicator">
        {/* Micro-tooltip showing image label on hover */}
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-zinc-900/90 text-white dark:bg-white/90 dark:text-zinc-900 text-[10px] px-2 py-0.5 rounded-md font-semibold tracking-wider uppercase opacity-0 group-hover/indicator:opacity-100 transition-all duration-200 pointer-events-none shadow-md">
          {currentIndex === 0 ? "Profile" : "Logo"}
        </div>

        {/* Main scrubber container */}
        <div
          onPointerDown={handleScrubberPointerDown}
          onPointerMove={handleScrubberPointerMove}
          onPointerUp={handleScrubberPointerUp}
          onPointerCancel={handleScrubberPointerCancel}
          className={`flex gap-2 items-center px-3 py-1.5 rounded-full backdrop-blur-md border shadow-lg transition-all duration-300 cursor-ew-resize select-none
            ${isScrubbing
              ? "bg-white/90 dark:bg-zinc-900/90 border-zinc-300 dark:border-zinc-700 scale-95 shadow-sm"
              : "bg-white/60 dark:bg-zinc-950/60 border-zinc-200/50 dark:border-zinc-800/50 hover:bg-white/80 hover:dark:bg-zinc-900/80 hover:scale-105"
            }
          `}
        >
          {images.map((_, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={index}
                data-dot-index={index}
                className={`rounded-full transition-all duration-300 ease-out pointer-events-auto
                  ${isActive
                    ? "bg-zinc-900 dark:bg-zinc-100 w-4 h-2"
                    : "bg-zinc-400/60 dark:bg-zinc-600/60 hover:bg-zinc-500 w-2 h-2"
                  }
                  ${isScrubbing && isActive ? "scale-y-90" : ""}
                `}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
