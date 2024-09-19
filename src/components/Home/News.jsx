import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import Card from "@/ui/card/NewsCard";
import useGitData from "@/server/useGitData";
import Link from "next/link";

// News component
const News = () => {
  const [data, loading, error] = useGitData({ prop: "news" });

  // Handle loading state
  if (loading) {
    return (
      <div className="text-center mt-10">
        <p className="text-lg font-medium text-[#353939]">
          جارٍ تحميل الأخبار...
        </p>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="text-center mt-10">
        <p className="text-lg font-medium text-red-600">
          حدث خطأ أثناء تحميل الأخبار.
        </p>
      </div>
    );
  }
  console.log("news", data);
  // Handle empty data
  if (!data || data.length === 0) {
    return (
      <div className="text-center mt-10">
        <p className="text-lg font-medium text-[#353939]">
          لا توجد أخبار حالياً.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-[120px] h-[500px]">
      <div className="text-center">
        <h1 className="text-xl font-bold text-[#353939]">
          أحدث الأخبار والتحديثات
        </h1>
        <p className="my-3 font-normal text-[#353939]">
          ابقَ على اطلاع على آخر أخبار و مستجدات الجمعية
        </p>
      </div>
      <div className="w-full mt-[32px] relative select-none">
        <Splide
          hasTrack={false}
          className="news-cards-splide"
          options={{
            pagination: false,
            autoWidth: true,
            autoHeight: true,
            start: 0,
            classes: {
              arrows: "splide__arrows news-arrows",
              arrow: "splide__arrow news-arrow",
              prev: "splide__arrow--prev news-prev",
              next: "splide__arrow--next news-next",
              pagination: "splide__pagination news-pagination",
            },
            focus: "center",
            omitEnd: true,
            drag: false,
            updateOnMove: true,
            isNavigation: true,
            slideFocus: true,
            trimSpace: false,
            rewind: false,
            gap: "24px",
            direction: "rtl",
            breakpoints: {
              640: {
                arrows: false,
                drag: true,
                isNavigation: false,
                pagination: true,
              },
            },
          }}
          onMounted={(e) => e.go(">")}
          aria-labelledby="news-cards-carousel"
        >
          <SplideTrack>
            {data.map((card, i) => (
              <SplideSlide key={i}>
                <Card imageUrl={card.image} title={card.title} />
              </SplideSlide>
            ))}
          </SplideTrack>
          <div className="splide__arrows news-arrows">
            <button className="splide__arrow news-arrow news-prev splide__arrow--prev slide-btn-theme left-[10px] lg:left-[105px] top-[225px]">
              <GoArrowLeft className="text-2xl text-white" />
            </button>
            <button className="splide__arrow news-arrow news-next splide__arrow--next slide-btn-theme right-[10px] lg:right-[105px] top-[225px]">
              <GoArrowRight className="text-2xl text-white" />
            </button>
          </div>
        </Splide>
      </div>
      <div className="text-center mt-16 sm:mt-5">
        <Link href={"/news"}>
          <button
            className="m-2 p-2 h-[35px] w-[150px] text-[#0f7d7f]"
            style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
          >
            اكتشف المزيد
          </button>
        </Link>
      </div>
    </div>
  );
};

export default News;
