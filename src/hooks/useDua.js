"use client";
import React, { useState } from "react";

const useDua = (cat_id) => {
  const [id, setId] = useState(null);
  setId(cat_id);
  return id;
};

export default useDua;
