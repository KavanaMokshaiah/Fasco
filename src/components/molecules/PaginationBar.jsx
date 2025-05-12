import React from 'react';
import { Pagination } from '@mui/material';

const PaginationBar = ({ currentPage, totalPages, onPageChange }) => (
  <Pagination
    count={totalPages}
    page={currentPage}
    onChange={(event, page) => onPageChange(page)}
    variant="outlined"
    shape="rounded"
    color="primary"
  />
);

export default PaginationBar;
