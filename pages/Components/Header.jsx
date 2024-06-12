import React from 'react'
// import Link from 'next/link';
import { Link } from 'react-scroll';
const Header = () => {
  return (
    <>
       
        <header className="p-1 w-full fixed bg-slate-400 ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link to='hero' smooth={true} duration={500} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     
      <span className="ml-3 text-xl">Logo</span>
    </Link>
    <nav className="md:ml-auto space-x-5 font-semibold md:mr-auto flex flex-wrap items-center text-base justify-center">
    <Link className='hover:text-pink-500' to='hero' smooth={true} duration={500} >Home</Link>
                    <Link className='hover:text-pink-500' to='features' smooth={true} duration={500} >Feature</Link>
                    <Link className='hover:text-pink-500' to='testimonials' smooth={true} duration={500} >Testimonial</Link>
                    <Link className='hover:text-pink-500' to='pricing' smooth={true} duration={500} >Pricing</Link>
    </nav>
        <a href='/data.json' download >
    <button className="inline-flex items-center bg-black p-3 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
        Download
    </button>
        </a>
  </div>
</header>
    </>
  )
}

export default Header