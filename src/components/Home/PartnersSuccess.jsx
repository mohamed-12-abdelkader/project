import React from "react";
import Image from "next/image";
const PartnersSuccess = () => {
  return (
    <div className="mb-[50px] mt-[300px]">
      <div className="text-center">
        <h1 className="font-bold text-xl text-[#353939]">شركاء النجاح </h1>
      </div>
      <div className="flex gap-x-4  md:gap-x-6 justify-center flex-wrap items-center">
        <div><Image className="max-w-full" width={194} height={90} src="/national-system-for-non-profit-sector.png" alt="national-system-for-non-profit-sector" /></div>
        <div><Image className="max-w-full" width={194} height={90} src="/national-system-for-non-profit-sector.png" alt="national-system-for-non-profit-sector" /></div>
        <div><Image className="max-w-full" width={194} height={90} src="/national-system-for-non-profit-sector.png" alt="national-system-for-non-profit-sector" /></div>
        <div><Image className="max-w-full" width={194} height={90} src="/national-system-for-non-profit-sector.png" alt="national-system-for-non-profit-sector" /></div>
      </div>
    </div>
  );
};

export default PartnersSuccess;
