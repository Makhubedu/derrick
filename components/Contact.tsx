import Email from '@/app/icons/Email';
import Link from 'next/link';
import LinkedIn from '@/app/icons/LinkedIn';

const Contact = () => {
  return (
    <div className='flex justify-between w-full sm:flex-col'>
      <p className="font-fira text-secondary text-base max-w-lg sm:mb-4">I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
      <div className='border-[1px] border-secondary border-solid p-4'>
        <h2 className='font-fira font-semibold text-white text-base'>Message me here</h2>
        <div className="font-fira text-secondary text-base hover:text-white flex gap-2 mt-4">
          <LinkedIn />
          <Link href="https://za.linkedin.com/in/derrick-makhubedu-58b716185" target="_blank">Derrick LinkedIn</Link>
        </div>
        <div className="font-fira text-secondary text-base hover:text-white flex gap-2 mt-4">
          <Email />
          <Link href="mailto:lefaderrick@gmail.com" target="_blank">lefaderrick@gmail.com</Link>
        </div>
      </div>
    </div>
  )
};

export default Contact;