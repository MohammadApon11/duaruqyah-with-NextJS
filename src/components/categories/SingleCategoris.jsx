"use client";
import React, { useState } from "react";
import getSubCategories from "@/hooks/getSubCategories";
import SubCategories from "../subCategories/SubCategories";

const SingleCategoris = ({ category, ...props }) => {
  const { cat_name_en, no_of_subcat, no_of_dua, cat_id } = category;
  // console.log("category",category);
  const subCategories = getSubCategories();

  const filteredSubCategories = subCategories.filter(
    (c) => c.cat_id === cat_id
  );
  // console.log("subCat",filteredSubCategories);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        onClick={handleOpen}
        className={`w-[95%] mx-auto flex items-center justify-between gap-2 p-[10px] rounded-[10px] hover:bg-[#E8F0F5] cursor-pointer ${isOpen ? "bg-[#E8F0F5]" : ""}
        `}
      >
        <div className="flex items-center gap-4">
          <div className="p-[10px] bg-[#CFE0E5] rounded-[10px] flex items-center justify-center">
            <img src="/category/category_icon.png" alt="" />
          </div>
          <div>
            <span className="text-[16px] block font-semibold">
              {cat_name_en}
            </span>
            <span className="text-[#7E7E7E] text-[14px]">
              Subcategory: {no_of_subcat}
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="bg-[#E8F0F5] w-[1px] mr-3 h-12"></div>
          <div>
            <span className="text-[16px] block font-semibold">{no_of_dua}</span>
            <span className="text-[#7E7E7E] text-[14px]">Duas</span>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"}`}>
        {filteredSubCategories.map((subCategories, index) => (
          <SubCategories
            key={index}
            subCategories={subCategories}
            cat_id={cat_id}
          />
        ))}
      </div>
    </>
  );
};

export default SingleCategoris;
