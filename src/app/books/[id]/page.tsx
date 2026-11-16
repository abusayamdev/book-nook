import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Library,
  UserRound,
} from "lucide-react";

import { getBookById } from "@/lib/books";

// Dynamic route parameters in Next.js 16
type BookDetailsPageProps = {
  params: Promise<{ id: string }>;
};

export const metadata = {
  title: "Book Details | BookNook",
  description: "Explore book information from the BookNook library.",
};

// Loading placeholder
function BookDetailsLoading() {
  return (
    <main className="min-h-screen bg-[#FAF8F3] px-6 py-16">
      <div className="mx-auto grid max-w-[1100px] gap-12 md:grid-cols-2">
        <div className="mx-auto h-[480px] w-full max-w-[360px] animate-pulse rounded-xl bg-[#E9E5DB]" />
        <div className="space-y-6 py-8">
          <div className="h-4 w-28 animate-pulse rounded bg-[#E9E5DB]" />
          <div className="h-12 w-3/4 animate-pulse rounded bg-[#E9E5DB]" />
          <div className="h-5 w-1/2 animate-pulse rounded bg-[#E9E5DB]" />
          <div className="h-24 w-full animate-pulse rounded bg-[#E9E5DB]" />
          <div className="h-12 w-48 animate-pulse rounded bg-[#E9E5DB]" />
        </div>
      </div>
    </main>
  );
}

// Book details content
async function BookDetailsContent({ params }: BookDetailsPageProps) {
  const { id } = await params;

  let book;

  try {
    book = await getBookById(id);
  } catch (error) {
    console.error("Book Details Error:", error);

    return (
      <main className="min-h-[60vh] bg-[#FAF8F3] px-6 py-20">
        <div className="mx-auto max-w-xl rounded-2xl border border-[#E9E5DB] bg-white p-10 text-center">
          <BookOpen className="mx-auto text-[#C69A56]" size={42} />

          <h1 className="mt-5 font-serif text-2xl font-semibold text-[#20291F]">
            Unable to Load Book
          </h1>

          <p className="mt-3 text-sm leading-7 text-[#77796F]">
            We could not connect to the library. Please try again later.
          </p>

          <Link
            href="/books"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#254C3B] px-6 py-3 text-sm font-semibold text-white hover:bg-[#193A2C]"
          >
            <ArrowLeft size={16} />
            Back to Books
          </Link>
        </div>
      </main>
    );
  }

  if (!book) {
    notFound();
  }

  const isAvailable = book.availableCopies > 0;

  return (
    <main className="min-h-screen bg-[#FAF8F3]">
      {/* Breadcrumb */}
      <div className="border-b border-[#E9E5DB] bg-white px-6 py-5">
        <div className="mx-auto max-w-[1100px]">
          <Link
            href="/books"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#254C3B] transition-colors hover:text-[#C69A56]"
          >
            <ArrowLeft size={16} />
            Back to All Books
          </Link>
        </div>
      </div>

      {/* Book Information */}
      <section className="px-6 py-14 md:py-20">
        <div className="mx-auto grid max-w-[1100px] items-start gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          {/* Book Cover */}
          <div className="mx-auto w-full max-w-[360px]">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-[#E9E5DB] bg-[#F1EEE5] shadow-xl">
              <Image
                src={book.imageUrl}
                alt={book.title}
                fill
                priority
                unoptimized
                sizes="(max-width: 768px) 100vw, 360px"
                className="object-cover"
              />
            </div>

            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-[#77796F]">
              <BookOpen size={15} />
              BookNook Library Collection
            </div>
          </div>

          {/* Book Details */}
          <div className="py-2">
            <span className="inline-flex rounded-full bg-[#E9EEE8] px-4 py-2 text-[10px] font-bold uppercase tracking-[2px] text-[#254C3B]">
              {book.category}
            </span>

            <h1 className="mt-6 font-serif text-4xl font-semibold leading-tight text-[#20291F] md:text-5xl">
              {book.title}
            </h1>

            <p className="mt-4 text-base text-[#A27A3F]">By {book.author}</p>

            <div className="my-8 h-px w-full bg-[#E9E5DB]" />

            <h2 className="font-serif text-xl font-semibold text-[#20291F]">
              About This Book
            </h2>

            <p className="mt-4 whitespace-pre-line text-sm leading-8 text-[#77796F]">
              {book.description}
            </p>

            {/* Availability */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-[#E9E5DB] bg-white p-5">
                <div className="flex items-center gap-2 text-[#77796F]">
                  <Library size={17} />
                  <span className="text-xs">Total Copies</span>
                </div>

                <p className="mt-3 text-2xl font-semibold text-[#20291F]">
                  {book.totalCopies}
                </p>
              </div>

              <div className="rounded-xl border border-[#E9E5DB] bg-white p-5">
                <div className="flex items-center gap-2 text-[#77796F]">
                  <CheckCircle2 size={17} />
                  <span className="text-xs">Available Copies</span>
                </div>

                <p className="mt-3 text-2xl font-semibold text-[#254C3B]">
                  {book.availableCopies}
                </p>
              </div>
            </div>

            {/* Availability Status */}
            <div className="mt-6 flex items-center gap-3">
              <span
                className={`size-2.5 rounded-full ${
                  isAvailable ? "bg-[#254C3B]" : "bg-red-500"
                }`}
              />

              <span
                className={`text-sm font-semibold ${
                  isAvailable ? "text-[#254C3B]" : "text-red-600"
                }`}
              >
                {isAvailable ? "Available for Borrowing" : "Not Available"}
              </span>
            </div>

            {/* Borrow Action */}
            {isAvailable ? (
              <Link
                href={`/login?redirect=${encodeURIComponent(`/books/${book._id}`)}`}
                className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[#254C3B] px-7 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-[#193A2C] sm:w-auto"
              >
                Borrow This Book
                <BookOpen size={18} />
              </Link>
            ) : (
              <button
                type="button"
                disabled
                className="mt-8 inline-flex w-full cursor-not-allowed items-center justify-center gap-3 rounded-lg bg-[#D8D8D0] px-7 py-4 text-sm font-semibold text-[#77796F] sm:w-auto"
              >
                Currently Unavailable
                <BookOpen size={18} />
              </button>
            )}

            {/* Added By */}
            <div className="mt-10 rounded-xl border border-[#E9E5DB] bg-white p-5">
              <div className="flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-full bg-[#E9EEE8] text-[#254C3B]">
                  <UserRound size={20} />
                </div>

                <div>
                  <p className="text-xs text-[#77796F]">Added to BookNook by</p>
                  <p className="mt-1 text-sm font-semibold text-[#20291F]">
                    {book.addedByName}
                  </p>
                  <p className="mt-1 text-xs text-[#77796F]">
                    {book.addedByEmail}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Page entry point
export default function BookDetailsPage({ params }: BookDetailsPageProps) {
  return (
    <Suspense fallback={<BookDetailsLoading />}>
      <BookDetailsContent params={params} />
    </Suspense>
  );
}
