import React from 'react';

const Pagination = ({ imagesPerPage, totalImages, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalImages / imagesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="pagination">
      {pageNumbers.map(pageNumber => (
        <li key={pageNumber} className="page-item">
          <a
            href="!#"
            onClick={() => paginate(pageNumber)}
            className="page-link"
          >
            {pageNumber}
          </a>
        </li>
      ))}
    </nav>
  );
};

export default Pagination;
