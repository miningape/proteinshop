import React from 'react';

interface ButtonProps {
    text: string;
    //color: 'primary' | 'secondary' | 'default';
    //size: 'small' | 'medium' | 'large';
    className?: string;
    
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, className, onClick }) => (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );

export default Button;


/* Example Usagge:
import { Button } from './Button';

const App: React.FC = () => {
  const handleClick = () => {
    // Do something when the button is clicked
  };

  return (
    <Button label="Click me" className="custom-button" onClick={handleClick} />
  );
};
*/