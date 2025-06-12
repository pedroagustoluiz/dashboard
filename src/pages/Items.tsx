import { useContext } from "react";
import Button from "../components/Button";
import { ItemsContext } from "../contexts/ItemsContext";
import { Link } from "react-router-dom";

const Items = () => {
  const context = useContext(ItemsContext);

  if (!context) {
    throw new Error("contexto vazio");
  }
  const { items } = context;
  return (
    <>
      <div className="col-span-2 grid-rows-2 w-full ">
        <table className="table-auto w-full">
          <thead className="h-12 shadow-2xl shadow-black bg-zinc-600 text-lg text-white">
            <tr>
              <th className="px-4 py-3 text-left">Id</th>
              <th className="px-4 py-3 text-left">Nome</th>
              <th className="px-4 py-3 text-left">Em Estoque</th>
              <th className="px-4 py-3 text-left">Categoria</th>
              <th className="px-4 py-3 text-left">Ações</th>
            </tr>
          </thead>
          <tbody className="text-lg">
            {items.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-3">b{item.id}</td>
                <td className="px-4 py-3">{item.name}</td>
                <td className="px-4 py-3">{item.amount} unid.</td>
                <td className="px-4 py-3 ">{item.category}</td>
                <td className="px-4 py-3">
                  <Link to={`${item.id}`}>
                    <Button text="Ver" color="bg-blue-700" />
                  </Link>
                  <Button text="Atualizar" color="bg-yellow-400" />
                  <Button text="Excluir" color="bg-red-700" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Items;
