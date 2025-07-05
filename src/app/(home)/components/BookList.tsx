import { Book } from '@/types';
import React from 'react'
import BookCard from './BookCard';

const BookList = ({ books }: { books: Book[] }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto mb-10">
            {
              books && books.map(book => (
                <BookCard key={book._id} book={book} />
              ))
            }
        </div>
    </>
  )
}

export default BookList;