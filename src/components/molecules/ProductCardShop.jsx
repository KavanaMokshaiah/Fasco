import React from 'react';
import styles from '../../styles/molecules/ProductCardShop.module.scss';

const ProductCardShop = ({ product }) => {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} className={styles.productImage} />
      <div className={styles.details}>
        <h6>{product.name}</h6>
        <p>${product.price}</p>
        <div className={styles.colorSwatches}>
  {product.colors.map((color, index) => (
    <div
      key={index}
      className={styles.swatch}
      style={{ backgroundColor: color }}
    />
  ))}
</div>

      </div>
    </div>
  );
};

export default ProductCardShop;
