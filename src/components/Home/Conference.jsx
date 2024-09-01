import React from "react";
import Slider from "../slider/Slider";
import Card from "@/ui/card/Card";

const Conference = () => {
  return (
    <div
      dir="rtl"
      className="flex p-5 h-[500px] items-center"
      style={{ marginTop: "50px" }}
    >
      <div className="w-[30%]">
        <h1 className="text-xl font-bold text-[#353939] ">
          انضم إلى مؤتمراتنا واستكشف أحدث التطورات في مجال أبحاث الأورام
        </h1>
        <p className="text-[#5A6161] my-4">
          شارك في مؤتمراتنا واستفد من أحدث الأبحاث والابتكارات في علاج السرطان.
          اكتشف كيف يمكنك المساهمة في إحداث تغيير حقيقي.
        </p>
        <button
          className="m-2 h-[35px] w-[200px] text-[#0f7d7f]"
          style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
        >
          عرض جميع المؤتمرات
        </button>
      </div>
      <div className="w-[70%] h-[550px] ">
        <Slider>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Slider>
      </div>
    </div>
  );
};

export default Conference;
