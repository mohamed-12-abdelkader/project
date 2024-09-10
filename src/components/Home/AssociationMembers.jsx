import React, { useRef } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import img from "../../images/4550af08658cc3736d9bd509aee7ca22.png";
import Card from "@/ui/card/AssociationMembersCard";
import CarouselArrows from "@/ui/CarouselArrows";

const AssociationMembers = () => {
  const splideRef = useRef(null);

  const members = [
    {
      name: "سعود صالح عبدالكريم الصواب",
      position: "رئيس مجلس الادارة",
      image: img,
    },
    // Add more members as needed
  ];

  const handlePrevClick = () => {
    splideRef.current?.splide.go("<");
  };

  const handleNextClick = () => {
    splideRef.current?.splide.go(">");
  };

  return (
    <div dir="rtl" className="mt-[70px] container">
      <div className="text-center">
        <h1 className="text-xl font-bold">اعضاء مجلس الادارة</h1>
        <p className="font-normal text-[#353939] my-2">
          ابقَ على اطلاع على آخر أخبار و مستجدات الجمعية
        </p>
      </div>
      <div className="flex justify-center my-3">
        {["مجلس الادارة", "مجلس الادارة", "مجلس الادارة", "مجلس الادارة"].map(
          (text, index) => (
            <button
              key={index}
              className={`m-2 h-[35px] w-[200px] ${index === 0 ? "bg-[#0f7d7f] text-white" : "text-[#0f7d7f]"
                }`}
              style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
            >
              {text}
            </button>
          )
        )}
      </div>
      {/* TODO: disable arrows buttons if there is no slides on there direction */}
      {/* TODO: on mobile remove arrows, and replace them by simple bottom scroll bar */}
      <div className="cursor-grab relative" dir="rtl" >
        <Splide
          ref={splideRef}
          options={{
            pagination: false,
            fixedWidth: "305px",
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
          aria-labelledby="association-members-carousel"
        >

          {new Array(19).fill(members[0]).map(member => (
            <SplideSlide key={member.name}>
              <Card imageUrl={member.image} name={member.name} position={member.position} />
            </SplideSlide>
          ))}
        </Splide>
        <CarouselArrows left="-25px" right="-25px" topPresent="31.7%" nextClick={handleNextClick} prevClick={handlePrevClick} />
      </div>

      <div className="text-center">
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

export default AssociationMembers;
