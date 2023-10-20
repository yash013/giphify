import React from 'react';
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

interface FavoritesProps {
  favoriteGifs: Gif[]; // Assuming you have a Gif interface defined
}

const Favorites: React.FC<FavoritesProps> = ({ favoriteGifs }) => {
  return (
    <div>
      <h2 id="favorites-title" className={styles.heading}>Favorites</h2>
      <div className={styles.gifGrid}>
        {favoriteGifs.map((gif) => (
          <div key={gif.id} className={styles.gifCard}>
            <img src={gif.images.fixed_height.url} alt={gif.title} className={styles.gifImage} />
            <p className={styles.gifTitle}>{gif.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
