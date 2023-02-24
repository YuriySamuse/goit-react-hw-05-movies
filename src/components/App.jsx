import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';

const About = lazy(() => import('pages/About'));
const Home = lazy(() => import('pages/Home'));
const Mission = lazy(() => import('./Mission'));
const Team = lazy(() => import('./Team'));
const Reviews = lazy(() => import('./Reviews'));
const Products = lazy(() => import('pages/Products'));
const ProductDetails = lazy(() => import('pages/ProductDetails'));

/*
import Home from 'pages/Home';
import About from 'pages/About';
import Mission from './Mission';
import Team from './Team';
import Reviews from './Reviews';
import Products from 'pages/Products';
import ProductDetails from 'pages/ProductDetails';
*/

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
