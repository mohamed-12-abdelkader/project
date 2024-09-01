import Link from "next/link";
import React from "react";
import { GoArrowUpLeft } from "react-icons/go";
const MyGooals = () => {
  return (
    <div dir="rtl" className="h-[400px] my-5 bg-[#E7F3F4]">
      <div className="text-center py-5">
        <h1 className="text-xl font-bold  ">اهدافنا </h1>
      </div>
      <div className="flex justify-between">
        <div className="w-[300px]">
          <div className="text-center">
            <p className="font-medium my-3 text-[#353939]">
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
            <p className="font-medium my-3 text-[#353939]">
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
            <p className="font-medium my-3 text-[#353939]">
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
