import Link from "next/link";
import React, { useState } from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { GoChevronDown } from "react-icons/go";
const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [dropdownAnchorEl, setDropdownAnchorEl] = useState(null);
  const [currentDropdown, setCurrentDropdown] = useState(null);

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

  return (
    <div
      dir="rtl"
      className="w-[90%] m-auto h-[80px] shadow-lg bg-[#fff] rounded-full flex items-center justify-between px-6"
    >
      <h1 className="text-xl font-bold text-[#11898C] mr-4">داعم</h1>
      <div className="flex items-center space-x-4 space-x-reverse justify-between">
        <Link
          href="/"
          className="text-[black] hover:text-[#11898C] no-underline"
        >
          الرئيسية
        </Link>
        
        <Button
          id="about-button"
          aria-controls={currentDropdown === 'about' ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={currentDropdown === 'about' ? 'true' : undefined}
          onClick={(e) => handleDropdownClick(e, 'about')}
          className="flex text-black"
        >
          تعرف علينا

          <GoChevronDown className="m-1 text-xl"/>
        </Button>
        <Menu
          id="about-menu"
          anchorEl={dropdownAnchorEl}
          open={currentDropdown === 'about'}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'about-button',
          }}
        >
          <MenuItem onClick={handleClose}>
            <Link href="/about" className="no-underline text-black">
              تعريف الجمعية
              
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}> 
اعضاء الجمعية 
      
          
          </MenuItem>
        </Menu>

        <Link
          href="/search"
          className="text-[black] hover:text-[#11898C] no-underline"
        >
          الابحاث
        </Link>

        <Button
          id="events-button"
          aria-controls={currentDropdown === 'events' ? 'events-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={currentDropdown === 'events' ? 'true' : undefined}
          onClick={(e) => handleDropdownClick(e, 'events')}
          className="flex text-black"
        >
          الفعاليات والمؤتمرات
          <GoChevronDown className="m-1 text-xl"/>
        </Button>
        <Menu
          id="events-menu"
          anchorEl={dropdownAnchorEl}
          open={currentDropdown === 'events'}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'events-button',
          }}
        >
          <MenuItem onClick={handleClose}>
            <Link href="/events" className="no-underline text-black">
              الفعاليات
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>المؤتمرات</MenuItem>
        </Menu>

        <Link
          href="/news"
          className="text-[black] hover:text-[#11898C] no-underline"
        >
          الاخبار
        </Link>

        <Button
          id="training-button"
          aria-controls={currentDropdown === 'training' ? 'training-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={currentDropdown === 'training' ? 'true' : undefined}
          onClick={(e) => handleDropdownClick(e, 'training')}
          className="flex text-black"
        >
         
         التدريب والدعم
         <GoChevronDown className="m-1 text-xl"/> 
        </Button>
        <Menu
          id="training-menu"
          anchorEl={dropdownAnchorEl}
          open={currentDropdown === 'training'}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'training-button',
          }}
        >
          <MenuItem onClick={handleClose}>
            <Link href="/research_training" className="no-underline text-black">
              التدريب البحثي
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>الدعم اللوجستى للباحثين</MenuItem>
        </Menu>

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
