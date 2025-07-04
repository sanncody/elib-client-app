import { Book } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const BookCard = ({ book }: { book: Book }) => {
  return (
    <div className='flex gap-5 border border-[#fff] rounded-md p-5 shadow-2xl'>
        <Image src={book.coverImage} alt={book.title} width={0} height={0} sizes='100vw' style={{ width: "auto", height: "12rem" }} />
        <div className="">
            <h2 className='font-bold text-xl text-primary-600 text-balance line-clamp-2 tracking-tight'>{book.title}</h2>
            <p className='font-bold tracking-tight text-primary-900 mt-1'>{book.author.name}</p>
            <Link href={`/book/${book._id}`} className='inline-block border rounded border-primary-400 py-1 px-3 mt-4 hover:border-primary-100 hover:bg-primary-100 text-primary-500 font-medium text-sm transition'>Read more</Link>
        </div>
    </div>
  )
}

export default BookCard;