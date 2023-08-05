import Email from '@/app/icons/Email';
import GitHub from '@/app/icons/GitHub';
import Link from 'next/link';
import LinkedIn from '@/app/icons/LinkedIn';

const HeaderMedia = () => {
  return (
    <div className=" flex flex-col gap-2 items-center">
      <div className=" w-px h-48 bg-secondary"></div>
      <Link href='/some-link-here'><GitHub /></Link>
      <Link href='/some-link-here'><LinkedIn /></Link>
      <Link href='/some-link-here'><Email /></Link>
    </div>
  );
};

export default HeaderMedia;