import React from "react";
import img from "../../images/89c2be04dfa7a7ab14423059955b4586.png";
import Image from "next/image";
const Events = () => {
  return (
    <div className="mt-[100px]">
      <div className="text-center">
        <h1 className="font-[Tajawal] text-[28px] font-bold leading-[42px] tracking-[-0.02em] text-center">
          ابقَ على اطلاع على فعالياتنا و مبادراتنا
        </h1>
        <div className="w-[70%] text-center m-auto my-3">
          <p className="my-2 font-normal text-[#353939]">
            "نقدم مجموعة متنوعة من الفعاليات المتميزة التي تهدف إلى تعزيز
            المعرفة وزيادة الوعي في مجال أبحاث الأورام. انضم إلينا في فعالياتنا
            القادمة وكن جزءًا من التغيير."
          </p>
        </div>
        <button
          className="m-2 h-[35px] w-[200px] text-[#0f7d7f] my-4"
          style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
        >
          تعرف على فعالياتنا
        </button>
      </div>
      <div>
        <Image
          src={img}
          className="w-[95%] m-auto h-[500px]"
          style={{ borderRadius: "20px" }}
        />
      </div>
    </div>
  );
};

export default Events;
