"use client";
import React, { createContext, useContext, useState } from "react";

const CatIdContext = createContext();

export const CatIdProvider = ({ children }) => {
  const [catId, setCatId] = useState(1);

  return (
    <CatIdContext.Provider value={{ catId, setCatId }}>
      {children}
    </CatIdContext.Provider>
  );
};

export const useCatId = () => {
  return useContext(CatIdContext);
};
