interface MainTitleProps {
  title: string;
}

const MainTitle = ({ title }: MainTitleProps) => {
  return <h1 className="text-5xl font-extralight my-10">{title}</h1>;
};

export default MainTitle;
