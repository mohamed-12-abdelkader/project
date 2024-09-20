import React from "react";
import Researches from "@/ui/researches/Researches";

export default function index() {
  return (
    <div className="app-container mt-[80px] mb-[180px]">
      <div className="text-center">
        <p className="text-[#11898C]">ابحاثنا </p>
        <h1
          className="text-[60px] font-extrabold text-[#353939] my-2"
          style={{ lineHeight: "90px" }}
        >
          بحثنا المستمر يُحدث الفرق
        </h1>
        <div className="w-[60%] m-auto text-center">
          <p className="text-[#5A6161]">
            &quot;جمعية داعم لأبحاث الأورام تفخر بدعم الأبحاث المبتكرة التي تهدف
            إلى مكافحة السرطان وإنقاذ الأرواح. اكتشف كيف تساهم أبحاثنا في تحقيق
            تقدم ملموس في هذا المجال الحيوي.&quot;
          </p>
        </div>
      </div>
      <div className="mt-[120px] text-center">
        <h1 className="text-[#353939] text-xl font-bold my-3 ">
          اكتشف أخر أبحاثنا
        </h1>
        <p className="text-[#353939]">ابحث عن الأبحاث والمقالات حسب الفئة</p>
      </div>
      <Researches />
    </div>
  );
}