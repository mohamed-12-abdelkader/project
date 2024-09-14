"use client";

import React, { useState } from "react";
import img from "../../images/b38db4bc8369719a07ab74d4fec71cef.png";
import Image from "next/image";
import Pagnation from "@/components/pagination/Pagination";
import { Dropdown } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState("");

  const [showMenu, setShowMenu] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = () => {
    setShowMenu(!showMenu);
  };

  const handleSelect = (value) => {
    setInputValue(value);
    setShowMenu(false);
  };
  return (
    <div dir="rtl" className="my-[100px] ">
      <div className="text-center ">
        <p className=" text-[#11898C]">ابحاثنا </p>
        <h1
          className="text-[60px]  font-extrabold text-[#353939] my-2"
          style={{ lineHeight: "90px" }}
        >
          بحثنا المستمر يُحدث الفرق
        </h1>
        <div className="w-[60%] m-auto text-center">
          <p className="text-[#5A6161]">
            &quot;جمعية داعم لأبحاث الأورام تفخر بدعم الأبحاث المبتكرة التي تهدف
            إلى مكافحة السرطان وإنقاذ الأرواح. اكتشف كيف تساهم أبحاثنا في تحقيق
            تقدم ملموس في هذا المجال الحيوي.&quot;
          </p>
        </div>
      </div>
      {""}
      <div className="mt-[120px] text-center">
        <h1 className="text-[#353939] text-xl font-bold my-3 ">
          اكتشف أخر أبحاثنا
        </h1>
        <p className="text-[#353939]">ابحث عن الأبحاث والمقالات حسب الفئة</p>
      </div>
      <div className="relative w-[60%] m-auto h-[55px] my-5">
        <input
          className="w-full h-full pl-4 pr-12 rounded-full border border-[#11898C]"
          style={{ paddingRight: "3rem" }}
          value={inputValue}
          onChange={handleInputChange}
          placeholder="بحث..."
        />
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2  text-[#11898C] bg-white border border-[#11898C]"
          onClick={handleSearchClick}
        >
          قائمة البحث
        </button>
        {showMenu && (
          <ul
            className="absolute top-full right-0 mt-2 w-[200px] bg-white border border-[#11898C] shadow-lg rounded-lg"
            style={{ maxHeight: "150px", overflowY: "auto" }}
          >
            <li
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSelect("Option 1")}
            >
              Option 1
            </li>
            <li
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSelect("Option 2")}
            >
              Option 2
            </li>
            <li
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSelect("Option 3")}
            >
              Option 3
            </li>
          </ul>
        )}
      </div>
      {""}
      <div className="flex flex-wrap justify-center">
        <div className="h-[500px] my-4 w-[400px] m-2">
          <Image
            src={img}
            className="h-[280px] w-[400px]"
            style={{ borderRadius: "20px" }}
            alt={img}
          />
          <div className="my-2">
            <p>1 محرم 1446</p>
            <h1 className="text-xl font-bold text-[#353939] my-2">
              &quot;العلاج المناعي: الأمل الجديد في مكافحة السرطان&quot;
            </h1>
            <p className="text-[#353939]">
              &quot;العلاج المناعي يمثل ثورة في مجال الطب، يفتح آفاقًا جديدة
              لعلاج السرطان بطرق طبيعية وفعّالة، مما يمكن أن يغير حياة الملايين
              من المرضى حول العالم.&quot;
            </p>
            <button
              className="my-2 h-[35px] w-[400px] text-[#0f7d7f]"
              style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
            >
              اقرا المزيد
            </button>
          </div>
        </div>
        <div className="h-[500px] my-4 w-[400px] m-2">
          <Image
            src={img}
            className="h-[280px] w-[400px]"
            style={{ borderRadius: "20px" }}
            alt={img}
          />
          <div className="my-2">
            <p>1 محرم 1446</p>
            <h1 className="text-xl font-bold text-[#353939] my-2">
              &quot;العلاج المناعي: الأمل الجديد في مكافحة السرطان&quot;
            </h1>
            <p className="text-[#353939]">
              &quot;العلاج المناعي يمثل ثورة في مجال الطب، يفتح آفاقًا جديدة
              لعلاج السرطان بطرق طبيعية وفعّالة، مما يمكن أن يغير حياة الملايين
              من المرضى حول العالم.&quot;
            </p>
            <button
              className="my-2 h-[35px] w-[400px] text-[#0f7d7f]"
              style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
            >
              اقرا المزيد
            </button>
          </div>
        </div>
        <div className="h-[500px] my-4 w-[400px] m-2">
          <Image
            src={img}
            className="h-[280px] w-[400px]"
            style={{ borderRadius: "20px" }}
            alt={img}
          />
          <div className="my-2">
            <p>1 محرم 1446</p>
            <h1 className="text-xl font-bold text-[#353939] my-2">
              &quot;العلاج المناعي: الأمل الجديد في مكافحة السرطان&quot;
            </h1>
            <p className="text-[#353939]">
              &quot;العلاج المناعي يمثل ثورة في مجال الطب، يفتح آفاقًا جديدة
              لعلاج السرطان بطرق طبيعية وفعّالة، مما يمكن أن يغير حياة الملايين
              من المرضى حول العالم.&quot;
            </p>
            <button
              className="my-2 h-[35px] w-[400px] text-[#0f7d7f]"
              style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
            >
              اقرا المزيد
            </button>
          </div>
        </div>
        <div className="h-[500px] my-4 w-[400px] m-2">
          <Image
            src={img}
            className="h-[280px] w-[400px]"
            style={{ borderRadius: "20px" }}
            alt={img}
          />
          <div className="my-2">
            <p>1 محرم 1446</p>
            <h1 className="text-xl font-bold text-[#353939] my-2">
              &quot;العلاج المناعي: الأمل الجديد في مكافحة السرطان&quot;
            </h1>
            <p className="text-[#353939]">
              &quot;العلاج المناعي يمثل ثورة في مجال الطب، يفتح آفاقًا جديدة
              لعلاج السرطان بطرق طبيعية وفعّالة، مما يمكن أن يغير حياة الملايين
              من المرضى حول العالم.&quot;
            </p>
            <button
              className="my-2 h-[35px] w-[400px] text-[#0f7d7f]"
              style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
            >
              اقرا المزيد
            </button>
          </div>
        </div>
        <div className="h-[500px] my-4 w-[400px] m-2">
          <Image
            src={img}
            className="h-[280px] w-[400px]"
            style={{ borderRadius: "20px" }}
            alt={img}
          />
          <div className="my-2">
            <p>1 محرم 1446</p>
            <h1 className="text-xl font-bold text-[#353939] my-2">
              &quot;العلاج المناعي: الأمل الجديد في مكافحة السرطان&quot;
            </h1>
            <p className="text-[#353939]">
              &quot;العلاج المناعي يمثل ثورة في مجال الطب، يفتح آفاقًا جديدة
              لعلاج السرطان بطرق طبيعية وفعّالة، مما يمكن أن يغير حياة الملايين
              من المرضى حول العالم.&quot;
            </p>
            <button
              className="my-2 h-[35px] w-[400px] text-[#0f7d7f]"
              style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
            >
              اقرا المزيد
            </button>
          </div>
        </div>
        <div className="h-[500px] my-4 w-[400px] m-2">
          <Image
            src={img}
            className="h-[280px] w-[400px]"
            style={{ borderRadius: "20px" }}
            alt={img}
          />
          <div className="my-2">
            <p>1 محرم 1446</p>
            <h1 className="text-xl font-bold text-[#353939] my-2">
              &quot;العلاج المناعي: الأمل الجديد في مكافحة السرطان&quot;
            </h1>
            <p className="text-[#353939]">
              &quot;العلاج المناعي يمثل ثورة في مجال الطب، يفتح آفاقًا جديدة
              لعلاج السرطان بطرق طبيعية وفعّالة، مما يمكن أن يغير حياة الملايين
              من المرضى حول العالم.&quot;
            </p>
            <button
              className="my-2 h-[35px] w-[400px] text-[#0f7d7f]"
              style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
            >
              اقرا المزيد
            </button>
          </div>
        </div>
        <div className="h-[500px] my-4 w-[400px] m-2">
          <Image
            src={img}
            className="h-[280px] w-[400px]"
            style={{ borderRadius: "20px" }}
            alt={img}
          />
          <div className="my-2">
            <p>1 محرم 1446</p>
            <h1 className="text-xl font-bold text-[#353939] my-2">
              &quot;العلاج المناعي: الأمل الجديد في مكافحة السرطان&quot;
            </h1>
            <p className="text-[#353939]">
              &quot;العلاج المناعي يمثل ثورة في مجال الطب، يفتح آفاقًا جديدة
              لعلاج السرطان بطرق طبيعية وفعّالة، مما يمكن أن يغير حياة الملايين
              من المرضى حول العالم.&quot;
            </p>
            <button
              className="my-2 h-[35px] w-[400px] text-[#0f7d7f]"
              style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
            >
              اقرا المزيد
            </button>
          </div>
        </div>
        <div className="h-[500px] w-[400px] my-4 m-2">
          <Image
            src={img}
            className="h-[280px] w-[400px]"
            style={{ borderRadius: "20px" }}
            alt={img}
          />
          <div className="my-2">
            <p>1 محرم 1446</p>
            <h1 className="text-xl font-bold text-[#353939] my-2">
              &quot;العلاج المناعي: الأمل الجديد في مكافحة السرطان&quot;
            </h1>
            <p className="text-[#353939]">
              &quot;العلاج المناعي يمثل ثورة في مجال الطب، يفتح آفاقًا جديدة
              لعلاج السرطان بطرق طبيعية وفعّالة، مما يمكن أن يغير حياة الملايين
              من المرضى حول العالم.&quot;
            </p>
            <button
              className="my-2 h-[35px] w-[400px] text-[#0f7d7f]"
              style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
            >
              اقرا المزيد
            </button>
          </div>
        </div>
        <div className="h-[500px] w-[400px] m-2 my-4">
          <Image
            src={img}
            className="h-[280px] w-[400px]"
            style={{ borderRadius: "20px" }}
            alt={img}
          />
          <div className="my-2">
            <p>1 محرم 1446</p>
            <h1 className="text-xl font-bold text-[#353939] my-2">
              &quot;العلاج المناعي: الأمل الجديد في مكافحة السرطان&quot;
            </h1>
            <p className="text-[#353939]">
              &quot;العلاج المناعي يمثل ثورة في مجال الطب، يفتح آفاقًا جديدة
              لعلاج السرطان بطرق طبيعية وفعّالة، مما يمكن أن يغير حياة الملايين
              من المرضى حول العالم.&quot;
            </p>
            <button
              className="my-2 h-[35px] w-[400px] text-[#0f7d7f]"
              style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
            >
              اقرا المزيد
            </button>
          </div>
        </div>
        <div className="h-[500px] w-[400px] m-2 my-4">
          <Image
            src={img}
            className="h-[280px] w-[400px]"
            style={{ borderRadius: "20px" }}
            alt={img}
          />
          <div className="my-2">
            <p>1 محرم 1446</p>
            <h1 className="text-xl font-bold text-[#353939] my-2">
              &quot;العلاج المناعي: الأمل الجديد في مكافحة السرطان&quot;
            </h1>
            <p className="text-[#353939]">
              &quot;العلاج المناعي يمثل ثورة في مجال الطب، يفتح آفاقًا جديدة
              لعلاج السرطان بطرق طبيعية وفعّالة، مما يمكن أن يغير حياة الملايين
              من المرضى حول العالم.&quot;
            </p>
            <button
              className="my-2 h-[35px] w-[400px] text-[#0f7d7f]"
              style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
            >
              اقرا المزيد
            </button>
          </div>
        </div>
        <div className="h-[500px] w-[400px] m-2 my-4">
          <Image
            src={img}
            className="h-[280px] w-[400px]"
            style={{ borderRadius: "20px" }}
            alt={img}
          />
          <div className="my-2">
            <p>1 محرم 1446</p>
            <h1 className="text-xl font-bold text-[#353939] my-2">
              &quot;العلاج المناعي: الأمل الجديد في مكافحة السرطان&quot;
            </h1>
            <p className="text-[#353939]">
              &quot;العلاج المناعي يمثل ثورة في مجال الطب، يفتح آفاقًا جديدة
              لعلاج السرطان بطرق طبيعية وفعّالة، مما يمكن أن يغير حياة الملايين
              من المرضى حول العالم.&quot;
            </p>
            <button
              className="my-2 h-[35px] w-[400px] text-[#0f7d7f]"
              style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
            >
              اقرا المزيد
            </button>
          </div>
        </div>
        <div className="h-[500px] w-[400px] m-2 my-4">
          <Image
            src={img}
            className="h-[280px] w-[400px]"
            style={{ borderRadius: "20px" }}
            alt={img}
          />
          <div className="my-2">
            <p>1 محرم 1446</p>
            <h1 className="text-xl font-bold text-[#353939] my-2">
              &quot;العلاج المناعي: الأمل الجديد في مكافحة السرطان&quot;
            </h1>
            <p className="text-[#353939]">
              &quot;العلاج المناعي يمثل ثورة في مجال الطب، يفتح آفاقًا جديدة
              لعلاج السرطان بطرق طبيعية وفعّالة، مما يمكن أن يغير حياة الملايين
              من المرضى حول العالم.&quot;
            </p>
            <button
              className="my-2 h-[35px] w-[400px] text-[#0f7d7f]"
              style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
            >
              اقرا المزيد
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-5">
        <Pagnation
          setPage={setPage}
          pageCount={20} // Assume "total" contains the total number of products
          currentPage={page}
        />
      </div>
    </div>
  );
};

export default Index;
