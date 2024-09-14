import React from "react";
import img from "../../images/f7bf48b1dfa6d1a5bda8220c143bf41a (1).jpeg";
import Image from "next/image";
import { IoMailSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GiPositionMarker } from "react-icons/gi";
const index = () => {
  return (
    <div dir="rtl" className="mt-[100px] ">
      <div className="text-center ">
        <p className=" text-[#11898C]">اتصل بنا </p>
        <div className=" m-auto text-center md:w-[40%]">
          <h1
            className=" text-[35px]  font-extrabold text-[#353939] my-2 md:text-[60px]"
            style={{ lineHeight: "90px" }}
          >
            هل لديك أي استفسارات؟ تواصل معنا الآن!
          </h1>
        </div>
        <div className="w-[90%] m-auto text-center md:w-[60%]">
          <p className="text-[#5A6161]">
            نحن هنا للإجابة على جميع أسئلتك وتقديم الدعم الذي تحتاجه. سواء كنت
            بحاجة إلى معلومات إضافية، أو لديك استفسارات حول أبحاثنا، فإن فريقنا
            جاهز لمساعدتك.
          </p>
        </div>
      </div>
      <div className="h-[100px]"></div>
      <div className="my-[50px] mt-[100px]  w-[95%] m-auto md:flex">
        <div className="w-[95%] m-auto md:w-[50%] ">
          <p className="m-1 mx-3"> الاسم الكامل </p>
          <input
            className="w-[95%] h-[55px] pl-4 pr-12 rounded-[20px] "
            style={{ paddingRight: "3rem", border: "solid 1px #11898C" }}
            placeholder=" ادخل الاسم بالكامل "
          />
          <p className="m-1 mx-3"> البريد الالكترونى </p>
          <input
            className="w-[95%] h-[55px] pl-4 pr-12 rounded-[20px] "
            style={{ paddingRight: "3rem", border: "solid 1px #11898C" }}
            placeholder="ادخل  البريد الالكترونى  "
          />
          <p className="m-1 mx-3"> رقم الهاتف </p>
          <input
            className="w-[95%] h-[55px] pl-4 pr-12 rounded-[20px] "
            style={{ paddingRight: "3rem", border: "solid 1px #11898C" }}
            placeholder=" ادخل رقم الهاتف  "
          />
          <p className="m-1 mx-3"> الرسالة </p>
          <input
            className="w-[95%] h-[160px] pl-4 pr-12 rounded-[20px] "
            style={{ paddingRight: "3rem", border: "solid 1px #11898C" }}
            placeholder=" ادخل  رسالتك هنا  "
          />
          <div className="text-center my-5">
            <button
              className="m-2 h-[35px] w-[200px] bg-[#0f7d7f] text-white"
              style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
            >
              ارسل الان
            </button>
          </div>
        </div>
        <div className="w-[95%] m-auto md:w-[50%]">
          <Image
            src={img}
            className="h-[550px] w-[540px] m-auto"
            style={{ borderRadius: "20px" }}
            alt={img}
          />
        </div>
      </div>
      {""}
      <div className="mt-[100px] text-center">
        <h1 className="text-xl font-bold text-[#5A6161] my-3">
          {" "}
          معلومات التواصل{" "}
        </h1>
        <p> إذا كنت تفضل الاتصال بنا مباشرة، إليك معلومات الاتصال الخاصة بنا</p>
      </div>
      {""}
      <div className="flex flex-wrap justify-center">
        <div
          className="h-[250px] w-[90%] m-auto  shadow border text-center py-5 my-2 md:w-[410px] m-2"
          style={{ borderRadius: "10px" }}
        >
          <div className="flex justify-center">
            <BsFillTelephoneFill className="text-3xl text-[#0F7D7F]" />
          </div>
          <h1 className="font-bold text-xl my-3"> الهاتف </h1>
          <p>اتصل بنا وسنكون سعداء بمساعدتك</p>
        </div>
        <div
          className="h-[250px] w-[90%] m-auto  shadow border text-center py-5 my-2 md:w-[410px] m-2"
          style={{ borderRadius: "10px" }}
        >
          <div className="flex justify-center">
            <BsFillTelephoneFill className="text-3xl text-[#0F7D7F]" />
          </div>
          <h1 className="font-bold text-xl my-3"> الهاتف </h1>
          <p>اتصل بنا وسنكون سعداء بمساعدتك</p>
        </div>

        <div
          className="h-[250px] w-[90%] m-auto  shadow border text-center py-5 my-2 md:w-[410px] m-2"
          style={{ borderRadius: "10px" }}
        >
          <div className="flex justify-center">
            <IoMailSharp className="text-3xl text-[#0F7D7F]" />
          </div>
          <h1 className="font-bold text-xl my-3">البريد الالكترونى</h1>
          <p>أرسل لنا استفساراتك عبر البريد الإلكتروني</p>
        </div>
      </div>
      <div className="h-[120px]"></div>
    </div>
  );
};

export default index;
