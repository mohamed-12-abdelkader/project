import React from "react";
import img from "../../images/eb139cdb3151e7d7bbf629d80a3121c0.png";
import Image from "next/image";
const PartnersSuccess = () => {
  return (
    <div className="my-[50px]">
      <div className="text-center">
        <h1 className="font-bold text-xl text-[#353939]">شركاء النجاح </h1>
      </div>
      <div className="flex justify-center">
        <Image className="m-2" src={img} />
        <Image className="m-2" src={img} />
        <Image className="m-2" src={img} />
        <Image className="m-2" src={img} />
      </div>
    </div>
  );
};

export default PartnersSuccess;
