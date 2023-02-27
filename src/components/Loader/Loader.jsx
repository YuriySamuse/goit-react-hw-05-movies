import FadeLoader from 'react-spinners/FadeLoader';

export const Loader = () => {
  return (
    <FadeLoader
      color="blue"
      loading="loading"
      size={100}
      cssOverride={{
        position: 'fixed',
        top: '50%',
        left: ' 50%',
        transform: 'translate(-50%, -50%)',
      }}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};
