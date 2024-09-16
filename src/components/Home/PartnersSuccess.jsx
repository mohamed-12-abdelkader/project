import React from "react";
import Image from "next/image";
import useGitData from "@/server/useGitData";

const PartnersSuccess = () => {
  const [data, loading] = useGitData({ prop: "partners" });

  // Handle loading state
  if (loading) {
    return (
      <div className="text-center mt-10">
        <p className="text-lg font-medium text-[#353939]">
          جارٍ تحميل الشركاء...
        </p>
      </div>
    );
  }

  // Handle empty data
  if (!data || data.length === 0) {
    return (
      <div className="text-center mt-10">
        <p className="text-lg font-medium text-[#353939]">
          لا توجد بيانات للشركاء حالياً.
        </p>
      </div>
    );
  }

  return (
    <div className="mb-[50px] mt-[200px]">
      <div className="text-center">
        <h1 className="font-bold text-xl text-[#353939]">شركاء النجاح</h1>
      </div>
      <div className="m-auto md:flex gap-x-4 md:gap-x-6 justify-center flex-wrap items-center">
        {data.map((partner) => (
          <div key={partner.id} className="flex-none">
            <Image
              className="w-[90%] m-auto h-[300px] object-contain"
              src={partner.image}
              alt={partner.name}
              width={300}
              height={300}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersSuccess;
