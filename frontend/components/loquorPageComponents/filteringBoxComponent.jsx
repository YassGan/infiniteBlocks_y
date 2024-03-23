import React, { useState } from "react";
import styles from "./FilterComponent.module.css"; // Adjust the path as necessary

const FilteringBoxComponent = () => {
  const [tags, setTags] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("15");

  // Add a handleSearch function if needed
  // const handleSearch = () => {
  //   // Implement your search logic here
  // };

  return (
    <div>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
        <h4>
          {" "}
          <input
            type="text"
            placeholder="Search "
            className={styles.searchBar}
            // value={searchTerm} // If you have a searchTerm state
            // onChange={e => setSearchTerm(e.target.value)} // If you have a setSearchTerm handler
          />
        </h4>
      </div>
      <div className={styles.filterContainer}>
        <div className={styles.backgroundc}>
          {/* Dropdown for tags */}
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

          {/* Date input */}
          <input
            type="date"
            className={`${styles.filterInput} ${styles.date}`}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          {/* Range input for duration */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="range"
              className={`${styles.filterInput} ${styles.duration}`}
              min="0"
              max="15"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
            {/* Display the selected duration value */}
            <span className={styles.durationDisplay}>{duration} minutes</span>
          </div>

          {/* Search input */}

          {/* Uncomment below when you have the handleSearch function implemented */}
          {/* <button onClick={handleSearch} className={styles.searchButton}>
            Go
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default FilteringBoxComponent;
