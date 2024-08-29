import { useState } from 'react';

const usePagination = (initialPage: number = 1, initialNextPage: string | null = null, initialPreviousPage: string | null = null) => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [nextPage, setNextPage] = useState<string | null>(initialNextPage);
  const [previousPage, setPreviousPage] = useState<string | null>(initialPreviousPage);

  const goToNextPage = () => {
    if (nextPage) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (previousPage) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return { 
    currentPage, 
    nextPage, 
    previousPage, 
    goToNextPage, 
    goToPreviousPage, 
    setNextPage, 
    setPreviousPage 
  };
};

export default usePagination;
