import { skills } from '@/app/skills';

import Dots from '@/app/icons/Dots';
import PinkLines from '@/app/icons/PinkLines';
import SkillCard from './SkillCard';

const Skills = () => {

  return (
    <div className='flex gap-12 sm:flex-col sm:mt-8'>
      <div className='relative w-[350px] sm:hidden'>
        <div className='absolute left-0 top-9 sm:top-0'>
          <Dots />
        </div>
        <div className='absolute bottom-[76px] right-24'>
          <Dots />
        </div>
        <div className='absolute bottom-0 left-4'>
          <PinkLines />
        </div>
        <div className='absolute border-[1px] border-solid border-secondary w-[86px] h-[86px] top-0 right-9'></div>
        <div className='absolute border-[1px] border-solid border-secondary w-[52px] h-[52px] bottom-9 right-0'></div>
      </div>
      <div className='grid grid-cols-3 grid-rows-[auto 2fr 2fr] grid-flow-row gap-4 sm:flex sm:flex-col sm:items-center'>
        {skills.map((skill, index) => <SkillCard key={index} title={skill.title} skills={skill.skills} row={skill.row} />)}
      </div>
    </div>
  )
};

export default Skills;