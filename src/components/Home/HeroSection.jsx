import Image from "next/image";
import React from "react";
import img from "../../images/f7bf48b1dfa6d1a5bda8220c143bf41a.jpeg";

const HeroSection = () => {
  return (
    <div className="w-full relative overflow-hidden">

      {/* Bg Badges */}
      <div
        style={{
          position: "absolute",
          top: "28%",
          left: "-14%",
        }}
        className="w-[300px] -z-10 h-[300px] bg-[#0f7d7f] gap-0 rounded-tl-[64px] transform rotate-[135deg] text-white flex items-center justify-center"
      />
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "90%",
          transform: "rotate(135deg) scaleX(-1)",
        }}
        className="w-[300px] -z-10 h-[300px] bg-[#0f7d7f] gap-0 rounded-tl-[64px] text-white flex items-center justify-center"
      />

      <div className="app-container mt-10 flex items-center justify-between">
        <div dir="rtl">
          <h1 className="font-tajawal text-[60px] font-bold leading-[90px] tracking-[-0.025em] text-right">
            ندعم اليوم من أجل
            <br /> مريض الغد.
          </h1>
          <p className="my-2">
            مرحباً بكم في جمعية داعم لأبحاث الأورام، معًا نحو مستقبل أفضل.
            <br /> نسعى لتحويل الألم إلى أمل من خلال العلم والبحث.
          </p>
          <div className="flex">
            <button
              className="m-2 h-[35px] w-[150px] bg-[#0f7d7f] text-white"
              style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
            >
              {" "}
              انضم الينا{" "}
            </button>
            <button
              className="m-2 h-[35px] w-[150px] text-[#0f7d7f]"
              style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
            >
              {" "}
              اكتشف المزيد
            </button>
          </div>
        </div>
        <div>
          <Image
            src={img}
            alt={img}
            width={520}
            className="rounded-[50px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
