import React, { useRef } from "react";

import Card from "@/ui/card/ConferenceCard";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import CarouselArrows from "@/ui/CarouselArrows";
import img from "../../images/f7bf48b1dfa6d1a5bda8220c143bf41a.jpeg";


const cardsData = new Array(6).fill({
  date: "1 محرم 1446", title: <>العلاج بالخلايا الجذعية: <br /> أفق جديد لعلاج الأورام</>, url: "#", imageUrl: img
})

const Conference = () => {
  const splideRef = useRef(null);

  const handlePrevClick = () => {
    splideRef.current?.splide.go("<");
  };
  const handleNextClick = () => {
    splideRef.current?.splide.go(">");
  };

  return (
    <div
      dir="rtl"
      className="flex items-center justify-start gap-[30px] md:gap-[90px] lg:gap-[135px] mt-[120px] pr-5"

    >
      <div className="max-w-[416px]">
        <h1 className="text-xl font-bold text-[#353939]">
          انضم إلى مؤتمراتنا واستكشف أحدث التطورات في مجال أبحاث الأورام
        </h1>
        <p className="text-[#5A6161] my-4">
          شارك في مؤتمراتنا واستفد من أحدث الأبحاث والابتكارات في علاج السرطان.
          اكتشف كيف يمكنك المساهمة في إحداث تغيير حقيقي.
        </p>
        <button
          className="m-2 h-[35px] w-[200px] text-[#0f7d7f]"
          style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
        >
          عرض جميع المؤتمرات
        </button>
      </div>
      <div className="relative min-w-0 w-full">
        <Splide
          ref={splideRef}
          options={{
            pagination: false,
            fixedWidth: "306px",
            perMove: 1,
            perPage: 1,
            arrows: false,
            rewind: false,
            gap: '24px',
            direction: "rtl",
            breakpoints: {
              // talwind sm breakpoint, max-width 460px
              640: {
                fixedWidth: "100%",
              },
            }
          }}
          aria-labelledby="conference-members-carousel"
        >
          {cardsData.map((card, i) => <SplideSlide key={i}><Card card={card} /></SplideSlide>)}
        </Splide>
        <CarouselArrows isHorizontalCenter={true} right="-25px" left="71px" nextClick={handleNextClick} prevClick={handlePrevClick} />
      </div>
    </div>
  );
};

export default Conference;
