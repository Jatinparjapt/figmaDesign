import React from 'react'
import Image from 'next/image'
import Ad1 from "../Images/Ad1.png"
import Ad2 from "../Images/Ad1.png"

const GallerySection = () => {
  return (
    <>
    
     <section className='container mx-auto pt-10  ' >
        <div className='flex flex-wrap justify-center md:items-center  w-auto ' >
            
            <div className=" order-last flex items-center h-2/5 md:h-2/3 ">
                <Image  fetchpriority="high" className='w-full' src={Ad1} alt='loading' width={200}   title='heroSection' />
            </div>
            <div className="first w-full  items-center md:w-2/4 ml-20 ">
            <h4 className='text-pink-500 text-xl ' >
        ADVANTAGES
    </h4>
            <h1 className='text-3xl font-bold  ' >       
                Why Choose Uifry ?
            </h1>
            <h3 className='text-black font-bold' >
                Clever Notifications
            </h3>
               <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum eveniet, laudantium saepe ex incidunt non adipisci vitae perferendis illo blanditiis laboriosam repudiandae porro facilis tempora ipsam tempore commodi sapiente similique.</p>
              
            </div>
        </div>
    </section>
    <section className='container mx-auto pt-10 ' >
        <div className='flex flex-wrap justify-center md:items-center  w-auto ' >
            
            <div className=" order-last md:order-none flex items-center h-2/5 md:h-2/3 ">
                <Image className='w-full' fetchpriority="high" src={Ad2} alt='loading' width={200}   title='heroSection' />
            </div>
            <div className="first w-full  items-center md:w-2/4 ml-20 ">
            <h3 className='text-black  font-bold' >
                Full Customizable
            </h3>
               <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum eveniet, laudantium saepe ex incidunt non adipisci vitae perferendis illo blanditiis laboriosam repudiandae porro facilis tempora ipsam tempore commodi sapiente similique.</p>
               
            </div>
        </div>
    </section>
    
    </>
  )
}

export default GallerySection