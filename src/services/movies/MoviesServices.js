import AxiosInsntance from "../../config/AxisoInstance";

class MoviesService {
  static async getMoviesList() {
    return await AxiosInsntance.get("/movie/popular?language=pt-BR")
      .then((res) => {
        const response = res.data.results;

        return { response };
      })
      .catch((err) => {
        throw new Error(err.response.data.message);
      });
  }

  static async getMovieById(id) {
    return await AxiosInsntance.get(`/movie/${id}`)
      .then((res) => {
        const response = res.data;

        return { response };
      })
      .catch((err) => {
        throw new Error(err.response.data.message);
      });
  }

  static async getMovieVideos(id) {
    return await AxiosInsntance.get(`/movie/${id}/videos`)
      .then((res) => {
        const videos = res.data.results;

        const mainVideoKey = videos.find(
          (video) =>
            video.type === "Trailer" &&
            video.site === "YouTube" &&
            video.official === true
        );

        return { videos, mainVideoKey };
      })
      .catch((err) => {
        throw new Error(err.response.data.message);
      });
  }
}

export default MoviesService;
