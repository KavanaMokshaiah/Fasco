import React from "react";
import styles from "../../styles/organisms/NewsletterSection.module.scss";
import leftModel from "../../assets/images/model-left.png";
import rightModel from "../../assets/images/model-right.png";
import { Button } from "react-bootstrap";

const NewsletterSection = () => {
  return (
    <section className={styles.newsletterSection}>
      <div className={styles.modelWrapper}>
        <img src={leftModel} alt="Left Model" className={styles.modelImage} />
        <div className={styles.contentWrapper}>
          <div className={styles.newsletterContent}>
            <h2>Subscribe To Our Newsletter</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis<br></br> ultrices sollicitudin aliquam sem.
              Scelerisque duis ultrices sollicitudin{" "}
            </p>
            <p className="input">michael@ymail.com</p>
          </div>
          <Button className={styles.subscribeButton}>Subscribe Now</Button>
        </div>
        <img src={rightModel} alt="Right Model" className={styles.modelImage} />
      </div>
    </section>
  );
};

export default NewsletterSection;
