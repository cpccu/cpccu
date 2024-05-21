import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function Pagination({ currentPage, pageCount, onPageChange }) {
  const handlePaginationClick = (pageNumber) => {
    if (pageNumber >= 0 && pageNumber < pageCount) {
      onPageChange(pageNumber);
    }
  };

  // Calculate page numbers for pagination
  let pageIndex = [];
  if (pageCount <= 4) {
    pageIndex = Array.from({ length: pageCount }, (_, idx) => idx + 1);
  } else if (currentPage < 2) {
    pageIndex = [1, 2, 3, pageCount];
  } else if (currentPage >= pageCount - 2) {
    pageIndex = [1, pageCount - 2, pageCount - 1, pageCount];
  } else {
    pageIndex = [1, currentPage + 1, currentPage + 2, pageCount];
  }

  return (
    <section className="flex items-center justify-center gap-5 py-8 md:py-10">
      <button
        onClick={() => handlePaginationClick(currentPage - 1)}
        disabled={currentPage === 0}
      >
        <FontAwesomeIcon
          className={`${currentPage < 1 && "text-gray-400"}`}
          icon={faChevronLeft}
        />
      </button>
      {pageIndex.map((pageNumber, index) => (
        <button
          key={index}
          onClick={() => handlePaginationClick(pageNumber - 1)}
          className={`${
            pageNumber - 1 === currentPage
              ? "bg-header text-white"
              : "bg-header/20 font-semibold"
          } px-5 py-2 border `}
        >
          {pageNumber}
        </button>
      ))}
      <button
        onClick={() => handlePaginationClick(currentPage + 1)}
        disabled={currentPage === pageCount - 1}
      >
        <FontAwesomeIcon
          className={`${
            currentPage > pageCount - 2 && "text-gray-400"
          } transform rotate-180`}
          icon={faChevronLeft}
        />
      </button>
    </section>
  );
}
