import { creatContext } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  return <cartContext.Provider value={0}>{children}</cartContext.Provider>;
};
