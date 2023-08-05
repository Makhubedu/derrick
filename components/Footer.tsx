import Email from '@/app/icons/Email';
import GitHub from '@/app/icons/GitHub';
import Link from 'next/link';
import LinkedIn from '@/app/icons/LinkedIn';
import Logo from '@/app/icons/Logo';

const Footer = () => {
  return (
    <footer className='border-t-[1px] border-solid border-secondary py-8'>
      <div className='flex justify-between w-full sm:flex-col'>
        <div>
          <div className='flex gap-6 font-fira font-normal text-secondary text-base'><div className='flex items-center text-white font-medium gap-2'><Logo /> Derrick</div><Link href="mailto:lefaderrick@gmail.com" target="_blank">lefaderrick@gmail.com</Link></div>
          <p className='font-fira text-white text-base mt-4'>Full-stack software developer</p>
        </div>
        <div>
          <h2 className='font-fira text-white text-2xl font-medium text-center sm:text-left sm:mt-4'>Media</h2>
          <div className='flex gap-2 mt-3 font-fira'>
            <Link href="https://github.com/Makhubedu" target="_blank"><GitHub /></Link>
            <Link href="mailto:lefaderrick@gmail.com" target="_blank"><Email /></Link>
            <Link href="https://za.linkedin.com/in/derrick-makhubedu-58b716185" target="_blank"><LinkedIn /></Link>
          </div>
        </div>
      </div>
      <p className='font-fira text-center mt-16 text-secondary'><Link href="mailto:lefaderrick@gmail.com">© Copyright 2023. Made by Derrick</Link></p>
    </footer>
  )
}

export default Footer;