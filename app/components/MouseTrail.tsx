"use client";

import React, { useEffect, useRef } from "react";

export default function MouseTrail() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Handle high-DPI/Retina screens for sharp rendering
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Track cursor coordinate state
    const mouse = { x: 0, y: 0, active: false };
    
    // Spring physics configuration
    const spring = 0.55;
    const friction = 0.65;
    const nodeCount = 20; // Number of trail segments
    
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
    }));

    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (!mouse.active) {
        mouse.active = true;
        // Warm up coordinates to avoid lines snapping from (0,0)
        nodes.forEach((node) => {
          node.x = e.clientX;
          node.y = e.clientY;
        });
      }
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", () => {
      mouse.active = true;
    });

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      if (mouse.active) {
        nodes[0].x = mouse.x;
        nodes[0].y = mouse.y;
      }

      // Physics integration (spring chain)
      for (let i = 1; i < nodeCount; i++) {
        const node = nodes[i];
        const target = nodes[i - 1];

        node.vx += (target.x - node.x) * spring;
        node.vy += (target.y - node.y) * spring;
        node.vx *= friction;
        node.vy *= friction;

        node.x += node.vx;
        node.y += node.vy;
      }

      // Render line segments with taper and blur
      for (let i = 0; i < nodeCount - 1; i++) {
        const p1 = nodes[i];
        const p2 = nodes[i + 1];

        if (p1.x === 0 && p1.y === 0) continue;

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);

        const opacity = (1 - i / nodeCount) * 0.45;
        const width = 8 * (1 - i / nodeCount); // Ribbon gets thinner at tail
        
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.lineWidth = width;

        ctx.shadowBlur = 8;
        
        const isDark = document.documentElement.classList.contains("dark") || 
                       (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches);

        if (isDark) {
          ctx.strokeStyle = `rgba(168, 85, 247, ${opacity})`; // Neon purple
          ctx.shadowColor = `rgba(192, 132, 252, ${opacity * 0.5})`;
        } else {
          ctx.strokeStyle = `rgba(147, 51, 234, ${opacity})`; // Darker purple
          ctx.shadowColor = `rgba(168, 85, 247, ${opacity * 0.3})`;
        }

        ctx.stroke();
      }

      ctx.shadowBlur = 0;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-40"
    />
  );
}
