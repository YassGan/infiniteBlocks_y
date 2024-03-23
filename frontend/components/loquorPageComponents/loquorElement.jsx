
'use client'
import React from 'react';
import styles from './LoquorElement.module.css'; // Adjust the path as necessary

const LoquorElement = ({ number, title, duration, imageUrl }) => {
  const handleMouseEnter = () => {
    document.getElementById(`number-${number}`).style.display = "none";
    document.getElementById(`play-button-${number}`).style.display = "block";
  };

  const handleMouseLeave = () => {
    document.getElementById(`number-${number}`).style.display = "block";
    document.getElementById(`play-button-${number}`).style.display = "none";
  };

  return (
    <div       onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
     className={styles.container}>
      <div className={styles.content}>
        <div className={styles.numberContainer}>
          <h5 id={`number-${number}`} className={styles.title}>
            {number}
          </h5>
          <img
            id={`play-button-${number}`}
            className={styles.playButton}
            src="/images/loquorImages/play2.png"
            alt="Play"
          />
        </div>
        <img src={imageUrl} alt="Album" className={styles.image} />
        <div className={styles.title}>{title}</div>
      </div>
      <div>
        <span className={styles.duration}>{duration}</span>
      </div>
    </div>
  );
};

export default LoquorElement;
