import React from "react";
import Card from "@/ui/card/ConferenceCard";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import img from "../../images/f7bf48b1dfa6d1a5bda8220c143bf41a.jpeg";
import useGitData from "@/server/useGitData";

const Conference = () => {
  const [data, loading] = useGitData({ prop: "conferences" });
  return (
    <div dir="rtl" className="lg:flex lg:flex-col lg:items-end mt-[120px]">
      <div className="w-full app-container flex justify-center lg:relative">
        <div className="conference-desc max-w-[621px] lg:max-w-[416px] lg:absolute lg:top-[102.6px] lg:right-0">
          <h1 className="font-bold text-[#353939]" style={{ fontSize: "28px" }}>
            انضم إلى مؤتمراتنا واستكشف أحدث التطورات في مجال أبحاث الأورام
          </h1>
          <p className="text-[#5A6161] my-4 lg:max-w-[380px]">
            شارك في مؤتمراتنا واستفد من أحدث الأبحاث والابتكارات في علاج
            السرطان. اكتشف كيف يمكنك المساهمة في إحداث تغيير حقيقي.
          </p>
          <button
            className="m-2 h-[35px] w-[200px] text-[#0f7d7f]"
            style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
          >
            عرض جميع المؤتمرات
          </button>
        </div>
      </div>

      <div className="sm:app-container mt-4 lg:mt-0 relative lg:max-w-[55%] lg:w-min lg:mx-0 lg:px-0 select-none">
        <Splide
          hasTrack={false}
          className="x-auto shadow-cards"
          options={{
            pagination: false,
            fixedWidth: "306px",
            perMove: 1,
            perPage: 1,
            omitEnd: true,
            classes: {
              arrows: "splide__arrows conference-arrows",
              arrow: "splide__arrow conference-arrow",
              prev: "splide__arrow--prev conference-prev",
              next: "splide__arrow--next conference-next",
              pagination: "splide__pagination conference-pagination",
            },
            padding: { top: 10, bottom: 20 },
            rewind: false,
            gap: "24px",
            direction: "rtl",
            breakpoints: {
              640: {
                fixedWidth: "306px",
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
            <button className="splide__arrow conference-arrow conference-next splide__arrow--next slide-btn-theme left-[10px] lg:left-[71px] top-[210px]">
              <GoArrowLeft className="text-2xl text-white" />
            </button>
            <button className="splide__arrow conference-arrow conference-prev splide__arrow--prev slide-btn-theme right-[10px] lg:right-[-32px] top-[210px]">
              <GoArrowRight className="text-2xl text-white" />
            </button>
          </div>
        </Splide>
      </div>
    </div>
  );
};

export default Conference;
