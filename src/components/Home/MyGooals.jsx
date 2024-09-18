import Link from "next/link";
import React from "react";
import { GoArrowUpLeft } from "react-icons/go";

import useGitData from "@/server/useGitData";

// Skeleton Loader Component for Loading State
const SkeletonLoader = () => (
  <div className="animate-pulse flex flex-col items-center">
    <div className="bg-gray-300 rounded-full w-[80px] h-[65px]"></div>
    <div className="mt-4 h-4 bg-gray-300 w-3/4"></div>
    <div className="mt-2 h-3 bg-gray-300 w-2/4"></div>
  </div>
);

const MyGooals = () => {
  const [data, loading] = useGitData({ prop: "goals" });

  if (loading) {
    return (
      <div className="my-5 bg-[#E7F3F4] py-3 md:h-[370px] flex justify-center items-center">
        <div className="w-[90%] m-auto md:flex justify-between">
          {/* Loading Skeleton for each goal */}
          {[1, 2, 3].map((item) => (
            <div key={item} className="w-[90%] m-auto my-2 md:w-[400px]">
              <SkeletonLoader />
            </div>
          ))}
        </div>
      </div>
    );
  }
  console.log(data);
  // Ensure data exists and is not empty
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }
  console.log("data", data);
  return (
    <div dir="rtl" className="my-5 bg-[#E7F3F4] py-3 md:h-[370px]">
      <div className="text-center py-4">
        <h1 className="font-tajawal text-[28px] font-bold leading-[42px] tracking-[-0.02em]">
          اهدافنا
        </h1>
      </div>
      <div className="w-[90%] m-auto md:flex justify-between">
        {data.map((goal, index) => (
          <div key={goal.id} className="w-[90%] m-auto my-2 md:w-[400px]">
            <div className="text-center">
              <div className="flex justify-center">
                <img
                  src={goal.image}
                  className="w-[80px] h-[65px]"
                  alt={`Goal ${index + 1}`}
                />
              </div>
              <p className="font-medium my-3 text-[#353939]">{goal.title}</p>
            </div>
            <div className="text-center h-[60px]">
              <p className="text-[#353939]">{goal.body}</p>
            </div>
            <div className="flex justify-center my-3">
              <Link href={""} className="no-underline text-[#0f7d7f] flex">
                قراءة المزيد <GoArrowUpLeft className="m-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyGooals;
