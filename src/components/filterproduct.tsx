"use client";

import { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import React from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
const Filterproduct = () => {
    const [cart, setCart] = useState([]);
      const [searchQuery, setSearchQuery] = useState("");

      type Product = {
        _id: string;
        title: string;
        category: string;
        price: number;
        originalPrice?: number;
        image?: string;
        description?: string;
        available?: boolean;
        tags?: string[];
      };
      
      const [products, setProducts] = useState<Product[]>([]);

    
      useEffect(() => {
        const fetchProducts = async () => {
          const data = await client.fetch(`*[_type == "foods"]{
            _id,
            title,
            category,
            price,
            originalPrice,
            image,
            description,
            available,
            tags
          }`);
          setProducts(data);
        };
    
        fetchProducts();
      }, []);
    
      // Filtering products by both name and _id
      const filteredProducts = products.filter(
        (product) =>
          product.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product._id?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    
      const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
      };
    
  return (
    <div className="relative">
    <div className="flex w-[300px] items-center gap-[10px] px-[10px] py-[10px] border border-gray-400 rounded-[5px]">
      <input
        type="text"
        placeholder="Search by name or ID..."
        value={searchQuery}
        onChange={handleSearch}
        className="bg-transparent outline-none text-[14px] placeholder-gray-500 w-full"
      />
      <IoSearch className="text-gray-500 w-[20px] h-[20px]" />
    </div>
  
    {searchQuery && filteredProducts.length > 0 && (
      <div className="absolute top-full left-0 bg-white w-full mt-1 border border-gray-300 rounded-md shadow-lg z-10">
        <ul>
          {filteredProducts.map((product) => (
            <li
              key={product._id}
              className="px-4 py-2 text-black hover:bg-gray-200 cursor-pointer"
            >
              <Link href={`/products/${product._id}`}>{product.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
  
  )
}

export default Filterproduct