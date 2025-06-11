import MainTitle from "../components/MainTitle";
import { Square } from "../components/Square";

const Home = () => {
  return (
    <div>
      <MainTitle title="DashBoard" />
      <div className="grid grid-cols-4 gap-10 place-items-center">
        <Square />
        <Square />
        <Square />
        <Square />
       
       
      </div>
    </div>
  );
};

export default Home;
