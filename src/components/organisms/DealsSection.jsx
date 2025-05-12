import React, { useEffect, useState } from "react";
import styles from "../../styles/organisms/DealsSection.module.scss";
import leftArrow from "../../assets/icons/left-arrow.svg";
import rightArrow from "../../assets/icons/right-arrow.svg";
import img1 from "../../assets/images/deal1.png";
import img2 from "../../assets/images/deal2.png";
import img3 from "../../assets/images/deal3.png";

const images = [img1, img2, img3];

const DealsSection = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const targetDate = new Date(Date.now() + 2 * 86400000); 
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      const time = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
          2,
          "0"
        ),
        hours: String(
          Math.floor((difference / (1000 * 60 * 60)) % 24)
        ).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
          2,
          "0"
        ),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };

      setTimeLeft(time);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className={styles.dealsSection}>
      <div className={styles.leftBlock}>
        <h2>Deals Of The Month</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem.
        </p>
        <button className={styles.buyNow}>Buy Now</button>

        <div className={styles.timer}>
          <h4>Hurry, Before It’s Too Late!</h4>
          <div className={styles.timeGrid}>
            <div>
              <span>{timeLeft.days}</span>
              <p>Days</p>
            </div>
            <div>
              <span>{timeLeft.hours}</span>
              <p>Hr</p>
            </div>
            <div>
              <span>{timeLeft.minutes}</span>
              <p>Mins</p>
            </div>
            <div>
              <span>{timeLeft.seconds}</span>
              <p>Sec</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.carouselBlock}>
        <div className={styles.slider}>
          <img
            src={leftArrow}
            alt="prev"
            onClick={prevSlide}
            className={styles.arrowLeft}
          />

          {images.map((image, idx) => (
            <div key={idx} className={styles.slideWrapper}>
              <img
                src={image}
                alt={`Slide ${idx + 1}`}
                className={`${styles.slideImage} ${
                  currentSlide === idx ? styles.activeSlide : ""
                }`}
              />
              {currentSlide === idx && (
                <div className={styles.caption}>
                  <span>01 — Spring Sale</span>
                  <strong>30% OFF</strong>
                </div>
              )}
            </div>
          ))}

          <img
            src={rightArrow}
            alt="next"
            onClick={nextSlide}
            className={styles.arrowRight}
          />
        </div>

        <div className={styles.dots}>
          {images.map((_, idx) => (
            <span
              key={idx}
              className={currentSlide === idx ? styles.active : ""}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
