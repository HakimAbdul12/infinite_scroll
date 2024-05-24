'use client'
import Image from "next/image";
import { useBookSearch } from "./hooks/useBookSearch";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  
  function handleSearch (e){
    setPageNumber(1)
    setQuery(e.target.value)
  }
  
  useBookSearch(query, pageNumber);
  return (
    <>
      <input value={query} onChange={handleSearch}  placeholder="search"/>
    </>
  );
}
