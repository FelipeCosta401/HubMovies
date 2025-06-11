import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/movie/${movie.id}`)}
      className="min-w-[200px] relative group hover:cursor-pointer hover:scale-120 hover:z-1 transition-all"
    >
      <img
        className="rounded-md shadow-md group-hover:shadow-xl"
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
      />
    </div>
  );
};

export default MovieCard;
