/* eslint-disable react/prop-types */
import { Box, ListItem } from '@mui/material';
import React from 'react';

function Pagination({
  arrayPages, setCurrentPage, currentPage, quantityPages,
}) {
  const prevPage = () => {
    if (currentPage - 1 === 0) {
      setCurrentPage(quantityPages);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  const changePageTo = (n) => setCurrentPage(n);

  const nextPage = () => {
    if (currentPage + 1 > quantityPages) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <Box className="pagination-container-1">
      <Box className="pagination-prev-next" onClick={prevPage}>&#60;</Box>
      <ul className="pagination-number-container">
        {
        arrayPages?.map((num) => (
          <ListItem
            key={num}
            className={currentPage === num ? 'page-active pagination-number' : 'pagination-number'}
            onClick={() => changePageTo(num)}
          >
            {num}
          </ListItem>
        ))
        }
      </ul>
      <Box className="pagination-prev-next" onClick={nextPage}>&#62;</Box>
    </Box>
  );
}

export default Pagination;
