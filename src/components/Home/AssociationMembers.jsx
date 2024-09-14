import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import img from "../../images/4550af08658cc3736d9bd509aee7ca22.png";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import Card from "@/ui/card/AssociationMembersCard";

const AssociationMembers = () => {
  const members = [
    {
      name: "سعود صالح عبدالكريم الصواب",
      position: "رئيس مجلس الادارة",
      image: img,
    },
    // Add more members as needed
  ];

  return (
    <div dir="rtl" className="sm:app-container mt-[70px]">
      <div className="text-center">
        <h1 className="text-xl font-bold">اعضاء مجلس الادارة</h1>
        <p className="font-normal text-[#353939] my-2">
          ابقَ على اطلاع على آخر أخبار و مستجدات الجمعية
        </p>
      </div>
      <div className="flex flex-wrap justify-center mt-8 mb-6">
        {["مجلس الادارة", "مجلس الادارة", "مجلس الادارة", "مجلس الادارة"].map(
          (text, index) => (
            <button
              key={index}
              className={`m-2 h-[35px] w-[200px] ${
                index === 0 ? "bg-[#0f7d7f] text-white" : "text-[#0f7d7f]"
              }`}
              style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
            >
              {text}
            </button>
          )
        )}
      </div>
      <div className="relative select-none" dir="rtl">
        <Splide
          className="mx-auto"
          hasTrack={false}
          options={{
            pagination: false,
            fixedWidth: "305px",
            perMove: 1,
            omitEnd: true,
            classes: {
              arrows: "splide__arrows association-arrows",
              arrow: "splide__arrow association-arrow",
              prev: "splide__arrow--prev association-prev",
              next: "splide__arrow--next association-next",
              pagination: "splide__pagination association-pagination",
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
          aria-labelledby="association-members-carousel"
        >
          <SplideTrack>
            {new Array(11).fill(members[0]).map((member, i) => (
              <SplideSlide key={i}>
                <Card
                  imageUrl={member.image}
                  name={member.name}
                  position={member.position}
                />
              </SplideSlide>
            ))}
          </SplideTrack>
          <div className="splide__arrows association-arrows">
            <button className="splide__arrow association-arrow association-next splide__arrow--next slide-btn-theme left-[10px] xxl:left-[-32px] top-[31.7%]">
              <GoArrowLeft className="text-2xl text-white" />
            </button>
            <button className="splide__arrow association-arrow association-prev splide__arrow--prev slide-btn-theme right-[10px] xxl:right-[-32px] top-[31.7%]">
              <GoArrowRight className="text-2xl text-white" />
            </button>
          </div>
        </Splide>
      </div>

      <div className="text-center mt-10 sm:mt-5">
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
