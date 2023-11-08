import React, { useEffect, useState } from "react";

const getduas = () => {
  const [duas, setduas] = useState([]);
  useEffect(() => {
    fetch("/api/duas", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      res.json().then((data) => {
        setduas(data);
      });
    });
  }, []);
  return duas;
};

export default getduas;
