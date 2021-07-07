import styled from 'styled-components';

export const Container = styled.div`
  padding: 1em 2em;
  display: grid;
  grid-template-columns: minmax(250px, 25%) 1fr;
`;

export const LeftContainer = styled.div`
  padding: 1em 2em;
  display: grid;
  place-items: center;
`;

export const RightContainer = styled.div`
  padding: 1em 2em;
  display: flex;
  flex-direction: column;
`;

export const BudgetRow = styled.div`
  display: flex;
  flex-direction: row;
`;
