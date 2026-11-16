"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { ArrowRight, BookOpen, Sparkles, Library } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Homepage banner content
const slides = [
  {
    eyebrow: "WELCOME TO BOOKNOOK",
    title: "Every book opens a new world.",
    description:
      "Explore inspiring stories, discover new knowledge, and find the books that make every reading moment special.",
    buttonText: "Explore Books",
    href: "/books",
    number: "01",
    icon: BookOpen,
    background: "bg-[#F1EEE5]",
  },
  {
    eyebrow: "DISCOVER YOUR NEXT READ",
    title: "Find stories worth remembering.",
    description:
      "From timeless classics to modern discoveries, explore a collection made for curious minds and passionate readers.",
    buttonText: "Discover Collection",
    href: "/books",
    number: "02",
    icon: Sparkles,
    background: "bg-[#E9EFE9]",
  },
  {
    eyebrow: "YOUR READING JOURNEY",
    title: "A little space for big ideas.",
    description:
      "Build your reading habit, explore different categories, and make every chapter part of your journey.",
    buttonText: "Join BookNook",
    href: "/register",
    number: "03",
    icon: Library,
    background: "bg-[#F2EADF]",
  },
];

export default function HeroSlider() {
  const [mounted, setMounted] = useState(false);

  // Initialize Swiper only after the component mounts in the browser.
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#FAF8F3]">
      {!mounted ? (
        // Static placeholder prevents Swiper from initializing during prerendering.
        <div className="relative bg-[#F1EEE5]">
          <div className="mx-auto grid min-h-[540px] max-w-[1200px] items-center gap-12 px-6 py-16 md:grid-cols-2 lg:px-8 lg:py-20">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#254C3B]/15 bg-white/70 px-4 py-2">
                <Sparkles size={14} className="text-[#C69A56]" />
                <span className="text-[10px] font-bold tracking-[2px] text-[#254C3B]">
                  {slides[0].eyebrow}
                </span>
              </div>

              <h1 className="mt-7 max-w-xl font-serif text-5xl font-semibold leading-[1.12] tracking-tight text-[#20291F] sm:text-6xl lg:text-[68px]">
                {slides[0].title}
              </h1>

              <p className="mt-6 max-w-lg text-sm leading-8 text-[#77796F] md:text-base">
                {slides[0].description}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href={slides[0].href}
                  className="inline-flex items-center gap-3 rounded-lg bg-[#254C3B] px-6 py-4 text-sm font-semibold text-white"
                >
                  {slides[0].buttonText}
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/about"
                  className="text-sm font-semibold text-[#254C3B]"
                >
                  Learn More
                </Link>
              </div>

              <p className="mt-12 text-xs font-semibold tracking-[3px] text-[#A27A3F]">
                BOOKNOOK COLLECTION
              </p>
            </div>

            <div className="relative mx-auto flex w-full max-w-md items-center justify-center py-8">
              <div className="absolute size-[280px] rounded-full bg-white/60 blur-3xl md:size-[370px]" />

              <div className="relative flex w-full max-w-[330px] items-center justify-center">
                <div className="absolute right-2 top-4 h-[330px] w-[190px] rotate-[12deg] rounded-r-lg bg-[#C69A56] shadow-xl md:right-5">
                  <div className="absolute inset-y-0 left-0 w-3 bg-black/10" />
                </div>

                <div className="relative z-10 flex h-[360px] w-[230px] -rotate-3 flex-col justify-between overflow-hidden rounded-r-lg bg-[#254C3B] p-7 text-[#FAF8F3] shadow-2xl md:h-[390px] md:w-[260px]">
                  <div className="flex items-center justify-between">
                    <BookOpen size={22} />
                    <span className="text-[9px] tracking-[3px]">
                      EST. BOOKNOOK
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-semibold tracking-[4px] text-[#D7B477]">
                      THE READING JOURNEY
                    </span>

                    <h2 className="mt-5 font-serif text-5xl leading-[1.12] md:text-6xl">
                      Stories
                      <br />
                      that
                      <br />
                      <i className="text-[#D7B477]">inspire.</i>
                    </h2>

                    <div className="mt-7 h-px w-16 bg-[#D7B477]" />

                    <p className="mt-5 text-[9px] tracking-[3px] text-[#E0E6DF]">
                      DISCOVER · READ · GROW
                    </p>
                  </div>

                  <div className="flex items-end justify-between">
                    <span className="text-[9px] tracking-[2px]">
                      BOOKNOOK LIBRARY
                    </span>
                    <BookOpen size={23} />
                  </div>
                </div>

                <div className="absolute -bottom-2 -left-5 z-20 rounded-xl border border-[#E9E5DB] bg-white px-5 py-4 shadow-lg sm:-left-10">
                  <p className="text-xs font-bold text-[#254C3B]">
                    Your next chapter
                  </p>
                  <p className="mt-1 text-[10px] text-[#77796F]">
                    Starts right here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          loop={true}
          speed={700}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            waitForTransition: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation
          className="booknook-hero-swiper"
        >
          {slides.map((slide) => {
            const SlideIcon = slide.icon;

            return (
              <SwiperSlide key={slide.number}>
                <div className={`relative ${slide.background}`}>
                  <div className="mx-auto grid min-h-[540px] max-w-[1200px] items-center gap-12 px-6 py-16 md:grid-cols-2 lg:px-8 lg:py-20">
                    {/* Hero Text Content */}
                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-2 rounded-full border border-[#254C3B]/15 bg-white/70 px-4 py-2">
                        <Sparkles size={14} className="text-[#C69A56]" />

                        <span className="text-[10px] font-bold tracking-[2px] text-[#254C3B]">
                          {slide.eyebrow}
                        </span>
                      </div>

                      <h1 className="mt-7 max-w-xl font-serif text-5xl font-semibold leading-[1.12] tracking-tight text-[#20291F] sm:text-6xl lg:text-[68px]">
                        {slide.title}
                      </h1>

                      <p className="mt-6 max-w-lg text-sm leading-8 text-[#77796F] md:text-base">
                        {slide.description}
                      </p>

                      <div className="mt-9 flex flex-wrap items-center gap-4">
                        <Link
                          href={slide.href}
                          className="inline-flex items-center gap-3 rounded-lg bg-[#254C3B] px-6 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-[#193A2C]"
                        >
                          {slide.buttonText}
                          <ArrowRight size={17} />
                        </Link>

                        <Link
                          href="/about"
                          className="text-sm font-semibold text-[#254C3B] transition-colors hover:text-[#C69A56]"
                        >
                          Learn More
                        </Link>
                      </div>

                      <p className="mt-12 text-xs font-semibold tracking-[3px] text-[#A27A3F]">
                        BOOKNOOK COLLECTION
                      </p>
                    </div>

                    {/* Decorative Book Illustration */}
                    <div className="relative mx-auto flex w-full max-w-md items-center justify-center py-8">
                      <div className="absolute size-[280px] rounded-full bg-white/60 blur-3xl md:size-[370px]" />

                      <div className="relative flex w-full max-w-[330px] items-center justify-center">
                        {/* Background Book */}
                        <div className="absolute right-2 top-4 h-[330px] w-[190px] rotate-[12deg] rounded-r-lg bg-[#C69A56] shadow-xl md:right-5">
                          <div className="absolute inset-y-0 left-0 w-3 bg-black/10" />
                        </div>

                        {/* Main Book */}
                        <div className="relative z-10 flex h-[360px] w-[230px] -rotate-3 flex-col justify-between overflow-hidden rounded-r-lg bg-[#254C3B] p-7 text-[#FAF8F3] shadow-2xl md:h-[390px] md:w-[260px]">
                          <div className="flex items-center justify-between">
                            <BookOpen size={22} />
                            <span className="text-[9px] tracking-[3px]">
                              EST. BOOKNOOK
                            </span>
                          </div>

                          <div>
                            <span className="text-[10px] font-semibold tracking-[4px] text-[#D7B477]">
                              THE READING JOURNEY
                            </span>

                            <h2 className="mt-5 font-serif text-5xl leading-[1.12] md:text-6xl">
                              Stories
                              <br />
                              that
                              <br />
                              <i className="text-[#D7B477]">inspire.</i>
                            </h2>

                            <div className="mt-7 h-px w-16 bg-[#D7B477]" />

                            <p className="mt-5 text-[9px] tracking-[3px] text-[#E0E6DF]">
                              DISCOVER · READ · GROW
                            </p>
                          </div>

                          <div className="flex items-end justify-between">
                            <span className="text-[9px] tracking-[2px]">
                              BOOKNOOK LIBRARY
                            </span>
                            <SlideIcon size={23} />
                          </div>
                        </div>

                        {/* Floating Label */}
                        <div className="absolute -bottom-2 -left-5 z-20 rounded-xl border border-[#E9E5DB] bg-white px-5 py-4 shadow-lg sm:-left-10">
                          <p className="text-xs font-bold text-[#254C3B]">
                            Your next chapter
                          </p>

                          <p className="mt-1 text-[10px] text-[#77796F]">
                            Starts right here.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </section>
  );
}
