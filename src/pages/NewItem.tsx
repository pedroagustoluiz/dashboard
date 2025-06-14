import { useContext, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { ItemsContext } from "../contexts/ItemsContext";

const NewItem = () => {
  const [nameItem, setNameItem] = useState<string>("");
  const [amountItem, setAmountItem] = useState<number>(0);
  const [priceItem, setPriceItem] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const context = useContext(ItemsContext);

  if (!context) {
    throw new Error("contexto vazio");
  }
  const { items, setItems } = context;
  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const newItem = {
      id: Date.now() + Math.floor(Math.random() * 1000),
      name: nameItem,
      amount: amountItem,
      priceItem: priceItem,
      category: category,
      description: description,
      date: new Date().toISOString().split("T")[0],
    };
    setItems((prevItems) => [...prevItems, newItem]);
    setNameItem("");
    setAmountItem(0);
    setPriceItem(0);
    setCategory("");
    setDescription("");
    console.log(items);
    return alert(`Item Salvo! ${nameItem}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="px-30 grid grid-cols-4 gap-10">
        <Input
          name="Nome"
          type="text"
          placeholder="Insira o nome do item..."
          onChange={(ev) => setNameItem(ev.target.value)}
          value={nameItem}
        />
        <Input
          name="amount"
          type="number"
          placeholder="Informe a quantidade..."
          onChange={(ev) => setAmountItem(ev.target.valueAsNumber)}
          value={amountItem}
        />
        <Input
          name="price"
          type="number"
          placeholder="Informe o preço..."
          onChange={(ev) => setPriceItem(ev.target.valueAsNumber)}
          value={priceItem}
        />

        <select
          name="category"
          id="category"
          className="h-12 bg-zinc-600 rounded-2xl col-span-1 w-full px-4 font-bold"
          onChange={(ev) => setCategory(ev.target.value)}
          value={category}
        >
          <option value="electronics">Eletronicos</option>
          <option value="games">Jogos</option>
          <option value="furniture">Móveis</option>
        </select>
        <textarea
          name="description"
          id="description"
          className="col-span-4 w-full h-56 bg-zinc-600 rounded-2xl p-5 resize-none"
          onChange={(ev) => setDescription(ev.target.value)}
          value={description}
        ></textarea>
        <Button text="Salvar" color="bg-blue-700" type="submit" />
      </form>
    </>
  );
};

export default NewItem;
