import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import useMovie from "../../hooks/useMovie";

const DetailedMoviePage = () => {
  const { id } = useParams();
  const { fetchDetailedMovie } = useMovie();
  const [movieData, setMovieData] = useState();

  useEffect(() => {
    if (!id) return;
    fetchMovie(id);
  }, [id]);

  async function fetchMovie(id) {
    try {
      const movieData = await fetchDetailedMovie(id);
      console.log(movieData);
      setMovieData(movieData);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="flex gap-4">
      <main className="sm:w-3/4">
        {movieData ? (
          <div className="w-full aspect-video">
            {movieData && (
              <iframe
                className="w-full h-full rounded-4xl"
                src={`https://www.youtube.com/embed/${movieData.mainVideoKey}?controls=0&modestbranding=1&rel=0&showinfo=0&fs=0`}
                title="Trailer do filme"
                allow="autoplay; encrypted-media"
                referrerpolicy="strict-origin-when-cross-origin"
                allowFullScreen={false}
              />
            )}
          </div>
        ) : (
          <p className="text-gray-400 text-sm">Trailer indisponível</p>
        )}
      </main>
      <aside className="w-1/4 h-[1000px] p-4 space-y-4 overflow-scroll">
        {movieData &&
          movieData.imageList.map((image) => (
            <img
              src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
              key={image.file_path}
              className="rounded-xl"
            />
          ))}
      </aside>
    </div>
  );
};

export default DetailedMoviePage;
