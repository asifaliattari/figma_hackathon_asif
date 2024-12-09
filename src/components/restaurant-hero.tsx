import { Button } from "@/components/ui/button"
import { Play } from 'lucide-react'

export default function RestaurantHero() {
  return (
    <div className="relative h-[558px] w-full bg-black bg-no-repeat bg-center overflow-hidden"
 
    style={{
      backgroundImage: "url('/images/restend.png?height=558&width=959')",
      backgroundBlendMode: "overlay",
    }}>
      {/* Left side - Food Image */}
      {/* <div className="absolute left-0 top-0 h-full w-1/2">
        <img
          src="/images/restend.png?height=558&width=959"
          alt="Delicious food dish with chicken and vegetables"
          className="h-full w-full object-cover"
        />
      </div> */}

      {/* Right side - Content */}
      <div 
        className="absolute right-0 top-0 flex h-[558px] w-[1918px] flex-col items-end justify-center  px-16 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: "url('/images/restend.png?height=558&width=959')",
          backgroundBlendMode: "overlay",
        }}
      >
        <span className="font-great-vibes text-3xl text-[#FF9F0D]">
          Restaurant Active Process
        </span>
        <h2 className="mt-4 text-right font-helvetica text-5xl font-bold leading-tight text-white">
          <span className="text-[#FF9F0D]">We</span> Document Every Food
          <br />
          Bean Process untile it is saved</h2>
        <p className="mt-6 max-w-xl text-right text-base text-white/90">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna,
        </p>
        
        {/* CTA Buttons */}
        <div className="mt-8 flex items-center gap-4">
          <Button 
            variant="outline" 
            className="h-[60px] w-[190px] rounded-full border-[#FF9F0D] text-white hover:bg-[#FF9F0D] hover:text-white"
          >
            Read More
          </Button>
          
          <Button
            variant="ghost"
            className="h-[60px] w-[60px] rounded-full bg-[#FF9F0D] p-0 hover:bg-[#FF9F0D]/90"
          >
            <Play className="h-6 w-6 text-white" />
          </Button>
          
          <span className="text-base font-bold text-white">
            Play Video
          </span>
        </div>
      </div>
    </div>
  )
}

