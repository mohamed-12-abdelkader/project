'use client';

import clsx from 'clsx';
import { generatePagination } from '@/lib/utils';

export default function Pagination({ totalPages, currentPage, onPageChange }) {
  const allPages = generatePagination(currentPage, totalPages);

  return (
    <>
      <div className="flex justify-center items-center mt-8" style={{ columnGap: "24px" }}>
        <PaginationArrow
          direction="right"
          click={() => onPageChange(currentPage + 1)}
          isDisabled={currentPage >= totalPages}
        />

        <div className="flex flex-wrap justify-center items-center flex-row-reverse" style={{ columnGap: "8px" }}>
          {allPages.map((page, index) => {
            let position

            if (index === 0) position = 'first';
            if (index === allPages.length - 1) position = 'last';
            if (allPages.length === 1) position = 'single';
            if (page === '...') position = 'middle';

            return (
              <PaginationNumber
                key={page}
                click={() => onPageChange(page)}
                page={page}
                position={position}
                isActive={currentPage === page}
              />
            );
          })}
        </div>

        <PaginationArrow
          direction="left"
          click={() => onPageChange(currentPage - 1)}
          isDisabled={currentPage <= 1}
        />
      </div>
    </>
  );
}

function PaginationNumber({
  page,
  click,
  isActive,
  position,
}) {
  const className = clsx(
    'pag-btn pag-btn_numbers',
    {
      'pag-btn_numbers__active': isActive,
      'pag-btn_numbers__disabled': !isActive
    },
  );

  return isActive || position === 'middle' ? (
    <div className={className}>{page}</div>
  ) : (
    <div onClick={click} className={className} >
      {page}
    </div>
  );
}

function PaginationArrow({
  click,
  direction,
  isDisabled,
}) {
  const className = clsx(
    "pag-btn pag-btn_main",
    {
      'pag-btn_main__disabled': isDisabled,
      'pag-btn_main__active': !isDisabled,
    },
  );

  const text =
    direction === 'left' ? (
      "الرجوع"
    ) : (
      "التالي"
    );

  return isDisabled ? (
    <div className={className}>{text}</div>
  ) : (
    <div className={className} onClick={click}>
      {text}
    </div>
  );
}
