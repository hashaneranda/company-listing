import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 40em;
  padding: 1em 2em;

  line-height: 24px;
  overflow: hidden;
  position: relative;

  background: ${props => props.theme.palette.background.secondary};

  border-radius: 12px;
  box-shadow: 0 0 20px ${props => props.theme.palette.shadow.main}, 0 0px 40px ${props => props.theme.palette.shadow.secondary};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2em 0;

  .budget_edit__btn {
    height: 1em;
    margin-top: 1em;
  }
`;
