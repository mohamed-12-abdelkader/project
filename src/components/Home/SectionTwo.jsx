import React from "react";
import img from "../../images/ff5ff6d9b418492198f8047eace184a3.png";
import Image from "next/image";

const SectionTwo = () => {
  return (
    <div
      dir="rtl"
      className="h-[400px] my-5 flex items-center"
      style={{
        background: "linear-gradient(to bottom, #fff, #e8f4f5)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div className="w-[50%] px-[60px]">
        <p>حمل مجلة داعم!!</p>
        <h1 className="font-[Tajawal] text-[32px] text-[#353939] font-bold leading-[48px] tracking-[-0.02em] text-right my-1">
          ابق على اطلاع على أحدث الأبحاث والتطورات في مجال الأورام
        </h1>

        <div>
          <p>
            استمتع بقراءة مجلتنا العلمية التي تحتوي على أحدث الأبحاث والمقالات
            المبتكرة في مجال علاج الأورام. حمل نسختك الآن واستمتع بالمحتوى
            المميز.
          </p>
        </div>
        <div className="flex my-3">
          <button
            className="m-2 h-[35px] w-[200px] bg-[#0f7d7f] text-white"
            style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
          >
            حمل الان اخر اصدار
          </button>
          <button
            className="m-2 h-[35px] w-[200px] text-[#0f7d7f]"
            style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
          >
            تصفح الاصدارات الاخرى
          </button>
        </div>
      </div>
      <div className="relative">
        <Image src={img} style={{ zIndex: "1010", position: "relative" }} />
        <div
          className="w-[404.42px] h-[445.48px] gap-0 rounded-tl-[30px] transform rotate-[125deg] bg-[#B5DADB] border"
          style={{
            position: "absolute",
            borderRadius: "20px",
            top: "42%",
            zIndex: "1000", // Set this lower than the image
            left: "27%",
          }}
        ></div>
      </div>
    </div>
  );
};

export default SectionTwo;
