import React from 'react';
import styles from '../styles/Pagination.module.css'; 
interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Calculate the range of page numbers to display (e.g., 1, 2, 3)
  const rangeStart = Math.max(currentPage - 1, 1);
  const rangeEnd = Math.min(currentPage + 1, totalPages);

  return (
    <div className={styles.pagination}>
      {currentPage > 1 && (
        <button onClick={() => onPageChange(currentPage - 1)} className={styles.page}>
          Previous
        </button>
      )}
      {pageNumbers.slice(rangeStart - 1, rangeEnd).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={page === currentPage ? styles.active : styles.page}
        >
          {page}
        </button>
      ))}
      {currentPage < totalPages && (
        <button onClick={() => onPageChange(currentPage + 1)} className={styles.page}>
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
