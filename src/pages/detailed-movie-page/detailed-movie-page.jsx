import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import MoviesService from "../../services/movies/MoviesServices";

const DetailedMoviePage = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState();
  const [movieVideo, setMovieVideo] = useState();

  useEffect(() => {
    if (!id) return;
    fetchMovie(id);
    fetchMovieVideos(id);
  }, [id]);

  async function fetchMovie(id) {
    try {
      const { response } = await MoviesService.getMovieById(id);
      setMovieData(response);
    } catch (e) {
      console.log(e);
    }
  }

  async function fetchMovieVideos(id) {
    try {
      const { mainVideoKey } = await MoviesService.getMovieVideos(id);
      console.log(mainVideoKey)
      setMovieVideo(mainVideoKey);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <main>
      {movieVideo && (
        <div>
          <iframe
            src={`https://www.youtube.com/embed/${movieVideo.key}?controls=0`}
            title="Trailer"

            className="w-full h-[600px] rounded-xl"
          />
        </div>
      )}
    </main>
  );
};

export default DetailedMoviePage;
