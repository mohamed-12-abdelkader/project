import React from "react";
import img from "../../images/artboard-2.png";
import Image from "next/image";

const SectionTwo = () => {
  return (
    <div
      dir="rtl"
      className="w-full overflow-hidden relative z-0 mt-[120px] md:mt-[180px] bg-gradient-to-b from-white to-[#e8f4f5]"
    >
      {/* Bg Badge */}
      <div
        className="item3 w-[400px]  h-[400px]  top-[80%] md:top-[30%] w-[200px]   lg:w-[250px] xl:w-[300px] 2xl:w-[350px] left-[5%] md:left-[10%] 2xl:left-[15%] top-[40%] h-auto z-10 gap-0 rounded-tl-[30px] transform rotate-[125deg] bg-[#B5DADB] border absolute"
        style={{
          borderRadius: "20px",
          aspectRatio: "350 / 450",
          left: "5%",
        }}
      />

      <div className="app-container relative flex flex-col md:flex-row items-center z-20 justify-between space-y-5 md:space-y-0">
        <div className="max-w-full md:max-w-[617px] min-h-[299px] gap-[32px] px-4 md:px-0">
          <p className="text-[16px] md:text-[18px] text-[#353939]">
            حمل مجلة داعم!!
          </p>
          <h1 className="font-tajawal text-[24px] md:text-[32px] text-[#353939] font-bold leading-[32px] md:leading-[48px] tracking-[-0.02em] text-right my-1">
            ابق علي اطلاع علي أحدث الأبحاث <br />
            والتطورات في مجال الأورام
          </h1>
          <p className="text-[14px] md:text-[16px] text-[#353939]">
            استمتع بقراءة مجلتنا العلمية التي تحتوي على أحدث الأبحاث والمقالات
            المبتكرة في مجال علاج الأورام. حمل نسختك الآن واستمتع بالمحتوى
            المميز.
          </p>
          <div className="flex flex-col sm:flex-row items-center my-3 gap-4">
            <button
              className="h-[40px] w-full sm:w-[200px] bg-[#0f7d7f] text-white text-[14px] sm:text-[16px]"
              style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
            >
              حمل الان اخر اصدار
            </button>
            <button
              className="h-[40px] w-full sm:w-[200px] text-[#0f7d7f] text-[14px] sm:text-[16px]"
              style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
            >
              تصفح الاصدارات الاخرى
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src={img}
            width={350}
            height={300}
            alt="Centered Image"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
