import React from 'react';
import styles from './LoquorStatisticsComponent.module.css'; 

const LoquorStatisticsComponent = ({ title, numberOfLoquors, status }) => {
  const getStatusStyle = () => {
    if (status === 'positive') {
      return styles.positive;
    } else if (status === 'negative') {
      return styles.negative;
    } else if (status === 'all') {
      return styles.all;
    } else {
      return '';
    }
  };

  return (
    <div className={styles.box}>     
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.number}>Number of Loquors: {numberOfLoquors}</p>
      <p className={`${styles.status} ${getStatusStyle()}`}>
        Status: {status.charAt(0).toUpperCase() + status.slice(1)}
      </p>
    </div>
  );
};

export default LoquorStatisticsComponent;
