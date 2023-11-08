import React, { useEffect, useState } from "react";

const getSubCategories = () => {
  const [subCategories, setSubCategories] = useState([]);
  useEffect(() => {
    fetch("/api/subCategories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      res.json().then((data) => {
        setSubCategories(data);
      });
    });
  }, []);
  return subCategories;
};

export default getSubCategories;
