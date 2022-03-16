import { Container } from './styles';

interface ButtonProps{
    onClick?: () => void
    label: string
    preenchido: boolean | true
    icon?: Object 
    className?: string
  
}

const Button: React.FC<ButtonProps> = ({
  onClick, 
  label, 
  preenchido,
  icon, 
  className,  
  ...rest 
}) => {
  return (
      <Container 
        preenchido={preenchido} 
        onClick={onClick} 
        className={className}
      > 
        <div>
          {icon}
          <span>{label}</span>
        </div>


      </Container>
  );
}

export default Button;