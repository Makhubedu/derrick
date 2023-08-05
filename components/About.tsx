'use client'
import { useRouter } from 'next/navigation';

import Button from './Button';
import Image from 'next/image';

const About = () => {

  const router = useRouter()

  return (
    <div className='flex justify-between w-full flex-wrap '>
      <div className='max-w-lg'>
        <p className='font-fira font-normal text-secondary text-base mb-6'>
            Hello, i’m Derrick!
          <br />
            I’m a full-stack developer based in Johannesburg, South Africa. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. 
          <br />
            Transforming my creativity and knowledge into a websites has been my passion for over a three years. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
        </p>
        <Button type='primary' onClick={() => router.push('/about')}>Read More {'>'}</Button>
      </div>
      <div className=''>
        <Image src='/images/profile-image.png' width={343} height={506} alt="Derrick Profile Image" />
      </div>
    </div>
  )
};

export default About;