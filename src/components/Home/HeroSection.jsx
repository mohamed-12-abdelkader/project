import Image from "next/image";
import React from "react";
import img from "../../images/f7bf48b1dfa6d1a5bda8220c143bf41a.jpeg";

const HeroSection = () => {
  return (
    <div
      className="relative flex items-center"
      style={{
        height: "700px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "-18%",
        }}
        className="w-[300px] h-[300px] bg-[#0f7d7f] rounded-tl-[64px] transform rotate-[135deg] text-white flex items-center justify-center"
      ></div>
      <div>
        <Image
          src={img}
          className="w-[520px] h-[450px]"
          style={{
            position: "absolute",
            top: "10%",
            left: "55%",
            borderRadius: "64px",
            zIndex: "1000",
          }}
        />
      </div>
      <div
        dir="rtl"
        style={{
          position: "absolute",
          top: "26%",
          left: "15%",
          width: "450px",
        }}
      >
        <h1 className="text-[60px] font-bold leading-[90px] tracking-[-0.025em] text-right font-[Tajawal]">
          ندعم اليوم من أجل مريض الغد.
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
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "90%",
          transform: "rotate(135deg) scaleX(-1)",
        }}
        className="w-[300px] h-[300px] bg-[#0f7d7f] rounded-tl-[64px] text-white flex items-center justify-center"
      ></div>
      {/* Other content */}
    </div>
  );
};

export default HeroSection;
