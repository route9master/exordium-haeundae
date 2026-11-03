"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export type LightboxItem = { src: string; alt: string; caption: string; w: number; h: number };

export default function Lightbox({
  items,
  index,
  onClose,
  onIndex,
}: {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const open = index !== null;

  useEffect(() => {
    if (!open) return;
    const prevFocus = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      prevFocus?.focus();
    };
  }, [open]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (items.length > 1 && e.key === "ArrowRight") onIndex((index + 1) % items.length);
      if (items.length > 1 && e.key === "ArrowLeft") onIndex((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, items.length, onClose, onIndex]);

  if (index === null || typeof document === "undefined") return null;
  const item = items[index];
  const multi = items.length > 1;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.caption}
      className="fixed inset-0 z-[60] flex flex-col bg-night/95 text-pearl"
      onClick={onClose}
    >
      <div className="flex h-14 shrink-0 items-center justify-between px-4 md:px-8" onClick={(e) => e.stopPropagation()}>
        <p className="text-[14px] text-pearl/80">
          {item.caption}
          {multi && (
            <span className="num ml-3 text-pearl/45">
              {index + 1} / {items.length}
            </span>
          )}
        </p>
        <button ref={closeRef} type="button" onClick={onClose} className="h-10 px-3 text-[14px] font-medium text-pearl/90 hover:text-pearl">
          닫기
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-6 md:px-20 md:pb-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.src}
          alt={item.alt}
          width={item.w}
          height={item.h}
          className="max-h-full max-w-full object-contain"
          onClick={(e) => e.stopPropagation()}
        />
        {multi && (
          <>
            <button
              type="button"
              aria-label="이전 이미지"
              onClick={(e) => {
                e.stopPropagation();
                onIndex((index - 1 + items.length) % items.length);
              }}
              className="absolute left-0 top-1/2 h-16 w-12 -translate-y-1/2 text-[28px] text-pearl/70 hover:text-pearl md:left-4"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="다음 이미지"
              onClick={(e) => {
                e.stopPropagation();
                onIndex((index + 1) % items.length);
              }}
              className="absolute right-0 top-1/2 h-16 w-12 -translate-y-1/2 text-[28px] text-pearl/70 hover:text-pearl md:right-4"
            >
              ›
            </button>
          </>
        )}
      </div>
    </div>,
    document.body,
  );
}
