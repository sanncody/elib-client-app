import React from 'react'
import BookCard from './BookCard';
import { Book } from '@/types';

const BookList = async () => {
  // server component : Can create a component as async in server component
  // data fetching: We use 'fetch' for fetching data from backend
  const response = await fetch(`${process.env.BACKEND_URL}/books`);
  console.log(response.ok);
  if (!response.ok) {
    throw new Error("An error occurred while fetching the books");
  }

  const books = await response.json();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto mb-10">
        {
          books && books.map((book: Book) => (
            <BookCard key={book._id} book={book} />
          ))
        }
      </div>
    </>
  )
}

export default BookList;