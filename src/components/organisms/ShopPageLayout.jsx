import React from "react";
import { Grid } from "@mui/material";
import Sidebar from "./Sidebar";
import ProductList from "./ProductList";
import PaginationBar from "../molecules/PaginationBar";

const ShopPageLayout = ({
  filters,
  onFilterChange,
  products,
  currentPage,
  totalPages,
  onPageChange,
  onSelectColor,
}) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        <Sidebar filters={filters} onFilterChange={onFilterChange} />
      </Grid>
      <Grid item xs={12} md={9}>
        <ProductList products={products} onSelectColor={onSelectColor} />
        <PaginationBar
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </Grid>
    </Grid>
  );
};

export default ShopPageLayout;
