import React, { useState } from 'react';
import GifSearch from '../components/GifSearch';
import ProtectedRoute from '../components/ProtectedRoute';
import Pagination from '../components/Pagination';
import styles from '../styles/GifSearch.module.css';

interface Gif {
  id: string;
  title: string;
  images: {
    fixed_height: {
      url: string;
    };
  };
}

const GifSearchPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const [gifs, setGifs] = useState<Gif[]>([]);

  const totalPages = Math.ceil(gifs.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleGifsFetched = (fetchedGifs: Gif[]) => {
    setGifs(fetchedGifs);
    setCurrentPage(1); // Reset to the first page when new GIFs are fetched
  };

  const indexOfLastGif = currentPage * itemsPerPage;
  const indexOfFirstGif = indexOfLastGif - itemsPerPage;
  const currentGifs = gifs.slice(indexOfFirstGif, indexOfLastGif);

  return (
    <ProtectedRoute>
      <div>
        <GifSearch onGifsFetched={handleGifsFetched} />
        <div className={styles.gifGrid}>
          {currentGifs.map((gif) => (
            <div key={gif.id} className={styles.gifCard}>
              <img src={gif.images.fixed_height.url} alt={gif.title} className={styles.gifImage} />
              <p className={styles.gifTitle}>{gif.title}</p>
            </div>
          ))}
        </div>
        <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
      </div>
    </ProtectedRoute>
  );
};

export default GifSearchPage;
