import React from "react";
import logo from "../../images/Logo (1).png";
import Image from "next/image";
const Footer = () => {
  return (
    <div
      dir="rtl"
      className="bg-[#11898C] w-[100%] py-5  px-3 md:h-[380px] py-5"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div className="w-[90%] m-auto md:flex justify-between">
        <div style={{ zIndex: "1000" }}>
          <Image
            style={{ zIndex: "1000" }}
            src={logo}
            className="w-[204px] h-[95px] text-white"
          />
        </div>
        <div style={{ zIndex: "1000" }}>
          <h1
            style={{ zIndex: "1000" }}
            className="font-tajawal text-[23px] font-bold leading-[42px] tracking-[-0.02em] text-white text-right"
          >
            الجمعية{" "}
          </h1>
          <h1 className="font-tajawal text-[18px] font-normal leading-[30px] tracking-[-0.015em] text-right text-[#B5DADB]">
            {" "}
            تعرف علينا{" "}
          </h1>
          <h1 className="font-tajawal text-[18px] font-normal leading-[30px] tracking-[-0.015em] text-right text-[#B5DADB]">
            {" "}
            اعضاء الجمعية{" "}
          </h1>
          <h1 className="font-tajawal text-[18px] font-normal leading-[30px] tracking-[-0.015em] text-right text-[#B5DADB]">
            {" "}
            احدث الاخبار{" "}
          </h1>
        </div>

        <div>
          <h1 className="font-tajawal text-[23px] font-bold leading-[42px] tracking-[-0.02em] text-white text-right">
            الروابط السريعة{" "}
          </h1>
          <h1 className="font-tajawal text-[18px] font-normal leading-[30px] tracking-[-0.015em] text-right text-[#B5DADB]">
            {" "}
            الابحاث والمنشورات{" "}
          </h1>
          <h1 className="font-tajawal text-[18px] font-normal leading-[30px] tracking-[-0.015em] text-right text-[#B5DADB]">
            {" "}
            التدريب والدعم{" "}
          </h1>
          <h1 className="font-tajawal text-[18px] font-normal leading-[30px] tracking-[-0.015em] text-right text-[#B5DADB]">
            {" "}
            انضم الينا{" "}
          </h1>
        </div>
        <div style={{ zIndex: "1000" }}>
          <h1 className="font-tajawal text-[23px] font-bold leading-[42px] tracking-[-0.02em] text-white text-right">
            معلومات الاتصالات{" "}
          </h1>
          <h1 className="font-tajawal text-[18px] font-normal leading-[30px] tracking-[-0.015em] text-right text-[#B5DADB]">
            {" "}
            العنوان بشارع الملك عبدالعزيز الرياض
          </h1>
          <h1 className="font-tajawal text-[18px] font-normal leading-[30px] tracking-[-0.015em] text-right text-[#B5DADB]">
            {" "}
            البريد الإلكتروني: info@ssor.sa
          </h1>
          <h1 className="font-tajawal text-[18px] font-normal leading-[30px] tracking-[-0.015em] text-right text-[#B5DADB]">
            {" "}
            رقم الهاتف: +966 11 123 4567
          </h1>
        </div>
      </div>
      <div className="flex justify-center">
        <h1
          style={{ zIndex: "1000" }}
          className="font-tajawal text-[18px] font-normal leading-[30px] tracking-[-0.015em] text-right text-[#B5DADB] my-5"
        >
          {" "}
          حقوق الطبع والنشر © 2020 جمعية داعم لابحاث الأورام. جميع الحقوق
          محفوظة.
        </h1>
      </div>
      <div
        className="footer-item absolute rounded-tl-[25px] rounded-br-[0px] rounded-bl-[0px] rounded-tr-[0px] bg-[#0F7D7F]"
        style={{
          width: "218.41px",
          height: "253.1px",
          top: "20%",
          right: "0%",
          transform: "rotate(-135deg)",
        }}
      >
        {/* Content goes here */}
      </div>
      <div
        className="footer-item absolute  rounded-tl-[25px] rounded-br-[0px] rounded-bl-[0px] rounded-tr-[0px] bg-[#0F7D7F]"
        style={{
          width: "218.41px",
          height: "253.1px",
          top: "-10%",
          left: "10%",
          transform: "rotate(-135deg)",
        }}
      >
        {/* Content goes here */}
      </div>
      <div
        className=" footer-item absolute rounded-tl-[25px] rounded-br-[0px] rounded-bl-[0px] rounded-tr-[0px] bg-[#0F7D7F]"
        style={{
          width: "218.41px",
          height: "253.1px",
          top: "75%",
          left: "40%",
          transform: "rotate(-135deg)",
          borderRadius: "20px",
        }}
      >
        {/* Content goes here */}
      </div>
    </div>
  );
};

export default Footer;
