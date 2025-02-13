import Image from 'next/image'
import { Great_Vibes } from 'next/font/google'


const greatVibes = Great_Vibes({
  subsets: ['latin'], 
  weight: '400', 
  display: 'swap', 
});


export default function Hero() {
  return (
    <div className="relative bg-black text-white min-h-screen">
        
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         
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


