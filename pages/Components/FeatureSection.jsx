import React from 'react'
import Image from 'next/image'
import Feature from "../Images/Feature.png"
import Head from 'next/head'
// import Style from './Style'
const FeatureSection = ({data}) => {
    
    if(!data){
        return (
            <div className='text-pink-400 flex justify-center items-center p-4' >
                loading...
            </div>
        )
    }
    const {features} = data.data
  return (
    <>
    <Head>
        <title>Features</title>
      </Head>
     <section className='container mx-auto pt-10  ' >
        <div className='flex flex-wrap justify-center md:items-center  w-auto ' >
            
            <div className="  order-last md:order-none flex items-center h-2/5 md:h-2/3 ">
            {/* <Style  /> */}
                <Image className= ' w-full' fetchpriority="high" src={Feature} alt='loading' width={200}   title='heroSection' />
            </div>
            <div className="first w-full ml-20 items-center md:w-2/4 ">
    <h4 className='text-pink-500 text-xl ' >
        FEATURES
    </h4>
            
               <div className='mt-0' >
                {features.map((items , index)=>(
                    <div key={index} >
                    <h3 className='font-bold text-lg ' >
                        <span className='flex ' >

                        <Image className='w-auto h-auto' src={items.icon} width={20} height={20} title={items.title} alt='loading..' />
                       {items.title}
                        </span>
                    </h3>
                    <p>{items.description}</p>
                </div>
                ))}
                
               
               </div>
               
            </div>
        </div>
    </section>
    </>
  )
}

export default FeatureSection