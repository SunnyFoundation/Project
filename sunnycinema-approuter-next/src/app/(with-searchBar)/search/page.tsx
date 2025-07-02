import MovieItem from "@/components/movie-Item";
import movies from "@/dummy.json";
import { MovieData } from "@/types";
import style from "./page.module.css";




export default async function Page({ searchParams}: { searchParams: Promise<{ q?: string }>;}) {


    const { q } = await searchParams;

    const response = await fetch(`https://sunny-cinema.vercel.app//movie/search?q=${q}`, {
    cache: "force-cache",
  }); 

  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }

    const movies: MovieData[] = await response.json();


  return (
    <div className={style.container}>
      {movies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}