import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Logo, Link } from './SharedLayout.styled';
import { Loader } from 'components/Loader/Loader';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{' '}
          Movies
        </Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
