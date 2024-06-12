import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import FeatureSection from "./Components/FeatureSection";
import GallerySection from "./Components/GallerySection";
import TestimonialSection from "./Components/TestimonialSection";
import PricingPlans from "./Components/PricingPlans";
import Footer from "./Components/Footer"
import axios from "axios";
import {  Element } from 'react-scroll';

// import Style from "./Components/Style";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  return (
    <>
    <Header/>
    <Element name="hero">
        <HeroSection data={data} />
      </Element>
      <Element name="features">
        <FeatureSection data={data} />
      </Element>
      <Element name="gallery">
        <GallerySection data={data} />
      </Element>
      <Element name="testimonials">
        <TestimonialSection data={data} />
      </Element>
      <Element name="pricing">
        <PricingPlans data={data} />
      </Element>
    {/* <Style/> */}
      <Footer/>
    </>
  );
}
export async function getStaticProps() {
  try {
    const res = await axios.get('http://localhost:3000/api/hello');
    const data = res.data;
      // console.log(data)
    return {
      props: { data },
      // Optional: Revalidate every 10 seconds
    };
  } catch (error) {
    console.error(error);
    return {
      props: { data: null, error: 'Failed to fetch data' },
    };
  }
}
