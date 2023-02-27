import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'API';
import { CastList, Image } from 'components/Cast/Cast.styled';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const [casts, setCasts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      setLoading(true);
      try {
        setCasts(await getCast(id));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, [id]);

  // console.log('casts', casts);

  const defaultImage = 'https://via.placeholder.com/200x300';

  return (
    <>
      {loading && <Loader />}
      {casts && casts.length > 0 ? (
        <CastList>
          {casts.map(({ id, character, name, profile_path }) => (
            <li key={id}>
              <Image
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : defaultImage
                }
                alt={name}
              ></Image>
              <div>
                <p>{character}</p>
                <p>{name}</p>
              </div>
            </li>
          ))}
        </CastList>
      ) : (
        <div>
          <h2>No actors for this Movie</h2>
        </div>
      )}
    </>
  );
};

export default Cast;
