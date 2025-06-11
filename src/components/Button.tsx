type ButtonProps = {
  text: string;
  color: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
const Button = ({ text, color, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={` bg-${color} font-bold cursor-pointer py-1 px-3 rounded-lg  hover:bg-zinc-700`}
    >
      {text}
    </button>
  );
};

export default Button;
