import React from 'react';
import Commnhead from '@/components/commnhead';
import { LuUserRound } from 'react-icons/lu';
import { MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const Page = () => {
  return (
    <div className='md:max-w-[1920px] '>
      <Commnhead title='404 Error' subtitle='404' />
      
      <div className='w-full max-w-[424px] h-auto shadow-lg border border-gray-200 mx-auto my-12 space-y-4 p-6 rounded-md'>
        <h2 className='font-bold text-[20px] mt-2 mb-2 '>Sign In</h2>

        <div className='flex p-4 gap-4 border border-gray-300 rounded-md'>
          <LuUserRound size={24} />
          <input type="text" placeholder='Name' className='w-full outline-none' />
        </div>

        <div className='flex p-4 gap-4 border border-gray-300 rounded-md'>
          <MdOutlineEmail size={24} />
          <input type="text" placeholder='Email' className='w-full outline-none' />
        </div>

        <div className='flex p-4 gap-4 border border-gray-300 rounded-md'>
          <CiLock size={24} />
          <input type="password" placeholder='Password' className='w-full outline-none' />
        </div>

        <div className='flex items-center gap-2'>
          <input type="checkbox" className='accent-[#FF9F0D]' />
          <p>Remember me</p>
        </div>

        <button className='w-full p-3 bg-[#FF9F0D] text-white font-semibold rounded-md'>
          Sign Up
        </button>

        <p className='text-right text-sm text-gray-500 cursor-pointer hover:underline'>Forgot Password?</p>

        <div className='w-full mt-8 flex items-center justify-center'>
            <hr className='w-1/3 bg-gray-500'/>
            <span className='text-gray-500 border-[2px] p-2'>OR</span>
            <hr className='w-1/3 bg-gray-500'/>
        </div>

        <div className='flex p-4 gap-4 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-100'>
          <FcGoogle size={24} />
          <p>Sign up with Google</p>
        </div>

        <div className='flex p-4 gap-4 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-100'>
          <FaApple size={24} />
          <p>Sign up with Apple</p>
        </div>
      </div>
    </div>
  );
}

export default Page;
