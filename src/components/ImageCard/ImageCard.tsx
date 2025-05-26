import css from './ImageCard.module.css';

type ImageCardProps = {
  id: string | number;
  description: string;
  urls: {
    small: string;
    regular: string;
  };
  onImageClick: (url: string) => void;
};

const ImageCard: React.FC<ImageCardProps> = ({ id, description, urls, onImageClick }) => {
  return (
    <div className={css.galleryItem}>
      <img
        src={urls.small}
        alt={description}
        onClick={() => onImageClick(urls.regular)}
      />
    </div>
  );
};

export default ImageCard;