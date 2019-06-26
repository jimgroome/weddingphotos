import React, { useState, useEffect } from "react";
import imagesArray from "./imagesArray";
import Images from "./components/Images";
import PaginationComponent from "./components/Pagination";

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 30;
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  const logKey = e => {
    const key = e.key;
    let destinationPage = null;

    if (key === "ArrowLeft") {
      if (currentPage !== 1) {
        destinationPage = currentPage - 1;
        paginate(e, destinationPage);
      }
    }
    if (key === "ArrowRight") {
      if (currentPage !== totalPages) {
        destinationPage = currentPage + 1;
        paginate(e, destinationPage);
      }
    }
  };

  document.addEventListener("keydown", logKey);

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

  return (
    <div>
      <Images images={currentImages} loading={loading} />
      <PaginationComponent
        imagesPerPage={imagesPerPage}
        totalImages={images.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default App;
