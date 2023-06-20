import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

interface SearchBoxProps {
  activeLink: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({ activeLink }) => {
  return (
    <div className="flex border border-gray-400 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center">
      {activeLink && <h5 className="w-full focus:outline-none">{activeLink}</h5>}
      <AiOutlineSearch className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer" />
    </div>
  );
};

export default SearchBox;
