"use client";

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
      <ScrollyVideo src="/hero-video.mp4?v=2">
        {(progress) => <Overlay scrollYProgress={progress} />}
      </ScrollyVideo>
    </section>
  );
}
