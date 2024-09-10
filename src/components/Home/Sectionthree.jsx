import React, { useRef } from "react";
import Image from "next/image";
import img from "../../images/f7bf48b1dfa6d1a5bda8220c143bf41a.jpeg";
import Slider from "../slider/Slider";
import Link from "next/link";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Card from "@/ui/card/ConferenceCard";
import CarouselArrows from "@/ui/CarouselArrows";

// Mock data
const cardsData = new Array(10).fill({
  date: "1 محرم 1446", title: <>العلاج بالخلايا الجذعية: <br /> أفق جديد لعلاج الأورام</>, url: "#", imageUrl: img
})

const Sectionthree = () => {
  const splideRef = useRef(null)

  const handlePrevClick = () => {
    splideRef.current?.splide.go("<");
  };
  const handleNextClick = () => {
    splideRef.current?.splide.go(">");
  };

  return (
    <div className="my-5 p-5 mt-[50px]">
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

      <div className="relative w-[95%]  mx-auto">
        <Splide
          ref={splideRef}
          options={{
            pagination: false,
            fixedWidth: "306px",
            perMove: 1,
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
        <CarouselArrows topPresent="55.2%" right="-25px" left="-25px" nextClick={handleNextClick} prevClick={handlePrevClick} />
      </div>
      <div className="text-center mt-4">
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
