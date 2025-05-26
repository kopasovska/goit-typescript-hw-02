import { useEffect, useState } from 'react';
import './App.css';
import toast from 'react-hot-toast';
import { fetchImages } from '../../services/api';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';



interface UnsplashImage {
  id: string;
  description: string | null;
  alt_description: string | null;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
}

interface FetchImagesResponse {
  total: number;
  total_pages: number;
  results: UnsplashImage[];
}

function App() {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isError, setIsError] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    if (!query) return;
    const abortController = new AbortController();
    const getImages = async () => {
      try {
        setLoading(true);
        const response: FetchImagesResponse = await fetchImages(query, page, abortController.signal);
        if (response.total === 0) {
          toast.error('Sorry, no results found for your query.');
        }
        setImages(prev => [...prev, ...response.results]);
        setTotalPages(response.total_pages);
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') {
    setIsError(true);
  }
      } finally {
        setLoading(false);
      }
    };
    getImages();
    return () => {
      abortController.abort();
    };
  }, [query, page]);

  const handleChangeQuery = (newQuery: string) => {
    if (newQuery.trim() === '') {
      toast.error('Query can not be empty!');
      return;
    }
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const updatePage = () => {
    setPage(prev => prev + 1);
  };

  const openModal = (url: string) => {
    setShowModal(true);
    setImageUrl(url);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <SearchBar handleChangeQuery={handleChangeQuery} />
      {query && !isError && <ImageGallery images={images} openModal={openModal} />}
      {isError && <ErrorMessage />}
      {loading && !isError && <Loader />}
      {page < totalPages && !loading && !isError && (
        <LoadMoreBtn clickHandler={updatePage} />
      )}
      {showModal && (
        <ImageModal closeModal={closeModal} isModalOpen={showModal} imageUrl={imageUrl} />
      )}
    </>
  );
}

export default App;