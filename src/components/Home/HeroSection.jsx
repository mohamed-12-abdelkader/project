import Image from "next/image";
import React, { useEffect } from "react";
import img from "../../images/f7bf48b1dfa6d1a5bda8220c143bf41a.jpeg";
import useGitData from "@/server/useGitData";
import { Spinner } from "react-bootstrap";
<<<<<<< HEAD
import Link from "next/link";
import Loading from "../loading/Loading";
import { useLoading } from "../loading/LoadingContext";
=======
>>>>>>> c74708a76c74e4567ec11553842d0e17a20df173

const HeroSection = () => {
  const { setLoading } = useLoading();
  const [data, loading] = useGitData({ prop: "hero" });

  // Check if data is loading or is undefined/empty
  useEffect(() => {
    setLoading(loading);
  }, [loading, setLoading]);

  // Check if data is loading or is undefined/empty
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  // Ensure `data` is defined and has at least one item before accessing it
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div
      className="relative md:flex items-center md:h-[700px]"
      style={{ overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          top: "28%",
          left: "-14%",
          zIndex: "1000",
        }}
        className="item1 w-[300px] h-[300px] bg-[#0f7d7f] gap-0 rounded-tl-[64px] transform rotate-[135deg] text-white flex items-center justify-center"
      ></div>

      <div>
        <Image
          src={data[0].image} // Data is safely accessed here
          alt={data[0].title || "Hero section image"} // Add alt text
          width={520} // Add width
          height={450} // Add height
          className="img_hero h-[450px] w-[95%] m-auto md:w-[520px]"
          style={{
            position: "absolute",
            top: "10%",
            left: "62%",
            borderRadius: "64px",
            zIndex: "100",
          }}
        />
      </div>

      <div
        dir="rtl"
        style={{
          position: "absolute",
          top: "26%",
          left: "15%",
        }}
        className="hero_des w-[90%] m-auto md:w-[525px]"
      >
        <h1 className="font-tajawal text-[30px] font-bold leading-[90px] tracking-[-0.025em] text-right md:text-[60px]">
          {data[0].title}
        </h1>
        <p className="my-2">{data[0].subtitle}</p>
        <div className="flex">
          <button
            className="m-2 h-[35px] w-[150px] bg-[#0f7d7f] text-white"
            style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
          >
            انضم الينا
          </button>
          <button
            className="button-hero m-2 h-[35px] w-[150px] text-[#0f7d7f]"
            style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
          >
            اكتشف المزيد
          </button>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "90%",
          transform: "rotate(135deg) scaleX(-1)",
        }}
        className="item2 w-[300px] h-[300px] bg-[#0f7d7f] gap-0 rounded-tl-[64px] text-white flex items-center justify-center"
      ></div>
      {/* Other content */}
    </div>
  );
};

export default HeroSection;
