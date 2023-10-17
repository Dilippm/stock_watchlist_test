import React from "react";

const Pagination = ({ totalItems, itemsPerPage, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <div key={number} onClick={() => paginate(number)} className={`page-number ${currentPage === number ? "active" : ""}`}>
          {number}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
