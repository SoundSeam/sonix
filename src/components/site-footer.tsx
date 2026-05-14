import { Barlow } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import PaymentIcons from "./payment-icons";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const footerSections = [
  {
    heading: "Sonix",
    links: [
      { href: "/", label: "Search" },
      { href: "/policies/privacy-policy", label: "Privacy Policy" },
      { href: "/policies/refund-policy", label: "Refund Policy" },
      { href: "/policies/terms-of-service", label: "Usage Terms" },
    ],
  },
];

const aboutCopy =
  "SoniX was founded in February 2021 by KXVI to help supply his award winning sounds to the producer community. Since then we have sold over 10,000 products and received 2 GRAMMY nominations for our loops.";

export default function SiteFooter() {
  return (
    <footer
      className={`bg-white px-6 pt-16 pb-8 sm:px-10 sm:pt-20 sm:pb-8 ${barlow.className}`}
    >
      <div className="container mx-auto">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-20">
          <div className="flex flex-col items-start gap-8">
            <Link href="/" className="inline-flex items-center">
              <span className="relative block aspect-[3.25/1] w-[7.125rem] max-w-full sm:w-[8.0625rem]">
                <Image
                  src="https://sonix.audio/cdn/shop/files/finalsonix.png?v=1678294883&width=240"
                  alt="Sonix"
                  fill
                  sizes="(min-width: 640px) 256px, 224px"
                  className="object-cover invert"
                />
              </span>
            </Link>

            <div className="w-full max-w-md">
              <h3 className="text-3xl font-bold text-neutral-900">
                Sign up for new stories and personal offers
              </h3>
              <form className="mt-4 w-full">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email address"
                    aria-label="Email address"
                    className="h-12 w-full rounded-lg border border-neutral-300 bg-white pl-5 pr-14 text-sm text-neutral-900 outline-none transition-colors duration-200 placeholder:text-neutral-500 focus:border-neutral-900"
                  />
                  <button
                    type="submit"
                    aria-label="Submit email signup"
                    className="absolute top-1/2 right-2 inline-flex size-8 -translate-y-1/2 items-center justify-center rounded-md text-neutral-900 transition-colors duration-200 hover:bg-neutral-100"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="h-4 w-4"
                    >
                      <path
                        d="M4.167 10h11.666m0 0-4.166-4.167M15.833 10l-4.166 4.167"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {footerSections.map((section) => (
              <div key={section.heading}>
                <h3 className="text-xs font-bold uppercase text-black sm:text-sm">
                  {section.heading}
                </h3>
                <ul className="mt-6 space-y-4">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm font-medium text-neutral-700 transition-colors duration-200 hover:text-neutral-950"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="sm:col-span-2 lg:col-span-2">
              <h3 className="text-xs font-bold uppercase text-black sm:text-sm">
                About
              </h3>
              <p className="mt-6 max-w-xl text-sm font-medium text-neutral-700">
                {aboutCopy}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-xs font-semibold uppercase text-neutral-500 sm:text-sm">
            © 2026, Sonix. Powered by Shopify
          </h3>

          <PaymentIcons className="sm:justify-end" />
        </div>
      </div>
    </footer>
  );
}
