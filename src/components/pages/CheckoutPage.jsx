import React, { useState } from "react";
import styles from "../../styles/pages/CheckoutPage.module.scss";
import sampleProduct from "../../assets/images/product-main.png";
import NavbarCommon from "../../components/organisms/NavbarCommon";
import Footer from "../../components/organisms/Footer";
import NewsletterSection from "../../components/organisms/NewsletterSection";

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    country: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    cardHolder: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) newErrors[key] = "This field is required";
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayNow = () => {
    if (validateForm()) {
      setShowModal(true);
    }
  };

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
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className={styles.error}>{errors.email}</span>
              )}
            </section>

            <section className={styles.deliverySection}>
              <h2>Delivery</h2>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select Country
                </option>
                <option value="IN">India</option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
              </select>
              {errors.country && (
                <span className={styles.error}>{errors.country}</span>
              )}

              <div className={styles.nameGroup}>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              {errors.firstName && (
                <span className={styles.error}>{errors.firstName}</span>
              )}
              {errors.lastName && (
                <span className={styles.error}>{errors.lastName}</span>
              )}

              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
              />
              {errors.address && (
                <span className={styles.error}>{errors.address}</span>
              )}

              <div className={styles.cityZipGroup}>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="postalCode"
                  placeholder="Postal Code"
                  value={formData.postalCode}
                  onChange={handleChange}
                />
              </div>
              {errors.city && (
                <span className={styles.error}>{errors.city}</span>
              )}
              {errors.postalCode && (
                <span className={styles.error}>{errors.postalCode}</span>
              )}

              <label className={styles.checkboxCustom}>
                <input type="checkbox" />
                <span className={styles.checkboxText}>
                  Save This Info For Future
                </span>
              </label>
            </section>

            <section className={styles.paymentSection}>
              <h2>Payment</h2>

              <select required defaultValue="">
                <option value="" disabled>
                  Credit Card
                </option>
                <option>Debit Card</option>
                <option>ATM</option>
              </select>

              <div className={styles.cardNumberGroup}>
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={formData.cardNumber}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="expiry"
                  placeholder="Expiration Date"
                  value={formData.expiry}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="cvv"
                  placeholder="Security Code"
                  value={formData.cvv}
                  onChange={handleChange}
                />
              </div>
              {errors.cardNumber && (
                <span className={styles.error}>{errors.cardNumber}</span>
              )}
              {errors.expiry && (
                <span className={styles.error}>{errors.expiry}</span>
              )}
              {errors.cvv && <span className={styles.error}>{errors.cvv}</span>}

              <input
                type="text"
                name="cardHolder"
                placeholder="Card Holder Name"
                value={formData.cardHolder}
                onChange={handleChange}
              />
              {errors.cardHolder && (
                <span className={styles.error}>{errors.cardHolder}</span>
              )}

              <label className={styles.checkboxCustom}>
                <input type="checkbox" />
                <span className={styles.checkboxText}>
                  Save This Info For Future
                </span>
              </label>

              <button
                type="button"
                onClick={handlePayNow}
                className={styles.payNowBtn}
              >
                Pay Now
              </button>

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

      {/* Modal */}
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h2>Payment Successful</h2>
            <p>Your order is placed.</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckoutPage;
