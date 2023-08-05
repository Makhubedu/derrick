import Email from '@/app/icons/Email';
import GitHub from '@/app/icons/GitHub';
import Link from 'next/link';
import LinkedIn from '@/app/icons/LinkedIn';

const HeaderMedia = () => {
  return (
    <div className=" flex flex-col gap-2 items-center">
      <div className=" w-px h-48 bg-secondary"></div>
      <Link href="https://github.com/Makhubedu" target="_blank"><GitHub /></Link>
      <Link href="https://za.linkedin.com/in/derrick-makhubedu-58b716185" target="_blank"><LinkedIn /></Link>
      <Link href="mailto:lefaderrick@gmail.com" target="_blank"><Email /></Link>
    </div>
  );
};

export default HeaderMedia;