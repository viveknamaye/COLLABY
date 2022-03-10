import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [currentuser, setCurrentuser] = useState({});
  const [markdown, setMarkdown] = useState("");
  return (
    <GlobalContext.Provider
      value={{
        currentuser,
        setCurrentuser,
        markdown,
        setMarkdown,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
