
import type { ButtonType } from '@/app/@types/ButtonType';
import { ReactNode } from 'react';

const Button = ({ children, type, onClick}: {children: ReactNode, type: ButtonType, onClick?: () => void }) => {
  return (
    <button className={type === 'primary' ? 'flex items-center font-fira justify-between py-2 px-4 text-white border-solid border-2 border-accent bg-primary hover:bg-[#C778DD]  w-fit': 'flex items-center font-fira border-solid justify-between py-2 px-4 text-white border-2 border-white hover:bg-[#ABB2BF] w-fit'} onClick={onClick} >{children}</button>
  );
}

export default Button;