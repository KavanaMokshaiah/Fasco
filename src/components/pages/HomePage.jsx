// src/components/pages/HomePage.jsx
import React from "react";
import Navbar from "../organisms/Navbar";
import HeroSection from "../organisms/HeroSection";
import styles from "../../styles/pages/HomePage.module.scss";
import DealsSection from "../organisms/DealsSection";
import NewArrivals from "../organisms/NewArrivals";
import ProductCard from "../organisms/ProductCard";
import ProductDetailPage from "../organisms/ProductDetailPage";
import InstagramSection from "../organisms/InstagramSection";
import TestimonialsCarousel from "../organisms/TestimonialsCarousel";
import NewsletterSection from "../organisms/NewsletterSection";
import Footer from "../organisms/Footer";
const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Navbar />
      <HeroSection />
      <DealsSection />
      <NewArrivals />
      <ProductCard />
      <ProductDetailPage />
      <InstagramSection />
      <TestimonialsCarousel />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default HomePage;
