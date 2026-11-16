import Link from "next/link";
import { ArrowRight, BookOpen, Clock3, Library, Sparkles } from "lucide-react";

import HeroSlider from "@/components/home/hero-slider";
import SectionHeading from "@/components/home/section-heading";

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

// Temporary books for the homepage design
// These will later come from the backend API
const featuredBooks = [
  {
    id: "book-01",
    title: "The Art of Reading",
    author: "David Green",
    category: "Personal Growth",
    color: "bg-[#254C3B]",
    coverText: "The Art\nof Reading",
  },
  {
    id: "book-02",
    title: "Beyond the Horizon",
    author: "James Wilson",
    category: "Fiction",
    color: "bg-[#755044]",
    coverText: "Beyond\nthe Horizon",
  },
  {
    id: "book-03",
    title: "A World of Ideas",
    author: "Sarah Miller",
    category: "Science",
    color: "bg-[#435C75]",
    coverText: "A World\nof Ideas",
  },
  {
    id: "book-04",
    title: "The Silent Journey",
    author: "Michael Brown",
    category: "Biography",
    color: "bg-[#8A7047]",
    coverText: "The Silent\nJourney",
  },
];

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

      {/* Featured Books */}
      <section className="bg-[#FAF8F3] py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Handpicked collection"
              title="Featured Books"
              description="A small selection of books to inspire your next reading journey."
            />

            <Link
              href="/books"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#254C3B] transition-colors hover:text-[#A27A3F]"
            >
              View All Books
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-2 md:grid-cols-4 md:gap-7">
            {featuredBooks.map((book) => (
              <article key={book.id} className="group">
                {/* Decorative Book Cover */}
                <Link
                  href={`/books/${book.id}`}
                  aria-label={`View ${book.title}`}
                  className="block overflow-hidden rounded-xl border border-[#E9E5DB] bg-white p-5"
                >
                  <div
                    className={`relative mx-auto flex aspect-[3/4] w-full max-w-[210px] flex-col justify-between overflow-hidden rounded-r-lg p-5 text-white shadow-lg transition-transform duration-300 group-hover:-translate-y-2 ${book.color}`}
                  >
                    <BookOpen size={19} />

                    <div>
                      <div className="mb-4 h-px w-10 bg-[#D7B477]" />

                      <h3 className="whitespace-pre-line font-serif text-2xl leading-tight sm:text-3xl">
                        {book.coverText}
                      </h3>

                      <p className="mt-5 text-[9px] tracking-[2px] text-white/70">
                        BOOKNOOK EDITION
                      </p>
                    </div>

                    <div className="flex justify-end">
                      <Sparkles size={17} className="text-[#D7B477]" />
                    </div>
                  </div>
                </Link>

                {/* Book Information */}
                <div className="mt-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#A27A3F]">
                    {book.category}
                  </p>

                  <Link href={`/books/${book.id}`}>
                    <h3 className="mt-2 font-semibold text-[#20291F] transition-colors group-hover:text-[#254C3B]">
                      {book.title}
                    </h3>
                  </Link>

                  <p className="mt-1 text-xs text-[#77796F]">
                    by {book.author}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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
