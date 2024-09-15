export const generatePagination = (currentPage, totalPages) => {
  // If total pages count is 7 or lees display all of them without ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
};

export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  const truncated = text.slice(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(' ');
  return lastSpaceIndex > -1
    ? '"' + text.slice(0, lastSpaceIndex) + '"' + '...'
    : '"' + text.slice(0, maxLength) + '"' + '...';
};
