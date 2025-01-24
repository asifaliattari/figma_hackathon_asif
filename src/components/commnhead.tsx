import Link from 'next/link';
import React from 'react';

interface propstype{
    title: string;
    subtitile:  string
}

const Commnhead: React.FC<propstype> = ({title, subtitile}:propstype) => {
  return (
    <div
      className="md:max-w-[1920px] h-[320px] flex flex-col justify-center items-center"
      style={{ backgroundImage: 'url(/images/commnhead.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="text-center">
        <h1 className="font-bold text-[48px] text-white mb-2">{title}</h1>
        <div className="flex justify-center space-x-2 text-lg">
      
        <Link href="/">
        <span className="text-white">Home</span>
        </Link>
          <span className="text-white"> &gt; </span>
          <span className="text-[#FF9F0D]">{subtitile}</span>
        </div>
      </div>
    </div>
  );
};

export default Commnhead;
