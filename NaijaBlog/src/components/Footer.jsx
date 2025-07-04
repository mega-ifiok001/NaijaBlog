import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32  bg-primary/3'>
       <div className='flex flex-col  md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500'>
          <div>
           {/* <img src={ assets.logo} alt="logo" className='w-32 sm:w-44' /> */}
      <h1 className=' cursor-pointer text-2xl text-[#000]  font-bold'  onClick={()=>navigate("/")} >NaijaBlog</h1>

           <p className='max-w-[410px] mt-6'>We’re a content-driven platform dedicated to sharing insightful stories, expert tips, and fresh perspectives across various topics. Our mission is to inform, inspire, and connect readers through quality blogging.</p>
          </div>

          <div className='flex flex-wrap justify-between w-full  md:w-[45%] gap-5 '>
              {footer_data.map((section, index)=> (
                <div key={index}>
                   <h3 className="font-semibold  text-base text-gray-900  md:mb-5 mb-2 ">{section.title}</h3>
                   <ul className='text-sm space-y-1'>
                     {section.links.map((link, i)=> (
                         <li  key={i}>
                           <a href="#" className="hover:underline transition">{link}</a>
                         </li>
                     ))}
                   </ul>
                </div>
              ))}
          </div>
       </div>
      <div className="flex items-center justify sm:flex-col">
           <p className='py-4 text-enter text-sm md:text-base  text-gray-500/80'>Copyright 2025 &copy; NaijaBlog All Rights Reserved.</p>
       <p className='py-2 text-enter text-sm md:text-base  text-gray-500/80'>Created With ❤ by <a href="https://pluscodetechnologies.vercel.app">PlusCode</a></p>
    
      </div>
    </div>
  )
}

export default Footer
