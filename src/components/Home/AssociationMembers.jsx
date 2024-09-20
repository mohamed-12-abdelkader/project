import React, { useState } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import AssociationMembersCard from "@/ui/card/AssociationMembersCard";
import useGitData from "@/server/useGitData";
import Link from "next/link";
import Slider from "../slider/Slider";

// Skeleton Loader Component
const SkeletonLoader = () => (
  <div className="animate-pulse flex flex-col items-center">
    <div className="bg-gray-300 rounded-t-lg w-[305px] h-[209px]"></div>
    <div className="bg-gray-300 rounded-b-lg w-[305px] h-[80px] mt-2"></div>
  </div>
);

const AssociationMembers = () => {
  const [data, loading] = useGitData({ prop: "members" });
  const [selectedTitle, setSelectedTitle] = useState("مجلس الإدارة"); // Default to "مجلس الإدارة"

  if (loading) {
    return (
      <div className="sm:app-container mt-[70px]">
        <div className="text-center">
          <h1 className="text-xl font-bold">اعضاء مجلس الادارة</h1>
          <p className="font-normal text-[#353939] my-2">
            ابقَ على اطلاع على آخر أخبار و مستجدات الجمعية
          </p>
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
              {[...Array(4)].map((_, index) => (
                <SplideSlide key={index}>
                  <SkeletonLoader />
                </SplideSlide>
              ))}
            </SplideTrack>
            <div className="splide__arrows association-arrows">
              <button className="splide__arrow association-arrow association-next splide__arrow--next slide-btn-theme left-[10px] xxl:left-[-32px] top-[31.7%]">
                <GoArrowLeft className="text-2xl text-white" />
              </button>
              <button className="splide__arrow association-arrow association-prev slide-btn-theme right-[10px] xxl:right-[-32px] top-[31.7%]">
                <GoArrowRight className="text-2xl text-white" />
              </button>
            </div>
          </Splide>
        </div>
        <div className="text-center mt-1 sm:mt-5">
          <button
            className="m-2 h-[35px] w-[150px] text-[#0f7d7f]"
            style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
          >
            اكتشف المزيد
          </button>
        </div>
      </div>
    );
  }

  // Safeguard against undefined data
  const membersGroupedByTitle = data?.membersGroupedByTitle || {};
  const titles = data?.titles || [];
  const members = membersGroupedByTitle[selectedTitle] || [];

  return (
    <div dir="rtl" className="sm:app-container mt-[70px]">
      <div className="text-center my-2">
        <h1 className="text-xl font-bold">اعضاء الجمعية</h1>
        <p className="font-normal text-[#353939] my-2">
          ابقَ على اطلاع على آخر أخبار و مستجدات الجمعية
        </p>
      </div>

      {/* Dynamic buttons based on available titles */}
      <div className="flex flex-wrap justify-center mt-8 mb-6">
        {titles.map((title, index) => (
          <button
            key={index}
            onClick={() => setSelectedTitle(title)}
            className={`m-2 h-[35px] w-[200px] ${
              selectedTitle === title
                ? "bg-[#0f7d7f] text-white"
                : "text-[#0f7d7f]"
            }`}
            style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
          >
            {title}
          </button>
        ))}
      </div>

      <div className="relative mt-8 select-none">
        <Splide
          className="mx-auto shadow-cards h-[300px]"
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
            {members.map((member) => (
              <SplideSlide key={member.id}>
                <AssociationMembersCard
                  imageUrl={member.image}
                  name={member.name}
                  position={member.position}
                />
              </SplideSlide>
            ))}
          </SplideTrack>
          <div className="splide__arrows conference-arrows">
            <button className="splide__arrow conference-arrow conference-next splide__arrow--next slide-btn-theme left-[10px] xxl:left-[-32px] top-[25%]">
              <GoArrowLeft className="text-2xl text-white" />
            </button>
            <button className="splide__arrow conference-arrow conference-prev splide__arrow--prev slide-btn-theme right-[10px] xxl:right-[-32px] top-[25%]">
              <GoArrowRight className="text-2xl text-white" />
            </button>
          </div>
        </Splide>
      </div>
      <div className="text-center mt- sm:mt-5">
        <Link href={"/about"}>
          <button
            className="m-2 mt-5 h-[35px] w-[150px] text-[#0f7d7f]"
            style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
          >
            اكتشف المزيد
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AssociationMembers;
