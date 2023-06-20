import Image from 'next/image'
import { getProjects } from "@/sanity/sanity-utils"
import Link from 'next/link';
import HomeHeader from '../components/HomeHeader';
import HomeSearch from '../components/HomeSearch';
import Footer from '../components/Footer';



export default async function Home() {
  const projects = await getProjects();
  return (
    <>
    <div className='flex flex-col min-h-screen'>
        {/* Header */}
    <HomeHeader />
    <div className="flex flex-col items-center mt-24">
        <HomeSearch/>
    </div>
    {/* <Footer/> */}
    </div>
    </>
  )
}
