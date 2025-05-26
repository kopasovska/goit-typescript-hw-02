import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
import type { UnsplashImage } from '../../services/api.types'

interface ImageGalleryProps {
  images: UnsplashImage[];
  openModal: (url: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <ul className={css.gallery}>
      {images.map(image => (
        <ImageCard
          key={image.id}
          id={image.id}
          description={image.description || ''} 
          urls={image.urls}
          onImageClick={openModal}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;