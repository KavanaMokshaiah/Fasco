import React, { useState, useEffect } from "react";
import styles from "../../styles/organisms/ProductPageTop.module.scss";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BsArrowDownUp } from "react-icons/bs";
import { BsFillShareFill } from "react-icons/bs";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TbTruckReturn } from "react-icons/tb";
import mainImageDefault from "../../assets/images/product-main.png";
import thumb1 from "../../assets/images/thumb1.png";
import thumb2 from "../../assets/images/thumb2.png";
import thumb3 from "../../assets/images/thumb3.png";
import thumb4 from "../../assets/images/thumb4.png";
import thumb5 from "../../assets/images/thumb5.png";
import thumb6 from "../../assets/images/thumb6.png";
import paymentcards from "../../assets/images/paymentcards.png";
import { Link } from "react-router-dom"; // Import Link for navigation

const ProductPageTop = ({ onAddToCart }) => {
  const thumbnails = [thumb1, thumb2, thumb3, thumb4, thumb5, thumb6];
  const sizes = ["M", "L", "XL", "XXL"];
  const colors = ["#000", "#7F7F7F", "#F9D5E5"];

  const [selectedImage, setSelectedImage] = useState(mainImageDefault);
  const [quantity, setQuantity] = useState(1);

  const [timeLeft, setTimeLeft] = useState(6 * 60 * 60); // 6 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (totalSeconds) => {
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
      2,
      "0"
    );
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `00 : ${hours} : ${minutes} : ${seconds}`;
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const [selectedSize, setSelectedSize] = useState(null);

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent default behavior
    onAddToCart(); // Handle adding to cart functionality
  };

  return (
    <div className={styles.productPage}>
      <div className={styles.imageSection}>
        <div className={styles.thumbnails}>
          {thumbnails.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`thumbnail-${i + 1}`}
              onClick={() => setSelectedImage(img)}
              className={selectedImage === img ? styles.activeThumb : ""}
            />
          ))}
        </div>
        <div className={styles.mainImage}>
          <img src={selectedImage} alt="Main product view" />
        </div>
      </div>

      <div className={styles.infoSection}>
        <h6 className={styles.brand}>FASCO</h6>
        <h2 className={styles.title}>Denim Jacket</h2>
        <div className={styles.rating}>
          ★★★★☆ <span>(3)</span>
        </div>

        <div className={styles.price}>
          <span className={styles.current}>$39.00</span>
          <span className={styles.old}>$59.00</span>
          <span className={styles.discount}>Save 33%</span>
        </div>

        <div className={styles.views}>
          👁️ 24 people are viewing this right now
        </div>

        <div className={styles.timerBox}>
          Hurry up! Sale ends in:{" "}
          <span className={styles.timer}>{formatTime(timeLeft)}</span>
        </div>

        <div className={styles.stockNotice}>
          <p>
            Only <b>9</b> item(s) left in stock!
          </p>
          <div className={styles.stockLine}></div>
        </div>
        <br />
        <div className={styles.selector}>
          <div className={styles.size}>
            <label>Size:</label>
            <br />
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSelectedSize(s)}
                className={selectedSize === s ? styles.activeSize : ""}
              >
                {s}
              </button>
            ))}
          </div>

          <div className={styles.color}>
            <label>Color:</label>
            {colors.map((c, i) => (
              <span key={i} style={{ backgroundColor: c }}></span>
            ))}
          </div>

          <div className={styles.qtyAndCart}>
            <div className={styles.qtyGroup}>
              <label>Quantity</label>
              <div className={styles.qtyCombo}>
                <button onClick={handleDecrement}>-</button>
                <span>{quantity}</span>
                <button onClick={handleIncrement}>+</button>
              </div>
            </div>

            <Link to="/minicart" className={styles.addToCart}>
              {" "}
              {/* Using Link for navigation */}
              Add to Cart
            </Link>
          </div>

          <div className={styles.actions}>
            <span>
              <BsArrowDownUp /> Compare
            </span>
            <span>
              <AiOutlineQuestionCircle /> Ask a question
            </span>
            <span>
              <BsFillShareFill /> Share
            </span>
          </div>
          <br />
        </div>

        <div className={styles.deliveryRow}>
          <LiaShippingFastSolid size={40} />
          <span className={styles.label}>Estimated Delivery:</span>
          <span className={styles.value}>Jul 30 - Aug 03</span>
        </div>

        <div className={styles.deliveryRow}>
          <TbTruckReturn size={40} />
          <span className={styles.label}>Free Shipping & Returns:</span>
          <span className={styles.value}>On all orders over $75</span>
        </div>

        <div className={styles.paymentlayout}>
          <div className={styles.payment}>
            <img src={paymentcards} alt="Accepted payment methods" />
            <p>Guarantee safe & secure checkout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPageTop;
