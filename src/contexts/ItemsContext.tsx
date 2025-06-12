import { createContext } from "react";

// src/types/Item.ts (ou em qualquer lugar apropriado)
export interface Item {
  id?: number;
  name?: string;
  amount?: number;
  priceItem?: number;
  category?: string;
  description?: string;
  date?: string;
}

interface ItemContextType {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

export const ItemsContext = createContext<ItemContextType | undefined>(
  undefined
);
