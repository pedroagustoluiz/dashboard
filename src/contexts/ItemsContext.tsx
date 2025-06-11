import { createContext } from "react";

// src/types/Item.ts (ou em qualquer lugar apropriado)
export interface Item {
  name?: string;
  amount?: number;
  priceItem?: number;
  category?: string;
  description?: string;
}

interface ItemContextType {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

export const ItemsContext = createContext<ItemContextType | undefined>(
  undefined
);
