import { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react'

// Button interface that extends HTML button props
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  type?: 'button' | 'submit' | 'reset'
}

export function ReusableBtn({
  className = '',
  onClick,
  type = 'button',
  children,
  ...props // Pass down any additional props
}: IButtonProps): ReactElement {
  return (
    <button
      onClick={onClick}
      className={`btn ${className}`} // Apply default or passed className
      type={type}
      {...props} // Spread remaining props (disabled, aria, etc.)
    >
      {children} {/* Render the children prop inside the button */}
    </button>
  )
}
