import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Amazons from "../components/amazons";

const Paginate = ({ itemsPerPage, items }) => {
  /* =====================
   * state
   * ===================== */
  const [currentPage, setCurrentPage] = useState(0);

  /* =====================
   * effects
   * ===================== */
  useEffect(() => {
    setCurrentPage(0);
  }, [items]);

  /* =====================
   * pagination calculation
   * ===================== */
  const itemOffset = currentPage * itemsPerPage;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  /* =====================
   * handlers
   * ===================== */
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  /* =====================
   * pagination component
   * ===================== */
  const pagination = (
    <ReactPaginate
      breakLabel="..."
      previousLabel="<前へ"
      nextLabel="次へ>"
      pageCount={pageCount}
      pageRangeDisplayed={3}
      onPageChange={handlePageClick}
      forcePage={currentPage}
      renderOnZeroPageCount={null}
      containerClassName="pagination"
      subContainerClassName="pages pagination"
      activeClassName="active"
    />
  );

  /* =====================
   * render
   * ===================== */
  return (
    <>
      {pagination}
      <Amazons book={currentItems} />
      {pagination}
    </>
  );
};

export default Paginate;
