import Link from "next/link";
import React from "react";
import { GoArrowUpLeft } from "react-icons/go";
import { FaBookOpen } from "react-icons/fa6";
import img1 from "../../images/g129776.png";
import img2 from "../../images/OBJECTS.png";
import img3 from "../../images/OBJECTS (1).png";
import Image from "next/image";
const MyGooals = () => {
  return (
    <div dir="rtl" className=" my-5 bg-[#E7F3F4] py-3 md:h-[370px]">
      <div className="text-center py-4">
        <h1 className="font-tajawal text-[28px] font-bold leading-[42px] tracking-[-0.02em] text-center  ">
          اهدافنا{" "}
        </h1>
      </div>
      <div className="w-[90%] m-auto md:flex justify-between ">
        <div className="w-[90%] m-auto my-2 md:w-[400px]">
          <div className="text-center">
            <div className="flex justify-center">
              <Image src={img1} className="w-[80px] h-[65px]" alt={img1} />
            </div>
            <p className="font-medium my-3 text-[#353939]">
              تسهيل لوجستيات البحث
            </p>
          </div>
          <div className="text-center">
            <p className="text-[#353939]">
              &quot;نحن هنا لتقديم الدعم اللوجستي اللازم للباحثين، من خلال توفير
              الموارد والأدوات لضمان تنفيذ أبحاثهم بكفاءة ودقة.&quot;
            </p>
          </div>
          <div className="flex justify-center my-3">
            <Link href={""} className="no-underline text-[#0f7d7f] flex">
              {" "}
              قراءة المزيد <GoArrowUpLeft className="m-1" />
            </Link>
          </div>
        </div>
        <div className="w-[90%] m-auto my-2 md:w-[400px]">
          <div className="text-center">
            <div className="flex justify-center">
              <Image src={img2} className="w-[90px] h-[65px]" alt={img2} />
            </div>
            <p className="font-medium my-3 text-[#353939]">
              تسهيل لوجستيات البحث
            </p>
          </div>
          <div className="text-center">
            <p className="text-[#353939]">
              &quot;نحن هنا لتقديم الدعم اللوجستي اللازم للباحثين، من خلال توفير
              الموارد والأدوات لضمان تنفيذ أبحاثهم بكفاءة ودقة.&quot;
            </p>
          </div>
          <div className="flex justify-center my-3">
            <Link href={""} className="no-underline text-[#0f7d7f] flex">
              {" "}
              قراءة المزيد <GoArrowUpLeft className="m-1" />
            </Link>
          </div>
        </div>
        <div className="w-[90%] m-auto my-2 md:w-[400px]">
          <div className="text-center">
            <div className="flex justify-center">
              <Image src={img3} className="w-[50px] h-[65px]" alt={img3} />
            </div>
            <p className="font-medium my-3 text-[#353939]">
              تسهيل لوجستيات البحث
            </p>
          </div>
          <div className="text-center">
            <p className="text-[#353939]">
              &quot;نحن هنا لتقديم الدعم اللوجستي اللازم للباحثين، من خلال توفير
              الموارد والأدوات لضمان تنفيذ أبحاثهم بكفاءة ودقة.&quot;
            </p>
          </div>
          <div className="text-center my-3">
            <div className="flex justify-center my-3">
              <Link href={""} className="no-underline text-[#0f7d7f] flex">
                {" "}
                قراءة المزيد <GoArrowUpLeft className="m-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyGooals;
