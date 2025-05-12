import React, { useState } from "react";
import styles from "../../styles/organisms/TestimonialsCarousel.module.scss";
import user1 from "../../assets/images/user1.png";
import user2 from "../../assets/images/user2.png";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Photographer",
    text: "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
    image: user2,
  },
  {
    name: "James K.",
    role: "Traveler",
    text: "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
    image: user1,
  },
  {
    name: "Megen W.",
    role: "Fashion Designer",
    text: "“Just what I was looking for. Thank you for making it painless, pleasant and most of all hassle free! All products are great.”",
    image: user2,
  },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const getClass = (index) => {
    if (index === currentIndex) return styles.active;
    if (index === (currentIndex + 1) % testimonials.length) return styles.right;
    if (
      index ===
      (currentIndex - 1 + testimonials.length) % testimonials.length
    )
      return styles.left;
    return styles.hidden;
  };

  return (
    <section className={styles.testimonials}>
      <div className={styles.header}>
        <h2>This Is What Our Customers Say</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis
        </p>
      </div>

      <div className={styles.carouselWrapper}>
        <div className={styles.carousel}>
          {testimonials.map((item, index) => (
            <div key={index} className={`${styles.card} ${getClass(index)}`}>
              <img src={item.image} alt={item.name} />
              <div className={styles.content}>
                <p>{item.text}</p>
                <div className={styles.stars}>★★★★★</div>
                <hr />
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.controls}>
          <button onClick={handlePrev}>&larr;</button>
          <button onClick={handleNext}>&rarr;</button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
