import useGitData from "@/server/useGitData";
import Link from "next/link";
import React from "react";

const SectionFour = () => {
  const [data, loading] = useGitData({ prop: "aboutus" });

  if (loading) {
    return <div>Loading...</div>; // Display a loading indicator
  }

  // Ensure data exists and is not empty
  if (!data || data.length === 0) {
    return <div>No data available</div>; // Handle empty data state
  }

  const { image, description } = data[0]; // Destructure the first item from data

  return (
    <div
      className="app-container gap-[30px] md:flex items-center justify-between"
      dir="rtl"
    >
      {image && (
        <video
          src={image}
          style={{
            height: "445px",
            width: "635px",
            margin: "50px 0px",
            borderRadius: "20px",
          }}
          autoPlay
          loop
          muted
          className="object-cover"
        />
      )}
      <div className="max-w-[525px]">
        <h1 className="text-xl font-bold text-[#353939] my-3">من نحن</h1>
        {description && (
          <div
            className="font-normal text-[#353939] my-2 md:w-[80%]"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
        <Link href="/about">
          <button
            className="m-2 my-3 h-[35px] w-[150px] text-[#0f7d7f]"
            style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
          >
            اكتشف المزيد
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SectionFour;
