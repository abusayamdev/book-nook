import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { connection } from "next/server";
import { ArrowRight, BookOpen, Eye, Library } from "lucide-react";

import { getAllBooks } from "@/lib/books";
import type { Book } from "@/types/book";

export const metadata = {
  title: "All Books | BookNook",
  description: "Explore the complete BookNook library collection.",
};

// Loading placeholder
function BooksLoading() {
  return (
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
  );
}

// Empty state
function EmptyBooks() {
  return (
    <div className="rounded-2xl border border-[#E9E5DB] bg-white px-6 py-20 text-center">
      <Library className="mx-auto text-[#C69A56]" size={48} />

      <h2 className="mt-6 font-serif text-2xl font-semibold text-[#20291F]">
        No Books Found
      </h2>

      <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#77796F]">
        Our library collection is currently empty. Please check back later for
        new additions.
      </p>

      <Link
        href="/"
        className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#254C3B] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#193A2C]"
      >
        Back to Home
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}

// Book card
function BookCard({ book }: { book: Book }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-[#E9E5DB] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-[280px] overflow-hidden bg-[#F1EEE5]">
        <Image
          src={book.imageUrl}
          alt={book.title}
          fill
          unoptimized
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#254C3B]">
          {book.category}
        </span>
      </div>

      <div className="p-6">
        <p className="text-xs font-medium text-[#A27A3F]">{book.author}</p>

        <h2 className="mt-2 line-clamp-1 font-serif text-2xl font-semibold text-[#20291F]">
          {book.title}
        </h2>

        <p className="mt-3 line-clamp-2 min-h-12 text-sm leading-6 text-[#77796F]">
          {book.description}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-[#E9E5DB] pt-4">
          <span className="text-xs text-[#77796F]">
            {book.availableCopies > 0
              ? `${book.availableCopies} copies available`
              : "Not Available"}
          </span>

          <Link
            href={`/books/${book._id}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#254C3B] transition-colors hover:text-[#C69A56]"
          >
            <Eye size={16} />
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}

// Fetch and display books
async function BooksContent() {
  // Fetch dynamic data at request time, not during prerendering.
  await connection();

  let books: Book[] = [];
  let hasError = false;

  try {
    books = await getAllBooks();
  } catch (error) {
    console.error("All Books API Error:", error);
    hasError = true;
  }

  if (hasError) {
    return (
      <div className="rounded-2xl border border-[#E9E5DB] bg-white px-6 py-16 text-center">
        <BookOpen className="mx-auto text-[#C69A56]" size={42} />

        <h2 className="mt-5 font-serif text-2xl font-semibold text-[#20291F]">
          Unable to Load Books
        </h2>

        <p className="mt-3 text-sm text-[#77796F]">
          We could not connect to the library right now. Please try again later.
        </p>
      </div>
    );
  }

  if (books.length === 0) {
    return <EmptyBooks />;
  }

  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <p className="text-sm text-[#77796F]">
          Showing <strong className="text-[#20291F]">{books.length}</strong>{" "}
          books in our collection
        </p>
      </div>

      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </>
  );
}

export default function AllBooksPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F3]">
      {/* Page Header */}
      <section className="border-b border-[#E9E5DB] bg-[#F1EEE5] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[2px] text-[#A27A3F]">
            <BookOpen size={15} />
            BOOKNOOK COLLECTION
          </div>

          <h1 className="mt-5 font-serif text-4xl font-semibold text-[#20291F] sm:text-5xl md:text-6xl">
            Explore Our Library
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-8 text-[#77796F] md:text-base">
            Discover stories, explore new ideas, and find your next favorite
            book from our growing collection.
          </p>
        </div>
      </section>

      {/* Books Collection */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <Suspense fallback={<BooksLoading />}>
            <BooksContent />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
