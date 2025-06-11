import MoviesService from "../services/movies/MoviesServices";

const useMovie = () => {
  async function fetchDetailedMovie(id) {
    try {
      const { movieData } = await MoviesService.getMovieById(id);
      const { mainVideoKey } = await MoviesService.getMovieVideos(id);
      const { imageList } = await MoviesService.getMovieImages(id);

      return {
        ...movieData,
        mainVideoKey,
        imageList,
      };
    } catch (e) {
      console.log(e);
    }
  }

  return { fetchDetailedMovie };
};

export default useMovie;
