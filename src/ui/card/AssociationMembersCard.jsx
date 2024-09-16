import Image from "next/image";
import React from "react";

export default function AssociationMembersCard({ imageUrl, name, position }) {
  return (
    <div dir="rtl" className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image Container */}
      <div
        className="bg-[#D7DADA] overflow-hidden"
        style={{ borderRadius: "9px 9px 0 0", height: "209px", width: "305px" }}
      >
        <Image
          src={imageUrl}
          alt={name}
          width={305} // Set the width of the image
          height={209} // Set the height of the image
          style={{ objectFit: "cover" }}
          className="mx-auto"
        />
      </div>
      {/* Content */}
      <div className="p-2 text-center">
        <h1 className="text-xl font-bold text-[#353939] my-2">{name}</h1>
        <p className="text-[#353939] font-normal">{position}</p>
      </div>
    </div>
  );
}
