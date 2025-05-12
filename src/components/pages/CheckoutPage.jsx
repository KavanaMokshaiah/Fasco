import React from "react";
import styles from "../../styles/pages/CheckoutPage.module.scss";
import sampleProduct from "../../assets/images/product-main.png";
import NavbarCommon from "../../components/organisms/NavbarCommon";
import Footer from "../../components/organisms/Footer";
import NewsletterSection from "../../components/organisms/NewsletterSection";
import CardIcon from "../../assets/icons/card.svg";
const CheckoutPage = () => {
  return (
    <>
      <NavbarCommon />
      <div className={styles.checkoutWrapper}>
        <h1 className={styles.heading}>FASCO Demo Checkout</h1>
        <hr className={styles.divider} />
        <div className={styles.checkoutGrid}>
          {/* Left Side - Forms */}
          <div className={styles.checkoutForm}>
            <section className={styles.contactSection}>
              <h2>Contact</h2>
              <p>
                Have an account? <a href="#">Create Account</a>
              </p>
              <input type="email" placeholder="Email Address" />
            </section>

            <section className={styles.deliverySection}>
              <h2>Delivery</h2>
              <select required defaultValue="">
                <option value="" disabled>
                  Select Country
                </option>
                <option value="IN">India</option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
              </select>

              <div className={styles.nameGroup}>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <input type="text" placeholder="Address" />
              <div className={styles.cityZipGroup}>
                <input type="text" placeholder="City" />
                <input type="text" placeholder="Postal Code" />
              </div>
              <label className={styles.checkboxLabelend}>
                <input type="checkbox" />
                <span>Save This Info For Future</span>
              </label>
            </section>

            <section className={styles.paymentSection}>
              <h2>Payment</h2>

              <select required defaultValue="">
                <option value="" disabled>
                  Credit Card
                  <img
                    src={CardIcon}
                    alt="Card Icon"
                    className={styles.cardIcon}
                  />
                </option>
                <option>Debit Card</option>
                <option>ATM</option>
              </select>

              <div className={styles.cardNumberGroup}>
                <input type="text" placeholder="Card Number" />
                <input type="text" placeholder="Expiration Date" />
                <input type="text" placeholder="Security Code" />
              </div>
              <input type="text" placeholder="Card Holder Name" />
              <label className={styles.checkboxLabelend}>
                <input type="checkbox" />
                <span>Save This Info For Future</span>
              </label>

              <button className={styles.payNowBtn}>Pay Now</button>
              <p className={styles.copyright}>
                Copyright © 2023 FASCO. All Rights Reserved.
              </p>
            </section>
          </div>

          {/* Right Side - Order Summary */}
          <div className={styles.summarySection}>
            <div className={styles.cartItem}>
              <img src={sampleProduct} alt="product" />
              <div className={styles.itemDetails}>
                <div>
                  <p className={styles.productName}>
                    Mini Dress With Ruffled Straps
                  </p>
                  <p className={styles.productColor}>Red</p>
                </div>
                <p className={styles.productPrice}>$100.00</p>
              </div>
            </div>

            <div className={styles.discount}>
              <input type="text" placeholder="Discount code" />
              <button className={styles.applyBtn}>Apply</button>
            </div>

            <div className={styles.pricing}>
              <div className={styles.row}>
                <span>Subtotal</span>
                <span>$100.00</span>
              </div>
              <div className={styles.row}>
                <span>Shipping</span>
                <span>$40.00</span>
              </div>
              <div className={styles.totalRow}>
                <span>Total</span>
                <span>$140.00</span>
              </div>
            </div>
          </div>
        </div>
        <NewsletterSection />
        <Footer />
      </div>
    </>
  );
};

export default CheckoutPage;
