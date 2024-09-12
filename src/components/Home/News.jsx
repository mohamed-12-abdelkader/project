import React from "react";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import Card from "@/ui/card/NewsCard";

// Mock data
const newsCards = new Array(3).fill({ imageUrl: "/news.jpeg", title: "جمعية داعم تستضيف ورشة عمل متقدمة حول أحدث تقنيات الأبحاث في مجال السرطان. الورشة ستتناول تقنيات  ال CAR-T-CEll الجديدة في  علاج السرطان." })

const News = () => {
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
          className="news-cards-splide" // Ability to select specific carousel without conflict.
          options={{
            pagination: false,
            // fixedWidth: "502px", // Not focus card
            autoWidth: true,
            autoHeight: true,
            start: 0,
            classes: {
              arrows: 'splide__arrows news-arrows',
              arrow: 'splide__arrow news-arrow',
              prev: 'splide__arrow--prev news-prev',
              next: 'splide__arrow--next news-next',
              pagination: 'splide__pagination news-pagination',
            },
            focus: "center",
            omitEnd: true,
            drag: false,
            updateOnMove: true,
            isNavigation: true,
            slideFocus: true,
            trimSpace: false,
            rewind: false,
            gap: '24px',
            direction: "rtl",
            breakpoints: {
              // talwind sm breakpoint, max-width 460px
              640: {
                arrows: false,
                drag: true,
                isNavigation: false,
                pagination: true,
              },
            }
          }}
          // when splide init, css styles increase a card size, that trigger shifting on the slider, but when move to any dir every thing be ok.
          // there other solution, by add fixedWidth option with a centred card width.
          onMounted={(e) => {
            e.go(">")
          }}
          aria-labelledby="news-cards-carousel"
        >
          <SplideTrack>
            {newsCards.map((card, i) => <SplideSlide key={i}><Card imageUrl={card.imageUrl} title={card.title} /></SplideSlide>)}
          </SplideTrack>
          <div className="splide__arrows news-arrows">
            <button
              className="splide__arrow news-arrow news-next splide__arrow--next slide-btn-theme left-[10px] lg:left-[105px]  top-[225px]"
            >
              <GoArrowLeft className="text-2xl text-white" />
            </button>
            <button
              className="splide__arrow news-arrow news-prev splide__arrow--prev slide-btn-theme right-[10px] lg:right-[105px] top-[225px]"
            >
              <GoArrowRight className="text-2xl text-white" />
            </button>
          </div>
        </Splide>
      </div>
      <div className="text-center mt-16 sm:mt-5">
        <button
          className="m-2 h-[35px] w-[150px] text-[#0f7d7f]"
          style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
        >
          اكتشف المزيد
        </button>
      </div>
    </div>
  );
};

export default News;
