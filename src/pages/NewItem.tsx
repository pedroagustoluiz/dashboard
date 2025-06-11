import Button from "../components/Button";
import Input from "../components/Input";

const NewItem = () => {
  return (
    <>
      <div className="px-30 grid grid-cols-4 gap-10">
        <Input name="Nome" type="text" placeholder="Insira o nome do item..." />
        <Input
          name="Quantidade"
          type="number"
          placeholder="Informe a quantidade..."
        />
        <Input name="price" type="number" placeholder="Informe o preço..." />

        <select
          name=""
          id=""
          className="h-12 bg-zinc-600 rounded-2xl col-span-1 w-full px-4 font-bold"
        >
          <option value="teste">teste</option>
          <option value="teste">teste</option>
          <option value="teste">teste</option>
        </select>
        <textarea
          name="description"
          id="description"
          className="col-span-4 w-full h-56 bg-zinc-600 rounded-2xl p-5 resize-none"
        ></textarea>
        <Button text="Salvar" color="bg-blue-700" />
      </div>
    </>
  );
};

export default NewItem;
