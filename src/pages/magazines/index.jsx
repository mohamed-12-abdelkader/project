import Loading from "@/components/loading/Loading";
import useGitData from "@/server/useGitData";
import React from "react";
import Card from "@/ui/card/ConferenceCard";
import { SplideSlide } from "@splidejs/react-splide";
import Pagination from "@/ui/researches/pagination";
const Index = () => {
  const [data, loading] = useGitData({ prop: "magazine" });
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
        <p className="text-[#11898C]">مجلاتنا </p>
        <h1
          className="text-[50px] font-extrabold text-[#353939] my-2 md:w-[60%] m-auto"
          style={{ lineHeight: "90px" }}
        >
          ابق علي اطلاع علي أحدث الأبحاث والتطورات في مجال الأورام
        </h1>
        <div className="w-[60%] m-auto text-center"></div>
      </div>
      <div className="mt-[50px] text-center">
        <h1 className="text-[#353939] text-xl font-bold my-3 ">
          اكتشف أخر مجلاتنا
        </h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {loading ? (
          Array.from({ length: 4 }).map((_, i) => (
            <SplideSlide key={i}>
              <Card loading />
            </SplideSlide>
          ))
        ) : Array.isArray(data) && data.length > 0 ? (
          data.map((card, i) => (
            <SplideSlide key={i}>
              <Card card={card} href={`magazines/${card.id}`} />
            </SplideSlide>
          ))
        ) : (
          <div className="text-center">
            <p>لا توجد بيانات متاحة حاليا</p>
          </div>
        )}
        {loading ? (
          Array.from({ length: 4 }).map((_, i) => (
            <SplideSlide key={i}>
              <Card loading />
            </SplideSlide>
          ))
        ) : Array.isArray(data) && data.length > 0 ? (
          data.map((card, i) => (
            <SplideSlide key={i}>
              <Card card={card} />
            </SplideSlide>
          ))
        ) : (
          <div className="text-center">
            <p>لا توجد بيانات متاحة حاليا</p>
          </div>
        )}
      </div>
      <div>
        <Pagination totalPages={2} />
      </div>
    </div>
  );
};

export default Index;
