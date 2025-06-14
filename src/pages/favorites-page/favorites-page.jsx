import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FavoritesPage = () => {
  const STORED_FAVORITE_MOVIES = localStorage.getItem("favoriteMovies");
  const [favoriteMovies] = useState(
    STORED_FAVORITE_MOVIES ? JSON.parse(STORED_FAVORITE_MOVIES) : []
  );
  const navigate = useNavigate();

  return (
    <div className="text-slate-800 space-y-4">
      <h1 className="text-2xl font-extrabold">
        Confira seus filmes preferidos
      </h1>
      <section className="bg-white shadow-md rounded-lg p-4 space-y-4">
        {favoriteMovies.length > 1 ? (
          favoriteMovies.map((movie, i) => (
            <div
              key={movie.id}
              onClick={() => navigate(`/movie/${movie.id}`)}
              className="flex items-center group hover:cursor-pointer"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="w-[100px] rounded-lg group-hover:border-4 border-emerald-600 "
              />
              <div className="w-full bg-slate-200 py-4 px-2 shadow-md rounded-r-lg group-hover:border-2 border-l-0 border-emerald-400">
                <h1 className="text-xl font-bold">{movie.title}</h1>
                <div className="flex items-center gap-4 mb-2">
                  {movie.genres.map((genre) => (
                    <div
                      key={genre.id}
                      className="font-bold bg-slate-300 py-2 px-4 rounded-md"
                    >
                      {genre.name}
                    </div>
                  ))}
                </div>
                <p>{movie.overview.slice(0, 100)}...</p>
              </div>
            </div>
          ))
        ) : (
          <h1>Voce nao possui filmes preferidos ainda!</h1>
        )}
      </section>
    </div>
  );
};

export default FavoritesPage;
