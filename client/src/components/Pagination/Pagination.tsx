import styles from "./Pagination.module.css";
interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

function Pagination({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.container}>
      <div className={styles.pagination}>
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          &laquo;
        </button>

        <button
          onClick={() => onPageChange(1)}
          className={currentPage === 1 ? styles.active : ""}
        >
          1
        </button>

        {currentPage > 3 && <span className="dots">...</span>}

        {pageNumbers.map(
          (pageNumber) =>
            pageNumber > 1 &&
            pageNumber < totalPages &&
            pageNumber >= currentPage - 1 &&
            pageNumber <= currentPage + 1 && (
              <button
                key={pageNumber}
                className={pageNumber === currentPage ? styles.active : ""}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            )
        )}

        {currentPage < totalPages - 2 && <span className="dots">...</span>}

        {currentPage <= totalPages && (
          <button
            className={currentPage === totalPages ? styles.active : ""}
            onClick={() => onPageChange(totalPages)}
          >
            {totalPages}
          </button>
        )}

        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          &raquo;
        </button>
      </div>
    </div>
  );
}

export default Pagination;
