import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContext";
import Button from "../components/Button";

const Item = () => {
  const { itemId } = useParams();
  const context = useContext(ItemsContext);

  if (!context) {
    throw new Error("contexto vazio");
  }
  const { items } = context;

  const item = items.find((i) => i.id === +itemId);

  if (!item) {
    return <h2>Oops... Esse produto não foi encontrado =(</h2>;
  }

  return (
    <>
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">{item.name}:</h1>
        <Button text="Atualizar" color="bg-yellow-400" />
        <Button text="Remover" color="bg-red-700" />
      </div>
      <div className="my-10 flex gap-3">
        <p className="bg-zinc-700 p-5 rounded-2xl">
          Categória: {item.category}
        </p>
        <p className="bg-zinc-700 p-5 rounded-2xl">
          Quantidade em Estoque: {item.amount}
        </p>
        <p className="bg-zinc-700 p-5 rounded-2xl">Preço: {item.priceItem}R$</p>
      </div>
      <p>{item.description}</p>
      <p className="mt-5 font-bold">Cadastrado em: {item.date}</p>
    </>
  );
};

export default Item;
