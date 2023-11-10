"use client";
import React, { useState, useEffect } from "react";
import SingleCategoris from "./SingleCategoris";
import getCategories from "@/hooks/getCategories";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [filterText, setFilterText] = useState("");

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

  const handleChange = (e) => {
    const inputText = e.target.value;
    setFilterText(inputText);
    const filteredCategory = categories.filter((category) =>
      category.cat_name_en.toLowerCase().includes(inputText.toLowerCase())
    );

    if (inputText === "") {
      setCategories(categories);
    } else {
      setCategories(filteredCategory);
    }
  };

  return (
    <>
      <div className="bg-[#1FA45B] h-[57px] m-0 w-[350px] flex items-center justify-center rounded-tr-md">
        <span className="text-white font-semibold text-[17px]">Categories</span>
      </div>
      <div className="overflow-hidden w-[350px] mt-14">
        <div className="mx-3 pt-4">
          <div className="relative block w-full border-[1px] border-[#E8F0F5] rounded-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4">
              <img src="/header/search.png" alt="" />
            </span>
            <input
              onChange={handleChange}
              name="category"
              type="text"
              className="h-12 placeholder:text-sm bg-white w-full rounded-md pl-12 shadow-sm focus:outline-none focus:ring-[#1FA45B] focus:ring-1 sm:text-sm dark:placeholder:text-[#96a2b4]"
              placeholder="Search by Categories"
            />
          </div>
        </div>
        <div className="h-[62vh] overflow-y-auto pb-8 mb-4 p-0">
          <div className="mt-4 scroll-mt-4">
            {categories?.map((category, index) => (
              <SingleCategoris
                className="text-center"
                key={index}
                category={category}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
