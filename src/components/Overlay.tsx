"use client";

import { useTransform, motion, MotionValue } from "framer-motion";
import { useRef } from "react";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

/* ── Animated word reveal ── */
function WordReveal({
  text,
  opacity,
  delay = 0,
}: {
  text: string;
  opacity: MotionValue<number>;
  delay?: number;
}) {
  const words = text.split(" ");
  return (
    <span className="inline-flex flex-wrap gap-x-[0.25em]">
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ opacity }}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
            delay: delay + i * 0.06,
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

/* ── Noise grain overlay for cinematic texture ── */
function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-20 opacity-[0.035]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundSize: "200px 200px",
      }}
    />
  );
}

/* ── Animated scroll cue ── */
function ScrollCue({ opacity }: { opacity: MotionValue<number> }) {
  return (
    <motion.div
      style={{ opacity }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-light">
        Scroll
      </span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
      />
    </motion.div>
  );
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  /* ── Section visibility windows ── */
  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.18, 0.26], [1, 1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.22, 0.32, 0.44, 0.52], [0, 1, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.48, 0.58, 0.72, 0.82], [0, 1, 1, 0]);

  /* ── Parallax Y ── */
  const y1 = useTransform(scrollYProgress, [0, 0.26], ["0%", "-8%"]);
  const y2 = useTransform(scrollYProgress, [0.22, 0.52], ["6%", "-6%"]);
  const y3 = useTransform(scrollYProgress, [0.48, 0.82], ["6%", "-6%"]);

  /* ── Horizontal drift for sections 2 & 3 ── */
  const x2 = useTransform(scrollYProgress, [0.22, 0.36], ["-3%", "0%"]);
  const x3 = useTransform(scrollYProgress, [0.48, 0.62], ["3%", "0%"]);

  /* ── Video vignette ── */
  const vignette = useTransform(scrollYProgress, [0, 0.5, 1], [0.55, 0.65, 0.7]);

  /* ── Scroll cue fades away early ── */
  const scrollCueOpacity = useTransform(scrollYProgress, [0, 0.06], [1, 0]);

  return (
    <>
      <GrainOverlay />

      {/* Dynamic vignette */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 20%, rgba(0,0,0,0.85) 100%)",
          opacity: vignette as any,
        }}
      />

      {/* ── SECTION 1 – Identity ── */}
      <motion.section
        aria-label="Introduction"
        style={{ opacity: opacity1, y: y1 }}
        className="pointer-events-none absolute inset-0 z-30 flex flex-col items-center justify-center px-6 text-center"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="mb-6 md:mb-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] text-white/60 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for work
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="font-display text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.92] tracking-[-0.03em] text-white"
          style={{ fontFamily: "'Cal Sans', 'Sora', 'DM Sans', sans-serif" }}
        >
          Nurudeen
          <br />
          <span className="text-white/30">Salihu.</span>
        </motion.h1>

        {/* Role pill row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
          className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-2"
        >
          {["Full Stack Developer", "AI & Automation", "Microservices"].map(
            (tag, i) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-light tracking-wide text-white/60 backdrop-blur-sm"
              >
                {tag}
              </span>
            )
          )}
        </motion.div>
      </motion.section>

      {/* ── SECTION 2 – Expertise ── */}
      <motion.section
        aria-label="Expertise"
        style={{ opacity: opacity2, y: y2, x: x2 }}
        className="pointer-events-none absolute inset-0 z-30 flex items-center justify-start px-8 md:px-20 lg:px-32"
      >
        <div className="max-w-xl lg:max-w-2xl">
          {/* Section label */}
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-10 bg-blue-400/60" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-blue-400/80">
              What I build
            </span>
          </div>

          <h2
            className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[1.0] tracking-[-0.025em] text-white"
            style={{ fontFamily: "'Cal Sans', 'Sora', 'DM Sans', sans-serif" }}
          >
            Scalable
            <br />
            <span
              className="relative inline-block"
              style={{
                background:
                  "linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              microservices
            </span>
            <br />
            <span className="text-white/40">&amp; web apps.</span>
          </h2>

          <p className="mt-5 max-w-sm text-sm font-light leading-relaxed text-white/45">
            Architecting distributed systems that handle real load — from API
            design to deployment pipelines.
          </p>
        </div>
      </motion.section>

      {/* ── SECTION 3 – Stack ── */}
      <motion.section
        aria-label="Tech stack"
        style={{ opacity: opacity3, y: y3, x: x3 }}
        className="pointer-events-none absolute inset-0 z-30 flex items-center justify-end px-8 md:px-20 lg:px-32 text-right"
      >
        <div className="max-w-xl lg:max-w-2xl">
          {/* Section label */}
          <div className="mb-4 flex items-center justify-end gap-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-purple-400/80">
              How I build it
            </span>
            <div className="h-px w-10 bg-purple-400/60" />
          </div>

          <h2
            className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[1.0] tracking-[-0.025em] text-white"
            style={{ fontFamily: "'Cal Sans', 'Sora', 'DM Sans', sans-serif" }}
          >
            Next.js,
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, #c084fc 0%, #f472b6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Node.js
            </span>
            <br />
            <span className="text-white/40">&amp; Cloud.</span>
          </h2>

          {/* Stack chips */}
          <div className="mt-6 flex flex-wrap justify-end gap-2">
            {["Next.js", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-light tracking-wide text-white/55 backdrop-blur-sm"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </motion.section>

      {/* ── Scroll cue ── */}
      <ScrollCue opacity={scrollCueOpacity} />
    </>
  );
}
