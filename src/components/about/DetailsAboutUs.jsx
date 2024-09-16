import useGitData from "@/server/useGitData";
import Image from "next/image";
import React from "react";

const DetailsAboutUs = () => {
  const [data, loading] = useGitData({ prop: "detailsAboutUs" });

  // التحقق من حالة التحميل وحالة البيانات
  if (loading) {
    return (
      <div className="text-center my-[80px]">
        <p>Loading...</p>
      </div>
    );
  }

  // التحقق إذا كانت البيانات موجودة وهي عبارة عن مصفوفة
  if (!data || !Array.isArray(data)) {
    return (
      <div className="text-center my-[80px]">
        <p>No data available.</p>
      </div>
    );
  }

  return (
    <div>
      {data.map((item, index) => (
        <div
          key={item.id}
          className="flex my-[80px] justify-between md:h-[660px]"
        >
          <div className="w-[90%] m-auto md:flex items-center justify-between">
            {index % 2 === 0 ? (
              <>
                <div>
                  <h1 className="text-xl font-bold text-[#353939] my-5">
                    {item.title}
                  </h1>
                  <div className="w-[350px]">
                    <p className="text-[#353939]">{item.description}</p>
                  </div>
                </div>
                <Image
                  src={item.image}
                  className="h-[660px] w-[680px]"
                  style={{ borderRadius: "20px" }}
                  alt={item.title}
                  width={680}
                  height={660}
                />
              </>
            ) : (
              <>
                <Image
                  src={item.image}
                  className="h-[660px] w-[680px]"
                  style={{ borderRadius: "20px" }}
                  alt={item.title}
                  width={680}
                  height={660}
                />
                <div className="text-center md:mx-[50px]">
                  <h1 className="text-xl font-bold text-[#353939] my-5">
                    {item.title}
                  </h1>
                  <div className="md:w-[350px] text-[#353939]">
                    <p>{item.description}</p>
                    {index === 1 && (
                      <button
                        className="my-5 h-[35px] w-[200px] text-[#11898C]"
                        style={{
                          border: "1px solid #11898C",
                          borderRadius: "30px",
                        }}
                      >
                        عرض برنامج التدريب والدعم
                      </button>
                    )}

                    {item.id == 3 ? (
                      <div className="text-center my-5 md:flex">
                        <button
                          className="m-2 h-[35px] w-[220px] bg-[#11898C] text-white"
                          style={{
                            border: "1px solid white",
                            borderRadius: "30px",
                          }}
                        >
                          عرض جميع المؤتمرات
                        </button>
                        <button
                          className="m-2 h-[35px] w-[220px] text-[#11898C]"
                          style={{
                            border: "1px solid #11898C",
                            borderRadius: "30px",
                          }}
                        >
                          عرض جميع الفاعاليات
                        </button>
                      </div>
                    ) : null}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailsAboutUs;
