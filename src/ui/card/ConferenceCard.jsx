import Image from "next/image";
import React from "react";


const ConferenceCard = ({ card }) => {
  // url in future to direct user to a custom Research page
  return (
    <div
      dir="rtl"
      className="border overflow-hidden"
      style={{
        boxShadow: `
          0px 9px 21px 0px #11898C0A,
          0px 38px 38px 0px #11898C08,
          0px 85px 51px 0px #11898C05,
          0px 150px 60px 0px #11898C03,
          0px 235px 66px 0px #11898C00
      `,
        borderRadius: "16px",
      }}
    >
      <div>
        <Image
          src={card.imageUrl}
          className="w-[100%] h-[200px]"
          alt={card.title}
        />
      </div>
      <div className="p-2">
        <p className="font-normal text-[#353939]">{card.date}</p>
        <h1 className="text-xl font-bold text-[#353939]">
          {card.title}
        </h1>
      </div>
      <div className="text-center">
        {/* TODO: make the button as link, and redirect to url props */}
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
