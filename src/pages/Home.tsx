import { useContext } from "react";
import Button from "../components/Button";
import MainTitle from "../components/MainTitle";
import { Square } from "../components/Square";
import { ItemsContext, type Item } from "../contexts/ItemsContext";
import { Link } from "react-router-dom";

const Home = () => {
  const context = useContext(ItemsContext);

  if (!context) {
    throw new Error("contexto vazio");
  }
  const { items } = context;

  const totalAmount = () => {
    return items.reduce((total, item) => total + (item.amount ?? 0), 0);
  };

  const recentItems = () => {
    const recentItems: Item[] = [];

    items.forEach((item) => {
      if (item.date === new Date().toISOString().split("T")[0]) {
        recentItems.push(item);
      }
    });

    return recentItems;
  };

  const endItems = () => {
    const result: Item[] = [];
    items.forEach((item) => {
      if (item.amount !== undefined && item.amount <= 5) {
        result.push(item);
      }
    });
    return result;
  };
  return (
    <>
      <MainTitle title="DashBoard" />
      <div className="grid grid-cols-4 gap-10 place-items-center">
        <Square title="Diversidade de Items" number={items.length} />
        <Square title="Inventário Total" number={totalAmount()} />
        <Square title="Itens Recentes" number={recentItems().length} />
        <Square title="Items Acabando" number={endItems().length} />
        <div className="col-span-2 grid-rows-2 w-full">
          <table className="table-auto h-full w-full">
            <thead className="h-12 shadow-2xl shadow-black bg-zinc-600 text-lg text-white">
              <tr>
                <th className="px-4 py-3 text-left">Items Recentes</th>
                <th className="px-4 py-3 text-left">Ações</th>
              </tr>
            </thead>
            <tbody className="text-lg">
              {items.map((item) => (
                <tr>
                  <td className="px-4 py-3">{item.name}</td>
                  <td className="px-4 py-3">
                    <Link to={`items/${item.id}`}>
                      <Button text="Ver" color="bg-blue-700" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-span-2 grid-rows-2 w-full">
          <table className="table-auto w-full">
            <thead className="h-12 shadow-2xl shadow-black bg-zinc-600  text-lg text-white">
              <tr>
                <th className="px-4 py-3 text-left">Items Acabando</th>
                <th className="px-4 py-3 text-left">Qtd</th>
                <th className="px-4 py-3 text-left">Ações</th>
              </tr>
            </thead>
            <tbody className="text-lg">
              {endItems().map((item) => (
                <tr key={item.id}>
                  <td className="px-4 py-3">{item.name}</td>
                  <td className="px-4 py-3">{item.amount}</td>
                  <td className="px-4 py-3">
                    <Button text="Ver" color="bg-blue-700" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
