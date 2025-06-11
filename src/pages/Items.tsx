import Button from "../components/Button";

const Items = () => {
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
            <tr>
              <td className="px-4 py-3">b-5559347y43-fdhduhd</td>
              <td className="px-4 py-3">7 Wonders</td>
              <td className="px-4 py-3">8 unid.</td>
              <td className="px-4 py-3 ">Jogos</td>
              <td className="px-4 py-3">
                <Button text="Ver" color="bg-blue-700" />
                <Button text="Atualizar" color="bg-yellow-400" />
                <Button text="Excluir" color="bg-red-700" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Items;
