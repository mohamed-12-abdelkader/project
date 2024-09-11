import React from "react";
import img from "../../images/artboard-2.png";
import Image from "next/image";

const SectionTwo = () => {
  return (
    <div
      dir="rtl"
      className="w-full overflow-hidden relative z-0 mt-[180px]"
      style={{
        background: "linear-gradient(to bottom, #fff, #e8f4f5)",
      }}
    >
      {/* Bg Badge */}
      <div
        className="w-[150px] md:w-[250px] lg:w-[300px] xl:w-[350.42px] left-[10%] 2xl:left-[15%] top-[42%] h-auto z-10 gap-0 rounded-tl-[30px] transform rotate-[125deg] bg-[#B5DADB] border absolute"
        style={{
          borderRadius: "20px",
          aspectRatio: "350.42 / 450.48"
        }}
      />

      <div className="app-container relative flex items-center z-20 justify-between">
        <div className="max-w-[617px] min-h-[299px] gap-[32px]">
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
        <div>
          <Image
            src={img}
            width={419}
            alt="Centered Image"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
