import { RouterProvider } from "react-router-dom";
import router from "./router";
import { useEffect, useState } from "react";
import { ItemsContext } from "./contexts/ItemsContext";

const App = () => {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("items");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      <RouterProvider router={router} />
    </ItemsContext.Provider>
  );
};

export default App;
