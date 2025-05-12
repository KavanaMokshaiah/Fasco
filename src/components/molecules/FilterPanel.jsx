import React from 'react';
import styles from '../../styles/molecules/FilterPanel.module.scss';

const FilterPanel = ({ categories, selectedCategory, handleCategoryChange }) => {
  return (
    <div className={styles.filterPanel}>
      <h5>Category</h5>
      <ul>
        <li
          onClick={() => handleCategoryChange('All')}
          className={selectedCategory === 'All' ? styles.active : ''}
        >
          All
        </li>
        {categories.map((cat) => (
          <li
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={selectedCategory === cat ? styles.active : ''}
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterPanel;
