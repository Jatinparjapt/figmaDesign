import React from 'react'
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <>
    <footer className='font-semibold p-4 ' >
        <div className='inline-grid grid-cols-2 md:flex justify-center mx-auto  md:place-content-around  ' >
            <div className="first">
                <div className="logo">
                    <div>Logo</div>
                    <div>user@gmail.com</div>
                    <div>9800098000</div>
                </div>
            </div>
            <div className="second">
                <h1 className='font-bold text-2xl ' >Links</h1>
                <ul className='flex flex-col'>

                    <Link className='hover:text-pink-500' to='testimonials' smooth={true} duration={500} >Testimonial</Link>
                    <Link className='hover:text-pink-500' to='pricing' smooth={true} duration={500} >Pricing</Link>
                <Link className='hover:text-pink-500' to='features' smooth={true} duration={500} >Feature</Link>
                    <Link className='hover:text-pink-500' to='gallery' smooth={true} duration={500} >Gallery</Link>
                </ul>
            </div>
            <div className="third">
                <h1 className='font-bold text-2xl'>
                    Legal
                </h1>
                <ul>
                    <li>Terms Of Use</li>
                    <li>Privacy Policy</li>
                    <li>Cookies Policy</li>
                </ul>
            </div>
            <div className="fourth">
                <div className="contact">
                    <input className='py-1 px-1' type="email" name="email" id="email" placeholder='Enter Your Email ' />
                    <button className='bg-black text-white p-1 ml-2' type="button">Connect </button>
                </div>
                <div className="download flex flex-col space-y-3 mt-2 ">
                    <a href="/data.json" download>
                    <button  className='bg-black text-white p-3 ' type="button">Download App Iphone</button></a>
                    <a href="/data.json"download>
                    <button className='bg-zinc-200 text-black p-3 ' type="button">Download App Android</button></a>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer