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
  const [favorites, setFavorites] = useState<string[]>([]);

  const totalPages = Math.ceil(gifs.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleGifsFetched = (fetchedGifs: Gif[]) => {
    setGifs(fetchedGifs);
    setCurrentPage(1); // Reset to the first page when new GIFs are fetched
  };

  const toggleFavorite = (gifId: string) => {
    if (favorites.includes(gifId)) {
      // If the GIF is already a favorite, remove it
      setFavorites(favorites.filter(id => id !== gifId));
    } else {
      // If the GIF is not a favorite, add it
      setFavorites([...favorites, gifId]);
    }
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
              <div className={styles.gifImageContainer}>
                <img src={gif.images.fixed_height.url} alt={gif.title} className={styles.gifImage} />
                <p className={styles.gifTitle}>{gif.title}</p>
              </div>
              <button onClick={() => toggleFavorite(gif.id)} className={favorites.includes(gif.id) ? styles.favorite : styles.notFavorite}>
                {favorites.includes(gif.id) ? "Remove from Favorites" : "Add to Favorites"}
              </button>
            </div>
          ))}
        </div>
        <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
      </div>
    </ProtectedRoute>
  );
};

export default GifSearchPage;
