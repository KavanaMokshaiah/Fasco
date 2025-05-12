import React, { useState } from "react";
import NavbarCommon from "../../components/organisms/NavbarCommon";
import ProductPageTop from "../../components/organisms/ProductPageTop";
import ShoppingCartPanel from "../../components/organisms/ShoppingCartPanel";
const MiniCartPage = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <div style={{ filter: cartOpen ? "blur(1px)" : "none" }}>
        <NavbarCommon />
        <ProductPageTop />
      </div>
      <ShoppingCartPanel />{" "}
    </>
  );
};

export default MiniCartPage;
