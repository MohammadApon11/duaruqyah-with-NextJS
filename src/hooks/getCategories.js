import React, { useEffect, useState } from "react";

const getCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("/api/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      res.json().then((data) => {
        setCategories(data);
      });
    });
  }, []);
  return categories;
};

export default getCategories;
