import Link from "next/link";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { GoChevronDown } from "react-icons/go";
import logo from "../../images/Logo.png";
import Image from "next/image";
import { FiAlignJustify } from "react-icons/fi";
const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [dropdownAnchorEl, setDropdownAnchorEl] = useState(null);
  const [currentDropdown, setCurrentDropdown] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false); // State for sidebar

  const open = Boolean(anchorEl);
  const openDropdown = Boolean(dropdownAnchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setDropdownAnchorEl(null);
    setCurrentDropdown(null);
  };

  const handleDropdownClick = (event, dropdownId) => {
    setCurrentDropdown(dropdownId);
    setDropdownAnchorEl(event.currentTarget);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); // Toggle the sidebar state
  };

  return (
    <div className="app-container">
      <div
        dir="rtl"
        className="h-[80px] shadow-lg bg-[#fff] rounded-full flex items-center justify-between px-6"
      >
        {/* Logo */}
        <Image src={logo} className="h-[60px] w-[140px]" alt="logo" />

        {/* Links for large screens */}
        <div className="hidden md:flex items-center space-x-4 space-x-reverse justify-between">
          <Link
            href="/"
            className="text-[#11898C] gap-[8px] p-[8px] mx-2 hover:text-[#11898C] no-underline font-tajawal text-[16px] font-normal leading-[24px] text-left"
          >
            الرئيسية
          </Link>

          <div
            id="about-button"
            aria-controls={
              currentDropdown === "about" ? "basic-menu" : undefined
            }
            aria-haspopup="true"
            aria-expanded={currentDropdown === "about" ? "true" : undefined}
            onClick={(e) => handleDropdownClick(e, "about")}
            className="flex text-black gap-[8px] p-[8px] mx-2"
          >
            تعرف علينا
            <GoChevronDown className="m-1 text-xl" />
          </div>
          <Menu
            id="about-menu"
            anchorEl={dropdownAnchorEl}
            open={currentDropdown === "about"}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "about-button",
            }}
            style={{ width: "250px" }}
          >
            <MenuItem
              onClick={handleClose}
              style={{ width: "200px" }}
              dir="rtl"
            >
              <Link
                href="/about"
                className="no-underline text-black font-tajawal text-[16px] font-normal leading-[24px] text-left"
              >
                تعريف الجمعية
              </Link>
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              style={{ width: "200px" }}
              dir="rtl"
            >
              اعضاء الجمعية
            </MenuItem>
          </Menu>

          <Link
            href="/search"
            className="text-black mx-2 gap-[8px] p-[8px]  hover:text-[#11898C] no-underline font-tajawal text-[16px] font-normal leading-[24px] text-left"
          >
            الابحاث
          </Link>

          <div
            id="events-button"
            aria-controls={
              currentDropdown === "events" ? "events-menu" : undefined
            }
            aria-haspopup="true"
            aria-expanded={currentDropdown === "events" ? "true" : undefined}
            onClick={(e) => handleDropdownClick(e, "events")}
            className="flex text-black gap-[8px] p-[8px] mx-2"
          >
            الفعاليات والمؤتمرات
            <GoChevronDown className="m-1 text-xl" />
          </div>
          <Menu
            id="events-menu"
            anchorEl={dropdownAnchorEl}
            open={currentDropdown === "events"}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "events-button",
            }}
          >
            <MenuItem style={{ width: "200px" }} dir="rtl">
              <Link
                href="/events"
                className="no-underline gap-[8px] p-[8px] text-black font-tajawal text-[16px] font-normal leading-[24px] text-left"
              >
                الفعاليات
              </Link>
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              style={{ width: "200px" }}
              dir="rtl"
            >
              المؤتمرات
            </MenuItem>
          </Menu>

          <Link
            href="/news"
            className="text-black mx-2 gap-[8px] p-[8px] hover:text-[#11898C] no-underline font-tajawal text-[16px] font-normal leading-[24px] text-left"
          >
            الاخبار
          </Link>

          <div
            id="training-button"
            aria-controls={
              currentDropdown === "training" ? "training-menu" : undefined
            }
            aria-haspopup="true"
            aria-expanded={currentDropdown === "training" ? "true" : undefined}
            onClick={(e) => handleDropdownClick(e, "training")}
            className="flex mx-2 gap-[8px] p-[8px] text-black"
          >
            <span className="font-tajawal text-[16px] font-normal leading-[24px] text-left">
              التدريب والدعم
            </span>
            <GoChevronDown className="m-1 text-xl" />
          </div>
          <Menu
            id="training-menu"
            anchorEl={dropdownAnchorEl}
            open={currentDropdown === "training"}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "training-button",
            }}
          >
            <MenuItem
              onClick={handleClose}
              style={{ width: "200px" }}
              dir="rtl"
            >
              <Link
                href="/research_training"
                className="no-underline text-black font-tajawal text-[16px] font-normal leading-[24px] text-left"
              >
                التدريب البحثي
              </Link>
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              style={{ width: "200px" }}
              dir="rtl"
            >
              الدعم اللوجستى للباحثين
            </MenuItem>
          </Menu>

          <Link
            href="/contuct_us"
            className="text-black gap-[8px] p-[8px] mx-2 hover:text-[#11898C] no-underline font-tajawal text-[16px] font-normal leading-[24px] text-left"
          >
            <span className="font-tajawal  text-[16px] font-normal leading-[24px] text-left">
              تواصل معنا
            </span>
          </Link>
          <button
            className="m-2 h-[35px] w-[120px]  bg-[#0f7d7f] text-white hover:bg-[#11898C]"
            style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
          >
            تبرع الان
          </button>
        </div>

        {/* Hamburger Icon for small screens */}
        <div className="md:hidden">
          <FiAlignJustify
            className="text-3xl cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>

        {/* Donate Button */}
      </div>

      {/* Sidebar Menu for small screens */}
      {sidebarOpen && (
        <div className="fixed top-0 right-0 w-[75%] h-full bg-white shadow-lg z-50 p-4">
          <div className="flex justify-end">
            <button onClick={toggleSidebar} className="text-2xl">
              ✕
            </button>
          </div>
          <nav className="flex flex-col space-y-4 mt-6">
            <Link
              href="/"
              className="text-[#11898C] gap-[8px] p-[8px] mx-2 hover:text-[#11898C] no-underline font-tajawal text-[16px] font-normal leading-[24px] text-left"
            >
              الرئيسية
            </Link>

            <div
              id="about-button"
              aria-controls={
                currentDropdown === "about" ? "basic-menu" : undefined
              }
              aria-haspopup="true"
              aria-expanded={currentDropdown === "about" ? "true" : undefined}
              onClick={(e) => handleDropdownClick(e, "about")}
              className="flex text-black gap-[8px] p-[8px] mx-2"
            >
              تعرف علينا
              <GoChevronDown className="m-1 text-xl" />
            </div>
            <Menu
              id="about-menu"
              anchorEl={dropdownAnchorEl}
              open={currentDropdown === "about"}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "about-button",
              }}
            >
              <MenuItem
                onClick={handleClose}
                style={{ width: "200px" }}
                dir="rtl"
              >
                <Link
                  href="/about"
                  className="no-underline text-black font-tajawal text-[16px] font-normal leading-[24px] text-left"
                >
                  تعريف الجمعية
                </Link>
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                style={{ width: "200px" }}
                dir="rtl"
              >
                اعضاء الجمعية
              </MenuItem>
            </Menu>

            <Link
              href="/search"
              className="text-black mx-2 gap-[8px] p-[8px]  hover:text-[#11898C] no-underline font-tajawal text-[16px] font-normal leading-[24px] text-left"
            >
              الابحاث
            </Link>

            <div
              id="events-button"
              aria-controls={
                currentDropdown === "events" ? "events-menu" : undefined
              }
              aria-haspopup="true"
              aria-expanded={currentDropdown === "events" ? "true" : undefined}
              onClick={(e) => handleDropdownClick(e, "events")}
              className="flex text-black gap-[8px] p-[8px] mx-2"
            >
              الفعاليات والمؤتمرات
              <GoChevronDown className="m-1 text-xl" />
            </div>
            <Menu
              id="events-menu"
              anchorEl={dropdownAnchorEl}
              open={currentDropdown === "events"}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "events-button",
              }}
            >
              <MenuItem
                style={{ width: "200px" }}
                dir="rtl"
                onClick={handleClose}
              >
                <Link
                  href="/events"
                  className="no-underline gap-[8px] p-[8px] text-black font-tajawal text-[16px] font-normal leading-[24px] text-left"
                >
                  الفعاليات
                </Link>
              </MenuItem>
              <MenuItem
                style={{ width: "200px" }}
                dir="rtl"
                onClick={handleClose}
              >
                المؤتمرات
              </MenuItem>
            </Menu>

            <Link
              href="/news"
              className="text-black mx-2 gap-[8px] p-[8px] hover:text-[#11898C] no-underline font-tajawal text-[16px] font-normal leading-[24px] text-left"
            >
              الاخبار
            </Link>

            <div
              id="training-button"
              aria-controls={
                currentDropdown === "training" ? "training-menu" : undefined
              }
              aria-haspopup="true"
              aria-expanded={
                currentDropdown === "training" ? "true" : undefined
              }
              onClick={(e) => handleDropdownClick(e, "training")}
              className="flex mx-2 gap-[8px] p-[8px] text-black"
            >
              <span className="font-tajawal text-[16px] font-normal leading-[24px] text-left">
                التدريب والدعم
              </span>
              <GoChevronDown className="m-1 text-xl" />
            </div>
            <Menu
              id="training-menu"
              anchorEl={dropdownAnchorEl}
              open={currentDropdown === "training"}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "training-button",
              }}
            >
              <MenuItem
                style={{ width: "200px" }}
                dir="rtl"
                onClick={handleClose}
              >
                <Link
                  href="/research_training"
                  className="no-underline text-black font-tajawal text-[16px] font-normal leading-[24px] text-left"
                >
                  التدريب البحثي
                </Link>
              </MenuItem>
              <MenuItem
                style={{ width: "200px" }}
                dir="rtl"
                onClick={handleClose}
              >
                الدعم اللوجستى للباحثين
              </MenuItem>
            </Menu>

            <Link
              href="/contuct_us"
              className="text-black gap-[8px] p-[8px] mx-2 hover:text-[#11898C] no-underline font-tajawal text-[16px] font-normal leading-[24px] text-left"
            >
              <span className="font-tajawal  text-[16px] font-normal leading-[24px] text-left">
                تواصل معنا
              </span>
            </Link>
            <button
              className="m-2 h-[35px] w-[120px]  bg-[#0f7d7f] text-white hover:bg-[#11898C]"
              style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
            >
              تبرع الان
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
