import React from 'react';
import { Container, Row, Col, Navbar } from 'reactstrap';

const Pagination = ({ imagesPerPage, totalImages, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalImages / imagesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Navbar className="pagination fixed-bottom navbar-light bg-light">
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
    </Navbar>
  );
};

export default Pagination;
