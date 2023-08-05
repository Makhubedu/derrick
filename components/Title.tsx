import React from 'react';

const Title = ({ children, noline } : { children: React.ReactNode, noline?: boolean }) => {
  return (
    <h1 className={`flex items-center relative font-fira font-medium text-[32px] text-left text-white before:content-['#'] after:content-[''] before:text-accent ${ !noline && 'after:h-1 after:w-40 after:bg-accent after:inline after:hover:w-42'} transition-all ease-out duration-300`}>{children}</h1>
  );
}

export default Title;