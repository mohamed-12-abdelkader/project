import DetailsPage from "@/components/details/DetailsPage";
import Loading from "@/components/loading/Loading";
import useGitDetails from "@/server/useGitDetails";
import { useRouter } from "next/router";
import React from "react";

const index = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, loading] = useGitDetails({ id: id, prop: "news" });
  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    ); // عرض لودينج أثناء تحميل البيانات
  }

  if (!data) {
    return <div>Error loading data</div>; // عرض رسالة خطأ في حال حدوث مشكلة
  }
  console.log(data);
  return (
    <div>
      <DetailsPage data={data} />
    </div>
  );
};

export default index;
