import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import HeroImage from "../Images/Hero.png"
const HeroSection = ({data}) => {
    // console.log(data.data.hero)
    // console.log(data)

    if(!data){
        return (
            <div className='text-pink-400 flex justify-center items-center p-4' >
                loading...
            </div>
        )
    }
    const {hero} = data.data
  return (
    <>
    <section className='container mx-auto pt-20 ' >
        <div className='flex flex-wrap justify-center md:items-center  w-auto ' >
            
            <div className="first w-full ml-20 items-center md:w-2/4 ">
            <h1 className='text-[3.5rem] font-bold  ' >       
                {hero.headline}
            </h1>
               <p>{hero.subheadline}</p>
               <div className="my-3 flex space-x-8 ">
                <Link href={"#"} className='bg-black p-3 text-white'>
                    {hero.ctaButtons[0].text}
                </Link>
                <Link href={hero.ctaButtons[1].link} className='bg-zinc-200 font-semibold  py-3 px-4' >{hero.ctaButtons[1].text}</Link>
               </div>
            </div>
            <div className=" flex items-center h-2/5 md:h-2/3 ">
                <Image fetchpriority="high" className='w-full' src={HeroImage} alt='loading' width={200}   title='heroSection' />
            </div>
        </div>
    </section>
    </>
  )
}
export default HeroSection