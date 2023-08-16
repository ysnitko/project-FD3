import React, { useState, createContext } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <ContextProvider.Provider value={(currentPage, setCurrentPage)}>
      {{ children }}
    </ContextProvider.Provider>
  );
};
