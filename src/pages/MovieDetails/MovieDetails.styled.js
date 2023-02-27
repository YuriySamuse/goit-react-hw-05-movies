import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Details = styled.section`
  padding: 20px;
`;

export const BackButton = styled.button`
  padding: 8px 16px;
  font-weight: 500;
  font-size: 15px;
  text-decoration: none;
  border: 1px;
  border-radius: 4px;
  background-color: orangered;
  color: white;
  padding: 5px;
`;

export const Linked = styled(Link)`
  font-size: 15px;
  text-decoration: none;
  border: 1px;
  border-radius: 4px;
  background-color: orangered;
  color: white;
  padding: 5px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
`;
