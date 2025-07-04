import Banner from "@/app/(home)/components/Banner";
import BookList from "./components/BookList";


export default async function Home() {
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
      <Banner />
      <BookList books={books} />
    </>
  );
}
