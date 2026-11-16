"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    eyebrow: "YOUR NEXT CHAPTER STARTS HERE",
    title: "Discover Stories That Stay With You.",
    description:
      "Explore a thoughtfully curated collection of books, discover new authors, and find your next favorite read.",
    buttonText: "Explore Books",
    buttonLink: "/books",
    number: "01",
    coverTitle: "The Art of Reading",
  },
  {
    id: 2,
    eyebrow: "A WORLD OF KNOWLEDGE",
    title: "Read More. Learn More. Grow More.",
    description:
      "From timeless classics to modern discoveries, find books that inspire curiosity and lifelong learning.",
    buttonText: "Browse Collection",
    buttonLink: "/books",
    number: "02",
    coverTitle: "Knowledge Is Power",
  },
  {
    id: 3,
    eyebrow: "BUILT FOR EVERY READER",
    title: "Your Personal Library, Everywhere.",
    description:
      "Build your reading collection, save your favorites, and enjoy a better way to organize your reading journey.",
    buttonText: "Get Started",
    buttonLink: "/register",
    number: "03",
    coverTitle: "Your Reading Journey",
  },
];

export default function HeroSlider() {
  const [isMounted, setIsMounted] = useState(false);

  // Initialize Swiper only after the component mounts in the browser.
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Render a stable hero section during server prerendering.
  if (!isMounted) {
    const slide = slides[0];

    return (
      <section className="overflow-hidden bg-[#FAF8F3]">
        <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 lg:px-10">
          <div className="max-w-xl">
            <div className="mb-6 flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-[#C69A56]">
              <span className="h-px w-8 bg-[#C69A56]" />
              {slide.eyebrow}
            </div>

            <h1 className="font-heading text-4xl leading-[1.15] font-bold tracking-tight text-[#20291F] sm:text-5xl md:text-6xl">
              {slide.title}
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-[#77796F] md:text-lg">
              {slide.description}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link
                href={slide.buttonLink}
                className="inline-flex items-center gap-3 rounded-md bg-[#254C3B] px-6 py-4 text-sm font-semibold text-white"
              >
                {slide.buttonText}
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/about"
                className="text-sm font-semibold text-[#254C3B]"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="relative flex min-h-[380px] items-center justify-center">
            <div className="absolute h-72 w-72 rounded-full bg-[#E9EEE8] sm:h-80 sm:w-80 md:h-96 md:w-96" />

            <div className="relative flex h-[340px] w-[245px] -rotate-6 flex-col justify-between rounded-r-xl border-l-[9px] border-[#193A2C] bg-[#254C3B] p-7 text-white shadow-2xl sm:h-[380px] sm:w-[270px]">
              <div>
                <BookOpen size={32} className="text-[#D8B77C]" />

                <h2 className="mt-12 font-heading text-3xl leading-tight font-bold sm:text-4xl">
                  {slide.coverTitle}
                </h2>

                <p className="mt-5 text-xs tracking-[0.25em] text-[#D8B77C]">
                  BOOKNOOK EDITION
                </p>
              </div>

              <span className="text-xs tracking-widest text-white/70">
                DISCOVER · READ · GROW
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-[#FAF8F3]">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        speed={900}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          bulletClass:
            "swiper-pagination-bullet !h-[9px] !w-[9px] !bg-[#254C3B] !opacity-30 !transition-all",
          bulletActiveClass:
            "swiper-pagination-bullet-active !w-[26px] !rounded-full !opacity-100",
        }}
        className="
          booknook-hero-swiper
          [&_.swiper-pagination]:!bottom-7
          [&_.swiper-pagination-bullet]:!mx-1
        "
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 lg:px-10">
              {/* Hero Content */}
              <div className="max-w-xl">
                <div className="mb-6 flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-[#C69A56]">
                  <span className="h-px w-8 bg-[#C69A56]" />
                  {slide.eyebrow}
                </div>

                <h1 className="font-heading text-4xl leading-[1.15] font-bold tracking-tight text-[#20291F] sm:text-5xl md:text-6xl">
                  {slide.title}
                </h1>

                <p className="mt-7 max-w-lg text-base leading-8 text-[#77796F] md:text-lg">
                  {slide.description}
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-5">
                  <Link
                    href={slide.buttonLink}
                    className="inline-flex items-center gap-3 rounded-md bg-[#254C3B] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#193A2C] hover:shadow-lg"
                  >
                    {slide.buttonText}
                    <ArrowRight size={18} />
                  </Link>

                  <Link
                    href="/about"
                    className="text-sm font-semibold text-[#254C3B] transition-colors hover:text-[#C69A56]"
                  >
                    Learn More
                  </Link>
                </div>

                <div className="mt-12 flex items-center gap-4">
                  <span className="font-heading text-2xl font-bold text-[#254C3B]">
                    {slide.number}
                  </span>

                  <span className="h-px w-16 bg-[#E9E5DB]" />

                  <span className="text-xs tracking-widest text-[#77796F]">
                    BOOKNOOK COLLECTION
                  </span>
                </div>
              </div>

              {/* Book Illustration */}
              <div className="relative flex min-h-[380px] items-center justify-center">
                <div className="absolute h-72 w-72 rounded-full bg-[#E9EEE8] sm:h-80 sm:w-80 md:h-96 md:w-96" />

                <div className="absolute h-80 w-80 rounded-full border border-[#C69A56]/30 md:h-[430px] md:w-[430px]" />

                <div className="relative flex h-[340px] w-[245px] -rotate-6 flex-col justify-between rounded-r-xl border-l-[9px] border-[#193A2C] bg-[#254C3B] p-7 text-white shadow-2xl transition-transform duration-700 hover:rotate-0 sm:h-[380px] sm:w-[270px]">
                  <div>
                    <BookOpen size={32} className="text-[#D8B77C]" />

                    <h2 className="mt-12 font-heading text-3xl leading-tight font-bold sm:text-4xl">
                      {slide.coverTitle}
                    </h2>

                    <p className="mt-5 text-xs tracking-[0.25em] text-[#D8B77C]">
                      BOOKNOOK EDITION
                    </p>
                  </div>

                  <div className="flex items-end justify-between">
                    <span className="text-[10px] tracking-widest text-white/70">
                      DISCOVER · READ · GROW
                    </span>

                    <span className="font-heading text-3xl font-light text-[#D8B77C]">
                      {slide.number}
                    </span>
                  </div>
                </div>

                <div className="absolute right-0 bottom-5 rounded-lg border border-[#E9E5DB] bg-white px-5 py-4 shadow-lg sm:right-5">
                  <p className="text-xs text-[#77796F]">
                    A better reading life
                  </p>

                  <p className="mt-1 font-heading text-lg font-bold text-[#254C3B]">
                    Starts with a book.
                  </p>
                </div>

                <div className="absolute top-8 right-8 h-4 w-4 rounded-full bg-[#C69A56] sm:right-12" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
