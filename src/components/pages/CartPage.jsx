// export default CartPage;
import React from "react";
import styles from "../../styles/pages/CartPage.module.scss";
import sampleProduct from "../../assets/images/product-main.png";
import Footer from "../../components/organisms/Footer"; // Assuming you have a reusable footer
import NavbarCommon from "../../components/organisms/NavbarCommon";
import NewsletterSection from "../../components/organisms/NewsletterSection";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavbarCommon />
      <div className={styles.cartPageWrapper}>
        <h1 className={styles.title}>Shopping Cart</h1>
        <p className={styles.breadcrumb}>Home &gt; Your Shopping Cart</p>

        <div className={styles.table}>
          <div className={styles.tableHeader}>
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Total</span>
          </div>

          <div className={styles.tableRow}>
            <div className={styles.productInfo}>
              <img src={sampleProduct} alt="Mini Dress" />
              <div>
                <p className={styles.name}>Mini Dress With Ruffled Straps</p>
                <p className={styles.color}>Color: Red</p>
                <button className={styles.remove}>Remove</button>
              </div>
            </div>

            <span>$14.90</span>

            <div className={styles.quantityControls}>
              <button>-</button>
              <span>01</span>
              <button>+</button>
            </div>

            <span>$14.90</span>
          </div>
        </div>
        <hr className={styles.divider} />
        <div className={styles.summarySection}>
          <div className={styles.giftWrap}>
            <input type="checkbox" id="gift" />
            <label htmlFor="gift">
              For <strong>$10.00</strong> Please Wrap The Product
            </label>
          </div>
          <hr className={styles.divider} />
          <div className={styles.subtotalRow}>
            <span>Subtotal</span>
            <span>$100.00</span>
          </div>

          <div className={styles.buttonGroup}>
            <button
              className={styles.checkout}
              onClick={() => navigate("/checkout")}
            >
              Checkout
            </button>

            <button
              className={styles.viewCart}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              View Cart
            </button>
          </div>
        </div>
        <NewsletterSection />
        <Footer />
      </div>
    </>
  );
};

export default CartPage;
