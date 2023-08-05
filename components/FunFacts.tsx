import Dots from '@/app/icons/Dots';
import PinkLines from '@/app/icons/PinkLines';
import { funFacts } from '@/app/_local/funfacts';

const FunFacts = () => {
  return(
    <div className='relative flex flex-row-reverse gap-12 sm:flex-col sm:mt-8'>
      <div className='relative w-[350px] min-w-[350px] sm:hidden'>
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
      <div className='flex flex-wrap gap-4 sm:flex sm:flex-col sm:items-center'>
        {funFacts.map((fact, index) => <div key={index} className='p-2 border-[1px] border-solid border-secondary font-fira text-secondary text-base sm:w-full'>{fact}</div>)}
      </div>
    </div>
  )
}

export default FunFacts;