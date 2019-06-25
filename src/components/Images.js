import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';

const Images = ({ images, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <Fragment>
      <Container fluid>
        <Row>
          {images.map(image => (
            <Col xs="12" sm="6" key={image.id}>
              <img src={image.url} className="wedding-image" alt="" />
            </Col>
          ))}
        </Row>
      </Container>
    </Fragment>
  );
};

export default Images;
