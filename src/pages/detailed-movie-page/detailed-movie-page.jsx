import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useMovie from "../../hooks/useMovie";

import { FaStarHalfAlt } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";

const DetailedMoviePage = () => {
  const STORED_FAVORITE_MOVIES = localStorage.getItem("favoriteMovies");
  const { id } = useParams();
  const { fetchDetailedMovie } = useMovie();
  const [movieData, setMovieData] = useState();
  const [favoriteMovies, setFavoriteMovies] = useState(
    STORED_FAVORITE_MOVIES ? JSON.parse(STORED_FAVORITE_MOVIES) : []
  );

  useEffect(() => {
    if (!id) return;
    fetchMovie(id);
  }, [id]);

  useEffect(() => {
    localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);

  async function fetchMovie(id) {
    try {
      const movieData = await fetchDetailedMovie(id);
      setMovieData(movieData);
    } catch (e) {
      console.log(e);
    }
  }

  if (!movieData) {
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="animate-spin w-40 h-40 border-y-4 rounded-full border-emerald-500" />
        <p className="font-semibold text-emerald-500">Carregando...</p>
      </div>
    );
  }

  function handleFavoriteMovie(newMovie) {
    if (favoriteMovies.some((movie) => movie.id === movieData.id)) {
      setFavoriteMovies(
        favoriteMovies.filter((movie) => movie.id !== newMovie.id)
      );
    } else {
      setFavoriteMovies((prevList) => [...prevList, newMovie]);
    }
  }

  return (
    <div className="text-slate-800 flex gap-4">
      <div className="sm:w-3/4 space-y-4 ">
        <section className="bg-white p-4 rounded-lg shadow-md">
          <iframe
            className="w-full aspect-video rounded-lg shadow-md"
            src={`https://www.youtube.com/embed/${movieData.mainVideoKey}?controls=0&modestbranding=1&rel=0&showinfo=0&fs=0`}
            title="Trailer do filme"
            allow="autoplay; encrypted-media"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen={false}
          />
        </section>
        <section className="bg-white p-4 flex gap-4 rounded-lg shadow-md">
          <div className="w-[250px] space-y-2">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
              className="w-full rounded-lg"
            />
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-500 font-semibold text-white flex justify-between gap-2 items-center py-2 px-4 rounded-lg">
                <FaStarHalfAlt />
                <p>{movieData.vote_average.toFixed(2).replace(".", ",")}</p>
              </div>
              <div className="bg-slate-300 font-semibold flex justify-between gap-2 items-center py-2 px-4 rounded-lg">
                <AiFillLike />
                <p>{movieData.vote_count}</p>
              </div>
              {favoriteMovies.some((movie) => movie.id === movieData.id) ? (
                <button
                  onClick={() => {
                    handleFavoriteMovie(movieData);
                  }}
                  className="hover:cursor-pointer hover:bg-emerald-700 col-span-2 bg-emerald-500 font-semibold text-white flex justify-between items-center py-2 px-4 rounded-lg"
                >
                  <p>Desfavoritar</p>
                  <MdOutlineStar size={30} />
                </button>
              ) : (
                <button
                  onClick={() => {
                    handleFavoriteMovie(movieData);
                  }}
                  className="hover:cursor-pointer hover:bg-emerald-700 col-span-2 bg-emerald-500 font-semibold text-white flex justify-between items-center py-2 px-4 rounded-lg"
                >
                  <p>Favoritar</p>
                  <MdOutlineStarBorder size={30} />
                </button>
              )}
            </div>
          </div>

          <div className="w-full bg-slate-200 p-2 space-y-4 rounded-md ">
            <div>
              <p className="text-2xl font-extrabold">{movieData.title}</p>
              <p className="font-bold mb-4">{movieData.tagline}</p>
              <p className="font-semibold">{movieData.overview}</p>
            </div>
            <div className="flex items-center gap-4">
              {movieData.genres.map((genre, i) => (
                <div
                  key={i}
                  className="font-bold bg-slate-300 py-2 px-4 rounded-md"
                >
                  {genre.name}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <aside className="w-1/4 h-[1000px] bg-white p-4 pr-2 rounded-lg space-y-4 shadow-lg overflow-scroll">
        {movieData.imageList.map((image) => (
          <img
            src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
            key={image.file_path}
            className="rounded-lg"
          />
        ))}
      </aside>
    </div>
  );
};

export default DetailedMoviePage;
