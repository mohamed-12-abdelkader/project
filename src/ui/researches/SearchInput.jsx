'use client';

import { useState } from "react";
import { CgSearch } from "react-icons/cg";
import { FaChevronDown } from "react-icons/fa6";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ handleChange, placeholder }) {
  const [searchType, setSearchType] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = useDebouncedCallback((term) => {
    handleChange({ term, type: searchType });
  }, 300);

  const handleTypeChange = (type) => {
    setSearchType(type)
    handleChange({ term: searchTerm, type: searchType })
  };

  return (
    <div className="researches-search flex items-center mt-8">
      <div className="researches-search_left-element flex-shrink-0 inset-y-0 flex items-center ps-3.5 pointer-events-none">
        <CgSearch fontSize="25px" color="#11898C" />
      </div>
      <input
        dir="rtl"
        className="input-theme-none researches-search_input text-base peer text-[#5A6161] block w-full h-full rounded-md border-gray-200 py-[9px] pl-10 placeholder:text-gray-500"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value)
          handleSearch(e.target.value);
        }}
      />
      <div className="researches-search_right-element flex-shrink-0">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="researches-search_right-element__menu-button flex gap-2 w-full justify-center align-center gap-x-1.5 rounded-md py-2 font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              <div className="flex justify-center items-center -mr-1 h-5 w-5 text-gray-400">
                <FaChevronDown color="#11898C" aria-hidden="true" />
              </div>
              <div className="text-base text-[#5A6161]">
                فئة البحث
              </div>
            </MenuButton>
          </div>

          <MenuItems
            transition
            className="researches-search_right-element__drop-down-menu absolute right-0 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div>
              <MenuItem>
                <p
                  className="text-base m-0 py-2 px-4 text-[#353939] data-[focus]:bg-gray-100 data-[focus]:text-gray-900 cursor-pointer"
                  onClick={() => handleTypeChange('العلاج المناعي')}
                >
                  العلاج المناعي
                </p>
              </MenuItem>
              <MenuItem>
                <p
                  className="text-base m-0 py-2 px-4 text-[#353939] data-[focus]:bg-gray-100 data-[focus]:text-gray-900 cursor-pointer"
                  onClick={() => handleTypeChange('الذكاء الاصطناعي')}
                >
                  الذكاء الاصطناعي
                </p>
              </MenuItem>
              <MenuItem>
                <p
                  className="text-base m-0 py-2 px-4 text-[#353939] data-[focus]:bg-gray-100 data-[focus]:text-gray-900 cursor-pointer"
                  onClick={() => handleTypeChange('العلاجات المبتكرة')}
                >
                  العلاجات المبتكرة
                </p>
              </MenuItem>
              <MenuItem>
                <p
                  className="text-base m-0 py-2 px-4 text-[#353939] data-[focus]:bg-gray-100 data-[focus]:text-gray-900 cursor-pointer"
                  onClick={() => handleTypeChange('تشخيص السرطان')}
                >
                  تشخيص السرطان
                </p>
              </MenuItem>
              <MenuItem>
                <p
                  className="text-base m-0 py-2 px-4 text-[#353939] data-[focus]:bg-gray-100 data-[focus]:text-gray-900 cursor-pointer"
                  onClick={() => handleTypeChange('أبحاث سريرية')}
                >
                  أبحاث سريرية
                </p>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
}
