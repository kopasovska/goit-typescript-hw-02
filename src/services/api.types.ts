export interface UnsplashImage {
  id: string;
  alt_description: string | null;
  description: string | null;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
}

export interface UnsplashResponse {
  total: number;
  total_pages: number;
  results: UnsplashImage[];
}