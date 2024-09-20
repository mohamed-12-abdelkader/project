import Image from "next/image";
import React from "react";

const DetailsPage = ({ data }) => {
  return (
    <div
      dir="rtl"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-gray-100 py-12 px-4 md:px-8 lg:px-24"
    >
      {/* Main Container */}
      <div className="bg-white -[600px] w-[90%] m-auto rounded-lg shadow-2xl p-6 md:p-8 lg:p-12  flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0 md:mr-8">
          <Image
            src={data.image}
            alt={data.title}
            height={400}
            width={500}
            className=" border-4 border-gray-200 shadow-lg md:ml-[70px]"
            style={{ borderRadius: "25px" }}
          />
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 grid items-center">
          {/* Title */}
          <h1 className="font-tajawal font text-xl font-bold leading-[90px] tracking-[-0.025em] text-right md:text-3xl">
            {data.title}
          </h1>

          {/* Content */}
          <p className="text-gray-600 text-justify leading-relaxed mb-6">
            {data.content || data.description}
          </p>

          {/* Action Buttons */}
          <div className="flex justify-center md:justify-start"></div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
