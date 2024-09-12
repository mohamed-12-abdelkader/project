import React from "react";
import img from "../../images/89c2be04dfa7a7ab14423059955b4586.png";
import Image from "next/image";
const Events = () => {
  return (
    <div className="app-container mt-[50px]">
      <div className="text-center">
        <h1 className="text-xl font-bold text-[#353939]">
          ابقَ على اطلاع على فعالياتنا و مبادراتنا
        </h1>
        <div className="w-[70%] text-center m-auto my-3">
          <p className="my-2 font-normal text-[#353939]">
            &quot;نقدم مجموعة متنوعة من الفعاليات المتميزة التي تهدف إلى تعزيز
            المعرفة وزيادة الوعي في مجال أبحاث الأورام. انضم إلينا في فعالياتنا
            القادمة وكن جزءًا من التغيير.&quot;
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
          alt="ابقَ على اطلاع على فعالياتنا و مبادراتنا"
        />
      </div>
    </div>
  );
};

export default Events;
