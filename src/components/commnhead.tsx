import Link from 'next/link';
import React from 'react';

interface PropsType {
  title: string;
  subtitle: string;
}

const CommonHead: React.FC<PropsType> = ({ title, subtitle }) => {
  return (
    <div className="md:max-w-[1920px] h-[320px] flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url(/images/commnhead.png)" }}>
      <div className="text-center">
        <h1 className="font-bold text-[48px] text-white mb-2">{title}</h1>
        <div className="flex justify-center space-x-2 text-lg">
          <Link href="/" className="text-white hover:text-[#FF9F0D] transition-colors">
            Home
          </Link>
          <span className="text-white">&gt;</span>
          <span className="text-[#FF9F0D]">{subtitle}</span>
        </div>
      </div>
    </div>
  );
};

export default CommonHead;
