import React from "react";
import Button from "@mui/material/Button";
import styles from "../../styles/molecules/SocialLoginButtons.module.scss";
import googleIcon from "../../assets/icons/google-icon.svg";
import emailIcon from "../../assets/icons/email-icon.svg";

const SocialLoginButtons = () => (
  <div className={styles.socialButtons}>
    <Button
      variant="outlined"
      className={styles.customButton}
      startIcon={<img src={googleIcon} alt="Google" className={styles.icon} />}
    >
      Sign up with Google
    </Button>
    <Button
      variant="outlined"
      className={styles.customButton}
      startIcon={<img src={emailIcon} alt="Email" className={styles.icon} />}
    >
      Sign up with Email
    </Button>
  </div>
);

export default SocialLoginButtons;
