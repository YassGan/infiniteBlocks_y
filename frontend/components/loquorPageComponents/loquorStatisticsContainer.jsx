import React, { useState } from "react";
import LoquorStatisticsComponent from "./loquorStatisticsComponent"; // Ensure correct paths
import styles from './loquorStatisticsContainer.module.css'; // Update the path as needed

const loquorStatisticsContainer = () => {


  

    return (
        <div className={styles.container}>

            <LoquorStatisticsComponent  title={"Positive Podcasts"} numberOfLoquors={15} status={"positive"} />
            <LoquorStatisticsComponent  title={"Negative Podcasts"} numberOfLoquors={15} status={"negative"} />
            <LoquorStatisticsComponent  title={"All Podcasts"} numberOfLoquors={15} status={"all"} />

        </div>
    );
};

export default loquorStatisticsContainer;
