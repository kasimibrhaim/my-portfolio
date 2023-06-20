'use client'
import React, { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';

interface SearchHeaderOptionsProps {
  activeLink: string;
  setActiveLink: Dispatch<SetStateAction<string>>;
}

const SearchHeaderOptions: React.FC<SearchHeaderOptionsProps> = ({ activeLink, setActiveLink }) => {
  const handleLinkClick = (linkName: string) => {
    setActiveLink(linkName);
  };
  

  return (
    <div className="flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-gray-400 text-sm">
      <Link href="/contact">
        <div
          className={`flex items-center space-x-1 border-b-4 ${
            activeLink === 'Contact' ? 'border-blue-500 active:text-blue-500' : 'border-transparent'
          } cursor-pointer pb-3 px-2`}
          onClick={() => handleLinkClick('Contact')}
        >
          Contact
        </div>
      </Link>
      <Link href="/project">
        <div
          className={`flex items-center space-x-1 border-b-4 ${
            activeLink === 'Project' ? 'border-blue-500 active:text-blue-500' : 'border-transparent'
          } cursor-pointer pb-3 px-2`}
          onClick={() => handleLinkClick('Project')}
        >
          Project
        </div>
      </Link>
    </div>
  );
};

export default SearchHeaderOptions;
