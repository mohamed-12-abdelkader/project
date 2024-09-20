import useGitData from "@/server/useGitData";
import React, { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import AssociationMembersCard from "@/ui/card/AssociationMembersCard";
import { SplideSlide } from "@splidejs/react-splide";
import { useLoading } from "../loading/LoadingContext";
import Card from "@/ui/card/ConferenceCard";
const Members = () => {
  const { setLoading } = useLoading();
  // استدعاء الـ Hook دائمًا في بداية المكون.
  const [data, loading] = useGitData({ prop: "members" });
  useEffect(() => {
    setLoading(loading);
  }, [loading, setLoading]);
  // تعريف الـ state قبل أي return مبكر.
  const [selectedTitle, setSelectedTitle] = useState("مجلس الإدارة");

  // في حال التحميل، إرجاع مكون التحميل.
  if (loading) {
    return (
      <div className="flex justify-center">
        {Array.from({ length: 4 }).map((_, i) => (
          <SplideSlide key={i}>
            <Card loading />
          </SplideSlide>
        ))}
      </div>
    );
  }

  // معالجة البيانات بعد التأكد من انتهاء التحميل.
  const membersGroupedByTitle = data?.membersGroupedByTitle || {};
  const titles = data?.titles || [];
  const members = membersGroupedByTitle[selectedTitle] || [];

  return (
    <div>
      <div className="flex flex-wrap justify-center mt-8 mb-6">
        {titles.map((title, index) => (
          <button
            key={index}
            onClick={() => setSelectedTitle(title)}
            className={`m-2 h-[35px] w-[200px] ${
              selectedTitle === title
                ? "bg-[#0f7d7f] text-white"
                : "text-[#0f7d7f]"
            }`}
            style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
          >
            {title}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap w-[95%] justify-center m-auto">
        {members.map((member) => (
          <SplideSlide key={member.id}>
            <AssociationMembersCard
              imageUrl={member.image}
              name={member.name}
              position={member.position}
            />
          </SplideSlide>
        ))}
      </div>
    </div>
  );
};

export default Members;
