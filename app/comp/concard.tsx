import Link from 'next/link'
import React from 'react'

type Props = {}

function Concard({}: Props) {
  return (
//     <div className="flex flex-col p-2 relative overflow-hidden sm:py-6">
//     <div className="max-w-8xl mx-auto">
//         <div className="px-12 py-6  ring-2 ring-gray-600/5 rounded-lg leading-none flex items-top justify-start space-x-6">
//           <div className="space-y-2">
//             <h2 className="text-lg font-bold mb-2">Card Heading</h2>
//            <p className="text-gray-600 dark:text-gray-400">Card content goes here.</p>
//           </div>
//         </div>
//     </div>
//   </div>
 <div className="flex flex-col p-2 relative overflow-hidden sm:p-2">
    <div className="px-12 py-4 max-w-3xl ">
  <div className="bg-white dark:bg-gray-50/5 shadow-lg rounded-sm py-6 px-5">
    <h2 className="text-lg font-bold mb-2">Contact and & hire Kasim Ibrahim</h2>
    <p className="text-gray-600 dark:text-gray-400">
      Please dont hesitate to get in touch by leaving a message 
      in the form below..</p>
  </div>
  </div>
</div> 
  )
}

export default Concard