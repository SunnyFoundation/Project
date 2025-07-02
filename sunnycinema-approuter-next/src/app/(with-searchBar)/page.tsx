import MovieItem from "@/components/movie-Item";
import style from "./page.module.css";
import { MovieData } from "@/types";
import { Metadata } from "next";


export const metadata : Metadata = {
  title : "영화 추천",
  description : "영화 추천 페이지입니다.",
  openGraph: {
    title: "영화 추천",
    description : "영화 추천 페이지입니다.",
    images : [],
}
};



async function AllMovies() {
  /* 새로운 영화를 추가하거나 삭제하지 않으므로 영구 캐싱 적용 */
  const response = await fetch(`https://sunny-cinema-server.vercel.app/movie`, {
    cache: "force-cache",
  });
  if (!response.ok) {
    return <div>오류가 발생했습니다 ...</div>;
  }

  const allMovies: MovieData[] = await response.json();
  return (
    <div className={style.all_container}>
      {allMovies.map((movie) => (
        <MovieItem key={`all-${movie.id}`} {...movie} />
      ))}
    </div>
  );
}

async function RecoMovies() {
  /* 3초 주기로 추천 영화를 변경하기 위해 revalidate 적용 */
  const response = await fetch(
    `https://sunny-cinema-server.vercel.app/movie/random`,
    {
      next: { revalidate: 3 },
    }
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }

  const recoMovies: MovieData[] = await response.json();
  return (
    <div className={style.reco_container}>
      {recoMovies.map((movie) => (
        <MovieItem key={`reco-${movie.id}`} {...movie} />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>Recommend Movie</h3>
        <RecoMovies />
      </section>
      <section>
        <h3>All Movie</h3>
        <AllMovies />
      </section>
    </div>
  );
}