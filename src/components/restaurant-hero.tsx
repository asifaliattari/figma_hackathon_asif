import { Button } from "@/components/ui/button";
import { Play } from 'lucide-react';

export default function RestaurantHero() {
  return (
    <div
      className="relative w-full h-[558px] bg-black bg-no-repeat bg-center overflow-hidden sm:h-[400px] md:h-[500px]"
      style={{
        backgroundImage: "url('/images/restend.png?height=558&width=959')",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Right side - Content */}
      <div
        className="absolute inset-0 flex flex-col items-end justify-center px-16 bg-cover bg-no-repeat bg-center sm:px-6"
        style={{
          backgroundImage: "url('/images/restend.png?height=558&width=959')",
          backgroundBlendMode: "overlay",
        }}
      >
        {/* Title and Subtitle */}
      <div className="text-right">
        <span className="font-great-vibes  text-3xl  text-[#FF9F0D] sm:text-xl md:text-2xl ">
          Restaurant Active Process
        </span>
        <h2 className="mt-4 ml-4 text-right font-helvetica text-2xl font-bold leading-tight text-white sm:mt-2 sm:text-3xl md:text-4xl">
          <span className="text-[#FF9F0D]">We</span> Document Every Food
          <br />
          Bean Process until it is saved
        </h2>
      </div>
        <p className="mt-2 max-w-xl text-right text-base text-white/90 sm:mt-4 sm:text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna,
        </p>
        
        {/* CTA Buttons */}
        
        {/* <div className=" mt-8  items-end gap-4 sm:mt-6 sm:flex-col sm:gap-2"> */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-2xl mt-4 ">
          <Button 
            variant="outline" 
            className=" h-[40px] w-[100px] rounded-full border-[#FF9F0D] text-white hover:bg-[#FF9F0D] hover:text-white sm:h-[50px] sm:w-[160px] "
          >
            Read More
          </Button>
          
          
          <Button
            variant="ghost"
            className=" h-[40px] w-[40px] rounded-full bg-[#FF9F0D] p-0 hover:bg-[#FF9F0D]/90 sm:h-[50px] sm:w-[50px] md:h-[60px] md:w-[60px]"
          >
            <Play className="h-6 w-6 text-white sm:h-5 sm:w-5" />
          </Button>
          
          <span className="text-base font-bold text-white sm:text-sm">
            Play Video
          </span>
        </div>
      </div>
    </div>
  );
}
