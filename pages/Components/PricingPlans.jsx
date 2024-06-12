import React from 'react'
import Head from 'next/head'
const PricingPlans = ({data}) => {
    if(!data){
        return (
            <div className='text-pink-400 flex justify-center items-center p-4' >
                loading...
            </div>
        )
    }
    const{pricing} = data.data
  return (
    <>
    <Head>
        <title>Pricing</title>
      </Head>
    <section className="container mx-auto pt-10 ">
  <div className="main w-full    ">
    <div className='flex justify-center items-center' >
        <h1 className='text-2xl text-pink-500 font-medium my-2 ' >
            PRICING   
        </h1>
    </div>
    <div className="main flex flex-col md:flex-row sm:flex-wrap justify-center ">
       {pricing.map((plans, index)=>(
    <div key={index} className='md:w-2/5 w-full flex justify-center  border-2 rounded-md m-1 hover:border-pink-500 ' >
    <div className="first text-2xl   py-3 ">
 <div className='ml-3'  >
 <div className='mb-3'  >
<h4>
 {plans.plan}
</h4>
<h4 className='mt-2
text-4xl font-bold' >
{plans.price}
</h4>
 </div>
 <hr className='bg-black p-[0px]' />
<div className="feature">
 {plans.features.map((items , index)=>(
    <li key={index} 
    >{items}</li>
 ))}
</div>
</div>
       
        </div>
    </div>
       ))}
    
   
    </div>
  </div>
 
</section>
    </>
  )
}

export default PricingPlans