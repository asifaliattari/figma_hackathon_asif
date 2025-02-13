import Image from "next/image"
import { Button } from "@/components/ui/button"

interface ChefCardProps {
  name: string
  role: string
  image: string
}

function ChefCard({ name, role, image }: ChefCardProps) {
  return (
    <div className="relative w-[312px] h-[391px] rounded-md overflow-hidden group">
      <Image
        src={image}
        alt={`${name} - ${role}`}
        width={312}
        height={391}
        className="object-cover w-full h-full"
      />
      <div className="absolute bottom-0 left-0 w-[58%] h-[17.14%] bg-white rounded-bl-md p-4">
        <h3 className="font-bold text-lg text-[#333333]">{name}</h3>
        <p className="text-sm text-[#333333]">{role}</p>
      </div>
    </div>
  )
}

export default function ChefSection() {
  const chefs = [
    {
      name: "D.Estwood",
      role: "Chief Chef",
      image: "/images/Card1.png?height=312&width=391",
      radius: "6px"
    },
    {
      name: "D.Scoriesh",
      role: "Assistant Chef",
      image: "/images/Card2.png?height=291&width=212",
    },
    {
      name: "M.William",
      role: "Advertising Chef",
      image: "/images/Card3.png?height=291&width=212",
    },
    {
      name: "W.Readfroad",
      role: "Chef",
      image: "/images/Card4.png?height=391&width=312",
    },
  ]

  return (
    <section className="relative w-full max-w-[1764px] mx-auto px-2 py-2 bg-black overflow-hidden">
         
      <div className="text-center mb-12">
        <span className="font-['Great_Vibes'] text-[32px] text-[#FF9F0D]">Chefs</span>
        <h2 className="text-[48px] font-bold text-[#FF9F0D] mt-2">Meet Our Chef</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-2 ">
        {chefs.map((chef) => (
          <ChefCard key={chef.name} {...chef} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Button
          variant="outline"
          className="rounded-full px-8 py-6 border-[#FF9F0D] text-white hover:bg-[#FF9F0D] transition-colors"
        >
          See More
        </Button>
      </div>

         {/* Decorative Image */}
            <div className="absolute right-0 bottom-0 w-1/3 h-1/2 opacity-80">
              <Image
                src="/images/decor2.png?height=531&width=409"
                width={409}
                height={531}
                alt="Decoretive Image"
                className="w-full h-full object-cover transform -rotate-12"
              />
            </div>
    </section>
  )
}

