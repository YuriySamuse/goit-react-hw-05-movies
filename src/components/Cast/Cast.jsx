import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'API';
import { List, Image } from 'components/Cast/Cast.styled';

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
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, [id]);

  const defaultImage = 'https://via.placeholder.com/200x300';

  return (
    <>
      {loading && <p>Loading...</p>}
      {!casts && <p>No actors for this Movie</p>}
      {casts && (
        <List>
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
        </List>
      )}
    </>
  );
};

export default Cast;
