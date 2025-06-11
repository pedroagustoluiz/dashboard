type InputProps = {
  type: string;
  name: string;
  placeholder: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
const Input = ({ type, name, placeholder, ...rest }: InputProps) => {
  return (
    <>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className="h-12 bg-zinc-600 rounded-2xl col-span-1 w-full p-4"
        {...rest}
      />
    </>
  );
};

export default Input;
