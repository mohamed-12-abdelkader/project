import React from "react";
import img from "../../images/ff5ff6d9b418492198f8047eace184a3.png";
import Image from "next/image";

const SectionTwo = () => {
  return (
    <div
      dir="rtl"
      className=" w-full max-w-[] h-[450px] flex gap-[182px] justify-between"
      style={{
        background: "linear-gradient(to bottom, #fff, #e8f4f5)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div className="w-[617px] h-auto min-h-[299px] gap-[32px] px-[60px] mt-[100px]">
        <p>حمل مجلة داعم!!</p>
        <h1 className="font-tajawal text-[32px] text-[#353939] font-bold leading-[48px] tracking-[-0.02em] text-right my-1">
          ابق علي اطلاع علي أحدث الأبحاث <br />
          والتطورات في مجال الأورام
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
      <div className="relative flex items-center justify-center mx-[150px]">
        <div
          className="w-[300.42px] h-[400.48px] gap-0 rounded-tl-[30px] transform rotate-[125deg] bg-[#B5DADB] border absolute"
          style={{
            borderRadius: "20px",
            top: "52%",
            zIndex: "1000",
            left: "15%",
          }}
        ></div>
        <Image
          src={img}
          className="h-[540px] w-[650px] relative z-[1010]"
          alt="Centered Image"
        />
      </div>
    </div>
  );
};

export default SectionTwo;
