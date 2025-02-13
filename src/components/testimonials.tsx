import { Card } from "@/components/ui/card"
import { Quote, Star } from 'lucide-react'
import Image from "next/image"

export default function Testimonials() {
  return (
    <div className="relative w-full  mx-auto px-4 py-16 min-h-[770px] bg-black" >
      {/* Testimonial Header */}
      <div className="mb-12">
        <span className="font-['Great_Vibes'] text-[32px] text-[#FF9F0D]">
          Testimonials
        </span>
        <h2 className="text-5xl font-bold text-white mt-4">
          What our client are saying
        </h2>
      </div>

      {/* Testimonial Card */}
      <Card className="relative bg-white shadow-[0px_0px_80px_rgba(205,205,205,0.25)] max-w-4xl mx-auto p-8">
        {/* Profile Image */}
        <div className="absolute left-1/2 -top-12 transform -translate-x-1/2">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white">
            <Image
              src="/images/testimonial.png?height=96&width=96"
              alt="Profile"
              width={96}
              height={96}
              className="w-full h-full object-cover"
              
            />
          </div>
        </div>

        {/* Quote Icon */}
        <div className="flex justify-center mb-6 mt-16">
          <div className="relative w-12 h-12">
            <Quote className="w-12 h-12 text-[#FF9F0D]" />
          </div>
        </div>

        {/* Testimonial Text */}
        <div className="text-center max-w-2xl mx-auto text-[#4F4F4F] text-lg leading-7 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat.
        </div>

        {/* Rating Stars */}
        <div className="flex justify-center gap-1 mb-4">
          {[1, 2, 3, 4].map((star) => (
            <Star
              key={star}
              className="w-6 h-6 fill-[#FF9F0D] text-[#FF9F0D]"
            />
          ))}
          <Star className="w-6 h-6 fill-[#E0E0E0] text-[#E0E0E0]" />
        </div>

        {/* Author Info */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#333333] mb-1">
            Alamin Hasan
          </h3>
          <p className="text-[#828282]">Food Specialist</p>
        </div>
      </Card>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-8">
        <div className="w-2 h-2 rounded-full bg-[#FF9F0D]" />
        <div className="w-2 h-2 rounded-full bg-[#FF9F0D] bg-opacity-30" />
        <div className="w-2 h-2 rounded-full bg-[#FF9F0D] bg-opacity-30" />
        <div className="w-2 h-2 rounded-full bg-[#FF9F0D] bg-opacity-30" />
      </div>

      {/* Decorative Image */}
      <div className="absolute right-0 bottom-0 w-1/3 h-1/2 opacity-80">
        <Image
          src="/images/decorimg.png?height=300&width=400"
          width={400}
          height={300}
          alt="Decoretive Image"
          className="w-full h-full object-cover transform -rotate-12"
        />
      </div>
    </div>
  )
}

