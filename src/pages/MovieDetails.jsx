import { useEffect, useState, Suspense } from 'react';
import {
  useLocation,
  useParams,
  Link,
  Outlet,
  useNavigate,
} from 'react-router-dom';
import { getDetails } from 'API';
import MovieCard from 'components/MovieCard/MovieCard';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    const renderCard = async () => {
      setLoading(true);
      try {
        setMovie(await getDetails(id));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    renderCard();
  }, [id]);

  return (
    <section>
      <button onClick={() => navigate(backLinkHref)}>Back to movies</button>
      {loading && <p>Loading...</p>}
      {movie && (
        <div>
          <MovieCard movie={movie} />
          <div>
            <ul>
              <li>
                <Link to="cast" state={{ from: location.state?.from ?? '/' }}>
                  Cast
                </Link>
              </li>
              <li>
                <Link
                  to="reviews"
                  state={{ from: location.state?.from ?? '/' }}
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </section>
  );
};

export default MovieDetails;
