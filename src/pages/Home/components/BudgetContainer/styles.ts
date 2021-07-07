import styled from 'styled-components';

export const Card = styled.div`
  padding: 1em 2em;
  display: grid;
  grid-template-columns: minmax(50px, 25%) 1fr;

  &.primary {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 3em;

    h4 {
      font-size: 28px;
      color: ${props => props.theme.palette.color.primary};
      margin-top: 0.2em;
    }

    img {
      width: 55px;
    }
  }
`;

export const CardWrapper = styled.div`
  display: grid;
  place-items: center;

  img {
    width: 35px;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;

  color: ${props => props.theme.palette.typography.secondary};

  p {
    color: ${props => props.theme.palette.typography.secondary};
  }

  h4 {
    color: ${props => props.theme.palette.typography.main};
  }
`;
