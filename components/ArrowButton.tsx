import { ReactNode } from 'react';

const ArrowButton = ({ children, onClick } : { children: ReactNode, onClick: () => void }) => {

  return (
    <button onClick={onClick}>
      {children} {'~~>'}
    </button>
  )
}

export default ArrowButton;