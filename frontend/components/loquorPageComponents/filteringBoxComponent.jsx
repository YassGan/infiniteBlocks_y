import React, { useState } from "react";
import styles from "./FilterComponent.module.css"; 

const FilteringBoxComponent = () => {
  const [tags, setTags] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("15");

  return (
    <div>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
        <h4>
          {" "}
          <input
            type="text"
            placeholder="Search "
            className={styles.searchBar}
        
          />
        </h4>
      </div>
      <div className={styles.filterContainer}>
        <div className={styles.backgroundc}>
          <select
            className={`${styles.filterInput} ${styles.tags}`}
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          >
            <option value="">Select a tag</option>
            <option value="NFT">NFT</option>
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
          </select>

          <input
            type="date"
            className={`${styles.filterInput} ${styles.date}`}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="range"
              className={`${styles.filterInput} ${styles.duration}`}
              min="0"
              max="15"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
            <span className={styles.durationDisplay}>{duration} minutes</span>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default FilteringBoxComponent;
