"use client";

import { Barlow } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

function UsFlagBadge() {
  return (
    <span className="flex size-6 items-center justify-center overflow-hidden rounded-full shadow-[0_6px_16px_rgba(0,0,0,0.2)]">
      <span className="relative block h-full w-full">
        <Image
          src="/united-states-flag-icon.svg"
          alt="United States flag"
          fill
          sizes="24px"
          className="object-cover"
        />
      </span>
    </span>
  );
}

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navLinks = [
    "Home",
    "Mentorship",
    "FREE Kits",
    "Bundles",
    "Clothing",
    "FAQs",
  ] as const;
  const allKitsSubmenu = ["Categories", "Genres"] as const;

  useEffect(() => {
    const syncScrolled = () => {
      setIsScrolled(window.scrollY > 16);
    };

    syncScrolled();
    window.addEventListener("scroll", syncScrolled, { passive: true });

    return () => {
      window.removeEventListener("scroll", syncScrolled);
    };
  }, []);

  const blockClassName = isScrolled
    ? "bg-black/30 backdrop-blur-2xl"
    : "bg-transparent backdrop-blur-none";
  const iconButtonClassName =
    "inline-flex size-10 items-center justify-center rounded-lg text-white transition-colors duration-200 hover:bg-white/8";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-20 font-semibold transition-[background-color,backdrop-filter] duration-300 ${blockClassName} ${barlow.className}`}
    >
      <div className="relative flex h-full items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center">
            <span className="relative block h-16 w-56 sm:w-64">
              <Image
                src="https://sonix.audio/cdn/shop/files/finalsonix.png?v=1678294883&width=240"
                alt="Sonix"
                fill
                sizes="(min-width: 640px) 256px, 224px"
                className="object-contain object-left"
                priority
              />
            </span>
          </Link>
        </div>

        <nav className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-1">
          <div className="group relative">
            <Link
              href="/"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2 text-sm text-white transition-colors duration-200 hover:bg-white/8"
            >
              <span>All Kits</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="none"
                className="h-4 w-4"
              >
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <div className="pointer-events-none absolute top-full left-1/2 z-10 w-44 -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="rounded-xl bg-black/90 p-2 shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
                {allKitsSubmenu.map((label) => (
                  <Link
                    key={label}
                    href="/"
                    className="flex rounded-lg px-3 py-2 text-sm text-white transition-colors duration-200 hover:bg-white/8"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navLinks.map((label) => (
            <Link
              key={label}
              href="/"
              className="inline-flex whitespace-nowrap rounded-lg px-3 py-2 text-sm text-white transition-colors duration-200 hover:bg-white/8"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label="Currency selector"
            className="inline-flex h-10 items-center gap-3 rounded-lg px-3 text-white transition-colors duration-200 hover:bg-white/8"
          >
            <UsFlagBadge />
            <span className="text-sm tracking-[0.01em]">
              USD $
            </span>
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="none"
              className="h-4 w-4"
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Search"
            className={iconButtonClassName}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5"
            >
              <path
                d="M21 21L16.65 16.65M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            aria-label="User account"
            className={iconButtonClassName}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5"
            >
              <path
                d="M20 21C20 17.6863 16.4183 15 12 15C7.58172 15 4 17.6863 4 21M12 12C9.79086 12 8 10.2091 8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8C16 10.2091 14.2091 12 12 12Z"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Cart"
            className={iconButtonClassName}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5"
            >
              <path
                d="M3 4H5L7.4 14.5C7.58803 15.3409 8.32756 15.9404 9.18917 15.95H17.85C18.665 15.95 19.3785 15.4127 19.601 14.6285L21 9H6.2M10 20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19C9.55228 19 10 19.4477 10 20ZM19 20C19 20.5523 18.5523 21 18 21C17.4477 21 17 20.5523 17 20C17 19.4477 17.4477 19 18 19C18.5523 19 19 19.4477 19 20Z"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
