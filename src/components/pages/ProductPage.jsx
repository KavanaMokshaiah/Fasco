// import React from 'react'
import NavbarCommon from "../../components/organisms/NavbarCommon";
import ProductPageTop from "../../components/organisms/ProductPageTop";
import ProductDetailPage from "../../components/organisms/ProductDetailPage";
import DealsSection from "../../components/organisms/DealsSection";
import NewsletterSection from "../../components/organisms/NewsletterSection";
import Footer from "../../components/organisms/Footer";
import React, { useState } from "react";

const ProductPage = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const handleAddToCart = () => {
    setCartOpen(true);
  };
  return (
    <>
      <NavbarCommon />
      <ProductPageTop onAddToCart />
      <ProductDetailPage />
      <DealsSection />
      <NewsletterSection />
      <Footer />
    </>
  );
};

export default ProductPage;
