

import AboutSection from "@/components/about";
import StatsSection from "@/components/clients";
import FoodCategory from "@/components/food-category";
import Footer from "@/components/footer";
// import Header from "@/components/header";
import WhyChooseUs from "@/components/why-c-us";
import Menu from "@/components/our-menu";
import ChefCard from "@/components/chef-card";
import Testimonials from "@/components/testimonials";
import RestaurantHero from "@/components/restaurant-hero";
import BlogSection from "@/components/blog";
import Hero from "@/components/hero";
// import Navbar from "@/components/navbar";








export default function Home() {
  return (

  <div className="overflow-x-hidden">

  {/* <Navbar/> */}
  <Hero/>
  <AboutSection/>
  <FoodCategory/>
  <WhyChooseUs/>
  <StatsSection/>
  <Menu/>
  <ChefCard/>
  <Testimonials/>
  <RestaurantHero/>
  <BlogSection/>
  <Footer/>
  </div>
    
  );
}
