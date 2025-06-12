import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Items from "./pages/Items";
import LayoutItems from "./pages/LayoutItems";
import NewItem from "./pages/NewItem";
import Item from "./pages/Item";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/items",
        element: <LayoutItems />,
        children: [
          { index: true, element: <Items /> },
          {
            path: "newItem",
            element: <NewItem />,
          },
          {
            path: ":itemId",
            element: <Item />,
          },
        ],
      },
    ],
  },
]);

export default router;
