import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReview } from 'API';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const renderReviews = async () => {
      setLoading(true);
      try {
        setReviews(await getReview(id));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    renderReviews();
  }, [id]);

  if (reviews === 0) {
    <p>No reviews on this Movie</p>;
  }

  return (
    <>
      {loading && <p>Loading...</p>}
      {!reviews && <h2>No reviews on this Movie </h2>}
      {reviews && (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
