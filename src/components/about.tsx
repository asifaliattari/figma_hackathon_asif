import { Check } from 'lucide-react'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="text-[#FF9F0D] font-great-vibes text-3xl">About us</span>
            <h2 className="text-[white] text-4xl lg:text-5xl font-bold leading-tight">
             <span className="text-[#FF9F0D]">We</span>  Create the best <br />foody product
            </h2>
            <p className="text-white text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
              fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed
              vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
            </p>
            <ul className="space-y-4">
              {/* use {['a', 'b', 'c'].map((item, index) => <span key={index}>{item}</span>)}*/}
              {[
                "Lacus nisi, et ac dapibus sit eu velit in consequat.",
                "Quisque diam pellentesque bibendum non dui volutpat fringilla",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1">
                    <Check className="h-5 w-5 text-white" />
                  </span>
                  <span className="text-white text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <button className="bg-[#FF9F0D] text-white px-8 py-4 rounded-full hover:bg-[#e88f0c] transition-colors">
              Read More
            </button>
          </div>

          {/* Right Images */}
          <div className="space-y-4">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/about1.png?height=330&width=660"
                alt="Delicious toast with egg and avocado"
                className="w-full h-auto object-cover"
                height={330}
                width={660}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/images/about2.png?height=194&width=322"
                  alt="Grilled dish with sauce"
                  className="w-full h-auto object-cover"
                  height={194}
                  width={322}
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/images/about3.png?height=194&width=322"
                  alt="Fresh sandwich"
                  className="w-full h-auto object-cover"
                  height={194}
                  width={322}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
// food section-------------
  )
}

