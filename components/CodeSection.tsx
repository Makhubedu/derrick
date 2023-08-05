import Codes from '@/app/icons/Codes';


const CodeSection = () => {

  return(
    <section className='flex items-end flex-col mt-[120px] max-w-2xl'>
      <div className='relative p-8 border-[1px] flex justify-center items-center'>
        <div className='absolute -top-[0.6rem] left-3 bg-primary'><Codes /></div>
        <h5 className='font-fira text-white text-2xl font-medium'>With great power comes great responsibility.</h5>
        <div className='absolute -bottom-[0.6rem] right-3 bg-primary'><Codes /></div>
      </div>
      <span className='p-8 border-[1px] border-t-0 w-fit font-fira text-white text-2xl font-medium'> - 👴🏿 Derrick</span>
    </section>
  )
}

export default CodeSection;