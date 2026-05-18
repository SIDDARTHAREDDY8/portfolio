"use client";

import { useEffect, useState } from "react";

type Props = {
  media?: string[];
  projectNum: string;
  altPrefix?: string;
  // Optional live URL shown in the browser mockup address bar.
  url?: string;
};

// Lightweight carousel with browser-chrome mockup wrapping each real
// screenshot. Prev/next arrows, dot indicators, auto-advance with pause
// on hover. Falls back to gradient placeholder slides when no media.
export default function Carousel({
  media,
  projectNum,
  altPrefix = "Screenshot",
  url,
}: Props) {
  const slides =
    media && media.length > 0 ? media : [null, null, null];
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || slides.length <= 1) return;
    const id = window.setInterval(() => {
      setIdx((i) => (i + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [paused, slides.length]);

  const go = (delta: number) =>
    setIdx((i) => (i + delta + slides.length) % slides.length);

  // Trim protocol for the address bar display
  const displayUrl = url
    ? url.replace(/^https?:\/\//, "")
    : "localhost:3000";

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="carousel__track"
        style={{ transform: `translateX(-${idx * 100}%)` }}
      >
        {slides.map((src, i) => (
          <div key={i} className="carousel__slide">
            {src ? (
              // Real screenshot wrapped in a browser chrome frame
              <div className="browser-mockup">
                <div className="browser-mockup__chrome">
                  <div className="browser-mockup__dots">
                    <span className="bmd bmd--red" />
                    <span className="bmd bmd--yellow" />
                    <span className="bmd bmd--green" />
                  </div>
                  <div className="browser-mockup__url">
                    {/* Lock icon */}
                    <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
                      <rect x="3" y="11" width="18" height="11" rx="2" />
                      <path d="M7 11V7a5 5 0 0110 0v4" />
                    </svg>
                    <span>{displayUrl}</span>
                  </div>
                  <div className="browser-mockup__actions">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                      <circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" />
                    </svg>
                  </div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`${altPrefix} ${i + 1}`}
                  className="browser-mockup__img"
                  loading="lazy"
                />
              </div>
            ) : (
              // Placeholder gradient slide
              <div
                className="carousel__placeholder"
                style={{
                  background: `radial-gradient(circle at ${30 + i * 20}% ${
                    35 + i * 15
                  }%, var(--ice-500), transparent 55%),
                     radial-gradient(circle at ${75 - i * 10}% ${
                    65 - i * 10
                  }%, var(--ice-700), transparent 55%),
                     linear-gradient(135deg, var(--ink-2), var(--ink-0))`,
                }}
              >
                <span className="project-modal__media-num">{projectNum}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            className="carousel__nav carousel__nav--prev"
            onClick={() => go(-1)}
            data-cursor="hover"
            aria-label="Prev"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
          <button
            type="button"
            className="carousel__nav carousel__nav--next"
            onClick={() => go(1)}
            data-cursor="hover"
            aria-label="Next"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
          <div className="carousel__dots">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIdx(i)}
                data-cursor="hover"
                aria-label={`Slide ${i + 1}`}
                aria-current={i === idx ? "true" : undefined}
                className={`carousel__dot ${
                  i === idx ? "carousel__dot--active" : ""
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
