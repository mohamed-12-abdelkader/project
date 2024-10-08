import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContentLoader from "react-content-loader";

const ConferenceCard = ({ card, loading, href }) => {
  if (loading) {
    return (
      <div
        style={{
          borderRadius: "16px",
          overflow: "hidden",
          width: "306px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        className="h-[500px] w-[306px] m-2 " // تعيين ارتفاع الكارد إلى 500 بكسل
        dir="rtl"
      >
        <ContentLoader
          speed={2}
          width={306}
          height={500}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="306" height="314" />
          <rect x="10" y="330" rx="5" ry="5" width="270" height="20" />
          <rect x="10" y="360" rx="5" ry="5" width="200" height="20" />
          <rect x="10" y="420" rx="15" ry="15" width="250" height="35" />
        </ContentLoader>
      </div>
    );
  }

  return (
    <div
      dir="rtl"
      style={{
        boxShadow: `0px 9px 21px 0px #11898C0A`,
        borderRadius: "16px",
        overflow: "hidden",
        width: "306px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      className="h-[480px] w-[306px] m-2 shadow my-4" // تعيين ارتفاع الكارد إلى 500 بكسل
    >
      <div>
        <Image
          src={card.image}
          alt={card.title}
          width={306}
          height={314}
          style={{ objectFit: "cover", height: "300px" }}
        />
        <div dir="rtl" className="p-2 text-right">
          <p className="font-normal text-[#353939] mt-3">
            {card.date || "1 محرم 1446"}
          </p>
          <h1
            className="text-xl font-bold text-[#353939] my-2"
            style={{
              height: "89px", // تعيين ارتفاع العنوان إلى 89 بكسل
              maxWidth: "270px",
              wordWrap: "break-word",
              whiteSpace: "normal",
              overflow: "hidden", // تأكد من أن النص لا يتجاوز ارتفاع العنوان
            }}
          >
            {card.title}
          </h1>
        </div>
      </div>
      <div className="text-center">
        <Link href={href || ""}>
          <button
            className="h-[35px] my-2 w-[90%] m-auto text-[#0f7d7f]"
            style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
          >
            اكتشف المزيد
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ConferenceCard;
