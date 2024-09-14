import React from "react";
import img from "../../images/598e8503aa101eaeb4fb1270d9f47263.jpeg";
import Image from "next/image";

const index = () => {
  return (
    <div dir="rtl" className="mt-[100px]">
      <div className="text-center">
        <p className="text-[#11898C] my-2"> الأخبار </p>
        <div className="w-[90%] md:w-[80%] lg:w-[60%] m-auto text-center">
          <h1
            className="font-bold  text-[#353939] text-[20px] md:text-[50px]"
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
        <div className="lg:w-[50%]">
          <Image
            src={img}
            className="h-[300px] sm:h-[400px] lg:h-[485px] w-full lg:w-[635px]"
            style={{ borderRadius: "20px" }}
            alt="Event image"
          />
          <p className="my-2 text-center lg:text-left">1 محرم 1446</p>
          <h1 className="text-lg sm:text-xl font-bold text-center lg:text-left">
            جمعية داعم تستضيف ورشة عمل متقدمة حول أحدث تقنيات الأبحاث في مجال
            السرطان. الورشة ستتناول تقنيات الـ CAR-T-Cell الجديدة في علاج
            السرطان.
          </h1>
          <p className="text-sm sm:text-base text-center lg:text-left">
            شهد المؤتمر السنوي لأبحاث الأورام لعام 2024 نجاحًا باهرًا، حيث اجتمع
            أبرز الباحثين والخبراء من جميع أنحاء العالم لمناقشة أحدث التطورات
            والابتكارات في مجال علاج السرطان. تم تقديم العديد من الأبحاث الرائدة
            التي تبشر بأمل جديد للمرضى، حيث تناولت الأوراق البحثية مواضيع متنوعة
            بدءًا من العلاج المناعي والوراثة الجزيئية، وصولاً إلى استخدام تقنيات
            الذكاء الاصطناعي في التشخيص والعلاج.
          </p>
        </div>

        <div className="lg:w-[50%] mx-3 mt-5 lg:mt-0">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="h-[120px] sm:h-[150px] w-full flex m-2">
              <Image
                src={img}
                className="h-full w-[100px] sm:w-[150px] lg:w-[200px]"
                style={{ borderRadius: "10px" }}
                alt={`Event image ${index + 1}`}
              />
              <div className="my-3 mx-2">
                <p className="m-1 text-xs sm:text-sm">1 محرم 1446</p>
                <p className="m-1 text-xs sm:text-sm">
                  جمعية داعم تستضيف ورشة عمل متقدمة حول أحدث تقنيات الأبحاث في
                  مجال السرطان. الورشة ستتناول تقنيات الـ CAR-T-Cell الجديدة في
                  علاج السرطان.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-[50px] lg:h-[100px]"></div>
    </div>
  );
};

export default index;
