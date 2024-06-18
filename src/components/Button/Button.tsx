import { Children } from '../../types/Children';

interface ButtonProps {
  children: Children;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps): JSX.Element => {
  return (
    <button className="border-2 border-black p-4" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
