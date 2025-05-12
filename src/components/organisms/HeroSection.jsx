import React from "react";
import styles from "../../styles/organisms/HeroSection.module.scss";
import { useNavigate } from "react-router-dom";
// PNGs
import leftMan from "../../assets/images/left-top.png";
import rightMan from "../../assets/images/right-top.png";
import topGroup from "../../assets/images/right-bottom.png";
import bottomGirls from "../../assets/images/left-bottom.png";

// SVGs
import UltimateImg from "../../assets/icons/ultimate.svg";
import SaleImg from "../../assets/icons/sale.svg";
import ChanelLogo from "../../assets/icons/chanel.svg";
import LouisLogo from "../../assets/icons/louis.svg";
import PradaLogo from "../../assets/icons/prada.svg";
import CkLogo from "../../assets/icons/ck.svg";
import DenimLogo from "../../assets/icons/denim.svg";
import CartIcon from "../../assets/icons/cart.svg";
import ArrowUpIcon from "../../assets/icons/arrow-up.svg";

const HeroSection = () => {
  const navigate = useNavigate();
  const handleShopNowClick = () => {
    navigate("/shop");
  };
  return (
    <section className={styles.heroSection}>
      <div className={styles.grid}>
        <img src={leftMan} alt="Left Man" className={styles.leftImage} />

        <div className={styles.centerBlock}>
          <img src={topGroup} alt="Group" className={styles.topImage} />

          <div className={styles.textBlock}>
            <img src={UltimateImg} alt="Ultimate" className={styles.ultimate} />
            <img src={SaleImg} alt="Sale" className={styles.sale} />
            <p className={styles.newCollection}>NEW COLLECTION</p>
            <button className={styles.shopNow} onClick={handleShopNowClick}>
              SHOP NOW
            </button>
          </div>

          <img src={bottomGirls} alt="Girls" className={styles.bottomImage} />
        </div>

        <img src={rightMan} alt="Right Man" className={styles.rightImage} />
      </div>

      <div className={styles.brandLogos}>
        <img src={ChanelLogo} alt="Chanel" />
        <img src={LouisLogo} alt="Louis Vuitton" />
        <img src={PradaLogo} alt="Prada" />
        <img src={CkLogo} alt="Calvin Klein" />
        <img src={DenimLogo} alt="Denim" />
      </div>

      <div className={styles.rightImageWrapper}>
        <div className={styles.rightImageContainer}>
          <div className={styles.iconGroup}>
            <img
              src={CartIcon}
              alt="Cart"
              className={`${styles.icon} ${styles.cartIcon} ${styles.noBorder}`}
            />

            <img src={ArrowUpIcon} alt="Scroll Up" className={styles.icon} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
