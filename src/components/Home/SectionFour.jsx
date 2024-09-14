import Link from "next/link";
import React from "react";

const SectionFour = () => {
  return (
    <div
      className="app-container  gap-[30px] md:flex items-center justify-between"
      dir="rtl"
    >
      <video
        src="-f143-46d7-9ead-2443e45ba1e4.mp4"
        style={{
          height: "445px",
          width: "635px",
          margin: "50px 0px",
          borderRadius: "20px",
        }}
        autoPlay
        loop
        muted
        className="object-cover"
      />
      <div className="max-w-[525px]">
        <h1 className="text-xl font-bold text-[#353939] my-3">من نحن</h1>
        <p className="font-medium text-[#353939] my-2">نحو مستقبل حى مشرق </p>
        <p className="font-normal text-[#353939] my-2">
          جمعية داعم لأبحاث الأورام، مؤسسة غير ربحية تهدف إلى دعم الباحثين في
          مجال الأورام وتعزيز أبحاث السرطان لتحقيق مستقبل صحي أفضل. نؤمن بأن كل
          لحظة بحث تحمل في طياتها فرصة لإنقاذ حياة. نحن هنا لتقديم الدعم
          اللوجستي، العلمي، والمالي لتمكين الباحثين من إحداث تأثير حقيقي في
          مكافحة السرطان.
        </p>
        <p className="font-normal text-[#353939] my-2">
          <span className="font-medium text-[#353939] ">الرؤية</span> : أن تكون
          الجمعية العلمية الرائدة في مجال أبحاث الأورام، والمتميزة على المستويين
          الإقليمي والعالمي.
        </p>
        <p className="font-normal text-[#353939] my-2">
          <span className="font-medium text-[#353939] ">الرسالة</span> : تمكين
          الباحثين في مجال الأورام وتعزيز مجهوداتهم العلمية ومهاراتهم البحثية،
          لينعكس أثرها الإيجابي على الرعاية الصحية
        </p>
        <p className="font-normal text-[#353939] my-2">
          <span className="font-medium text-[#353939] ">القيم</span> : الشفافية،
          الإبداع، الاستدامة، الإتقان.
        </p>
        <Link href="/about" className="my-5">
          <button
            className="m-2 my-3 h-[35px] w-[150px] text-[#0f7d7f]"
            style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
          >
            اكتشف المزيد
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SectionFour;
