"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Play, X } from "lucide-react";
import { THUMB_DOUGLAS, VIDEO_DOUGLAS } from "@/lib/imagens";

export function HeroVideoPlayer({ className = "" }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isExpanded) return;

    document.body.style.overflow = "hidden";
    const video = videoRef.current;
    if (video) void video.play();

    return () => {
      document.body.style.overflow = "";
    };
  }, [isExpanded]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsExpanded(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleClose = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    setIsExpanded(false);
  };

  const overlay =
    mounted && isExpanded
      ? createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Reprodução do vídeo em tela cheia"
            onClick={handleClose}
          >
            <button
              type="button"
              onClick={handleClose}
              className="absolute right-4 top-4 inline-flex items-center gap-2 border border-primary/60 px-4 py-2 text-[10px] font-medium tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:right-6 sm:top-6 sm:px-5 sm:py-2.5 sm:text-[11px]"
            >
              <X className="h-4 w-4" aria-hidden />
              VOLTAR
            </button>

            <video
              ref={videoRef}
              src={VIDEO_DOUGLAS}
              controls
              playsInline
              className="max-h-[85vh] w-full max-w-5xl object-contain"
              onClick={(event) => event.stopPropagation()}
              onEnded={handleClose}
            />
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <div className={`relative ${className}`}>
        <div className="absolute -inset-2 border border-primary/25 sm:-inset-3" />
        <div className="relative overflow-hidden bg-background/40">
          <img
            src={THUMB_DOUGLAS}
            alt="Douglas Couto — assistir ao vídeo"
            className="aspect-[4/5] w-full object-contain"
            width={1020}
            height={1024}
            fetchPriority="high"
            decoding="async"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          <button
            type="button"
            onClick={() => setIsExpanded(true)}
            className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-background/20 transition-colors hover:bg-background/30"
            aria-label="Assistir ao vídeo de Douglas Couto em tela cheia"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-background/40 backdrop-blur-sm sm:h-20 sm:w-20">
              <Play className="ml-1 h-7 w-7 fill-primary text-primary sm:h-8 sm:w-8" />
            </span>
            <span className="text-[10px] tracking-[0.24em] text-foreground/90 sm:text-[11px]">
              ASSISTIR AO VÍDEO
            </span>
          </button>
        </div>
      </div>

      {overlay}
    </>
  );
}
