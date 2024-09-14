import React from "react";
import img from "../../images/b38db4bc8369719a07ab74d4fec71cef.png";
import Image from "next/image";
import { fetchTotalPages, fetchResearchesData } from "@/lib/data";

import SearchInput from "@/ui/researches/SearchInput"
import Pagination from "@/ui/researches/pagination";
import Researches from "@/ui/researches/Researches";

export default function index({ totalPages, researchesData }) {
  return <div className="app-container mt-[80px] mb-[180px]">
    <div className="text-center ">
      <p className=" text-[#11898C]">ابحاثنا </p>
      <h1
        className="text-[60px]  font-extrabold text-[#353939] my-2"
        style={{ lineHeight: "90px" }}
      >
        بحثنا المستمر يُحدث الفرق
      </h1>
      <div className="w-[60%] m-auto text-center">
        <p className="text-[#5A6161]">
          &quot;جمعية داعم لأبحاث الأورام تفخر بدعم الأبحاث المبتكرة التي تهدف
          إلى مكافحة السرطان وإنقاذ الأرواح. اكتشف كيف تساهم أبحاثنا في تحقيق
          تقدم ملموس في هذا المجال الحيوي.&quot;
        </p>
      </div>
    </div>
    <div className="mt-[120px] text-center">
      <h1 className="text-[#353939] text-xl font-bold my-3 ">
        اكتشف أخر أبحاثنا
      </h1>
      <p className="text-[#353939]">ابحث عن الأبحاث والمقالات حسب الفئة</p>
    </div>
    <SearchInput placeholder="أدخل كلمات البحث هنا" />
    <Researches data={researchesData} />
    <Pagination totalPages={totalPages} />
  </div>
};

export async function getServerSideProps({ query }) {
  const searchQuery = query.query || '';
  const searchType = query.type || undefined
  const currentPage = Number(query.page) || 1;
  const totalPages = await fetchTotalPages(searchQuery, searchType);

  const researchesData = await fetchResearchesData(searchQuery, searchType, currentPage);

  return {
    props: {
      query: searchQuery,
      totalPages,
      researchesData,
    },
  };
}


