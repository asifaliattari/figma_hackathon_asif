import AboutSection from "@/components/about";
import StatsSection from "@/components/clients";
import FoodCategory from "@/components/food-category";
import Footer from "@/components/footer";
import Header from "@/components/header";
import WhyChooseUs from "@/components/why-c-us";
import Menu from "@/components/our-menu";
import ChefCard from "@/components/chef-card";
import Testimonials from "@/components/testimonials";
import RestaurantHero from "@/components/restaurant-hero";
import BlogSection from "@/components/blog";



export default function Home() {
  return (
  <>
  <Header/>
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
    </>
  );
}
