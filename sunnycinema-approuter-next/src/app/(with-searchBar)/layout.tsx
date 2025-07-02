import Searchbar from "@/components/searchBar";
import { ReactNode } from "react";
import { Suspense } from 'react';


export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
      <Searchbar />
      {children}
     </Suspense>
    </div>
  );
}