import React from "react";
import Slider from "../slider/Slider";
import img from "../../images/4550af08658cc3736d9bd509aee7ca22.png";
import Image from "next/image";
const AssociationMembers = () => {
  return (
    <div dir="rtl" className="mt-[70px]">
      <div className="text-center ">
        <h1 className="text-xl font-bold">اعضاء مجلس الادارة </h1>
        <p className="font-normal text-[#353939] my-2">
          ابقَ على اطلاع على آخر أخبار و مستجدات الجمعية
        </p>
      </div>
      <div className="flex justify-center my-3">
        <button
          className="m-2 h-[35px] w-[200px] bg-[#0f7d7f] text-white"
          style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
        >
          مجلس الادارة
        </button>
        <button
          className="m-2 h-[35px] w-[200px] text-[#0f7d7f]"
          style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
        >
          مجلس الادارة
        </button>
        <button
          className="m-2 h-[35px] w-[200px] text-[#0f7d7f]"
          style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
        >
          مجلس الادارة
        </button>
        <button
          className="m-2 h-[35px] w-[200px] text-[#0f7d7f]"
          style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
        >
          مجلس الادارة
        </button>
      </div>
      <Slider>
        <div className="w-[300px] h-[300px] mx-4">
          <div className="h-[220px] bg-[#D7DADA]">
            <Image src={img} className="h-[100%] " />
          </div>
          <div className="text-center my-2 w-[300px] flex justify-center">
            <h1 className="font-[Tajawal] text-[20px] font-bold leading-[30px] tracking-[-0.015em] text-right text-[#353939] my-2">
              سعود صالح عبدالكريم الصواب
            </h1>
          </div>

          <div className="text-center">
            <p className="text-[#353939] font-normal"> رئيس مجلس الادارة </p>
          </div>
        </div>
        <div className="w-[300px] h-[300px] mx-4">
          <div className="h-[220px] bg-[#D7DADA]">
            <Image src={img} className="h-[100%] " />
          </div>
          <div className="text-center my-2 w-[300px] flex justify-center">
            <h1 className="font-[Tajawal] text-[20px] font-bold leading-[30px] tracking-[-0.015em] text-right text-[#353939] my-2">
              سعود صالح عبدالكريم الصواب
            </h1>
          </div>

          <div className="text-center">
            <p className="text-[#353939] font-normal"> رئيس مجلس الادارة </p>
          </div>
        </div>
        <div className="w-[300px] h-[300px] mx-4">
          <div className="h-[220px] bg-[#D7DADA]">
            <Image src={img} className="h-[100%] " />
          </div>
          <div className="text-center my-2 w-[300px] flex justify-center">
            <h1 className="font-[Tajawal] text-[20px] font-bold leading-[30px] tracking-[-0.015em] text-right text-[#353939] my-2">
              سعود صالح عبدالكريم الصواب
            </h1>
          </div>

          <div className="text-center">
            <p className="text-[#353939] font-normal"> رئيس مجلس الادارة </p>
          </div>
        </div>
        <div className="w-[300px] h-[300px] mx-4">
          <div className="h-[220px] bg-[#D7DADA]">
            <Image src={img} className="h-[100%] " />
          </div>
          <div className="text-center my-2 w-[300px] flex justify-center">
            <h1 className="font-[Tajawal] text-[20px] font-bold leading-[30px] tracking-[-0.015em] text-right text-[#353939] my-2">
              سعود صالح عبدالكريم الصواب
            </h1>
          </div>

          <div className="text-center">
            <p className="text-[#353939] font-normal"> رئيس مجلس الادارة </p>
          </div>
        </div>
        <div className="w-[300px] h-[300px] mx-4">
          <div className="h-[220px] bg-[#D7DADA]">
            <Image src={img} className="h-[100%] " />
          </div>
          <div className="text-center my-2 w-[300px] flex justify-center">
            <h1 className="font-[Tajawal] text-[20px] font-bold leading-[30px] tracking-[-0.015em] text-right text-[#353939] my-2">
              سعود صالح عبدالكريم الصواب
            </h1>
          </div>

          <div className="text-center">
            <p className="text-[#353939] font-normal"> رئيس مجلس الادارة </p>
          </div>
        </div>
        <div className="w-[300px] h-[300px] mx-4">
          <div className="h-[220px] bg-[#D7DADA]">
            <Image src={img} className="h-[100%] " />
          </div>
          <div className="text-center my-2 w-[300px] flex justify-center">
            <h1 className="font-[Tajawal] text-[20px] font-bold leading-[30px] tracking-[-0.015em] text-right text-[#353939] my-2">
              سعود صالح عبدالكريم الصواب
            </h1>
          </div>

          <div className="text-center">
            <p className="text-[#353939] font-normal"> رئيس مجلس الادارة </p>
          </div>
        </div>
      </Slider>
      <div className="text-center ">
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
