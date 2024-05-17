import { useContext, useEffect, useState } from "react";
import UpComingEventCard from "../Global/UpComingEventCard";
import Data from "./../../../data/upcomingEvent.json";
import EventScroll from "../../Context/EventScroll/EventScroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function NoticeSection() {
  const { setScrollTarget } = useContext(EventScroll);
  const [currentPage, setCurrentPage] = useState(0);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setScrollTarget("eventMain");
  }, []);

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
    <section className="bg-responsibility">
      <main
        id="eventMain"
        className="py-12 px-[.5em] md:px-[1.5em] lg:px-[2.9em] xl:px-[7em]"
      >
        {rows.map((item, index) => (
          <section
            key={index}
            className="bg-header text-white p-5 md:p-8 lg:p-12 my-5 md:my-8 lg:my-12"
          >
            <UpComingEventCard data={item} />
          </section>
        ))}
      </main>
      {/* start pagination  */}
      <section className="flex items-center justify-center gap-5 pb-20 md:pb-28">
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
    </section>
  );
}
