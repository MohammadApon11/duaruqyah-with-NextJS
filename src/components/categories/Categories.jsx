"use client";
import React, { useEffect } from "react";
import AllData from "@/hooks/AllData";
import MyComponent from "../MyComponent";

const Categories = () => {
  return (
    <>
      <div className="bg-[#1FA45B] h-[57px] m-0 w-full flex items-center justify-center">
        <span className="text-white font-bold text-[17px]">Categories</span>
      </div>
      <div className="mx-3 pt-4">
        <div className="relative block w-full border-[1px] border-[#E8F0F5] rounded-md">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4">
            <img src="/header/search.png" alt="" />
          </span>
          <input
            name="category"
            type="text"
            className="h-12 placeholder:text-sm bg-white w-full rounded-md pl-12 shadow-sm focus:outline-none focus:ring-[#1FA45B] focus:ring-1  
        sm:text-sm dark:border-none dark:placeholder:text-[#96a2b4]"
            placeholder="Search by Categories"
          />
        </div>
      </div>
      <MyComponent />
    </>
  );
};

export default Categories;