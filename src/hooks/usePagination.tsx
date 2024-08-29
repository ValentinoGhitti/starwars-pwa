import { useState } from 'react';

const usePagination = (initialPage: number = 1) => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);

  const goToNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const resetPage = () => {
    setCurrentPage(1);
  };

  return { 
    currentPage, 
    goToNextPage, 
    goToPreviousPage, 
    resetPage
  };
};

export default usePagination;
