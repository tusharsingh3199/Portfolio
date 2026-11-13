"use client";

import type { PointerEvent } from "react";

type TechBadgeProps = {
  name: string;
  mark: string;
  icon?: string;
};

export default function TechBadge({ name, mark, icon }: TechBadgeProps) {
  const logo = icon?.startsWith("http") ? icon : icon ? `https://cdn.simpleicons.org/${icon}` : undefined;

  const tilt = (event: PointerEvent<HTMLSpanElement>) => {
    if (event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    event.currentTarget.style.setProperty("--tilt-x", `${-y * 9}deg`);
    event.currentTarget.style.setProperty("--tilt-y", `${x * 9}deg`);
  };

  const resetTilt = (event: PointerEvent<HTMLSpanElement>) => {
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <span
      className="tech-badge"
      onPointerMove={tilt}
      onPointerLeave={resetTilt}
    >
      <span className="tech-logo" aria-hidden="true">
        {logo && (
          <img
            src={logo}
            alt=""
            loading="lazy"
            decoding="async"
            onError={(event) => {
              event.currentTarget.hidden = true;
            }}
          />
        )}
        <span className="tech-logo-mark">{mark}</span>
      </span>
      <span>{name}</span>
    </span>
  );
}
