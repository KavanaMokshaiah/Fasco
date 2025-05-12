import React from "react";
import styles from "../../styles/organisms/NewArrivals.module.scss";

const ProductCard = ({ image, title, brand, rating, price, stock }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{brand}</p>
      <div className={styles.details}>
        <span className={styles.reviews}>(4.1k) Customer Reviews</span>
        <span className={styles.rating}>★★★★★</span>
      </div>
      <div className={styles.priceStock}>
        <span>{price}</span>
        <span className={styles.stock}>{stock}</span>
      </div>
    </div>
  );
};

export default ProductCard;
