import React, { useState } from "react";
import styles from "../../styles/organisms/NewArrivals.module.scss";
import ProductCard from "./ProductCard";
import arrival1 from "../../assets/images/arrival1.png";
import arrival2 from "../../assets/images/arrival2.png";
import arrival3 from "../../assets/images/arrival3.png";
import arrival4 from "../../assets/images/arrival4.png";
import arrival5 from "../../assets/images/arrival5.png";
import arrival6 from "../../assets/images/arrival6.png";

const categories = [
  "Men's Fashion",
  "Women's Fashion",
  "Women Accessories",
  "Men Accessories",
  "Discount Deals",
];

const NewArrivals = () => {
  const [activeCategory, setActiveCategory] = useState("Women's Fashion");

  const products = [
    {
      title: "Shiny Dress",
      brand: "Al Karam",
      price: "$95.50",
      rating: 5,
      stock: "Almost Sold Out",
      image: arrival1,
    },
    {
      title: "Long Dress",
      brand: "Al Karam",
      price: "$95.50",
      rating: 5,
      stock: "Almost Sold Out",
      image: arrival2,
    },
    {
      title: "Full Sweater",
      brand: "Al Karam",
      price: "$95.50",
      rating: 5,
      stock: "Almost Sold Out",
      image: arrival3,
    },
    {
      title: "White Dress",
      brand: "Al Karam",
      price: "$95.50",
      rating: 5,
      stock: "Almost Sold Out",
      image: arrival4,
    },
    {
      title: "Colorful Dress",
      brand: "Al Karam",
      price: "$95.50",
      rating: 5,
      stock: "Almost Sold Out",
      image: arrival5,
    },
    {
      title: "White Shirt",
      brand: "Al Karam",
      price: "$95.50",
      rating: 5,
      stock: "Almost Sold Out",
      image: arrival6,
    },
  ];

  return (
    <section className={styles.newArrivals}>
      <h2>New Arrivals</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        duis<br></br> ultrices sollicitudin aliquam sem. Scelerisque duis
        ultrices sollicitudin{" "}
      </p>

      <div className={styles.tabs}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.tab} ${
              activeCategory === category ? styles.active : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.cardGrid}>
        {products.map((product, idx) => (
          <ProductCard key={idx} {...product} />
        ))}
      </div>

      <button className={styles.viewMore}>View More</button>
    </section>
  );
};

export default NewArrivals;
