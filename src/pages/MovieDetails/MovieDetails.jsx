import { useEffect, useState, Suspense } from 'react';
import { useLocation, useParams, Outlet, useNavigate } from 'react-router-dom';
import { Details, BackButton, Linked, List } from './MovieDetails.styled';
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
    const fetchCard = async () => {
      setLoading(true);
      try {
        setMovie(await getDetails(id));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCard();
  }, [id]);

  return (
    <Details>
      <BackButton onClick={() => navigate(backLinkHref)}>
        Back to movies
      </BackButton>
      {loading && <p>Loading...</p>}
      {movie && (
        <div>
          <MovieCard movie={movie} />
          <div>
            <List>
              <li>
                <Linked to="cast" state={{ from: location.state?.from ?? '/' }}>
                  Cast
                </Linked>
              </li>
              <li>
                <Linked
                  to="reviews"
                  state={{ from: location.state?.from ?? '/' }}
                >
                  Reviews
                </Linked>
              </li>
            </List>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </Details>
  );
};

export default MovieDetails;
