import About from '@/components/About';
import Dots from '../icons/Dots';
import FunFacts from '@/components/FunFacts';
import InternalHeader from '@/components/InternalHeader';
import SkillCard from '@/components/SkillCard';
import Title from '@/components/Title';

import { skills } from '../skills';

const AboutMe = () => {
  return (
    <div>

      {/* Header Section */}
      <section className='p-8 w-full max-w-7xl'>
        <InternalHeader projectName="about-me" description="who am i?" />
      </section>

      {/* About me section */}
      <section className='relative mt-[74px] w-full sm:mt-6 w-full max-w-7xl'>
        <div className='absolute border-[1px] border-secondary border-solid h-[86px] w-[86px] top-1/2 transform translate-y-1/2 -left-[139px] '></div>
        <div className='absolute -right-[132px] bottom-11 sm:hidden'>
          <Dots />
        </div>
        <About />
      </section>

      {/* Skills section showing all the summary of Derrick's skills */}
      <section className='relative mt-[74px] w-full max-w-7xl'>
        <div className='mb-12'>
          <Title noline={true}>skills</Title>
        </div>
        <div className='flex flex-wrap justify-center gap-4 w-full max-w-7xl'>
          {skills.map((skill, index) => <SkillCard key={index} title={skill.title} skills={skill.skills} row={skill.row} />)}
        </div>
      </section>

      {/* Derrick's Fun Fatcs*/}
      <section className='relative mt-[74px] w-full max-w-7xl'>
        <div className='mb-12'>
          <Title noline={true}>my-fun-fact</Title>
        </div>
        <FunFacts />
      </section>
      
    </div>
  )
}

export default AboutMe;