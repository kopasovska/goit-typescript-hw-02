import ReactModal from 'react-modal';
import css from './ImageModal.module.css';

interface ImageModalProps {
  closeModal: (open: boolean) => void;
  isModalOpen: boolean;
  imageUrl: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ closeModal, isModalOpen, imageUrl }) => {
  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={() => closeModal(false)}
      contentLabel="Przykładowy modal"
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: '90vw',
          maxHeight: '90vh',
          objectFit: 'contain',
          overflow: 'hidden',
          padding: '0',
        },
      }}
    >
      <img src={imageUrl} className={css.modalImage} alt="modal content" />
    </ReactModal>
  );
};

export default ImageModal;