import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage.jsx";
import HomePage from "./components/pages/HomePage.jsx";
import ShopPage from "./components/pages/ShopPage.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductPage from "./components/pages/ProductPage.jsx";
import MiniCartPage from "./components/pages/MiniCartPage.jsx";
import CartPage from "./components/pages/CartPage.jsx";
import CheckoutPage from "./components/pages/CheckoutPage.jsx";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/minicart" element={<MiniCartPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Router>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
