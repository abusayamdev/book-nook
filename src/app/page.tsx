import Link from "next/link";
import { Suspense } from "react";
import { ArrowRight, BookOpen, Clock3, Library } from "lucide-react";

import HeroSlider from "@/components/home/hero-slider";
import SectionHeading from "@/components/home/section-heading";
import NewArrivals from "@/components/home/new-arrivals";

// Book categories displayed on the homepage
const categories = [
  {
    number: "01",
    name: "Fiction",
    description: "Explore imaginative stories and novels.",
    symbol: "F",
  },
  {
    number: "02",
    name: "Science",
    description: "Discover science, technology and ideas.",
    symbol: "S",
  },
  {
    number: "03",
    name: "History",
    description: "Travel through stories of the past.",
    symbol: "H",
  },
  {
    number: "04",
    name: "Biography",
    description: "Learn from inspiring real-life journeys.",
    symbol: "B",
  },
  {
    number: "05",
    name: "Children",
    description: "Wonderful stories for young readers.",
    symbol: "C",
  },
];

// Steps explaining how BookNook works
const readingSteps = [
  {
    number: "01",
    title: "Discover Books",
    description:
      "Browse different categories and find books that match your interests.",
    icon: Library,
  },
  {
    number: "02",
    title: "Borrow a Book",
    description:
      "Choose an available book and request it through your account.",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "Enjoy Reading",
    description:
      "Read, explore new ideas and return your borrowed books on time.",
    icon: Clock3,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Homepage Hero Slider */}
      <HeroSlider />

      {/* Explore Book Categories */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
          <SectionHeading
            eyebrow="Explore by interest"
            title="Find your reading corner"
            description="Every reader has a different story to discover. Start exploring your favorite categories."
            centered
          />

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {categories.map((category) => (
              <Link
                key={category.number}
                href={`/books?category=${encodeURIComponent(category.name)}`}
                className="group rounded-xl border border-[#E9E5DB] bg-[#FAF8F3] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#254C3B] hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-widest text-[#A27A3F]">
                    {category.number}
                  </span>

                  <span className="flex size-10 items-center justify-center rounded-full bg-[#E9EEE8] font-serif text-lg font-semibold text-[#254C3B] transition-colors group-hover:bg-[#254C3B] group-hover:text-white">
                    {category.symbol}
                  </span>
                </div>

                <h3 className="mt-8 text-lg font-semibold text-[#20291F]">
                  {category.name}
                </h3>

                <p className="mt-2 min-h-12 text-xs leading-6 text-[#77796F]">
                  {category.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#254C3B]">
                  Explore
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic New Arrivals from MongoDB */}
      <Suspense
        fallback={
          <section className="bg-[#FAF8F3] px-6 py-20 lg:px-8">
            <div className="mx-auto max-w-[1200px]">
              <div className="mb-10">
                <div className="h-3 w-40 animate-pulse rounded bg-[#E9E5DB]" />
                <div className="mt-4 h-10 w-64 animate-pulse rounded bg-[#E9E5DB]" />
                <div className="mt-4 h-4 w-80 animate-pulse rounded bg-[#E9E5DB]" />
              </div>

              <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-xl border border-[#E9E5DB] bg-white p-4"
                  >
                    <div className="h-[280px] animate-pulse rounded-lg bg-[#F1EEE5]" />
                    <div className="mt-5 h-3 w-24 animate-pulse rounded bg-[#E9E5DB]" />
                    <div className="mt-3 h-6 w-3/4 animate-pulse rounded bg-[#E9E5DB]" />
                    <div className="mt-3 h-4 w-full animate-pulse rounded bg-[#E9E5DB]" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        }
      >
        <NewArrivals />
      </Suspense>

      {/* How BookNook Works */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
          <SectionHeading
            eyebrow="Simple reading experience"
            title="How BookNook works"
            description="Getting started with your reading journey is simple. Follow three easy steps."
            centered
          />

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {readingSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="text-center">
                  <div className="relative mx-auto flex size-16 items-center justify-center rounded-2xl bg-[#E9EEE8] text-[#254C3B]">
                    <Icon size={26} strokeWidth={1.7} />

                    <span className="absolute -right-2 -top-2 flex size-7 items-center justify-center rounded-full bg-[#254C3B] text-[10px] font-bold text-white">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-[#20291F]">
                    {step.title}
                  </h3>

                  <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-[#77796F]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join BookNook Call To Action */}
      <section className="bg-[#FAF8F3] px-5 py-20">
        <div className="mx-auto max-w-[1100px] overflow-hidden rounded-2xl bg-[#254C3B] px-7 py-16 text-center text-white md:px-16">
          <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-white/10">
            <BookOpen size={25} />
          </div>

          <p className="mt-6 text-[11px] font-bold uppercase tracking-[3px] text-[#D7B477]">
            Your next chapter starts here
          </p>

          <h2 className="mx-auto mt-5 max-w-2xl font-serif text-3xl font-semibold leading-tight md:text-5xl">
            Discover a world of stories waiting for you.
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#D3DDD5]">
            Become part of our reading community and explore books that inspire,
            educate and entertain.
          </p>

          <Link
            href="/register"
            className="mt-9 inline-flex items-center gap-3 rounded-lg bg-white px-7 py-4 text-sm font-semibold text-[#254C3B] transition-colors hover:bg-[#F1EEE5]"
          >
            Join BookNook
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
