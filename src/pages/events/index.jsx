import React from "react";
import Card from "@/ui/card/ConferenceCard";
import img from "../../images/f7bf48b1dfa6d1a5bda8220c143bf41a.jpeg";
import useGitData from "@/server/useGitData";
import { SplideSlide } from "@splidejs/react-splide";

const index = () => {
  const [data, loading] = useGitData({ prop: "conferences" });

  // Handle loading state

  // Handle error state

  // Ensure data is available and has the expected structure
  const eventData =
    data && data[0]
      ? data[0]
      : { description: "لا توجد بيانات", image: "/default-image.png" };

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
        {loading ? (
          Array.from({ length: 4 }).map((_, i) => (
            <SplideSlide key={i}>
              <Card loading />
            </SplideSlide>
          ))
        ) : Array.isArray(data) && data.length > 0 ? (
          data.map((card, i) => (
            <SplideSlide key={i}>
              <Card card={card} href={`events/${card.id}`} />
            </SplideSlide>
          ))
        ) : (
          <div className="text-center">
            <p>لا توجد بيانات متاحة حاليا</p>
          </div>
        )}
      </div>
      <div className="h-[100px]"></div>
    </div>
  );
};

export default index;
