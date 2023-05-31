import { useState } from "react";
import Pagination from "react-bootstrap/Pagination";

const PaginationBlock = ({ currentPage, changeCurrentPage }) => {
  const [page, setPage] = useState(currentPage);
  let active = currentPage;
  const totalPageCount = Array(10)
    .fill()
    .map((e, i) => i + 1);

  const onPageClick = (e) => {
    const pageNum = Number(e.target.text);
    setPage(pageNum);
    changeCurrentPage(pageNum);
  };

  return (
    <Pagination>
      {totalPageCount.map((num) => (
        <Pagination.Item
          key={num}
          active={num === active}
          onClick={onPageClick}
        >
          {num}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default PaginationBlock;
