import type { Book } from "@/types/book";

const API_URL = process.env.BOOKNOOK_API_URL;

interface BooksApiResponse {
  success: boolean;
  count: number;
  data: Book[];
  message?: string;
}

// Fetch the latest books from the BookNook API.
export async function getLatestBooks(limit = 6): Promise<Book[]> {
  if (!API_URL) {
    throw new Error("BOOKNOOK_API_URL is not configured.");
  }

  const response = await fetch(`${API_URL}/api/books`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch books: ${response.status}`);
  }

  const result: BooksApiResponse = await response.json();

  if (!result.success) {
    throw new Error(result.message || "Unable to load books.");
  }

  return result.data.slice(0, limit);
}

export async function getAllBooks(): Promise<Book[]> {
  if (!API_URL) {
    throw new Error("BOOKNOOK_API_URL is not configured.");
  }

  const response = await fetch(`${API_URL}/api/books`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch books: ${response.status}`);
  }

  const result: BooksApiResponse = await response.json();

  if (!result.success) {
    throw new Error(result.message || "Unable to load books.");
  }

  return result.data;
}

export async function getBookById(id: string): Promise<Book | null> {
  if (!API_URL) {
    throw new Error("BOOKNOOK_API_URL is not configured.");
  }

  const response = await fetch(
    `${API_URL}/api/books/${encodeURIComponent(id)}`,
    {
      cache: "no-store",
    },
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(`Failed to fetch book: ${response.status}`);
  }

  const result: {
    success: boolean;
    data: Book;
    message?: string;
  } = await response.json();

  if (!result.success) {
    throw new Error(result.message || "Unable to load book details.");
  }

  return result.data;
}