interface InputProps {
  type: string;
  name: string;
  placeholder: string;
}
const Input = ({ type, name, placeholder }: InputProps) => {
  return (
    <>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className="h-12 bg-zinc-600 rounded-2xl col-span-1 w-full p-4"
      />
    </>
  );
};

export default Input;
