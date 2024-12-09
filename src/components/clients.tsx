import { ChefHat, UtensilsCrossed, Pizza, Coffee } from 'lucide-react'



export default function StatsSection() {
  const stats = [
    {
      icon: ChefHat,
      title: "Professional Chefs",
      value: "420",
    },
    {
      icon: Coffee,
      title: "Items Of Food",
      value: "320",
    },
    {
      icon: UtensilsCrossed,
      title: "Years Of Experienced",
      value: "30+",
    },
    {
      icon: Pizza,
      title: "Happy Customers",
      value: "220",
    },
  ]

  return (
    <section className="relative w-full h-[469px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('images/clientbgimg.png')",
        }}
      >
        <div className="absolute inset-0 bg-[#0D0D0D] bg-opacity-85" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 h-full items-center">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center text-center space-y-4"
            >
              <stat.icon className="w-16 h-16 text-[#FF9F0D]" />
              <h3 className="text-2xl font-bold text-white">{stat.title}</h3>
              <p className="text-4xl font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

