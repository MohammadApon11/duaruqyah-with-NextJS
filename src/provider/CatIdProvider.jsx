"use client";
import React, { createContext, useContext, useState } from "react";

const CatIdContext = createContext();

export const CatIdProvider = ({ children }) => {
  const [catId, setCatId] = useState(1);
  const [subCatId, setSubCatId] = useState(null);
  const [duaNameEn, setDuaNameEn] = useState(null);

  const values = {
    catId,
    setCatId,
    subCatId,
    setSubCatId,
    duaNameEn,
    setDuaNameEn,
  };

  return (
    <CatIdContext.Provider value={values}>{children}</CatIdContext.Provider>
  );
};

export const useCatId = () => {
  return useContext(CatIdContext);
};
