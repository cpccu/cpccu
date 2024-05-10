import { useContext, useEffect, useState } from "react";
import GalleryCard from "./../Global/GalleryCard";
import GalleryScroll from "../../Context/GalleryScroll/GalleryScroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Data from "./../../../data/GalleryBodyCard.json";

export default function GalleryMain() {
  const { setScrollTarget } = useContext(GalleryScroll);

  const [currentPage, setCurrentPage] = useState(0);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setScrollTarget("gallery");
  });

  const pageItem = 4;
  const pageNmber = Math.ceil(Data.length / pageItem);

  useEffect(() => {
    const startIdx = currentPage * pageItem;
    const endIdx = startIdx + pageItem;
    const rows = Data.slice(startIdx, endIdx);
    setRows(rows);
  }, [Data, currentPage, pageItem]);

  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate page numbers for pagination
  let pageIndex = [];
  if (pageNmber <= 4) {
    pageIndex = Array.from({ length: pageNmber }, (_, idx) => idx + 1);
  } else if (currentPage < 2) {
    pageIndex = [1, 2, 3, pageNmber];
  } else if (currentPage >= pageNmber - 2) {
    pageIndex = [1, pageNmber - 2, pageNmber - 1, pageNmber];
  } else {
    pageIndex = [1, currentPage + 1, currentPage + 2, pageNmber];
  }

  return (
    <>
      <main
        id="gallery"
        className="flex flex-col gap-14 md:gap-20 lg:gap-32 pt-10 md:pt-20 lg:pt-32 padding"
      >
        {rows.map((item, index) => (
          <GalleryBodyCard key={index} data={item} />
        ))}
      </main>

      {/* start pagination  */}
      <section className="flex items-center justify-center gap-5 py-8 md:py-24">
        <button
          onClick={() => handlePaginationClick(Math.max(0, currentPage - 1))}
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
          onClick={() =>
            handlePaginationClick(Math.min(pageNmber - 1, currentPage + 1))
          }
          disabled={currentPage === pageNmber - 1}
        >
          <FontAwesomeIcon
            className={`${
              currentPage > pageNmber - 2 && "text-gray-400"
            } transform rotate-180`}
            icon={faChevronLeft}
          />
        </button>
      </section>
      {/* end pagination */}
    </>
  );
}

export function GalleryBodyCard({ data }) {
  return (
    <section className="flex flex-col gap-12">
      <div className="flex flex-col gap-7 md:gap-10">
        <div>
          <span className="text-2xl md:text-4xl lg:text-5xl font-thin text-gray-600 border-b-2 pb-2 border-gray-700">
            {data?.header}
          </span>
        </div>
        <p className="text-gray-700 lg:text-lg">{data?.conText}</p>
      </div>
      <GalleryCard Data={data?.element} />
    </section>
  );
}
