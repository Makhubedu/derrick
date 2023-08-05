import HeaderMedia from '@/components/HeaderMedia';
import Nav from './Nav';


const InternalHeader = ({ projectName, description } : { projectName: string, description: string }) => {
    
  return(
    <div className="flex flex-col bg-primary pr-0 pb-2 pl-0 w-[100%]">
      <Nav />
      <div className=' absolute top-0 left-4'><HeaderMedia /></div>
      <div className=' mt-14'>
        <h1 className='font-fira font-semibold text-white text-[32px]'><span className='font-fira font-semibold text-[32px] text-accent'>/</span>{projectName}</h1>
        <p className='font-fira text-white text-base'>{description}</p>
      </div>
    </div>
  );
};

export default InternalHeader;