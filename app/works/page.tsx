import Dots from '../icons/Dots';
import InternalHeader from '@/components/InternalHeader';
import Link from 'next/link';
import Projects from '@/components/Projects';
import SmallProjects from '@/components/SmallProjects';
import Title from '@/components/Title';


const Works = () => {
  return (
    <div>
      {/* Header Section */}
      <section className='p-8 sm:pb-0 w-full max-w-7xl'>
        <InternalHeader projectName="projects" description="List of my projects" />
      </section>

      {/* Project section showing projects summary */}
      <section className='relative mt-[74px] w-full max-w-7xl'>
        <div className=' flex justify-between md:flex-col mb-12 md:items-center md:gap-1'>
          <Title noline>complete-apps</Title>
          <Link className='font-fira font-medium text-base text-white' href="https://github.com/Makhubedu/" target='_blank'>View All {'~~>'}</Link>
        </div>
        <Projects />
        <div className=' absolute top-10 -left-24'>
          <Dots />
        </div>
      </section>

      {/* Small Projects Summary */}
      <section className='relative mt-[74px] w-full max-w-7xl'>
        <div className=' flex justify-between md:flex-col mb-12 md:items-center md:gap-1'>
          <Title noline>small-projects</Title>
          <Link className='font-fira font-medium text-base text-white' href="https://github.com/Makhubedu/" target='_blank'>View All {'~~>'}</Link>
        </div>
        <SmallProjects />
        <div className=' absolute top-10 -left-24'>
          <Dots />
        </div>
      </section>
    </div>
  )
}

export default Works;