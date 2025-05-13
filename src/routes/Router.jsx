import { createBrowserRouter } from "react-router-dom";

//Pages
import App from "../App";
import HomePage from "../pages/home-page/home-page";
import FavoritesPage from "../pages/favorites-page/favorites-page";
import DetailedMoviePage from "../pages/detailed-movie-page/detailed-movie-page";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        index: true,
        element: <HomePage />,
      },
      {
        path: "/favorites",
        element: <FavoritesPage />,
      },
      {
        path: "/movie/:id",
        element: <DetailedMoviePage />,
      },
    ],
  },
]);

export default Router;
