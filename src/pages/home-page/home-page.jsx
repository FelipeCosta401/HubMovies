import { useEffect, useState } from "react";

import MoviesService from "../../services/movies/MoviesServices";

import { FaFire } from "react-icons/fa";

import MovieCard from "../../components/movie-card/movie-card";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMoviesList();
  }, []);

  async function fetchMoviesList() {
    try {
      const { response } = await MoviesService.getMoviesList();
      setMovies(response);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="p-4 shadow-md rounded-lg bg-white">
      <section className="space-y-2">
        <span className="flex items-center gap-2">
          <FaFire className="text-red-500" />
          <h1 className="font-bold text-xl">Filmes em alta</h1>
        </span>
        <div className="flex gap-4 overflow-scroll px-6 py-10">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
