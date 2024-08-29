import { useState } from 'react';

const usePagination = (initialPage: number = 1) => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);

  const goToNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  return { 
    currentPage, 
    goToNextPage, 
    goToPreviousPage, 
    setCurrentPage 
  };
};

export default usePagination;
