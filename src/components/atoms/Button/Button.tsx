import './styles.scss';

type ButtonVariant = "primary" | "panel" | "outline" | "icon" ;

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  children: React.ReactNode;
  variant?: ButtonVariant;
  isActive?: boolean;
}

function Button({ variant = 'primary', children, isActive, className, ...rest }: ButtonProps) {
  return (
    <button className={`btn btn--${variant} ${isActive ? 'active' : ''} ${className ?? ''}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
