import Image from "next/image";
import { Barlow, Montserrat } from "next/font/google";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";

const heroBackground =
  "https://cdn.shopify.com/s/files/1/0541/0101/6759/files/It_s_finally_here_3.jpg";

type CollectionCardData = {
  title: string;
  label: string;
  image: string;
  price: string;
  comparePrice: string;
};

type HeardSoundsCardData = {
  image: string;
};

const collectionCards: readonly CollectionCardData[] = [
  {
    title: "Drum Mastery",
    label: "Add to cart",
    image:
      "https://sonix.audio/cdn/shop/files/drum_mastery_main11.png?v=1755627959&width=551",
    price: "$135.00",
    comparePrice: "$1,687.00",
  },
  {
    title: "Melody Mastery Production Suite",
    label: "Add to cart",
    image:
      "https://sonix.audio/cdn/shop/files/gempages_490474390513779859-d7aea1eb-5c0a-4560-855d-1febe0aee8d9.png?v=1736859360&width=551",
    price: "$233.00",
    comparePrice: "$1,552.00",
  },
  {
    title: "KXVI - VINTAGE ESSENTIALS",
    label: "Add to cart",
    image:
      "https://sonix.audio/cdn/shop/files/VINTAGEESSENTIALS2.2_2.jpg?v=1726748749&width=551",
    price: "$233.00",
    comparePrice: "$1,948.00",
  },
  {
    title: "KXVI - MINISTASH VOL. 3 MULTI KIT",
    label: "Add to cart",
    image:
      "https://sonix.audio/cdn/shop/files/gempages_490474390513779859-4030c029-698a-46c6-a4c9-73e447238824.png?v=1742222147&width=551",
    price: "$10.00",
    comparePrice: "$167.00",
  },
  {
    title: "Elements of Trap",
    label: "Add to cart",
    image:
      "https://sonix.audio/cdn/shop/files/ELEMENTSOFTRAP_2_0b276486-9dff-42b2-ae64-aead52b85f43.jpg?v=1710254800&width=551",
    price: "$135.00",
    comparePrice: "$1,392.00",
  },
  {
    title: "ELEMENTS OF SOUL",
    label: "Add to cart",
    image:
      "https://sonix.audio/cdn/shop/files/ELEMENTSOFSOUL.jpg?v=1684421101&width=551",
    price: "$233.00",
    comparePrice: "$1,573.00",
  },
] as const;

const heardSoundsCards: readonly HeardSoundsCardData[] = [
  {
    image:
      "https://soundseam-origin.s3.us-east-2.amazonaws.com/misc/ab67616d0000b27335d777c5fa4a353b87ad62bd.jpeg",
  },
  {
    image:
      "https://soundseam-origin.s3.us-east-2.amazonaws.com/misc/images+(2).jpeg",
  },
  {
    image:
      "https://soundseam-origin.s3.us-east-2.amazonaws.com/misc/images+(1).jpeg",
  },
  {
    image:
      "https://soundseam-origin.s3.us-east-2.amazonaws.com/misc/ab67616d00001e0282ad88cae25c4b9a55ad6043.jpeg",
  },
  {
    image:
      "https://soundseam-origin.s3.us-east-2.amazonaws.com/misc/ab67616d00001e025f915783b9c3a213f46ffb13.jpeg",
  },
  {
    image:
      "https://soundseam-origin.s3.us-east-2.amazonaws.com/misc/ab67616d0000b273809cd04cc169df4011414458.jpeg",
  },
  {
    image:
      "https://soundseam-origin.s3.us-east-2.amazonaws.com/misc/ab67616d0000b2733b092e418c01fbc0e87a2a3f.jpeg",
  },
  {
    image:
      "https://soundseam-origin.s3.us-east-2.amazonaws.com/misc/662780153_18406738981182283_1217197005560372768_n.jpeg",
  },
  {
    image:
      "https://soundseam-origin.s3.us-east-2.amazonaws.com/misc/21-Savage-American-Dream.webp",
  },
  {
    image:
      "https://soundseam-origin.s3.us-east-2.amazonaws.com/misc/GloRilla_-_Glorious.png",
  },
] as const;

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "700",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

function CollectionCard({
  card,
  className = "",
}: {
  card: CollectionCardData;
  className?: string;
}) {
  return (
    <article className={`${className} ${barlow.className}`.trim()}>
      <div className="relative aspect-square overflow-hidden rounded-lg bg-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${card.image})`,
          }}
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-[#141414]">{card.title}</h3>
        <div className="mt-2 flex items-baseline gap-3">
          <p className="text-base font-medium text-[#141414]/68">{card.price}</p>
          <p className="text-base font-bold text-red-600 line-through">
            {card.comparePrice}
          </p>
        </div>
        <button
          type="button"
          className="mt-4 flex w-full cursor-pointer items-center justify-center rounded-none bg-green-600 px-10 py-4 text-lg font-bold text-white"
        >
          <span>{card.label}</span>
        </button>
      </div>
    </article>
  );
}

