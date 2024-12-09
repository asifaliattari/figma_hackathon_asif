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
      image: "/images/Card4.png?height=291&width=212",
    },
  ]

  return (
    <section className="relative w-full max-w-[1764px] mx-auto px-4 py-16 bg-black overflow-hidden">
      {/* <div className="absolute left-0 top-0 w-[300px]">
        <Image
          src="/placeholder.svg?height=600&width=400"
          alt="Decorative leaf"
          width={400}
          height={600}
          className="object-contain"
        />
      </div> */}
      
      <div className="text-center mb-12">
        <span className="font-['Great_Vibes'] text-[32px] text-[#FF9F0D]">Chefs</span>
        <h2 className="text-[48px] font-bold text-[#FF9F0D] mt-2">Meet Our Chef</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
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
    </section>
  )
}

