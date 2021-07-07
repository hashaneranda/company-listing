import styled from 'styled-components';
import tinycolor from 'tinycolor2';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 40em;
  padding: 1em 2em;

  line-height: 24px;
  overflow: hidden;
  position: relative;

  border-radius: 12px;
  box-shadow: 0 0 20px ${props => props.theme.palette.shadow.main}, 0 0px 40px ${props => props.theme.palette.shadow.secondary};

  ${props => props.theme.title === 'dark' && `background: ${props.theme.palette.background.secondary}`};

  &:hover {
    cursor: pointer;
    background: ${props => props.theme.palette.background.secondary};

    ${props =>
      props.theme.title === 'dark' && `background: ${tinycolor(props.theme.palette.background.secondary).lighten(5).toHexString()}`};
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  p {
    color: ${props => props.theme.palette.typography.secondary};
  }

  .date_container {
    display: flex;
    flex-direction: column;
    text-align: right;
  }
`;

export const CardBody = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  text-align: center;
`;
