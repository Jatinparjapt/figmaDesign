import React from 'react'
import Image from 'next/image'
import HeroImage from "../Images/Hero.png"

const TestimonialSection = ({data}) => {
  if(!data){
    return (
        <div className='text-pink-400 flex justify-center items-center p-4' >
            loading...
        </div>
    )
} 
const {testimonials} = data.data
  return (
    <>
    <section className='container mx-auto  pt-20' >
        <div className="main  ">
            <div className="first ml-20 flex flex-wrap justify-center md:items-center mx-auto w-auto ">
                <div>
                    <h3 className='flex justify-center' >
                        TESTIMONIAL
                    </h3>
                    <h1 className='text-4xl font-bold' >
                        What Out Users Say About Us ? 
                    </h1>
                </div>
            </div>
            <div className="second">
            <div className='flex flex-wrap justify-center md:items-center  w-auto ' >
            <div className='mt-0' >
                {testimonials.map((items , index)=>(
                    <div key={index} >
                    <h3 className='font-bold text-lg ' >
                        <span className='flex ' >
                        <Image className='w-auto h-auto' fetchpriority="high" src={items.avatar} width={50} height={50} title={items.name} alt='loading..' />
                       {items.name}
                        </span>
                    </h3>
                    <p>{items.feedback}</p>
                </div>
                ))}
                
               
               </div>
               
           
            </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default TestimonialSection