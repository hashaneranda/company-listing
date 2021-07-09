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
  handleClose: () => any;
  showCloseBtn?: boolean;
}

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
const ModalComponent = ({ children, open = false, handleClose = () => null, showCloseBtn = false, ...props }: ModalComponentProps) => {
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
          {showCloseBtn ? <Image src={closeBtn.default} alt='close' onClick={handleClose} data-testid='modal_close' /> : ''}
          {children}
        </PaperWrapper>
      </Grow>
    </ModalComp>
  );
};

export default ModalComponent;
