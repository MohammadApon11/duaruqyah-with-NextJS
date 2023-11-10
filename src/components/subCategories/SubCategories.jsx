"use client";
import getduas from "@/hooks/getDuas";
import React, { useState } from "react";
import Duas from "../duas/duas";

const SubCategories = ({ subCategories, cat_id }) => {
  const { subcat_name_en, subcat_id } = subCategories;
  const duas = getduas();

  const filterDuas = duas.filter((dua) => subcat_id === dua.subcat_id);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="ml-12 border-l-2 border-dotted my-2 border-[#1FA45B]">
      <div className="flex border-dotted flex-col justify-start items-start gap-y-2 ml-3 ">
        <div className="flex flex-row my-2">
          <div className="bg-[#1FA45B] -translate-x-4 mt-1.5 w-1.5 rounded-full h-1.5"></div>
          <div className="flex flex-col justify-start items-start">
            <a href={`#${subcat_id}`}>
              <span
                onClick={() => setIsOpen(!isOpen)}
                className={`cursor-pointer font-semibold text-left text-sm ${
                  isOpen && "text-[#1FA45B]"
                }`}
              >
                {subcat_name_en}
              </span>
            </a>
            <div className={`${isOpen ? "block" : "hidden"}`}>
              {filterDuas.map((dua, index) => (
                <Duas key={index} dua={dua} cat_id={cat_id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCategories;
