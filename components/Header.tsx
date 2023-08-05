'use client'

import Button from './Button';
import DerrickLogo from '@/app/icons/DerrickLogo';
import Dots from '@/app/icons/Dots';
import HeaderMedia from '@/components/HeaderMedia';
import Image from 'next/image';
import Nav from './Nav';
import React from 'react';
import { useRouter } from 'next/navigation';


const Header = () => {

  const router = useRouter();

  const handleContact = () => {
    router.push('/contact');
  };
    
  return(
    <div className="flex flex-col bg-primary pr-0 pb-2 pl-0 w-full">
      <Nav />
      <div className=' absolute top-0 left-4'><HeaderMedia /></div>
      <div className="flex gap-4 mt-16 sm:flex-col">
        <div className="flex flex-col gap-7 flex-1">
          <h1 className=" text-white font-semibold text-[32px] font-fira">
            Derrick is a <span className=" text-accent">Software Developer</span> and <span className=" text-accent">a web designer</span>
          </h1>
          <p className='font-fira text-base text-secondary'>
            He crafts responsive websites where technologies meet creativity
          </p>
          <Button type="primary" onClick={handleContact}>Contact me!!</Button>
        </div>
        <div className="relative">
          <div className="absolute top-[84px] left-0 z-0"><DerrickLogo/></div>
          <div className="absolute right-4 bottom-[93px] z-20"><Dots /></div>
          <div className="relative z-10">
            <Image priority={false} width={457} height={386} src="/images/derrick-image.png" alt="Derrick Makhubedu image" />
          </div>
        </div>
      </div>
            
    </div>
  );
};

export default Header;