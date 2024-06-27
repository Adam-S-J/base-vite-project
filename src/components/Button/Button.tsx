interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button = ({ label, onClick }: ButtonProps): JSX.Element => {
  return (
    <button className="border-2 border-black p-4" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
