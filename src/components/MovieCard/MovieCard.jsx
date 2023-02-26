const MovieCard = ({ movie }) => {
  const { poster_path, original_title, vote_average, overview, genres } = movie;
  const defaultImage = 'https://via.placeholder.com/300x450';

  return (
    <div>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w300${poster_path}`
            : defaultImage
        }
        alt="movie poster"
        width={300}
      />
      <div>
        <h3>{original_title}</h3>
        <p>User score: {Math.round(vote_average * 10)}%</p>
        <h4>OverView</h4>
        <p>{overview}</p>
        <h4>Generes</h4>
        <p>{genres.map(item => item.name).join('')}</p>
      </div>
    </div>
  );
};

export default MovieCard;
