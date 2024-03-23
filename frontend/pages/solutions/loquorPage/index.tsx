import React, { useState } from 'react';
import LoquorElementsContainer from '../../../components/loquorPageComponents/loquorElementsContainer';

import LoquorStatisticsContainer from '../../../components/loquorPageComponents/loquorStatisticsContainer';


import Seo from "../../../components/common/Seo";
import DefaultFooter from "../../../components/footer/DefaultFooter";
import DefaulHeader from "../../../components/header/DefaulHeader";
import SideBar from '../../../components/loquorPageComponents/sideBar';
import styles from './LoquorPage.module.css'; 


import FilteringBoxComponent from "../../../components/loquorPageComponents/filteringBoxComponent"



const loquorPage = () => {
    const [filters, setFilters] = useState([
        { label: 'Genre 1', checked: true },
        { label: 'Genre 2', checked: true },
    ]);

    const handleFilterChange = (changedFilter, isChecked) => {
        setFilters(filters.map(filter => {
            if (filter.label === changedFilter.label) {
                return { label: filter.label, checked: isChecked };
            }
            return filter;
        }));
    };
  
    return (
        <>
            <Seo pageTitle="loquorPage" />
            <DefaulHeader />

            <div className={styles.pageContainer}>
                <div className={styles.contentContainer}>
                    <div className={styles.flexWrap}>
                   
                    <div className={styles.mainContent}>
                            <LoquorStatisticsContainer/>
                        </div>

                        <div className={styles.mainContent}>
                            <FilteringBoxComponent/>
                        </div>

                        

                        <div  className={styles.mainContent} style={{marginTop:"30px"}}>
                            <LoquorElementsContainer filters={filters.filter(filter => filter.checked)} />
                        </div>
                    </div>
                </div>
                <img src="/images/shape/shape_172.svg" alt="shape"/>
            </div>

            <DefaultFooter />
        </>
    );
};

export default loquorPage;
