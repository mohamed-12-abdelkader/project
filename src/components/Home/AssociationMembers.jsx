import React from "react";
import Slider from "../slider/Slider";
import img from "../../images/4550af08658cc3736d9bd509aee7ca22.png";
import Image from "next/image";
import Card from "@/ui/card/Card";

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
    <div dir="rtl" className="mt-[70px]">
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
      <div className="w-[92%] mx-auto">
        <Slider>
          {[...Array(8)].map((_, index) => (
              <div
              dir="rtl"
              className="inline-block  mx-2  "
              style={{
                flexShrink: 0,
                width: "330PX",
              
                borderRadius: "10px",
              }}
            >
              <div className="h-[210px] bg-[#D7DADA]">
                <Image
                  src={img}
                  className="w-[100%] h-[200px]"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="p-2">
              <div className="text-center my-2">
            <h1 className="text-xl font-bold text-[#353939] my-2">
              {" "}
              سعود صالح عبدالكريم الصواب{" "}
            </h1>
            <p className="text-[#353939] font-normal"> رئيس مجلس الادارة </p>
          </div>
              </div>
             
            </div>
          ))}
        </Slider>
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
