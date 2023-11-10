// "use client";
import React from "react";
import getSubCategories from "@/hooks/getSubCategories";
import SubCategories from "../subCategories/SubCategories";
import { useCatId } from "@/provider/CatIdProvider";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SingleCategoris = ({ category }) => {
  const { cat_name_en, no_of_subcat, no_of_dua, cat_id } = category;
  const { catId, setCatId } = useCatId() || {};
  const isOpen = cat_id === catId;
  const handleOpen = () => {
    setCatId(cat_id);
  };

  const subCategories = getSubCategories();
  console.log("from sub categories", subCategories);
  const filteredSubCategories = subCategories.filter(
    (c) => c.cat_id === cat_id
  );

  return (
    <>
      <a onClick={handleOpen} href={`#${cat_id}`}>
        <div
          onClick={handleOpen}
          className={`mx-auto flex items-center justify-between gap-2 p-[10px] rounded-[10px] hover:bg-[#E8F0F5] cursor-pointer ${
            isOpen ? "bg-[#E8F0F5]" : ""
          }
        `}
        >
          <div className="flex items-center gap-2">
            <div className="p-[10px] bg-[#CFE0E5] rounded-[10px] flex items-center justify-center">
              <img src="/category/category_icon.png" alt="" />
            </div>
            <div>
              <span className="text-[16px] block font-semibold">
                {cat_name_en || <Skeleton />}
              </span>
              <span className="text-[#7E7E7E] text-[14px]">
                Subcategory: {no_of_subcat || <Skeleton />}
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-[#E8F0F5] w-[1px] mr-3 h-12"></div>
            <div>
              <span className="text-[16px] block font-semibold">
                {no_of_dua}
              </span>
              <span className="text-[#7E7E7E] text-[14px]">Duas</span>
            </div>
          </div>
        </div>
      </a>

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
