import Image from "next/image";
import Link from "next/link";
import { connection } from "next/server";
import { ArrowRight, BookOpen, Eye } from "lucide-react";

import type { Book } from "@/types/book";
import { getLatestBooks } from "@/lib/books";

export default async function NewArrivals() {
  // Fetch dynamic data at request time, not during prerendering.
  await connection();

  let books: Book[] = [];

  try {
    books = await getLatestBooks(6);
  } catch (error) {
    console.error("New Arrivals Error:", error);
  }

  return (
    <section className="bg-[#FAF8F3] px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        {/* Section Header */}
        <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-bold tracking-[3px] text-[#C69A56]">
              FRESH FROM THE SHELVES
            </span>

            <h2 className="mt-3 font-serif text-4xl font-semibold text-[#20291F] sm:text-5xl">
              New Arrivals
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-[#77796F]">
              Discover the latest additions to our collection and find your next
              favorite read.
            </p>
          </div>

          <Link
            href="/books"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#254C3B] transition-colors hover:text-[#C69A56]"
          >
            See All Books
            <ArrowRight size={17} />
          </Link>
        </div>

        {/* Empty State */}
        {books.length === 0 ? (
          <div className="rounded-2xl border border-[#E9E5DB] bg-white px-6 py-16 text-center">
            <BookOpen className="mx-auto text-[#C69A56]" size={42} />

            <h3 className="mt-5 font-serif text-2xl font-semibold text-[#20291F]">
              No Books Available Yet
            </h3>

            <p className="mt-3 text-sm text-[#77796F]">
              New books will appear here as soon as they are added to our
              library.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {books.map((book) => (
              <article
                key={book._id}
                className="group overflow-hidden rounded-xl border border-[#E9E5DB] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Book Cover */}
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

                {/* Book Information */}
                <div className="p-6">
                  <p className="text-xs font-medium text-[#A27A3F]">
                    {book.author}
                  </p>

                  <h3 className="mt-2 line-clamp-1 font-serif text-2xl font-semibold text-[#20291F]">
                    {book.title}
                  </h3>

                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#77796F]">
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
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
