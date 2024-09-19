import React from "react";
import Image from "next/image";
import img from "../../images/f7bf48b1dfa6d1a5bda8220c143bf41a (1).jpeg";
import img2 from "../../images/4550af08658cc3736d9bd509aee7ca22.png";
import { CiMail } from "react-icons/ci";
import useGitData from "@/server/useGitData";
import { Spinner } from "react-bootstrap";
import Info from "@/components/about/Info";
import DetailsAboutUs from "@/components/about/DetailsAboutUs";

const AboutPage = () => {
  const [data, loading] = useGitData({ prop: "heroAboutUs" });

  if (loading) {
    return <Spinner />;
  }

  return (
    <div dir="rtl" className="mt-[100px]">
      <div className="text-center">
        <p className="text-[#11898C]">تعرف علينا</p>
        <h1 className="text-xl font-bold text-[#11898C] my-2">جمعية داعم</h1>
        <h1 className="text-3xl font-bold text-[#353939] my-3">
          بالبحث، ننقذ الأرواح
        </h1>
        <div className="w-[90%] m-auto text-center my-2 md:w-[50%]">
          <p className="text-[#353939]">{data?.description}</p>
        </div>
      </div>

      <div className="w-[90%] m-auto my-5 md:flex">
        <div className="md:w-[50%] mx-3">
          <Image
            src={data?.BigImage}
            width={741}
            height={600}
            className="h-[600px] w-[100%]"
            style={{ borderRadius: "10px" }}
            alt="Large image related to the organization"
          />
        </div>
        <div className="md:w-[50%]">
          <Image
            src={data?.SmallImage}
            width={532}
            height={289}
            className="h-[290px] w-[100%]"
            style={{ borderRadius: "10px" }}
            alt="Small image related to the organization"
          />
          <Image
            src={data?.SmallImage2}
            width={532}
            height={289}
            className="mt-[20px] h-[290px] w-[100%]"
            style={{ borderRadius: "10px" }}
            alt="Another small image related to the organization"
          />
        </div>
      </div>

      <Info />

      <div dir="rtl" className="mt-[70px]">
        <div className="text-center">
          <h1 className="text-xl font-bold">اعضاء مجلس الادارة</h1>
          <p className="font-normal text-[#353939] my-2">
            ابقَ على اطلاع على آخر أخبار و مستجدات الجمعية
          </p>
        </div>
        <div className="my-3 text-center md:flex justify-center">
          {["مجلس الادارة", "مجلس الادارة", "مجلس الادارة", "مجلس الادارة"].map((label, idx) => (
            <button
              key={idx}
              className="m-2 h-[35px] w-[200px] text-[#0f7d7f]"
              style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap w-[95%] m-auto justify-center">
          {Array(8).fill(null).map((_, idx) => (
            <div key={idx} className="w-[280px] h-[300px] my-3 mx-2">
              <div className="h-[210px] bg-[#D7DADA]">
                <Image
                  src={img2}
                  width={280}
                  height={210}
                  className="h-[100%]"
                  alt="Board member image"
                />
              </div>
              <div className="text-center my-2">
                <h1 className="text-xl font-bold text-[#353939] my-2">
                  سعود صالح عبدالكريم الصواب
                </h1>
                <p className="text-[#353939] font-normal">رئيس مجلس الادارة</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-[300px] bg-section my-[50px] flex items-center px-5">
        <div>
          <h1 className="text-xl font-bold text-white my-3">انضم الينا</h1>
          <p className="text-white my-3">
            نرحب بانضمامكم إلى فريقنا والمساهمة في تحقيق رسالتنا. كن جزءًا من
            التغيير وساهم في تحقيق مستقبل خالٍ من السرطان.
          </p>
          <button
            className="m-2 h-[35px] w-[150px] text-[white]"
            style={{ border: "1px solid white", borderRadius: "30px" }}
          >
            انضم الان
          </button>
        </div>
      </div>

      <DetailsAboutUs />
    </div>
  );
};

export default AboutPage;
