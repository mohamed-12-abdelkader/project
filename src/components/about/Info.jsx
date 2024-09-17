import baseUrl from "@/api/baseUrl";
import useGitData from "@/server/useGitData";
import React, { useEffect, useState } from "react";
import { CiMail } from "react-icons/ci";

const Info = () => {
  const [data, loading] = useGitData({ prop: "infoAboutUs" });

  const [description, setdata] = useState("");
  const [descriptionloading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await baseUrl.get(`api/definitionAboutUs`);
        setdata(response.data); // تأكد من أن البيانات بالهيكل المناسب
      } catch (error) {
        console.error("Error fetching the data:", error); // طباعة رسالة خطأ واضحة
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading || descriptionloading) {
    return <p>Loading...</p>; // You can customize the loading message
  }

  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <div>
      <div className="my-[80px] text-center">
        <h1 className="text-xl text-[#353939] my-2 font-bold">تعريف الجمعية</h1>
        <div className="w-[90%] m-auto text-center md:w-[60%]">
          <p className="text-[#353939] my-5">{description.description}</p>
        </div>
      </div>

      {/* Map through the data and display each item */}
      <div className="my-[80px] w-[95%] m-auto md:flex justify-center">
        {data.map((item) => (
          <div
            key={item.id}
            className="h-[250px] w-[90%] m-auto my-3 flex items-center justify-center md:w-[400px]"
            style={{
              boxShadow: `
                0px 3px 6px 0px #11898C0D,
                0px 11px 11px 0px #11898C0A,
                0px 24px 14px 0px #11898C08,
                0px 42px 17px 0px #11898C03,
                0px 66px 18px 0px #11898C00
              `,
            }}
          >
            <div className="text-center">
              <div className="flex justify-center">
                <CiMail className="text-3xl text-[#11898C]" />
              </div>
              <h1 className="text-xl text-[#353939] font-bold my-3">
                {item.title}
              </h1>
              <p className="text-[#353939] my-3">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;
