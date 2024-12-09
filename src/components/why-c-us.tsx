import Image from "next/image"
import { Utensils, Cookie, Wine } from 'lucide-react'

export default function WhyChooseUs() {
  return (

    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left side - Image Grid */}
          <div className="relative grid grid-cols-2 gap-4">
            <Image
              src="/images/wcus1.png?height=356&width=362"
              alt="Tacos with vegetables"
              width={362}
              height={356}
              className="rounded-md col-span-2"
            />
            <Image
              src="/images/wcus2.png?height=306&width=244"
              alt="Breaded food with dip"
              width={244}
              height={306}
              className="rounded-md"
            />
            <Image
              src="/images/wcus3.png?height=231&width=281"
              alt="Gourmet burger"
              width={281}
              height={231}
              className="rounded-md"
            />
            <Image
              src="/images/wcus4.png?height=226&width=221"
              alt="Cheeseburger"
              width={221}
              height={226}
              className="rounded-md"
            />
            <div className="grid gap-4">
              <Image
                src="/images/wcus5.png?height=168&width=161"
                alt="Plated meal"
                width={161}
                height={168}
                className="rounded-md"
              />
              <Image
                src="/images/wcus6.png?height=166&width=161"
                alt="Fresh salad"
                width={161}
                height={166}
                className="rounded-md"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-white space-y-6">
            <span className="text-[#FF9F0D] font-great-vibes text-3xl">Why Choose us</span>
            <h2 className="text-5xl font-bold">
              <span className="text-[#FF9F0D]">Exta</span> ordinary taste
              <br />
              And Experienced
            </h2>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
              fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed
              vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
            </p>

            {/* Service Icons */}
            <div className="grid grid-cols-3 gap-4 py-8">
              <div className="bg-[#FF9F0D] rounded-md p-4 text-center">
                <div className="flex justify-center mb-4">
                  <Utensils size={32} className="text-white" />
                </div>
                <span className="text-white">Fast Food</span>
              </div>
              <div className="bg-[#FF9F0D] rounded-md p-4 text-center">
                <div className="flex justify-center mb-4">
                  <Cookie size={32} className="text-white" />
                </div>
                <span className="text-white">Lunch</span>
              </div>
              <div className="bg-[#FF9F0D] rounded-md p-4 text-center">
                <div className="flex justify-center mb-4">
                  <Wine size={32} className="text-white" />
                </div>
                <span className="text-white">Dinner</span>
              </div>
            </div>

            {/* Experience Card */}
            <div className="bg-white rounded-md p-6 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#FF9F0D]" />
              <div className="flex items-center gap-4">
                <span className="text-[#FF9F0D] text-5xl font-bold">30+</span>
                <div className="flex flex-col">
                  <span className="text-black text-black-600">Years of</span>
                  <span className="text-black text-xl font-bold">Experienced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

