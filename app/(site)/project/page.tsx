import Image from 'next/image'
import { getProjects } from "@/sanity/sanity-utils"
import Link from 'next/link';
import SearchHeader from '@/app/comp/SearchHeader';



export default async function Home() {
  const projects = await getProjects();
  return (
    <>
    <SearchHeader/>
    <div className='flex flex-col min-h-screen'>
    <div className='max-w-5xl mx auto px-10 '>
       <h2 className="mt-10 font-bold text-gray-500 text-3xl">My Projects</h2>
     
       <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">{projects.map((project) => (
        <Link href={`/projects/${project.slug}`} key={project._id} 
        className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105
         hover:border-blue-500 transition">
          {project.image && (
            <Image
              src={project.image}
              alt={project.name}
              width={750}
              height={300}
              className="object-cover rounded-lg border border-gray-500"
            />
          )}
          <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
            {project.name}
          </div>
        </Link>
      ))}
      </div>
    </div>
    </div>
    </>
  )
}
