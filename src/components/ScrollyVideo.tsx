"use client";

import { useScroll, useMotionValueEvent, MotionValue } from "framer-motion";
import { useEffect, useRef, ReactNode, useCallback } from "react";

interface ScrollyVideoProps {
  src: string;
  children?: (progress: MotionValue<number>) => ReactNode;
}

export default function ScrollyVideo({ src, children }: ScrollyVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const targetTimeRef = useRef(0);
  const hasMetadataRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const lastRafTimeRef = useRef<number | null>(null);
  const isSeekingRef = useRef(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const video = videoRef.current;
    if (!video || !hasMetadataRef.current || !video.duration) return;
    const clamped = Math.min(1, Math.max(0, latest));
    targetTimeRef.current = clamped * video.duration;
  });

  const tick = useCallback(() => {
    const video = videoRef.current;
    if (video && hasMetadataRef.current && video.duration && video.readyState > 0) {
      const target = targetTimeRef.current;
      const current = video.currentTime;
      const now = performance.now();
      const last = lastRafTimeRef.current ?? now;
      lastRafTimeRef.current = now;

      const dt = Math.min(64, Math.max(0, now - last));
      const ease = 1 - Math.pow(0.15, dt / 16.67);
      const delta = target - current;
      const absDelta = Math.abs(delta);

      if (!video.seeking && !isSeekingRef.current && absDelta > 0.0005) {
        const nextTime = absDelta > 0.35 ? target : current + delta * ease;
        try {
          if (typeof (video as any).fastSeek === "function") {
            (video as any).fastSeek(nextTime);
          } else {
            video.currentTime = nextTime;
          }
        } catch (_) {}
      }
    }
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onLoadedMetadata = () => {
      hasMetadataRef.current = true;
      if (Number.isFinite(video.duration) && video.duration > 0) {
        targetTimeRef.current = 0;
      }
    };

    const onSeeking = () => { isSeekingRef.current = true; };
    const onSeeked = () => { isSeekingRef.current = false; };

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("seeking", onSeeking);
    video.addEventListener("seeked", onSeeked);
    video.load();

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("seeking", onSeeking);
      video.removeEventListener("seeked", onSeeked);
    };
  }, [tick]);

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          src={src}
          className="h-full w-full object-cover"
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        {children && children(scrollYProgress)}
      </div>
    </div>
  );
}
