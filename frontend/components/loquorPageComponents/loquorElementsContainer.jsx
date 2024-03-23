import React, { useState } from "react";
import LoquorElement from "./LoquorElement"; // Ensure correct paths
import MusicCard from "./loquorCardElement"; // Ensure correct paths
import styles from './LoquorElementsContainer.module.css'; // Update the path as needed

const LoquorElementsContainer = ({ filters }) => {
  const trackList = [
    {
        number: "1",
        title: "Smart Contracts",
        duration: "2:34",
        imageUrl: "/images/loquorImages/1.jpeg",
        genre: "Genre 1",
    },
    {
        number: "2",
        title: "Blockchain Governance",
        duration: "3:45",
        imageUrl: "/images/loquorImages/3.jpeg",
        genre: "Genre 2",
    },
    {
        number: "3",
        title: "Cryptocurrency Regulation",
        duration: "4:56",
        imageUrl: "/images/loquorImages/2.jpg",
        genre: "Genre 1",
    },
];
    const [visibleTracks, setVisibleTracks] = useState(2);

    const showMore = () => setVisibleTracks(prev => prev + 2);
    const showLess = () => setVisibleTracks(2);
    const handlePlay = () => console.log('Play button clicked!');

    const filteredTracks = trackList.filter(track =>
        filters.some(filter => filter.checked && filter.label === track.genre)
    );

    return (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div className={styles.container}>
            <div className={styles.section}>
            <div className={styles.playButtonContainer}>
      <img src="/images/loquorImages/play2.png" alt="Play" className={styles.playButtonImage} />
    </div>
                <div className={`${styles.flexCenterColumn} ${styles.marginBottom32}`}>
                    <h2 className={styles.heading}>Popular</h2>
                    {filteredTracks.slice(0, visibleTracks).map((track, index) => (
                        <LoquorElement
                            key={index}
                            number={track.number}
                            title={track.title}
                            duration={track.duration}
                            imageUrl={track.imageUrl}
                        />
                    ))}
                    {visibleTracks < trackList.length && (
                        <button className={styles.button} onClick={showMore}>
                            See More
                        </button>
                    )}
                    {visibleTracks > 2 && (
                        <button className={styles.button} onClick={showLess}>
                            See Less
                        </button>
                    )}
                </div>

                <div className={styles.flexCenterColumn}>
                    <h2 className={styles.heading}>Latest Releases</h2>
                    <MusicCard 
                        title="BUMZ" 
                        year="2022" 
                        imageSrc="/images/loquorImages/3.jpeg" 
                        onPlay={handlePlay}
                    />
                </div>
            </div>
        </div>
        </div>
    );
};

export default LoquorElementsContainer;
