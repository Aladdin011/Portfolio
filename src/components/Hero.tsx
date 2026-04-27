"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollyVideo from "@/components/ScrollyVideo";
import Overlay from "@/components/Overlay";

/**
 * Hero — Scrollytelling video hero section.
 *
 * Architecture:
 *  - ScrollyVideo  → pins the video and exposes scroll progress (0→1)
 *  - Overlay       → renders three motion sections keyed to scroll position
 *
 * The container is intentionally 400vh tall so the pinned video
 * acts as a canvas for the scroll-driven narrative.
 */
export default function Hero() {
  return (
    <section aria-label="Hero" id="home" className="relative">
      <motion.a
        href="#home"
        whileHover={{ scale: 1.04, y: -1 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 380, damping: 24 }}
        className="group absolute left-4 top-4 z-40 flex items-center gap-3 rounded-full border border-white/15 bg-black/35 px-3 py-2 backdrop-blur-md md:left-6 md:top-6"
        aria-label="Portfolio home"
      >
        <motion.div
          whileHover={{ rotate: -3 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="relative h-9 w-9 overflow-hidden rounded-full ring-1 ring-white/25"
        >
          <Image
            src="/logo1.png"
            alt="Nurudeen Salihu logo"
            fill
            className="object-cover"
            sizes="36px"
            priority
          />
        </motion.div>
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-medium tracking-wide text-white/75 transition-all duration-300 group-hover:max-w-[170px] group-hover:text-white">
          Nurudeen Salihu
        </span>
      </motion.a>

      <ScrollyVideo src="/hero-video.mp4?v=2">
        {(progress) => <Overlay scrollYProgress={progress} />}
      </ScrollyVideo>
    </section>
  );
}
