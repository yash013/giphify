import React, { useState, ChangeEvent } from 'react';
import giphyService from '../gipy/giphyService';
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

interface GifSearchProps {
  onGifsFetched: (gifs: Gif[]) => void;
}

const GifSearch: React.FC<GifSearchProps> = ({ onGifsFetched }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [gifs, setGifs] = useState<Gif[]>([]);

  const handleSearch = async () => {
    try {
      const response = await giphyService.get('/search', {
        params: {
          q: searchTerm,
        },
      });
      const fetchedGifs = response.data.data;
      setGifs(fetchedGifs); 
      onGifsFetched(fetchedGifs);
    } catch (error) {
      console.error('Error searching for GIFs:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>GIF Search</h2>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search for GIFs"
          value={searchTerm}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
        <button className={styles.searchButton} onClick={handleSearch}>
          Search
        </button>
      </div>
      {/* <div className={styles.gifGrid}>
       { gifs.map((gif) => (
          <div key={gif.id} className={styles.gifCard}>
            <img src={gif.images.fixed_height.url} alt={gif.title} className={styles.gifImage} />
            <p className={styles.gifTitle}>{gif.title}</p>
          </div>
        ))}
      </div> */}

    </div>
  );
};

export default GifSearch;
