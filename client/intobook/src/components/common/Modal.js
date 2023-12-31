import { Box, Dialog, DialogContent } from "@mui/material";
import { DeleteLog } from './../bookInfo';
import { BookmarkInfo, CompleteReadingInfo } from './../home';
import { Tutorial, ReadingBooks, UpdateUsername } from "./";
import { styled } from 'styled-components';

const Modal = ({ openModal, setOpenModal, modalType, height = '430px', handleMethod, startExplode }) => {
  const closeModal = () => {
    setOpenModal(false);

    if (modalType === 'completeBook') {
      const modalVal = localStorage.getItem('hasCloseCompleteBookModal')
      if (modalVal === 'false') {
        localStorage.setItem('hasCloseCompleteBookModal', 'true');
      }
    }
  };

  return (
    <Box>
      <Dialog open={openModal} onClose={closeModal} PaperProps={{ style: { borderRadius: '20px', margin: 'auto' } }}>
        <DialogContents sx={{ width: '280px', height: `${height}`, padding: '20px' }}>
          {modalType === 'tutorial' && <Tutorial closeModal={closeModal} />}
          {modalType === 'readingBook' && <ReadingBooks closeModal={closeModal} />}
          {modalType === 'completeBook' && <CompleteReadingInfo closeModal={closeModal} startExplode={startExplode} />}
          {modalType === 'deleteLog' && <DeleteLog closeModal={closeModal} onDelete={handleMethod} />}
          {modalType === 'updateUsername' && <UpdateUsername closeModal={closeModal} />}
        </DialogContents>
      </Dialog>
    </Box>
  );
};

const DialogContents = styled(DialogContent)`
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

export default Modal;