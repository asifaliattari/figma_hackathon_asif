import Image from "next/image"
import { cn } from "@/lib/utils"

const menuCategories = [
  { name: "Breakfast", active: true },
  { name: "Lunch", active: false },
  { name: "Dinner", active: false },
  { name: "Dessert", active: false },
  { name: "Drink", active: false },
  { name: "Snack", active: false },
  { name: "Suops", active: false },
]

const menuItems = [
  {
    name: "Lettuce Leaf",
    description: "Lacus nisi, et ac dapibus velit in consequat.",
    price: "12.5",
    image: "/images/menu2.png?height=80&width=80",
  },
  {
    name: "Fresh Breakfast",
    description: "Lacus nisi, et ac dapibus velit in consequat.",
    price: "14.5",
    image: "/images/wcus4.png?height=80&width=80",
  },
  {
    name: "Mild Butter",
    description: "Lacus nisi, et ac dapibus velit in consequat.",
    price: "12.5",
    image: "/images/wcus4.png?height=80&width=80",
  },
  {
    name: "Fresh Bread",
    description: "Lacus nisi, et ac dapibus velit in consequat.",
    price: "12.5",
    image: "/images/menu5.png?height=80&width=80",
  },
  {
    name: "Glow Cheese",
    description: "Lacus nisi, et ac dapibus velit in consequat.",
    price: "12.5",
    image: "/images/menu.3.png?height=80&width=80",
  },
  {
    name: "Italian Pizza",
    description: "Lacus nisi, et ac dapibus velit in consequat.",
    price: "14.5",
    image: "/images/menu.4.png?height=80&width=80",
  },
  {
    name: "Silice Beef",
    description: "Lacus nisi, et ac dapibus velit in consequat.",
    price: "12.5",
    image: "/images/menu7.png?height=80&width=80",
  },
  {
    name: "Mushroom Pizza",
    description: "Lacus nisi, et ac dapibus velit in consequat.",
    price: "12.5",
    image: "/images/menu8.png?height=80&width=80",
  },
]

export default function Menu() {
  return (
    <section className="bg-black px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="font-great-vibes text-3xl text-[#FF9F0D]">Choose & pick</span>
          <h2 className="mb-12 text-5xl text-white font-bold">
            <span className="text-[#FF9F0D]">Fr</span>om Our Menu
          </h2>
        </div>

        <nav className="mb-12">
          <ul className="flex flex-wrap justify-center gap-8 text-xl">
            {menuCategories.map((category) => (
              <li key={category.name}>
                <button
                  className={cn(
                    "transition-colors hover:text-[#FF9F0D]",
                    category.active ? "font-bold text-[#FF9F0D]" : "text-white"
                  )}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="relative col-span-1 row-span-2 hidden overflow-hidden rounded-lg lg:block">
            <Image
              src="/images/combined.png?height=600&width=400"
  
              alt="Featured dish"
              className="h-full w-full object-cover "
              width={400}
              height={600}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="col-span-2 grid gap-8 sm:grid-cols-2">
            {menuItems.map((item) => (
              <div key={item.name} className="flex gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="h-20 w-20 rounded-lg object-cover"
                  width={80}
                  height={80}
                />
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.name}</h3>
                    <p className="mt-1 text-sm text-white/80">{item.description}</p>
                  </div>
                  <p className="text-lg font-bold text-[#FF9F0D]">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

