interface SquareProps {
  title: string;
  number: number;
}

export const Square = ({ title, number }: SquareProps) => {
  return (
    <div className="bg-zinc-600 h-56 w-full p-4 gap-10 rounded-2xl shadow-2xl shadow-black flex flex-col ">
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="text-5xl font-extrabold text-center">{number}</p>
    </div>
  );
};
