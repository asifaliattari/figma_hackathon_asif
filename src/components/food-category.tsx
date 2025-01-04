import Image from "next/image"
export default function FoodCategory() {
    return (
      <section className="max-w-8.6xl mx-auto px-6 lg:px-16 py-16 bg-black">
        <div className="text-center mb-12">
          <h3 className="font-['Great_Vibes'] text-[#FF9F0D] text-3xl mb-2">
            Food Category
          </h3>
          <h2 className="text-5xl font-bold text-white">
            <span className="text-[#FF9F0D]">Ch</span>
            <span className="text-white">oose Food I</span>
            <span className="text-[#FF9F0D]">team</span>
          </h2>
        </div>  
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* First Card with Special Label */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/images/food1.png?height=329&width=306"
                alt="Plated dish"
                height={329} width={306}
                className="w-full h-[329px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-6 left-4 space-y-2">
                <div className="bg-white rounded-md px-4 py-2">
                  <span className="text-[#FF9F0D] font-bold">Save 30%</span>
                </div>
                <div className="bg-[#FF9F0D] rounded-md px-6 py-2">
                  <span className="text-white font-bold">Fast Food Dish</span>
                </div>
              </div>
            </div>
          </div>
  
          {/* Burger Card */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/images/food2.png?height=329&width=306"
                alt="Gourmet burger"
                height={329} width={306}
                className="w-full h-[329px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>
  
          {/* Salad Card */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/images/food3.png?height=329&width=306"
                alt="Healthy salad"
                height={329} width={306}
                className="w-full h-[329px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>
  
          {/* Donuts Card */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/images/food4.png?height=329&width=306"
                alt="Stacked donuts"
                height={329} width={306}
                className="w-full h-[329px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  