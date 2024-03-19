import LoquorElementsContainer from '../../../components/loquorPageComponents/loquorElementsContainer';
import Seo from "../../../components/common/Seo";
import DefaultFooter from "../../../components/footer/DefaultFooter";
import DefaulHeader from "../../../components/header/DefaulHeader";
import SideBar from '../../../components/loquorPageComponents/sideBar';

import React, { useState } from 'react';

const loquorPage = () => {


    const [filters, setFilters] = useState([
      { label: 'Genre 1', checked: true },
      { label: 'Genre 2', checked: true },
    ]);
  
    const handleFilterChange = (changedFilter, isChecked) => {
      setFilters(filters.map(filter => {
        if (filter.label === changedFilter.label) {
          return {
            label: filter.label,
            checked: isChecked, 
          };
        }
        return filter;
      }));
    };
    



  return (
    <>
      <Seo pageTitle="Contact" />
      <DefaulHeader />

      <div style={{background:""}} className="pl-4 pr-4 fancy-feature-fiftyOne position-relative mt-150 lg-mt-150">
        <div className="container pt-10">
    




        </div>
        {/* /.container */}
        <img
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="shapes shape-two"
        />
      </div>

      <DefaultFooter />
    </>
  );
};

export default loquorPage;
