'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { RiSettings3Line } from 'react-icons/ri';
import { TbGridDots } from 'react-icons/tb';
import SearchBox from './SearchBox';
import SearchHeaderOptions from './SearchHeaderOptions';
import DropdownItems from './DropdownItems'; // Import the DropdownItems component

function SearchHeader() {
  const [activeLink, setActiveLink] = useState('Hi Look around am feeling-lucky');
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="">
      <div className="hidden lg:inline-flex w-full p-6 items-center justify-between">
        <Link href="/">
          <h1 className="text-4xl font-extrabold">
            <span>
              <span className="text-blue-500">K</span>
              <span className="text-red-500">a</span>
              <span className="text-yellow-500">s</span>
              <span className="text-orange-500">i</span>
              <span className="text-green-700">m</span>
            </span>
          </h1>
        </Link>
        <div className="flex-1">
          <SearchBox activeLink={activeLink} />
        </div>
        <div className="space-x-3">
          {/* Add the toggleDropdown function to the onClick event */}
          <TbGridDots className="header-icon cursor-pointer" onClick={toggleDropdown} />
        </div>
        <Link href={'/contact'}
          className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md 
          hover:brightness-105 hover:shadow-md transition-all ml-2"
        >
          Contact
        </Link>
      </div>
      {/* Show the DropdownItems component when showDropdown is true */}
      {showDropdown && (
        <div className="absolute right-0 mt-4 mr-4 shadow-md rounded-md h-40 w-80 z-50 ">
          {/* Render the DropdownItems component */}
          <DropdownItems />
        </div>
      )}
      <SearchHeaderOptions activeLink={activeLink} setActiveLink={setActiveLink} />
    </header>
  );
}

export default SearchHeader;
