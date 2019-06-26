import React from "react";
import {
  Navbar,
  Container,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";

const PaginationComponent = ({ imagesPerPage, totalImages, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalImages / imagesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Navbar className='pagination fixed-bottom navbar-light bg-light'>
      <Container>
        <Pagination>
          {pageNumbers.map(pageNumber => (
            <PaginationItem key={pageNumber}>
              <PaginationLink href='#' onClick={e => paginate(e, pageNumber)}>
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          ))}
        </Pagination>
      </Container>
    </Navbar>
  );
};

export default PaginationComponent;
