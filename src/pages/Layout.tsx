import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header className="bg-blue-700 text-white p-4 px-10 flex justify-between ">
        <h1 className="font-bold text-2xl">REACT STOCK</h1>
        <nav className="flex gap-3 text-lg">
          <Link to="/" className="cursor-pointer hover:text-zinc-300">
            Início
          </Link>
          <Link to="/items" className="cursor-pointer hover:text-zinc-300">
            Items
          </Link>
        </nav>
      </header>
      <main className="h-screen p-4 px-10 bg-zinc-800 text-white">
        <Outlet />
      </main>
      <footer className="bg-blue-700 text-white rounded-t-full font-bold fixed w-full bottom-0 text-center p-4 px-10">
        Feito com React Router Dom!
      </footer>
    </>
  );
};

export default Layout;
