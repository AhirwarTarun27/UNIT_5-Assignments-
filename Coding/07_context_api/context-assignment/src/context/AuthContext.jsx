import React, { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ childern }) => {
  const [isAuth, setIsAuth] = useState(false);

  const ToggleAuth = () => {
    setIsAuth(!isAuth);
  };

  return (
    <AuthContext.Provider value={{ isAuth, ToggleAuth }}>
      {childern}
    </AuthContext.Provider>
  );
};
