import React from "react";
import Image from "next/image";
import img from "../../images/eb139cdb3151e7d7bbf629d80a3121c0.png";
const PartnersSuccess = () => {
  return (
    <div className="mb-[50px] mt-[300px]">
      <div className="text-center">
        <h1 className="font-bold text-xl text-[#353939]">شركاء النجاح </h1>
      </div>
      <div className="m-auto md:flex gap-x-4  md:gap-x-6 justify-center flex-wrap items-center">
        <div>
          <Image
            className="w-[90%] m-auto h-[300px]"
            src={img}
            alt="national-system-for-non-profit-sector"
          />
        </div>
        <div>
          <Image
            className="w-[90%] m-auto h-[300px]"
            src={img}
            alt="national-system-for-non-profit-sector"
          />
        </div>
        <div>
          <Image
            className="w-[90%] m-auto h-[300px]"
            src={img}
            alt="national-system-for-non-profit-sector"
          />
        </div>
        <div>
          <Image
            className="w-[90%] m-auto h-[300px]"
            src={img}
            alt="national-system-for-non-profit-sector"
          />
        </div>
      </div>
    </div>
  );
};

export default PartnersSuccess;
