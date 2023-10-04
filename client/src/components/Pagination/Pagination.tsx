import React from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  return (
    <div>
      {currentPage}/{totalPages}
    </div>
  );
}

export default Pagination;
