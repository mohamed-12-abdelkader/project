import React from "react";
import Link from "next/link";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Card from "@/ui/card/ConferenceCard";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import useGitData from "@/server/useGitData";

// Mock data

const Sectionthree = () => {
  const [data, loading] = useGitData({ prop: "researches" });

  return (
    <div className="sm:app-container my-5 mt-[50px]">
      <div className="text-center">
        <h1 className="font-bold text-xl text-[#353939]">
          اكتشف أحدث ابحاثنا في مجال الأورام
        </h1>
        <p className="my-2 text-[#353939] font-normal">
          اطلع على أحدث ابحاث جمعية داعم في الأورام، وتعرف على كيفية تحقيق تقدم
          ملموس في <br />
          علاج السرطان.
        </p>
      </div>

      <div className="relative mt-8 select-none">
        <Splide
          className="mx-auto shadow-cards"
          hasTrack={false}
          options={{
            pagination: false,
            fixedWidth: "306px",
            perMove: 1,
            omitEnd: true,
            classes: {
              arrows: "splide__arrows discover-arrows",
              arrow: "splide__arrow discover-arrow",
              prev: "splide__arrow--prev discover-prev",
              next: "splide__arrow--next discover-next",
              pagination: "splide__pagination discover-pagination",
            },
            rewind: false,
            gap: "24px",
            direction: "rtl",
            breakpoints: {
              // tailwind sm breakpoint, max-width 460px
              640: {
                type: "loop",
                arrows: false,
                pagination: true,
                focus: "center",
              },
            },
          }}
          aria-labelledby="conference-members-carousel"
        >
          <SplideTrack>
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
          </SplideTrack>
          <div className="splide__arrows conference-arrows">
            <button className="splide__arrow conference-arrow conference-next splide__arrow--next slide-btn-theme left-[10px] xxl:left-[-32px] top-[35%]">
              <GoArrowLeft className="text-2xl text-white" />
            </button>
            <button className="splide__arrow conference-arrow conference-prev splide__arrow--prev slide-btn-theme right-[10px] xxl:right-[-32px] top-[35%]">
              <GoArrowRight className="text-2xl text-white" />
            </button>
          </div>
        </Splide>
      </div>
      <div className="text-center sm:mt-[-90px]">
        <Link href="/search">
          <button
            className="m-2 h-[35px] w-[200px] text-[#0f7d7f]"
            style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
          >
            عرض جميع الابحاث
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sectionthree;
