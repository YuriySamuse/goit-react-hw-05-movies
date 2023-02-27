import { useEffect, useState } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { getSearchQuery } from 'API';
import SearchBox from 'components/SearchBox/SearchBox';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  const movieSearch = searchParams.get('query') ?? '';

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (!movieSearch) return;
    setLoading(true);
    async function fetchMovies() {
      try {
        setMovies(await getSearchQuery(movieSearch));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, [movieSearch]);

  const location = useLocation();

  return (
    <div>
      <SearchBox value={movieSearch} onChange={updateQueryString} />
      {loading && <Loader />}
      {movies.length === 0 && <h2>No movies for your query</h2>}
      {movies && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
