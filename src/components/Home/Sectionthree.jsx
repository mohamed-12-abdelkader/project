import React from "react";
import Image from "next/image";
import img from "../../images/f7bf48b1dfa6d1a5bda8220c143bf41a.jpeg";
import Slider from "../slider/Slider";
import Card from "@/ui/card/Card";
import Link from "next/link";

const Sectionthree = () => {
  return (
    <div className="my-5 p-5 mt-[50px]">
      <div className="text-center">
        <h1 className="font-bold text-xl text-[#353939]">
          اكتشف أحدث ابحاثنا في مجال الأورام
        </h1>
        <p className="my-2 text-[#353939] font-normal">
          اطلع على أحدث ابحاث جمعية داعم في الأورام، وتعرف على كيفية تحقيق تقدم
          ملموس في <br />
          علاج السرطان.
        </p>
      </div>

      <div className="w-[95%] mx-auto">
        <Slider>
          {[...Array(8)].map((_, index) => (
            <Card key={index} />
          ))}
        </Slider>
      </div>

      <div className="text-center">
        <Link href="/search">
          <button
            className="m-2 h-[35px] w-[200px] text-[#0f7d7f]"
            style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
          >
            عرض جميع الابحاث
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sectionthree;
