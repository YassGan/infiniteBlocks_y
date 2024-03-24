import React, { useState } from 'react';
import styles from './MusicCard.module.css';

const MusicCard = ({ title, year, imageSrc, onPlay }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div 
      className={styles.musicCard} 
      onMouseEnter={() => setShowOverlay(true)} 
      onMouseLeave={() => setShowOverlay(false)}
    >
      <img
        src={imageSrc}
        alt={title}
        className={styles.musicCardImage}
      />
      
      <div className={`${styles.overlay} ${showOverlay ? styles.overlayVisible : ''}`}>
        <button
          className={styles.playButton}
          style={{display: showOverlay ? 'flex' : 'none'}}
          onClick={onPlay}
        >
          <svg
            className={styles.icon}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5 3l14 9-14 9V3z"></path>
          </svg>
        </button>
      </div>

      <div className={styles.cardInfo}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardYear}>{year} • Single</p>
      </div>
    </div>
  );
};

export default MusicCard;
