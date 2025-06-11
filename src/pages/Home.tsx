import Button from "../components/Button";
import MainTitle from "../components/MainTitle";
import { Square } from "../components/Square";

const Home = () => {
    
  return (
    <div>
      <MainTitle title="DashBoard" />
      <div className="grid grid-cols-4 gap-10 place-items-center">
        <Square title="Diversidade de Items" number={2} />
        <Square title="Inventário Total" number={40} />
        <Square title="Itens Recentes" number={2} />
        <Square title="Items Acabando" number={1} />
        <div className="col-span-2 grid-rows-2 w-full">
          <table className="table-auto w-full">
            <thead className="h-12 shadow-2xl shadow-black bg-zinc-600 text-lg text-white">
              <tr>
                <th className="px-4 py-3 text-left">Items Recentes</th>
                <th className="px-4 py-3 text-left">Ações</th>
              </tr>
            </thead>
            <tbody className="text-lg">
              <tr>
                <td className="px-4 py-3">Teste</td>
                <td className="px-4 py-3">
                  <Button text="Ver" color="blue-700" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-span-2 grid-rows-2 w-full">
          <table className="table-auto w-full">
            <thead className="h-12 shadow-2xl shadow-black bg-zinc-600  text-lg text-white">
              <tr>
                <th className="px-4 py-3 text-left">Items Recentes</th>
                <th className="px-4 py-3 text-left">Qtd</th>
                <th className="px-4 py-3 text-left">Ações</th>
              </tr>
            </thead>
            <tbody className="text-lg">
              <tr>
                <td className="px-4 py-3">Teste</td>
                <td className="px-4 py-3">8</td>
                <td className="px-4 py-3">
                  <Button text="Ver" color="blue-700" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
