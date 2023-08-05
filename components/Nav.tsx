import Link from 'next/link';
import Logo from '@/app/icons/Logo';

const Nav = () => {
  return (
    <div className="flex justify-between bg-primary pt-[32px] pr-0 pb-2 pl-0 w-[100%] sm:flex-col">
      <div className="flex gap-1 sm:mb-12">
        <Logo />
        <Link href="/" className="font-fira text-white text-base font-bold hover:cursor-pointer">Derrick</Link>
      </div>
      <nav>
        <ul className="flex gap-8 sm:flex-col">
          <li className="font-fira text-secondary hover:text-white text-base font-normal hover:font-medium target:text-white"><Link href='/#home'>#home</Link></li>
          <li className="font-fira text-secondary hover:text-white text-base font-normal hover:font-medium target:text-white"><Link href='/works/#works'>#works</Link></li>
          <li className="font-fira text-secondary hover:text-white text-base font-normal hover:font-medium target:text-white"><Link href='/about-me/#about-me'>#about-me</Link></li>
          <li className="font-fira text-secondary hover:text-white text-base font-normal hover:font-medium target:text-white"><Link href='/contacts/#contacts'>#contacts</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;