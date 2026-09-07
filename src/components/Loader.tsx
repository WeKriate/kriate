"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Full-screen branded preloader shown on first load. Covers the page with the
 * ink brand colour + the Kriate monogram and an orange progress sweep, then
 * fades out once the window has loaded (with a short minimum so it's seen).
 * A <noscript> rule in the layout hides it when JS is unavailable.
 */
const MIN_MS = 1100;

export default function Loader() {
  const [fading, setFading] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const finish = () => {
      const wait = Math.max(0, MIN_MS - (performance.now() - start));
      window.setTimeout(() => setFading(true), wait);
    };
    if (document.readyState === "complete") finish();
    else {
      window.addEventListener("load", finish, { once: true });
      return () => window.removeEventListener("load", finish);
    }
  }, []);

  // lock scroll while the loader is up
  useEffect(() => {
    if (gone) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [gone]);

  // remove from the tree after the fade completes
  useEffect(() => {
    if (!fading) return;
    const t = window.setTimeout(() => setGone(true), 650);
    return () => window.clearTimeout(t);
  }, [fading]);

  if (gone) return null;

  return (
    <div
      id="kriate-loader"
      aria-hidden
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink transition-opacity duration-[600ms] ease-out ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* soft orange glow */}
      <div className="pointer-events-none absolute h-72 w-72 rounded-full bg-orange/20 blur-[100px]" />

      <div className="loader-pulse relative">
        <Image
          src="/kriate-monogram-white.png"
          alt="Kriate"
          width={1046}
          height={1110}
          priority
          className="h-20 w-auto sm:h-24"
        />
      </div>

      {/* progress sweep */}
      <div className="relative mt-9 h-[3px] w-40 overflow-hidden rounded-full bg-cream/15">
        <div className="loader-bar h-full w-full rounded-full bg-orange" />
      </div>

      <p className="relative mt-5 text-[11px] font-bold uppercase tracking-[0.35em] text-cream/50">
        Kriate
      </p>
    </div>
  );
}
