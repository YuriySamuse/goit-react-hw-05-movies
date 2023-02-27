import styled from 'styled-components';

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 16px;
`;

export const CardWrapper = styled.li`
  border: 1px solid black;
  border-radius: 4px;

  > a {
    text-decoration: none;
  }
`;
