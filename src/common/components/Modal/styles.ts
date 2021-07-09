import styled from 'styled-components';

import { Modal, Paper } from '@material-ui/core';

export const ModalComp = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaperWrapper = styled(Paper)`
  position: relative;
  padding-top: 3em;
  background: ${props => props.theme.palette.background.secondary};
  color: ${props => props.theme.palette.typography.main};

  &:focus {
    outline: none;
  }
`;

export const Image = styled.img.attrs(props => ({
  src: props.src,
}))`
  position: absolute;
  right: 32px;
  top: 28px;

  width: 15px;
  height: 15px;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
