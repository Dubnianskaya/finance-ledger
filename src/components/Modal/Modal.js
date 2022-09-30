import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { ModalTitle, BackLink } from './Modal.styled';
import sprite from '../../styles/assets/icons/icon-sprite.svg';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 310,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: '12px',
  p: 4,
  '@media (min-width: 768px)': {
    width: 400,
  },
};

export function BasicModal({ open, handleClose }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalTitle>Thank you!</ModalTitle>
          <p>Your form submission has been received.</p>
          <BackLink
            offset="200"
            href="#home"
            onClick={handleClose}
          >
            <svg width="10" height="10" fill="#28a745">
              <use href={`${sprite}#icon-arrow-back`}></use>
            </svg>
            Back to our site
          </BackLink>
        </Box>
      </Modal>
    </div>
  );
}
