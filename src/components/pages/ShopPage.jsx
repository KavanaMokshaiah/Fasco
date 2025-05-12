import React, { useState } from "react";
import product1 from "../../assets/images/product1.png";
import product2 from "../../assets/images/product2.png";
import product3 from "../../assets/images/product3.png";
import product4 from "../../assets/images/product4.png";
import product5 from "../../assets/images/product5.png";
import product6 from "../../assets/images/product6.png";
import product7 from "../../assets/images/product7.png";
import product8 from "../../assets/images/product8.png";
import product9 from "../../assets/images/product9.png";
import NavbarCommon from "../../components/organisms/NavbarCommon";

import ProductCard from "../../components/molecules/ProductCardShop";
import FilterSidebar from "../../components/organisms/FilterSidebar";
import styles from "../../styles/pages/ShopPage.module.scss";
import Footer from "../organisms/Footer";
import ProductDetailPage from "../../components/organisms/ProductDetailPage";
import InstagramSection from "../../components/organisms/InstagramSection";
import NewsletterSection from "../../components/organisms/NewsletterSection";
// Example filter options
const sizes = ["S", "M", "L", "XL"];
const colors = [
  "#FFD700",
  "#000000",
  "#8DB4D2",
  "#FFD1DC",
  "#EBE6DB",
  "#C1E1C1",
  "#B1C5D4",
  "#063E66",
  "#C1E1C1",
  "#999999",
  "#FFD1DC",
  "#C6AEC7",
  "#FFFFFF",
  "#836953",
  "#C6AEC7",
  "#BEDCE3",
];
const brands = ["Minimog", "Retrolie Brook", "Learts", "Vagabond", "Abby"];
const collections = [
  "All products",
  "Best sellers",
  "New arrivals",
  "Accessories",
];
const tags = [
  "Fashion",
  "Hats",
  "Sandal",
  "Belt",
  "Bags",
  "Snacker",
  "Denim",
  "Minimog",
  "Vagabond",
  "Sunglasses",
  "Beachwear",
];

const initialProducts = [
  {
    id: 1,
    name: "Rounded Red Hat",
    price: 8.0,
    image: product1,
    colors: ["#FFD700", "#000000"],
    sizes: ["M", "L"],
    brand: "Minimog",
    collection: "All Products",
    tags: ["Hats"],
  },
  {
    id: 2,
    name: "Linen-blend Shirt",
    price: 17.0,
    image: product2,
    colors: ["#8DB4D2", "#FFD1DC"],
    sizes: ["S", "M"],
    brand: "Abby",
    collection: "Best sellers",
    tags: ["Minimog"],
  },

  {
    id: 3,
    name: "Long-sleeve Coat",
    price: 106.0,
    image: product3,
    colors: ["#EBE6DB", "#C1E1C1"],
    sizes: ["S", "xl", "M"],
    brand: "Learts",
    collection: "New arrivals",
    tags: ["Denim"],
  },

  {
    id: 4,
    name: "Boxy Denim Hat",
    price: 25.0,
    image: product4,
    colors: ["#B1C5D4", "#063E66"],
    sizes: ["XL", "L"],
    brand: "Vagabond",
    collection: "Accessories",
    tags: ["Hats"],
  },

  {
    id: 5,
    name: "Linen Plain Top",
    price: 25.0,
    image: product5,
    colors: ["#C1E1C1", "#999999"],
    sizes: ["S", "XL"],
    brand: "Retrolie Brook",
    collection: "New arrivals",
    tags: ["Vagabond"],
  },

  {
    id: 6,
    name: "Oversized T-Shirt",
    price: 11.0,
    image: product6,
    colors: ["#FFD1DC", "#C6AEC7", "#FFFFFF"],
    sizes: ["XL", "M"],
    brand: "Minimog",
    collection: "Best sellers",
    tags: ["Minimog"],
  },

  {
    id: 7,
    name: "Polarised Sunglasses",
    price: 18.0,
    image: product7,
    colors: ["#000000", "#836953"],
    sizes: ["L", "M"],
    brand: "Abby",
    collection: "Accessories",
    tags: ["Sunglasses"],
  },

  {
    id: 8,
    name: "Rockstar Jacket",
    price: 22.0,
    image: product8,
    colors: ["#C6AEC7", "#BEDCE3"],
    sizes: ["XL", "L"],
    brand: "Learts",
    collection: "All products",
    tags: ["Fashion"],
  },

  {
    id: 9,
    name: "Dotted Black Dress",
    price: 20.0,
    image: product9,
    colors: ["#063E66", "#000000", "#B1C5D4"],
    sizes: ["L", "M"],
    brand: "Vagabond",
    collection: "All products",
    tags: ["Denim"],
  },
];

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 200]);

  const categories = ["All"];
  const allColors = [...new Set(initialProducts.flatMap((p) => p.colors))];
  const allSizes = [...new Set(initialProducts.flatMap((p) => p.sizes))];
  const allBrands = [...new Set(initialProducts.map((p) => p.brand))];
  const allCollections = [...new Set(initialProducts.map((p) => p.collection))];
  const allTags = [...new Set(initialProducts.flatMap((p) => p.tags))];

  const filteredProducts = initialProducts.filter((product) => {
    const matchColor = !selectedColor || product.colors.includes(selectedColor);
    const matchSize = !selectedSize || product.sizes.includes(selectedSize);
    const matchBrand = !selectedBrand || product.brand === selectedBrand;
    const matchCollection =
      !selectedCollection || product.collection === selectedCollection;
    const matchTag = !selectedTag || product.tags.includes(selectedTag);
    const matchPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    return (
      matchColor &&
      matchSize &&
      matchBrand &&
      matchCollection &&
      matchTag &&
      matchPrice
    );
  });

  return (
    <>
      <NavbarCommon />
      <div className={styles.shopContainer}>
        <FilterSidebar
          colors={allColors}
          selectedColor={selectedColor}
          onColorChange={setSelectedColor}
          sizes={allSizes}
          selectedSize={selectedSize}
          onSizeChange={setSelectedSize}
          brands={allBrands}
          selectedBrand={selectedBrand}
          onBrandChange={setSelectedBrand}
          collections={allCollections}
          selectedCollection={selectedCollection}
          onCollectionChange={setSelectedCollection}
          tags={allTags}
          selectedTag={selectedTag}
          onTagChange={setSelectedTag}
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
        />

        <div className={styles.productsGrid}>
          {filteredProducts.map((product, index) => (
            <div key={product.id} className={styles.productWrapper}>
              {index === 0 && (
                <div className={styles.bestSellerLabel}>Best Seller</div>
              )}

              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
      <ProductDetailPage />
      <InstagramSection />
      <NewsletterSection />
      <Footer />
    </>
  );
};

export default ShopPage;
