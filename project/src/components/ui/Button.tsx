import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  primary = false,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const baseClasses = 'px-6 py-3 rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const styleClasses = primary
    ? 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500'
    : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 focus:ring-gray-500';
  
  const disabledClasses = disabled
    ? 'opacity-60 cursor-not-allowed'
    : 'transform hover:-translate-y-0.5';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${styleClasses} ${disabledClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;