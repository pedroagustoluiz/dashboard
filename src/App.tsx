import { RouterProvider } from "react-router-dom";
import router from "./router";
import { useState } from "react";
import { ItemsContext } from "./contexts/ItemsContext";

const App = () => {
  const [items, setItems] = useState<object[]>([]);

  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      <RouterProvider router={router} />
    </ItemsContext.Provider>
  );
};

export default App;
