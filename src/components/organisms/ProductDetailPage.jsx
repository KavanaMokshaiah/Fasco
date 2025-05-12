import React, { useState } from "react";
import modelImage from "../../assets/images/peaky-model.png";
import QualityIcon from "../../assets/icons/quality.svg";
import WarrantyIcon from "../../assets/icons/warranty.svg";
import ShippingIcon from "../../assets/icons/shipping.svg";
import SupportIcon from "../../assets/icons/support.svg";
import styles from "../../styles/organisms/ProductDetailPage.module.scss";

const ProductDetailPage = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const handleAddToCart = () => {
    setCartOpen(true); // this opens the mini cart sidebar
  };

  return (
    <div className={styles.productDetail}>
      <div className={styles.productDetailMain}>
        <div className={styles.left}>
          <div style={{ position: "relative" }}>
            <img
              src={modelImage}
              alt="Peaky Blinders Outfit"
              className={styles.model}
            />
            <div className={styles.labels}>
              <span className={`${styles.label} ${styles.label1}`}>
                Flat Cap
              </span>
              <span className={`${styles.label} ${styles.label2}`}>
                Suspender
              </span>
              <span className={`${styles.label} ${styles.label3}`}>
                Hugo Boss
              </span>
              <span className={`${styles.label} ${styles.label4}`}>
                Santoni
              </span>
            </div>
          </div>
        </div>

        <div className={styles.productDetailRight}>
          <p className={styles.collection}>Women Collection</p>
          <h2 className={styles.title}>Peaky Blinders</h2>
          <a href="#desc" className={styles.descLink}>
            DESCRIPTION
          </a>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>{" "}
            Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque{" "}
            <br></br>duis ultrices sollicitudin. Lorem ipsum dolor sit amet,
            consectetur<br></br> adipiscing elit. Scelerisque duis.
          </p>
          <div className={styles.size}>
            <span>Size:</span> <button className={styles.sizeBtn}>M</button>
          </div>
          <div className={styles.price}>$100.00</div>
          <button className={styles.buyBtn}>Buy Now</button>
        </div>
      </div>

      <div className={styles.productDetailFeatures}>
        <div className={styles.feature}>
          <img src={QualityIcon} alt="High Quality" />

          <strong>High Quality</strong>
          <p>Top-notch materials and design</p>
        </div>
        <div className={styles.feature}>
          <img src={WarrantyIcon} alt="Warranty Protection" />
          <strong>Warranty</strong>
          <p>One year protection</p>
        </div>
        <div className={styles.feature}>
          <img src={ShippingIcon} alt="Free Shipping" />
          <strong>Free Shipping</strong>
          <p>Available on all orders</p>
        </div>
        <div className={styles.feature}>
          <img src={SupportIcon} alt="24/7 Support" />
          <strong>24/7 Support</strong>
          <p>We're here to help anytime</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
