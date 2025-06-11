import { Link, Outlet } from "react-router-dom";
import MainTitle from "../components/MainTitle";

const LayoutItems = () => {
  return (
    <>
      <MainTitle title="Stock Items" />
      <div className="my-10 p-4 flex gap-4 border-b-2 w-full">
        <Link to="/items" className="hover:text-zinc-300">
          Todos os items
        </Link>
        <Link to="newItem" className="hover:text-zinc-300">
          Novo Item
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default LayoutItems;
