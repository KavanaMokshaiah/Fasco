import React from "react";
import styles from "../../styles/organisms/InstagramSection.module.scss";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.png";
import img6 from "../../assets/images/img6.png";
import img7 from "../../assets/images/img7.png";

const InstagramSection = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <div className={styles["instagram-section"]}>
      <div className={styles["text-block"]}>
        <h2>Follow Us on Instagram</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin{" "}
        </p>
      </div>
      <div className={styles["images-row"]}>
        {images.map((img, index) => (
          <div
            className={`${styles["image-wrapper"]} ${
              index % 2 === 0 ? styles["zoom-out"] : styles["zoom-in"]
            }`}
            key={index}
          >
            <img src={img} alt={`Instagram ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramSection;
