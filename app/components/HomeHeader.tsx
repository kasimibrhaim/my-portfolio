// import Link from "next/link";
// import { TbGridDots } from "react-icons/tb";

// export default function HomeHeader() {
//   return (
//     <header className="flex justify-end p-5 text-sm">
//       <div className="flex space-x-4 items-center">
//         <Link href="https://read.cv/kasim" className="hover:underline" target="_blank">
//           Resume
//         </Link>
//         {/* <Link href="https://image.google.com" className="hover:underline">
//           Github
//         </Link> */}
//         <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2" />
//         <Link href='/contact' className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md hover:bg-blue-400 transition-shadow">Contact</Link>
//       </div>
//     </header>
//   );
// }
'use client'
import { useState } from "react";
import Link from "next/link";
import { TbGridDots } from "react-icons/tb";
import DropdownItems from "../comp/DropdownItems";

export default function HomeHeader() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="flex justify-end p-5 text-sm">
      <div className="flex space-x-4 items-center">
        <Link href="https://read.cv/kasim" className="hover:underline" target="_blank">
          Resume
        </Link>
        {/* <Link href="https://image.google.com" className="hover:underline">
          Github
        </Link> */}
        <div className="relative">
          <TbGridDots
            className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2 cursor-pointer"
            onClick={toggleDropdown}
          />
          {showDropdown && (
            <div className="absolute right-3 mt-4  shadow-md rounded-md w-80 h-40 ">
              {/* Render the DropdownItems component */}
              <DropdownItems />
            </div>
          )}
        </div>
        <Link href="/contact" className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md hover:bg-blue-400 transition-shadow">
          Contact
        </Link>
      </div>
    </header>
  );
}
