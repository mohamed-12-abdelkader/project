import React from "react";
import Image from "next/image";
import useGitData from "@/server/useGitData";
import Link from "next/link";

const Events = () => {
  const [data, loading, error] = useGitData({ prop: "event-home" });

  // Handle loading state
  if (loading) {
    return (
      <div className="text-center mt-10">
        <p className="text-lg font-medium text-[#353939]">
          جارٍ تحميل البيانات...
        </p>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="text-center mt-10">
        <p className="text-lg font-medium text-red-600">
          حدث خطأ أثناء تحميل البيانات.
        </p>
      </div>
    );
  }

  // Ensure data is available and has the expected structure
  const eventData =
    data && data[0]
      ? data[0]
      : { description: "لا توجد بيانات", image: "/default-image.png" };

  return (
    <div className="app-container mt-[50px]">
      <div className="text-center">
        <h1 className="text-xl font-bold text-[#353939]">
          ابقَ على اطلاع على فعالياتنا و مبادراتنا
        </h1>
        <div className="w-[70%] text-center m-auto my-3">
          <p className="my-2 font-normal text-[#353939]">
            {eventData.description}
          </p>
        </div>
        <Link href={"/events"}>
          <button
            className="m-2 h-[35px] w-[200px] text-[#0f7d7f] my-4"
            style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
          >
            تعرف على فعالياتنا
          </button>
        </Link>
      </div>
      <div>
        <Image
          src={eventData.image}
          alt="ابقَ على اطلاع على فعالياتنا و مبادراتنا"
          className="w-[95%] m-auto h-[500px]"
          style={{ borderRadius: "20px" }}
          width={1200} // Provide width for the Next.js Image component
          height={500} // Provide height for the Next.js Image component
        />
      </div>
    </div>
  );
};

export default Events;
