import Axios from "axios";

const AxiosInstance = Axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjY5NzlmNzlhOTIwOGUwMDFiNWY1OWJkMzEzYzVhOCIsIm5iZiI6MS43NDY0NTA0NjE2NDMwMDAxZSs5LCJzdWIiOiI2ODE4YjgxZDYyYTA3NWI0ZGI4NGQyODMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ZZobYxRApgYYogH5JzWn0VgsC0MO9tcE5HN7bExL7EU",
  },
});

export default AxiosInstance;