function HeardSoundsCard({
  card,
}: {
  card: HeardSoundsCardData;
}) {
  return (
    <article
      className={`relative aspect-square w-48 shrink-0 overflow-hidden rounded-lg bg-black sm:w-[13.5rem] ${barlow.className}`}
    >
      <Image
        src={card.image}
        alt=""
        fill
        sizes="(min-width: 640px) 216px, 192px"
        className="object-cover"
      />
    </article>
  );
}

function HeardSoundsCarouselRow({
  cards,
  reverse = false,
}: {
  cards: readonly HeardSoundsCardData[];
  reverse?: boolean;
}) {
  return (
    <div className="album-carousel-row">
      <div
        className={`album-carousel-track${reverse ? " album-carousel-track--reverse" : ""}`}
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="album-carousel-segment"
            aria-hidden={copy === 1}
          >
            {cards.map((card) => (
              <HeardSoundsCard
                key={`${copy}-${card.image}`}
                card={card}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const carouselRows = [
    heardSoundsCards.slice(0, 5),
    heardSoundsCards.slice(5, 10),
  ] as const;

  return (
    <main className="relative bg-black text-white">
      <SiteHeader />

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24 sm:px-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBackground})`,
            filter: "brightness(0.92)",
          }}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/30 to-transparent" />
        <div
          className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center"
          style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.35)" }}
        >
          <p
            className={`${montserrat.className} mb-0 text-7xl font-bold text-white/92 sm:text-8xl`}
          >
            TONEFLX IS OUT!
          </p>

          <h1 className="mt-3 text-xl font-normal text-white/82 sm:text-2xl">
            IT&apos;S FINALLY HERE. GET THE TONEFLX LAUNCH EDITION
          </h1>

          <button
            type="button"
            className="mt-10 cursor-pointer rounded-none bg-red-600 px-14 py-4 text-xl font-semibold uppercase text-white transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-red-700"
          >
            LIMITED OFFER - LEARN MORE
          </button>
        </div>
      </section>

      <section className="bg-[#f0f0f0] px-6 py-16 sm:px-10 sm:py-20">
        <div className="container mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold tracking-[-0.04em] text-[#141414] sm:text-5xl">
              Shop Bundles
            </h2>
            <button
              type="button"
              className="group mt-4 inline-flex items-center gap-2 rounded-none text-base font-bold text-[#141414]/55 transition-colors hover:text-[#141414]"
            >
              <span className="underline-offset-4 group-hover:underline">
                View all
              </span>
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="none"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              >
                <path
                  d="M4.16699 10H15.8337M15.8337 10L10.0003 4.16667M15.8337 10L10.0003 15.8333"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-3">
            {collectionCards.map((card) => (
              <CollectionCard key={card.image} card={card} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#141414] px-6 py-16 sm:px-10 sm:py-20">
        <div className="album-carousel-frame">
          <div className="flex flex-col gap-3">
            <HeardSoundsCarouselRow cards={carouselRows[0]} />
            <HeardSoundsCarouselRow cards={carouselRows[1]} reverse />
          </div>

          <div className="absolute inset-0 bg-[#141414]/58" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,20,20,0.08)_0%,rgba(20,20,20,0.62)_62%,rgba(20,20,20,0.82)_100%)]" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-14 sm:w-20 lg:w-28"
            style={{
              background:
                "linear-gradient(to right, #141414 0%, rgba(20, 20, 20, 0.94) 32%, rgba(20, 20, 20, 0.55) 68%, transparent 100%)",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-14 sm:w-20 lg:w-28"
            style={{
              background:
                "linear-gradient(to left, #141414 0%, rgba(20, 20, 20, 0.94) 32%, rgba(20, 20, 20, 0.55) 68%, transparent 100%)",
            }}
          />
        </div>

        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
          <div className="pointer-events-auto mx-auto flex w-full max-w-4xl flex-col items-center justify-center text-center">
          <h2 className="max-w-3xl text-5xl leading-[0.95] font-bold tracking-[-0.05em] text-white sm:text-6xl md:text-7xl">
            GRAMMY Nominated Sounds.
          </h2>

          <button
            type="button"
            className="mt-8 cursor-pointer rounded-none bg-red-600 px-10 py-3 text-sm font-semibold uppercase text-white transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-red-700 sm:px-12 sm:py-4 sm:text-base"
          >
            Explore Kits
          </button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
