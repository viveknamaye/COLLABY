import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [currentuser, setCurrentuser] = useState({});

  return (
    <GlobalContext.Provider
      value={{
        currentuser,
        setCurrentuser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
