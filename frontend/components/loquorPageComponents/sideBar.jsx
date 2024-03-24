import React from 'react';
import styles from './Sidebar.module.css'; 

const FilterSidebar = ({ filters, onFilterChange }) => {
  return (
    <aside className={styles.aside}>
      <div className={styles.container}>
        <h4 className={styles.title}>Filter by:</h4>
        {filters.map((filter, index) => (
          <div key={index} className={styles.label}>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={filter.checked}
                onChange={(e) => onFilterChange(filter, e.target.checked)}
              />
              <span className={styles.span}>{filter.label}</span>
            </label>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default FilterSidebar;
