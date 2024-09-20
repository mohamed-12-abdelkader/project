import baseUrl from "@/api/baseUrl";
import React, { useEffect, useState } from "react";

const useGitDetails = ({ prop, id }) => {
  const [data, setdata] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await baseUrl.get(`api/${prop}/${id}`);
        setdata(response.data); // تأكد من أن البيانات بالهيكل المناسب
      } catch (error) {
        console.error("Error fetching the data:", error); // طباعة رسالة خطأ واضحة
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [prop, id]);
  return [data, loading];
};

export default useGitDetails;
