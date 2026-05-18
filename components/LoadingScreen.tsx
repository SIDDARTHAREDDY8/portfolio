"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [fading, setFading] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    // Hold for 2s, then fade out over 700ms, then unmount.
    const t1 = setTimeout(() => setFading(true), 2000);
    const t2 = setTimeout(() => { setGone(true); onDone(); }, 2700);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onDone]);

  if (gone) return null;

  return (
    <div className={`ls${fading ? " ls--out" : ""}`} aria-hidden>
      <div className="ls__inner">
        <p className="ls__hi">Hi, I&nbsp;am</p>
        <h1 className="ls__name">
          <span className="ls__first">Siddhartha</span>
          <span className="ls__last">Reddy</span>
        </h1>
        <p className="ls__role">Full Stack Developer</p>
        <div className="ls__track">
          <div className="ls__fill" />
        </div>
      </div>
    </div>
  );
}
