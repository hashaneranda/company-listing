import React from 'react';

import { ModalProps } from '@material-ui/core/Modal';
import { Grow } from '@material-ui/core';

//assets
import { closeBtn } from 'config/images';

//styles
import { ModalComp, PaperWrapper, Image } from './styles';

interface ModalComponentProps extends ModalProps {
  open: boolean;
  // children: React.ReactNode | React.ReactNode[],
  handleClose: Function;
  showCloseBtn?: boolean;
}

const defaultProps = {
  open: false,
  handleClose: () => {},
  showCloseBtn: false,
};

/**
 *Modal Component
 *
 * @param {*} {
 *   children - modal body,
 *   open = false - modal open status,
 *   handleClose = () => {} - function to close modal,
 *   showCloseBtn = false - show default close button,
 *   ...props
 * }
 * @returns Modal Component
 */
const ModalComponent = ({
  children,
  open = false,
  handleClose = () => {},
  showCloseBtn = false,
  ...props
}: ModalComponentProps & typeof defaultProps) => {
  return (
    <ModalComp
      aria-labelledby='simple-modal-title'
      aria-describedby='simple-modal-description'
      open={open}
      onClose={handleClose}
      {...props}
    >
      <Grow in={open}>
        <PaperWrapper>
          {showCloseBtn ? <Image src={closeBtn} alt='close' onClick={handleClose} /> : ''}
          {children}
        </PaperWrapper>
      </Grow>
    </ModalComp>
  );
};

export default ModalComponent;
