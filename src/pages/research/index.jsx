import React from "react";
import { fetchTotalPages, fetchResearchesData } from "@/lib/data";
import SearchInput from "@/ui/researches/SearchInput";
import Pagination from "@/ui/researches/pagination";
import useGitData from "@/server/useGitData";
import Image from "next/image";
import Loading from "@/components/loading/Loading";

export default function index({ totalPages, researchesData }) {
  const [data, loading] = useGitData({ prop: "researches" });

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  if (!data || !Array.isArray(data)) {
    return <h1>لا يوجد بيانات لعرضها</h1>; // Show a message if data is not available or not an array
  }

  return (
    <div className="app-container mt-[80px] mb-[180px]">
      <div className="text-center">
        <p className="text-[#11898C]">ابحاثنا </p>
        <h1
          className="text-[60px] font-extrabold text-[#353939] my-2"
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
      <div className="flex flex-wrap my-3">
        {Array.isArray(data) &&
          data.map((dat) => (
            <div
              key={dat.id}
              className="flex flex-col justify-between w-[416px] h-[526px] m-2"
              dir="rtl" // Set direction to RTL for the card container
            >
              <div>
                <div>
                  <Image
                    width={416}
                    height={285}
                    src={dat.image}
                    className="w-full"
                    style={{ borderRadius: "20px", aspectRatio: "416 / 284" }}
                    alt={dat.title}
                  />
                </div>
                <div className="py-3 text-right">
                  {" "}
                  {/* Apply text alignment */}
                  <h1 className="text-xl h-[60px] font-bold text-[#353939] my-2">
                    {dat.title}
                  </h1>
                  <p className="text-[#353939]">{dat.description}</p>
                </div>
              </div>
              <button
                className="py-2 w-full text-[#0f7d7f]"
                style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
              >
                اقرا المزيد
              </button>
            </div>
          ))}
      </div>
      <Pagination totalPages={totalPages} />
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const searchQuery = query.query || "";
  const searchType = query.type || undefined;
  const currentPage = Number(query.page) || 1;
  const totalPages = await fetchTotalPages(searchQuery, searchType);

  const researchesData = await fetchResearchesData(
    searchQuery,
    searchType,
    currentPage
  );

  return {
    props: {
      query: searchQuery,
      totalPages,
      researchesData,
    },
  };
}
