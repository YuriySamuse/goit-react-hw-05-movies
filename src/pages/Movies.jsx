import { useEffect, useState } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { getSearchQuery } from 'API';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  const movieSearch = searchParams.get('query');

  const onChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const submit = e => {
    e.preventDefault();

    setSearchParams({ query: query });
    setQuery('');
  };

  useEffect(() => {
    if (!movieSearch) return;
    setLoading(true);
    async function renderMovies() {
      try {
        setMovies(await getSearchQuery(movieSearch));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    renderMovies();
  }, [movieSearch]);

  const location = useLocation();

  return (
    <div>
      <form onSubmit={submit}>
        <input type="text" value={query} onChange={onChange} />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
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
