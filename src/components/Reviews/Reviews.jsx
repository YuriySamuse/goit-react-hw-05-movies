import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReview } from 'API';
import { ReviewsList, ReviewsCard } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      try {
        setReviews(await getReview(id));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [id]);

  console.log('reviews', reviews);
  // const { results } = reviews;
  return (
    <section>
      {loading && <p>Loading...</p>}

      {reviews ? (
        <ReviewsList>
          {reviews.map(({ id, author, content }) => (
            <ReviewsCard key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </ReviewsCard>
          ))}
        </ReviewsList>
      ) : (
        <h2>No reviews on this Movie </h2>
      )}
    </section>
  );
};

export default Reviews;
