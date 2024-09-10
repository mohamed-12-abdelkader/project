import React, { useRef } from "react";
import Image from "next/image";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import img from "../../images/f7bf48b1dfa6d1a5bda8220c143bf41a.jpeg";
import CarouselArrows from "@/ui/CarouselArrows";
import Card from "@/ui/card/NewsCard";

// Mock data
const newsCards = new Array(7).fill({ imageUrl: img, title: "جمعية داعم تستضيف ورشة عمل متقدمة حول احدث تقنيات الابحاث في مجال السرطان الورشة ستتناول تقنيات ال CRA T-CEII الجديدة في علاج السرطانز" })
const centerCardIndex = 3

const News = () => {
  const splideRef = useRef(null);

  const handlePrevClick = () => {
    splideRef.current?.splide.go("<");
  };

  const handleNextClick = () => {
    splideRef.current?.splide.go(">");
  };

  return (
    <div className="mt-[50px] h-[500px]">
      <div className="text-center">
        <h1 className="text-xl font-bold text-[#353939]">
          أحدث الأخبار والتحديثات
        </h1>
        <p className="my-3 font-normal text-[#353939]">
          ابقَ على اطلاع على آخر أخبار و مستجدات الجمعية
        </p>
      </div>
      <div className="w-full relative">
        <Splide
          className="news-cards-splide" // Ability to select specific carousel without conflict.
          ref={splideRef}
          options={{
            pagination: false,
            fixedWidth: "502px", // not focus card
            perMove: 1,
            arrows: false,
            start:centerCardIndex,
            drag: false,
            speed: 400,
            updateOnMove: true,
            isNavigation: true,
            trimSpace: false,
            rewind: false,
            focus: "center",
            gap: '24px',
            direction: "rtl",
            breakpoints: {
              // talwind sm breakpoint, max-width 460px
              640: {
                fixedWidth: "100%",
              },
            }
          }}
          aria-labelledby="news-cards-carousel"
        >
          {newsCards.map((card, i) => <SplideSlide key={i}><Card imageUrl={card.imageUrl} title={card.title} /></SplideSlide>)}
        </Splide>
        <CarouselArrows left="50px" right="50px" topPresent="57.5%" nextClick={handleNextClick} prevClick={handlePrevClick} />
      </div>
    </div>
  );
};

export default News;
