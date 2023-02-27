import styled from 'styled-components';

export const CastList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 20px;
  padding: 20px;
  margin: 0;
  list-style: none;
`;

export const Image = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
`;
