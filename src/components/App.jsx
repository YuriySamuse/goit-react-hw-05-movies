import { Routes, Route, NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Home from 'pages/Home';
import About from 'pages/About';
import Products from 'pages/Products';
import ProductDetails from 'pages/ProductDetails';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const App = () => {
  const ProductDetails = () => {
    const { productId } = useParams();
    return <div>Now showing product with id - {productId}</div>;
  };

  return (
    <div>
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/products">Products</StyledLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
