import Image from 'next/image'
import {  Search, ShoppingBag} from 'lucide-react'
import { Great_Vibes } from 'next/font/google'
import Link from 'next/link';

const greatVibes = Great_Vibes({
  subsets: ['latin'], 
  weight: '400', 
  display: 'swap', 
});


export default function Hero() {
  return (
    <div className="relative bg-black text-white min-h-screen">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('images/headerbg.png')",
        }}
      >
      
      <div className="absolute inset-0 bg-black/90 z-0"></div>
,      </div>
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <nav className="relative pt-8 pb-4  text-white">
  
  <div className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold text-[#FF9F0D]">
    Foodtuck
  </div>
  
  {/* Main Menu Section */}
  <div className="flex items-center justify-between mt-8 px-4">
  <div className="hidden md:flex items-center space-x-6">
    <Link href="/" className="text-white hover:text-[#FF9F0D]">Home</Link>
    <Link href="/menu" className="text-white hover:text-[#FF9F0D]">Menu</Link>
    <Link href="/blog" className="text-white hover:text-[#FF9F0D]">Blog</Link>
    <Link href="/chef" className="text-white hover:text-[#FF9F0D]">Pages</Link>
    <Link href="/about" className="text-white hover:text-[#FF9F0D]">About</Link>
    <Link href="/shop" className="text-white hover:text-[#FF9F0D]">Shop</Link>
    <Link href="/contact" className="text-white hover:text-[#FF9F0D]">Contact</Link>
  </div>
    
    <div className="flex items-center space-x-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent border border-[#FF9F0D] rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]"
        />
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white" />
      </div>
      <ShoppingBag className="text-white" />
    </div>
  </div>
</nav>

        {/* Hero content */}
        <div className="flex flex-col md:flex-row items-center py-12 md:py-24">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className={`${greatVibes.className} text-3xl text-[#FF9F0D] mb-4`}>Its Quick & Amusing!</h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-[#FF9F0D]">Th</span>e Art of speed food Quality
            </h1>
            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
            </p>
            <button className="bg-[#FF9F0D] text-white py-3 px-8 rounded-full hover:bg-[#FF9F0D]/80 transition duration-300">
              See Menu
            </button>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative w-full h-[350px] md:h-[400px]">
              
              <Image
                src="/images/headerimg1.png"
                alt="Delicious food"
                layout="fill"
                objectFit="contain"
                className="rounded-full"
              />
            </div>
         
          </div>
        </div>
      </div>
    </div>
  )
}


