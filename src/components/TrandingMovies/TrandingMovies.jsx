import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrending } from 'API';

const TrandingMovies = () => {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const renderMovies = async () => {
      setLoading(true);
      try {
        setMovies(await getTrending());
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    renderMovies();
  }, []);

  const location = useLocation();

  return (
    <>
      {loading && <p>Loading...</p>}
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
    </>
  );
};

export default TrandingMovies;
