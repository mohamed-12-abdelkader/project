import Image from "next/image";
import React from "react";


const ConferenceCard = ({ card }) => {
  return (
    <div
      dir="rtl"
      style={{
        boxShadow: `
          0px 9px 21px 0px #11898C0A,
          0px 38px 38px 0px #11898C08,
          0px 85px 51px 0px #11898C05,
          0px 150px 60px 0px #11898C03,
          0px 235px 66px 0px #11898C00
      `,
        borderRadius: "16px",
        overflow: "hidden",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <div>

        <div>
          <Image
            src={card.imageUrl}
            width={306}
            height={314}
            alt={card.title}
          />
        </div>
        <div className="p-2">
          <p className="font-normal text-[#353939] mt-3">{card.date}</p>
          <h1 className="text-xl font-bold text-[#353939]">
            {card.title}
          </h1>
        </div>
      </div>
      <div className="text-center">
        <button
          className="h-[35px] my-2 w-[90%] m-auto text-[#0f7d7f]"
          style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
        >
          اكتشف المزيد
        </button>
      </div>
    </div>
  );
};

export default ConferenceCard;
