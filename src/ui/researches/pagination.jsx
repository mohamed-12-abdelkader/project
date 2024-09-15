'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { generatePagination } from '@/lib/utils';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Pagination({ totalPages }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const allPages = generatePagination(currentPage, totalPages);

  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <>
      <div className="flex justify-center items-center mt-8" style={{ columnGap: "24px" }}>
        <PaginationArrow
          direction="right"
          href={createPageURL(currentPage + 1)}
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
                href={createPageURL(page)}
                page={page}
                position={position}
                isActive={currentPage === page}
              />
            );
          })}
        </div>

        <PaginationArrow
          direction="left"
          href={createPageURL(currentPage - 1)}
          isDisabled={currentPage <= 1}
        />
      </div>
    </>
  );
}

function PaginationNumber({
  page,
  href,
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
    <Link href={href} className={className} >
      {page}
    </Link>
  );
}

function PaginationArrow({
  href,
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
    <Link className={className} href={href}>
      {text}
    </Link>
  );
}
