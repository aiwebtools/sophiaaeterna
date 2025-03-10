
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  href,
  ...props
}) => {
  const baseStyle = "relative inline-flex items-center justify-center text-center font-medium transition-all duration-300 focus:outline-none";
  
  const variants = {
    primary: "bg-gradient-to-r from-sophia-purple to-sophia-blue text-white cyberpunk-glow hover:opacity-90",
    secondary: "bg-gradient-to-r from-sophia-gold to-sophia-amber text-black hover:opacity-90",
    outline: "border border-sophia-purple text-white hover:bg-sophia-purple/10",
    ghost: "text-white hover:bg-white/10",
  };
  
  const sizes = {
    sm: "text-sm px-3 py-1.5 rounded-md",
    md: "text-base px-5 py-2.5 rounded-lg",
    lg: "text-lg px-7 py-3 rounded-lg",
  };
  
  const Component = href ? 'a' : 'button';
  const hrefProps = href ? { href } : {};
  
  return (
    <Component
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
      {...hrefProps}
      {...props}
    >
      {variant === 'primary' && (
        <span className="absolute inset-0 rounded-lg overflow-hidden">
          <span className="absolute inset-0 rounded-lg opacity-0 hover:opacity-40 transition-opacity duration-300 bg-gradient-radial from-white/20 to-transparent"></span>
        </span>
      )}
      {children}
    </Component>
  );
};

export default Button;
