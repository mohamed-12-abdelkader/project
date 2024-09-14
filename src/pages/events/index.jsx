import React from "react";
import Card from "@/ui/card/ConferenceCard";
import img from "../../images/f7bf48b1dfa6d1a5bda8220c143bf41a.jpeg";

const data = [
  {
    title: "الوراثة الجزيئية وعلاج السرطان",
    url: "#",
    imageUrl: img,
    date: "1 محرم 1446",
  },
  {
    title: "الوراثة الجزيئية وعلاج السرطان",
    url: "#",
    imageUrl: img,
    date: "1 محرم 1446",
  },
  {
    title: "تطبيقات الذكاء الاصطناعي في أبحاث السرطان",
    url: "#",
    imageUrl: img,
    date: "1 محرم 1446",
  },
  {
    title: "العلاج بالخلايا الجذعية: أفق جديد لعلاج الأورام",
    url: "#",
    imageUrl: img,
    date: "1 محرم 1446",
  },
];
const index = () => {
  return (
    <div dir="rtl " className="mt-[100px]">
      <div className="text-center ">
        <p className=" text-[#11898C]"> الفعاليات والمؤتمرات </p>
        <div className=" m-auto text-center md:w-[80%]">
          <h1
            className="text-[30px]  font-extrabold text-[#353939] my-2 md:text-[60px]"
            style={{ lineHeight: "90px" }}
          >
            كن جزءًا من مجتمعنا البحثي النشط
          </h1>
        </div>
        <div className="w-[90%] m-auto text-center md:w-[60%]">
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
      <div className="flex flex-wrap justify-center">
        {data.map((card, i) => (
          <Card key={i} card={card} />
        ))}
      </div>
      <div className="h-[100px]"></div>
    </div>
  );
};

export default index;
