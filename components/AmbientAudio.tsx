"use client";

import { useEffect, useRef, useState } from "react";

// Ambient audio — plays /public/sounds/ambient.wav (forest birds) looped at
// low volume. Uses Web Audio API so we get a proper gain node for smooth
// fade-in / fade-out without clicks. The AudioContext is created on the first
// user gesture (toggle click) to satisfy browser autoplay policy.
export default function AmbientAudio() {
  const [on, setOn] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const sourceRef = useRef<AudioBufferSourceNode | null>(null);
  const bufferRef = useRef<AudioBuffer | null>(null);
  const loadedRef = useRef(false);

  // Decode the audio file once, on first toggle.
  const init = async () => {
    if (loadedRef.current) return;
    loadedRef.current = true;

    const ctx = new AudioContext();
    ctxRef.current = ctx;

    const gain = ctx.createGain();
    gain.gain.value = 0;
    gain.connect(ctx.destination);
    gainRef.current = gain;

    try {
      const res = await fetch("/sounds/ambient.wav");
      const arrayBuf = await res.arrayBuffer();
      bufferRef.current = await ctx.decodeAudioData(arrayBuf);
    } catch (e) {
      console.warn("AmbientAudio: could not load sound file", e);
    }
  };

  // Whenever `on` changes, ramp the gain smoothly.
  useEffect(() => {
    const ctx = ctxRef.current;
    const gain = gainRef.current;
    if (!ctx || !gain) return;

    if (on) {
      // Start a new looping source if needed.
      if (!sourceRef.current && bufferRef.current) {
        const src = ctx.createBufferSource();
        src.buffer = bufferRef.current;
        src.loop = true;
        src.connect(gain);
        src.start();
        sourceRef.current = src;
      }
      gain.gain.cancelScheduledValues(ctx.currentTime);
      gain.gain.setTargetAtTime(0.35, ctx.currentTime, 0.4); // gentle fade-in
    } else {
      gain.gain.cancelScheduledValues(ctx.currentTime);
      gain.gain.setTargetAtTime(0, ctx.currentTime, 1.0); // slow fade-out
    }
  }, [on]);

  const toggle = async () => {
    await init();
    await ctxRef.current?.resume();
    setOn((v) => !v);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      data-cursor="hover"
      aria-label={on ? "Mute ambient audio" : "Enable ambient audio"}
      title={on ? "Mute ambient audio" : "Enable ambient audio"}
      className={`frost-icon ambient-btn${on ? " ambient-btn--on" : ""}`}
    >
      {on ? (
        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
          <path d="M11 5L6 9H2v6h4l5 4V5z" />
          <path d="M19.07 4.93a10 10 0 010 14.14" />
          <path d="M15.54 8.46a5 5 0 010 7.07" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
          <path d="M11 5L6 9H2v6h4l5 4V5z" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
      )}
    </button>
  );
}
