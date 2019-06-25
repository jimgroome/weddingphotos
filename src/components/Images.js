import React from 'react';

const Images = ({ images, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ul>
      {images.map(image => (
        <li key={image.id}>
          <img src={image.url} alt="" />
        </li>
      ))}
    </ul>
  );
};

export default Images;
