import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import useGitData from "@/server/useGitData";
import "bootstrap/dist/css/bootstrap.min.css"; // تأكد من استيراد Bootstrap CSS
import Image from "next/image";
import img from "../../images/artboard-2.png";
import Loading from "../loading/Loading";
import { useLoading } from "../loading/LoadingContext";
import Link from "next/link";
const SectionTwo = () => {
  const { setLoading } = useLoading();
  const [data, loading] = useGitData({ prop: "magazine" });
  useEffect(() => {
    setLoading(loading);
  }, [loading, setLoading]);
  console.log(data);
  return (
    <div
      dir="rtl"
      className="w-full overflow-hidden relative z-0 mt-[15px] md:mt-[180px] bg-gradient-to-b from-white to-[#e8f4f5]"
    >
      {/* Bg Badge */}
      <div
        className="item3 w-[400px]  h-[400px]  top-[80%] md:top-[30%] w-[200px] lg:w-[250px] xl:w-[300px] 2xl:w-[350px] left-[5%] md:left-[10%] 2xl:left-[15%] top-[40%] h-auto z-10 gap-0 rounded-tl-[30px] transform rotate-[125deg] bg-[#B5DADB] border absolute"
        style={{
          borderRadius: "20px",
          aspectRatio: "350 / 450",
          left: "5%",
        }}
      />

      <div className="app-container relative flex flex-col md:flex-row items-center z-20 justify-between space-y-5 md:space-y-0">
        {loading ? (
          <div className="d-flex justify-content-center align-items-center w-full">
            <Spinner animation="border" role="status" />
            <span className="mx-2">جاري التحميل...</span>
          </div>
        ) : (
          <>
            <div className="max-w-full md:max-w-[617px] min-h-[299px] gap-[32px] px-4 md:px-0">
              <p className="text-[16px] md:text-[18px] text-[#353939]">
                حمل مجلة داعم!!
              </p>
              <h1 className="font-tajawal text-[24px] md:text-[32px] text-[#353939] font-bold leading-[32px] md:leading-[48px] tracking-[-0.02em] text-right my-1">
                {data[0]?.title}
              </h1>
              <p className="text-[14px] md:text-[16px] text-[#353939]">
                {data[0]?.description}
              </p>
              <div className="flex flex-col sm:flex-row items-center my-3 gap-4">
                <Link href={data[0]?.magazine || "/"}>
                  <button
                    className="h-[40px] p-2 w-full sm:w-[200px] bg-[#0f7d7f] text-white text-[14px] sm:text-[16px]"
                    style={{
                      border: "1px solid #0f7d7f",
                      borderRadius: "30px",
                    }}
                  >
                    حمل الان اخر اصدار
                  </button>
                </Link>
                <Link href={"/magazines"}>
                  <button
                    className="h-[40px] p-2 w-full sm:w-[200px] text-[#0f7d7f] text-[14px] sm:text-[16px]"
                    style={{
                      border: "1px solid #0f7d7f",
                      borderRadius: "30px",
                    }}
                  >
                    تصفح الاصدارات الاخرى
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src={data[0]?.image}
                width={380}
                height={300}
                alt="Centered Image"
                className="max-w-full h-auto"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SectionTwo;
