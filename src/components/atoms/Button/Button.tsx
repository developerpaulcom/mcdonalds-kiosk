import './styles.scss';

type ButtonVariant = "primary" | "panel" | "outline" ;

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant
  isActive?: boolean;
}

function Button({ variant = 'primary', children, onClick, isActive }: ButtonProps) {
  return (
    <button className={`btn btn--${variant} ${isActive ? 'active' : ''}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
