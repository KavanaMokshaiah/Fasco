// src/components/pages/LoginPage.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LoginForm from "../organisms/LoginForm";
import SocialLoginButtons from "../molecules/SocialLoginButtons";
import loginImage from "../../assets/images/login-image.png";
import styles from "../../styles/pages/LoginPage.module.scss";

const LoginPage = () => (
  <div className={styles.loginWrapper}>
    <Container fluid>
      <Row className={styles.loginContainer}>
        <Col md={6} className={styles.loginImage}>
          <img src={loginImage} alt="login" />
        </Col>
        <Col md={6} className={styles.loginFormContainer}>
          <h1 className={styles.textHeading}>FASCO</h1>
          <p className={styles.textSubheading}>Sign In To FASCO</p>
          <SocialLoginButtons />
          <br></br>
          <div className={styles.divider}>— OR —</div>
          <LoginForm />
        </Col>
      </Row>
    </Container>
  </div>
);

export default LoginPage;
