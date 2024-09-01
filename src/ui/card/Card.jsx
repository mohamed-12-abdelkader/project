import Image from "next/image";
import React from "react";
import img from "../../images/f7bf48b1dfa6d1a5bda8220c143bf41a.jpeg";

const Card = () => {
  return (
    <div
      dir="rtl"
      className="inline-block  mx-2 border "
      style={{
        flexShrink: 0,
        width: "280PX",
        boxShadow: `
               0px 9px 21px 0px #11898C0A,
          0px 38px 38px 0px #11898C08,
          0px 85px 51px 0px #11898C05,
          0px 150px 60px 0px #11898C03,
          0px 235px 66px 0px #11898C00
      `,
        borderRadius: "10px",
      }}
    >
      <div>
        <Image
          src={img}
          className="w-[100%] h-[200px]"
          style={{ borderRadius: "10px" }}
        />
      </div>
      <div className="p-2">
        <p className="font-normal text-[#353939]">1 محرم 1446</p>
        <h1 className="text-xl font-bold text-[#353939]">
          العلاج بالخلايا الجذعية: <br />
          أفق جديد لعلاج الأورام
        </h1>
      </div>
      <div className="text-center">
        <button
          className="h-[35px] my-2 w-[90%] m-auto text-[#0f7d7f]"
          style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
        >
          اكتشف المزيد
        </button>
      </div>
    </div>
  );
};

export default Card;
