import Banner from "@/app/(home)/components/Banner";
import BookList from "./components/BookList";
import { Suspense } from "react";
import Loading from "@/components/Loading";


export default async function Home() {
  return (
    <>
      <Banner />
      <Suspense fallback={<Loading />}>
        {/* To avoid unnecessary delay for other components due to data fetching for one component, we use component streaming inside that component only */}
        <BookList />
      </Suspense>
    </>
  );
}
