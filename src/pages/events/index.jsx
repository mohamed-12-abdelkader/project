import Card from "@/ui/card/Card";
import React from "react";

const index = () => {
  return (
    <div dir="rtl " className="mt-[100px]">
      <div className="text-center ">
        <p className=" text-[#11898C]"> الفعاليات والمؤتمرات </p>
        <div className="w-[80%] m-auto text-center">
          <h1
            className="text-[60px]  font-extrabold text-[#353939] my-2"
            style={{ lineHeight: "90px" }}
          >
            كن جزءًا من مجتمعنا البحثي النشط
          </h1>
        </div>
        <div className="w-[60%] m-auto text-center">
          <p className="text-[#5A6161]">
            مرحبًا بك في صفحة الفعاليات والمؤتمرات بجمعية داعم لأبحاث الأورام!
            نحن هنا لنقدم لك الفرصة للمشاركة في أبرز الفعاليات والمؤتمرات
            العلمية في مجال أبحاث السرطان. انضم إلينا لتبادل الأفكار، وتوسيع
            شبكتك المهنية، والاطلاع على أحدث التطورات في هذا المجال الحيوي.
          </p>
        </div>
      </div>
      <div className="h-[100px]"></div>
      <div className="text-center ">
        <h1 className="text-xl font-bold text-[#353939]">فعالياتنا القادمة</h1>
        <p>سجل الأن في الفعاليات القادمة و كن جزء من التغيير</p>
      </div>
      <div className="flex justify-center">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="h-[100px]"></div>
    </div>
  );
};

export default index;
