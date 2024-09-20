"use client";


import Image from "next/image";
import { truncateText } from "@/lib/utils";
import useGitData from "@/server/useGitData";
import Loading from "@/components/loading/Loading";
import { useState, useEffect } from "react"
import Search from "./SearchInput";
import Pagination from "./pagination";

function Card({ data }) {
  return (
    <div className="flex flex-col justify-between">
      <div>
        <div>
          <Image
            width={416}
            height={285}
            src={data.image}
            className="w-full"
            style={{ borderRadius: "20px", aspectRatio: "416 / 284" }}
            alt={data.title}
          />
        </div>
        <div className="py-3">
          <p>1 محرم 1446</p>
          <h1 className="text-xl font-bold text-[#353939] my-2">
            &quot;{data.title}&quot;
          </h1>
          <p className="text-[#353939]">{truncateText(data.description, 140)}</p>
        </div>
      </div>
      <button
        className="py-2 w-full text-[#0f7d7f]"
        style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
      >
        اقرا المزيد
      </button>
    </div>
  );
}

const PER_PAGE = 9;

export default function Researches() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currPage, setCurrPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [data, loading] = useGitData({ prop: `researches?${searchQuery}` });

  useEffect(() => {
    if (data) {
      setTotalPages(Math.ceil(data.length / PER_PAGE));
    }
  }, [data]);

  const isDataValid = () => Array.isArray(data) && data.length > 0;

  function handleSearchChange({ term, type }) {
    setSearchQuery(`title=${term}`);
    setCurrPage(1);
  }

  function handlePageChange(page) {
    setCurrPage(page);

    // Scroll to top on page navigation
    if (view.current) {
      const elementPosition = view.current.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 150;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }

  const startIndex = (currPage - 1) * PER_PAGE;
  const endIndex = startIndex + PER_PAGE;
  const paginatedData = data ? data.slice(startIndex, endIndex) : [];
  return (
    <div className="researches-grid">
      <Search handleChange={handleSearchChange} placeholder="أدخل كلمات البحث هنا" />
      {loading ? (
        <Loading />
      ) : (
        <>
          <div
            dir="rtl"
            className="mt-8"
            style={{
              rowGap: "32px",
              columnGap: "24px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            }}
          >
            {!isDataValid() ? (
              <h1>لا يوجد بيانات لعرضها</h1>
            ) : (
              paginatedData.map((e) => <Card key={e.id} data={e} />)
            )}
          </div>

          <Pagination
            totalPages={totalPages}
            currentPage={currPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
}