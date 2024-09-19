import React from "react";
import Image from "next/image";
import useGitData from "@/server/useGitData";
import Loading from "@/components/loading/Loading";

const Index = () => {
  const [data, loading, error] = useGitData({ prop: "news" });

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    ); // عرض لودينج أثناء تحميل البيانات
  }

  if (error) {
    return <div>Error loading data</div>; // عرض رسالة خطأ في حال حدوث مشكلة
  }

  return (
    <div dir="rtl" className="mt-[100px]">
      <div className="text-center">
        <p className="text-[#11898C] my-2">الأخبار</p>
        <div className="w-[90%] md:w-[80%] lg:w-[60%] m-auto text-center">
          <h1
            className="font-bold text-[#353939] text-[20px] md:text-[50px]"
            style={{ lineHeight: "80px" }}
          >
            اكتشف أحدث الأخبار والتطورات وكن جزءًا من التغيير!
          </h1>
        </div>
        <div className="w-[90%] md:w-[80%] lg:w-[60%] m-auto text-center">
          <p className="text-[#353939] mt-2 text-sm sm:text-base">
            ابقَ على اطلاع دائم بأحدث الأخبار والمستجدات من جمعية داعم لأبحاث
            الأورام. كل ما هو جديد يسهم في تعزيز جهودنا لمكافحة السرطان وتحسين
            حياة المرضى.
          </p>
        </div>
      </div>

      <div className="h-[50px] lg:h-[100px]"></div>

      <div className="flex flex-col lg:flex-row w-[95%] m-auto">
        {data.length > 0 && (
          <>
            {/* أول عنصر في الجزء الأيسر */}
            <div className="lg:w-[50%]">
              <Image
                src={data[0].image}
                className="h-[300px] sm:h-[400px] lg:h-[485px] w-full lg:w-[635px]"
                style={{ borderRadius: "20px" }}
                alt={data[0].title}
                width={635}
                height={485}
              />
              <p className="my-2 text-center lg:text-left">1 محرم 1446</p>
              <h1 className="text-lg sm:text-xl font-bold text-center lg:text-left">
                {data[0].title}
              </h1>
              <p className="text-sm sm:text-base text-center lg:text-left">
                {data[0].content}
              </p>
            </div>

            {/* باقي العناصر في الجزء الأيمن */}
            <div className="lg:w-[50%] mx-3 lg:mt-0">
              {data.map((item, index) => (
                <div
                  key={item.id}
                  className="h-[120px] sm:h-[150px] w-full flex m-2"
                >
                  <Image
                    src={item.image}
                    className="h-full w-[100px] sm:w-[150px] lg:w-[200px]"
                    style={{ borderRadius: "10px" }}
                    alt={item.title}
                    width={200}
                    height={150}
                  />
                  <div className="my-3 mx-2">
                    <p className="m-1 text-xs sm:text-sm">1 محرم 1446</p>
                    <p className="m-1 text-xs sm:text-sm">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="h-[50px] lg:h-[100px]"></div>
    </div>
  );
};

export default Index;
