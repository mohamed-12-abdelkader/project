import React from "react";
import Image from "next/image";
import img from "../../images/f7bf48b1dfa6d1a5bda8220c143bf41a.jpeg";
import Slider from "../slider/Slider";

const News = () => {
  return (
    <div className="mt-[50px] h-[500px]">
      <div className="text-center">
        <h1 className="text-xl font-bold text-[#353939]">
          أحدث الأخبار والتحديثات
        </h1>
        <p className="my-3 font-normal text-[#353939]">
          ابقَ على اطلاع على آخر أخبار و مستجدات الجمعية
        </p>
      </div>
      <Slider>
        <div className="relative">
          <Image
            className="h-[300px] w-[400px]"
            src={img}
            alt="News Image 1"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative">
          <Image src={img} alt="News Image 2" layout="fill" objectFit="cover" />
        </div>
        <div className="relative">
          <Image src={img} alt="News Image 3" layout="fill" objectFit="cover" />
        </div>
        {/* Add more images as needed */}
      </Slider>
    </div>
  );
};

export default News;
