import Commnhead from '@/components/commnhead'
import React from 'react'
import Image from 'next/image'

interface Chef{
  id: number;
  name: string;
  title: string;
  image: string;
}

const page = () => {
    const chefData: Chef[] = [
      {
        id: 1,
        name: "Tahmina Rumi",
        title: "Chef",
        image: "/images/Chef Card 1.png?height=312&width=379"
      },
      {
        id: 2,
        name: "Jorina Begum",
        title: "Chef",
        image: "/images/Chef Card 2.png?height=312&width=379"
      },
      {
        id: 3,
        name: "M.Mohammad",
        title: "Chef",
        image: "/images/Chef Card 3.png?height=312&width=379"
      },
      {
        id: 4,
        name: "Munna Kathy",
        title: "Chef",
        image: "/images/Chef Card 4.png?height=312&width=379"
      },
      {
        id: 5,
        name: "Tahmina Rumi",
        title: "Chef",
        image: "/images/Chef Card 5.png?height=312&width=379"
      },
      {
        id: 6,
        name: "Bisnu devgon",
        title: "Chef",
        image: "/images/Chef Card 6.png?height=312&width=379"
      },
      {
        id: 7,
        name: "Motin Molladsf",
        title: "Chef",
        image: "/images/Chef Card 7.png?height=312&width=379"
      },
      {
        id: 8,
        name: "William Rumi",
        title: "Chef",
        image: "/images/Chef Card 8.png?height=312&width=379"
      },
      {
        id: 9,
        name: "Kets william roy",
        title: "Chef",
        image: "/images/Chef Card 9.png?height=312&width=379"
      },
      {
        id: 10,
        name: "Mahmud kholil",
        title: "Chef",
        image: "/images/Chef Card 10.png?height=312&width=379"
      },
      {
        id: 11,
        name: "Ataur Rahman",
        title: "Chef",
        image: "/images/Chef Card 11.png?height=312&width=379"
      },
      {
        id: 12,
        name: "Monalisa holly",
        title: "Chef",
        image: "/images/Chef Card 12.png?height=312&width=379"
      },
    ]
  return (
    <div className='md:max-w-[1920px] w-full'>
      <Commnhead title="Our Chef" subtitle="Chef" />
      <div className='md:max-w-[1320px] px-8'>
        <div className='grid gap-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-center items-center my-12'>
          {chefData.map((item,index) => (
            <div 
              key={index} 
              className='w-full max-w-[312px] mx-auto p-4 bg-white shadow-lg rounded-lg'>
              <Image 
              src={item.image} 
              alt={item.title} 
              width={312} 
              height={380} 
              className='object-cover w-full mb-4 rounded-lg'/>
              <h2 className='text-center font-bold text-[20px]'>{item.name}</h2>
              <p className='text-center font-[400px] text-[14px]'>{item.title}</p>

            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default page
