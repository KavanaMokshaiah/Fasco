import React from "react";
import styles from "../../styles/organisms/FilterSidebar.module.scss";

const FilterSidebar = ({
  colors,
  selectedColor,
  onColorChange,
  sizes,
  selectedSize,
  onSizeChange,
  brands,
  selectedBrand,
  onBrandChange,
  collections,
  selectedCollection,
  onCollectionChange,
  tags,
  selectedTag,
  onTagChange,
  priceRange,
  onPriceRangeChange,
}) => {
  return (
    <div className={styles.sidebar}>
      <p>Filters</p>

      <div className={styles.filterSection}>
        <h5>Size</h5>
        <ul>
          {sizes.map((size) => (
            <li
              key={size}
              className={selectedSize === size ? styles.active : ""}
              onClick={() => onSizeChange(selectedSize === size ? null : size)}
            >
              {size}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.filterSection}>
        <h5>Color</h5>
        <div className={styles.colorSwatches}>
          {colors.map((color) => (
            <div
              key={color}
              className={`${styles.swatch} ${
                selectedColor === color ? styles.active : ""
              }`}
              style={{ backgroundColor: color }}
              onClick={() =>
                onColorChange(selectedColor === color ? null : color)
              }
            />
          ))}
        </div>
      </div>

      <div className={styles.filterSection}>
        <h5>Price</h5>
        <ul>
          {[
            { label: "$0 - $50", range: [0, 50] },
            { label: "$50 - $100", range: [50, 100] },
            { label: "$150 - $200", range: [150, 200] },
            { label: "$300 - $400", range: [300, 400] },
          ].map(({ label, range }) => (
            <li
              key={label}
              className={
                priceRange[0] === range[0] && priceRange[1] === range[1]
                  ? styles.active
                  : ""
              }
              onClick={() =>
                onPriceRangeChange(
                  priceRange[0] === range[0] && priceRange[1] === range[1]
                    ? [0, 200]
                    : range
                )
              }
            >
              {label}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.filterSection}>
        <h5>Brand</h5>
        <ul>
          {brands.map((brand) => (
            <li
              key={brand}
              className={selectedBrand === brand ? styles.active : ""}
              onClick={() =>
                onBrandChange(selectedBrand === brand ? null : brand)
              }
            >
              {brand}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.filterSection}>
        <h5>Collection</h5>
        <ul>
          {collections.map((col) => (
            <li
              key={col}
              className={selectedCollection === col ? styles.active : ""}
              onClick={() =>
                onCollectionChange(selectedCollection === col ? null : col)
              }
            >
              {col}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.filterSection}>
        <h5>Tags</h5>
        <ul>
          {tags.map((tag) => (
            <li
              key={tag}
              className={selectedTag === tag ? styles.active : ""}
              onClick={() => onTagChange(selectedTag === tag ? null : tag)}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterSidebar;
