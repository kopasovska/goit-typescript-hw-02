import { createApi} from 'unsplash-js';
import type { UnsplashResponse } from './api.types';

const unsplash = createApi({
  accessKey: 'FCQM0HzmLw2cahePUMRPFI30vXHyHsDkDgb0eCSUTU8',
});

export const fetchImages = async (
  query: string,
  page: number,
  signal?: AbortSignal
): Promise<UnsplashResponse> => {
  const response = await unsplash.search.getPhotos(
    { query, page, perPage: 10 },
    { signal }
  );

  if (response.status === 401) {
    throw new Error('Unauthorized request. Please check your API key or token.');
  }
  if (!response.response) {
    throw new Error('Server returned undefined');
  }

  return response.response as UnsplashResponse;
};