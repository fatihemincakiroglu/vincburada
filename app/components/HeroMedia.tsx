"use client";

import { useState } from "react";

const SLIDES = [
  "/gallery/su-kulesi-gece-vinc.jpg",
  "/gallery/gokdelen-yuksek-platform.jpg",
  "/gallery/istanbul-skyline-vinc.jpg",
  "/gallery/cephe-montaj-yuksek.jpg",
];

/**
 * Hero background media.
 * Renders /videos/hero.mp4 if it exists. If the file is missing (404) or fails
 * to decode, it falls back to a slow-panning crossfade of saha fotoğrafları,
 * so the header always has motion even before a real clip is added.
 */
export default function HeroMedia() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <div className="hx-media">
      {!videoFailed && (
        <video
          className="hx-media-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/gallery/su-kulesi-gece-vinc.jpg"
          onError={() => setVideoFailed(true)}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      )}

      {videoFailed && (
        <div className="hx-media-slides">
          {SLIDES.map((src, i) => (
            <div
              key={src}
              className="hx-slide"
              style={{
                backgroundImage: `url(${src})`,
                animationDelay: `${i * 7}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
