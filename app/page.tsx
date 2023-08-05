import About from '@/components/About';
import CodeSection from '@/components/CodeSection';
import Contact from '@/components/Contact';
import Dots from './icons/Dots';
import Header from '@/components/Header';
import Link from 'next/link';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Title from '@/components/Title';

export default async function Home(){

  return (
    <main className="flex flex-col items-center justify-between w-full">

      {/* Header Section */}
      <section className='p-8'>
        <Header/>
      </section>

      {/* The daily code section pulled from firebase */}
      <section className='relative w-full flex justify-center'>
        <div className='absolute -right-24 top-1/3 w-24 h-24 border-[1px] border-secondary border-solid sm:hidden'></div>
        <CodeSection/>
      </section>
      
      {/* Project section showing projects summary */}
      <section className='relative mt-[74px]'>
        <div className=' flex justify-between md:flex-col mb-12 md:items-center md:gap-1'>
          <Title noline={true}>projects</Title>
          <Link className='font-fira font-medium text-base text-white' href="https://github.com/Makhubedu/" target='_blank'>View All {'~~>'}</Link>
        </div>
        <Projects />
        <div className=' absolute top-10 -left-24'>
          <Dots />
        </div>
      </section>

      {/* Skills section showing all the summary of Derrick's skills */}
      <section className='relative mt-[74px]'>
        <div className='mb-12'>
          <Title>skills</Title>
        </div>
        <Skills />
      </section>

      {/* About me section */}
      <section className='relative mt-[74px] w-full max-w-7xl'>
        <div className='mb-12'>
          <Title noline={true}>about-me</Title>
        </div>
        <div className='absolute border-[1px] border-secondary border-solid h-[86px] w-[86px] top-1/2 transform translate-y-1/2 -left-[139px] '></div>
        <div className='absolute -right-[132px] bottom-11 sm:hidden'>
          <Dots />
        </div>
        <About />
      </section>

      {/* Contact Derrick Section */}
      <section className='relative mt-[74px] w-full max-w-7xl'>
        <div className='mb-12'>
          <Title>contacts</Title>
        </div>
        <Contact />
      </section>
    </main>
  )
}