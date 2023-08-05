import Button from './Button';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({
  image,
  skills,
  projectName,
  description,
  link
}: {
    image: string,
    skills: string[],
    projectName: string,
    description: string,
    link: string
}) => {
  return(
    <div className=' w-80 border-[1px] border-solid border-secondary h-fit sm:w-full'>
      <div className='relative border-b  border-solid border-b-secondary h-52 w-full'>
        <Image layout='fill' objectFit='contain'src={image} alt={projectName} />
      </div>
      <div className='border-b  border-solid border-b-secondary flex flex-row gap-1 p-2'>
        <p className='font-fira text-base text-secondary font-normal' >{skills.join(', ')}</p>
      </div>
      <div className='font-fira p-4 flex flex-col gap-4'>
        <h2 className=' text-white text-2xl font-medium'>{projectName}</h2>
        <p className='font-fira text-base text-secondary font-normal'>{description}</p>
        <Link className=' flex-1' href={link} target='_blank'>
          <Button type='primary'>Live {'<~~>'}</Button>
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard;