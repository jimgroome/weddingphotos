import React, { useState, useEffect } from "react";
import imagesArray from "./imagesArray";
import Images from "./components/Images";
import PaginationComponent from "./components/Pagination";

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 30;

  useEffect(() => {
    const fetchImages = () => {
      setLoading(true);
      const res = imagesArray;
      setImages(res);
      setLoading(false);
    };
    fetchImages();
  }, []);

  // Get current posts
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Images images={currentImages} loading={loading} />
      <PaginationComponent
        imagesPerPage={imagesPerPage}
        totalImages={images.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
