import Link from "next/link";
import React from "react";
import { NavDropdown } from "react-bootstrap";

const Navbar = () => {
  return (
    <div
      dir="rtl"
      className="w-[90%] m-auto h-[80px] shadow-lg bg-[#fff] rounded-full flex items-center justify-between px-6"
    >
      <Link href={"/"} className="no-underline">
        <h1 className="text-xl font-bold text-[#11898C] mr-4">داعم</h1>
      </Link>
      <div className="flex items-center space-x-4 space-x-reverse justify-between">
        <Link
          href="/"
          className="text-[black] hover:text-[#11898C] no-underline"
        >
          الرئيسية
        </Link>
        <NavDropdown title="تعرف علينا" id="basic-nav-dropdown">
          <div className="w-[200px] text-center">
            <Link href="/about" className="no-underline">
              <NavDropdown.Item as="span">تعريف الجمعية</NavDropdown.Item>
            </Link>
            <hr />
            <NavDropdown.Item>اعضاء الجمعية</NavDropdown.Item>
          </div>
        </NavDropdown>
        <Link
          href="/search"
          className="text-[black] hover:text-[#11898C] no-underline"
        >
          الابحاث
        </Link>
        <NavDropdown title="الفعاليات والمؤتمرات" id="basic-nav-dropdown">
          <div className="w-[200px] text-center">
            <Link href="/events" className="no-underline">
              <NavDropdown.Item>الفعاليات</NavDropdown.Item>
            </Link>
            <hr />
            <NavDropdown.Item>المؤتمرات</NavDropdown.Item>
          </div>
        </NavDropdown>
        <Link
          href="/news"
          className="text-[black] hover:text-[#11898C] no-underline"
        >
          الاخبار
        </Link>
        <NavDropdown title="التدريب والدعم" id="basic-nav-dropdown">
          <div className="w-[200px] text-center">
            <Link href="/research_training" className="no-underline">
              <NavDropdown.Item>التدريب البحثي</NavDropdown.Item>
            </Link>
            <hr />
            <NavDropdown.Item>الدعم اللوجستى للباحثين</NavDropdown.Item>
          </div>
        </NavDropdown>
        <Link
          href="/contuct_us"
          className="text-[black] hover:text-[#11898C] no-underline"
        >
          اتصل بنا
        </Link>
      </div>
      <button
        className="m-2 h-[35px] w-[120px] bg-[#0f7d7f] text-white hover:bg-[#11898C]"
        style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
      >
        تبرع الان
      </button>
    </div>
  );
};

export default Navbar;
