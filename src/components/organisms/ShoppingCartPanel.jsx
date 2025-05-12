import React, { useState } from "react";
import styles from "../../styles/organisms/ShoppingCartPanel.module.scss";
import sampleProduct from "../../assets/images/product-main.png";
import { useNavigate } from "react-router-dom";

const ShoppingCartPanel = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const handleViewCart = () => navigate("/cart");
  const handleCheckout = () => navigate("/cart"); // both go to /cart as per your requirement

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.cartPanel}>
        <div className={styles.header}>
          <h2>Shopping Cart</h2>
          <p>
            Buy <strong>$122.35</strong> More And Get{" "}
            <strong>Free Shipping</strong>
          </p>
          <button className={styles.close}>×</button>
        </div>

        <div className={styles.cartItem}>
          <img src={sampleProduct} alt="Denim Jacket" />
          <div className={styles.itemDetails}>
            <h4>Denim Jacket</h4>
            <p>Color: Red</p>
            <span className={styles.price}>$14.80</span>
            <div className={styles.quantity}>
              <button onClick={decreaseQty}>-</button>
              <span>{String(quantity).padStart(2, "0")}</span>
              <button onClick={increaseQty}>+</button>
            </div>
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.giftWrap}>
          <input type="checkbox" id="gift" />
          <label htmlFor="gift">
            For <span>$10.00</span> Please Wrap The Product
          </label>
        </div>
        <hr className={styles.divider} />
        <div className={styles.total}>
          <span>Subtotal</span>
          <span>${(14.8 * quantity).toFixed(2)}</span>
        </div>

        <div className={styles.buttons}>
          <button className={styles.checkout} onClick={handleCheckout}>
            Checkout
          </button>
          <button className={styles.viewCart} onClick={handleViewCart}>
            View Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPanel;
