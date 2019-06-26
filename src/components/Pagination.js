import React, { useEffect } from "react";
import {
  Navbar,
  Container,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";

const PaginationComponent = ({
  imagesPerPage,
  totalImages,
  paginate,
  currentPage
}) => {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalImages / imagesPerPage) + 1; i++) {
    pageNumbers.push(i);
  }

  return (
    <Navbar className='pagination fixed-bottom navbar-light bg-light'>
      <Container fluid>
        <Pagination>
          <PaginationItem disabled={currentPage === 1}>
            <PaginationLink
              previous
              href='#'
              onClick={e => paginate(e, currentPage - 1)}
            />
          </PaginationItem>
          {pageNumbers.map(pageNumber => (
            <PaginationItem
              key={pageNumber}
              active={currentPage === pageNumber}
            >
              <PaginationLink href='#' onClick={e => paginate(e, pageNumber)}>
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem disabled={currentPage === pageNumbers.length}>
            <PaginationLink
              next
              href='#'
              onClick={e => paginate(e, currentPage + 1)}
            />
          </PaginationItem>
        </Pagination>
      </Container>
    </Navbar>
  );
};

export default PaginationComponent;
