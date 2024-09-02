import Link from "next/link";
import React from "react";
import { GoArrowUpLeft } from "react-icons/go";
import { FaBookOpen } from "react-icons/fa";
import { GiDna2 } from "react-icons/gi";
const MyGooals = () => {
  return (
    <div dir="rtl" className="h-[400px] my-5 bg-[#E7F3F4]">
      <div className="text-center py-5">
        <h1 className="text-xl font-bold  ">اهدافنا </h1>
      </div>
      <div className="flex justify-between">
        <div className="w-[300px]">
          <div className="text-center">
            <div className="flex justify-center my-3">
              <FaBookOpen className="text-[#0f7d7f] text-3xl" />
            </div>
            <p className="font-[Tajawal] text-[16px] font-semibold leading-[24px] text-center text-[#353939] my-3">
              تسهيل لوجستيات البحث
            </p>
          </div>
          <div className="text-center">
            <p className="text-[#353939]">
              "نحن هنا لتقديم الدعم اللوجستي اللازم للباحثين، من خلال توفير
              الموارد والأدوات لضمان تنفيذ أبحاثهم بكفاءة ودقة."
            </p>
          </div>
          <div className="flex justify-center my-3">
            <Link href={""} className="text-[#0f7d7f] flex">
              {" "}
              قراءة المزيد <GoArrowUpLeft className="m-1" />
            </Link>
          </div>
        </div>
        <div className="w-[300px]">
          <div className="text-center">
            <div className="flex justify-center my-3">
              <FaBookOpen className="text-[#0f7d7f] text-3xl" />
            </div>
            <p className="font-[Tajawal] text-[16px] font-semibold leading-[24px] text-center text-[#353939] my-3">
              تسهيل لوجستيات البحث
            </p>
          </div>
          <div className="text-center">
            <p className="text-[#353939]">
              "نحن هنا لتقديم الدعم اللوجستي اللازم للباحثين، من خلال توفير
              الموارد والأدوات لضمان تنفيذ أبحاثهم بكفاءة ودقة."
            </p>
          </div>
          <div className="flex justify-center my-3">
            <Link href={""} className="text-[#0f7d7f] flex">
              {" "}
              قراءة المزيد <GoArrowUpLeft className="m-1" />
            </Link>
          </div>
        </div>
        <div className="w-[300px]">
          <div className="text-center">
            <div className="flex justify-center my-3">
              <GiDna2 className="text-[#0f7d7f] text-3xl" />
            </div>
            <p className="font-[Tajawal] text-[16px] font-semibold leading-[24px] text-center text-[#353939] my-3">
              تسهيل لوجستيات البحث
            </p>
          </div>
          <div className="text-center">
            <p className="text-[#353939]">
              "نحن هنا لتقديم الدعم اللوجستي اللازم للباحثين، من خلال توفير
              الموارد والأدوات لضمان تنفيذ أبحاثهم بكفاءة ودقة."
            </p>
          </div>
          <div className="text-center my-3">
            <div className="flex justify-center my-3">
              <Link href={""} className="text-[#0f7d7f] flex">
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
