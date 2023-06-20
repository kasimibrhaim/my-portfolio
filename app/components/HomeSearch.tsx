"use client";

import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { Cursor, useTypewriter } from 'react-simple-typewriter'



export default function HomeSearch() {
  
  const [text,] = useTypewriter({
    words: [
         "Hi, my name is Ibrahim Kassim",
         "I'm a Full Stack Software Developer based in Nairobi, Kenya",
         "<Coffee.tsx/>",
         "I would like to work with you, In your next project",
     ],
     delaySpeed: 1000,
 })

  return (
    <>
      {/* <h1 className='text-7xl font-extrabold'>
        <span className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>Kasim Ibrahim</span>
         !
      </h1> */}
      <h1 className="text-7xl font-extrabold ">
      <span>
        <span className="text-blue-500">K</span>
        <span className="text-red-500">a</span>
        <span className="text-yellow-500">s</span>
        <span className="text-orange-500">i</span>
        <span className="text-green-700">m</span>
        <span className='bg-gradient-to-r from-blue-300 via-red-400 to-purple-800 bg-clip-text text-transparent'>!</span>
      </span>
    </h1>
      <div
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-500 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl  mr-3" />
        <h5 className="flex-grow focus:outline-none">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor='#F7AB0A'/>
           </h5>
        {/* <input
          type="text"
          className="flex-grow focus:outline-none"
        /> */}
        <BsFillMicFill className="text-lg" />
      </div>

      <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8 ">
        <button className="btn">
          <Link href={'/project'}>See My Projects</Link>
        </button>
        <button
          className="btn flex items-center justify-center disabled:opacity-80"
        >
            <Link href={'/contact'}>I am Feeling Lucky</Link>
        </button>
      </div>
    </>
  );
}