import React from "react";
import Grid from "@mui/material/Grid";
import ProductCard from "../../components/molecules/ProductCardShop";

const ProductList = ({ products, onSelectColor }) => {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={6} sm={4} md={3} key={product.id}>
          <ProductCard product={product} onSelectColor={onSelectColor} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
