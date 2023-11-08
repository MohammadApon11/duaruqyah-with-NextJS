"use client";
import getduas from "@/hooks/getDuas";
import getSubCategories from "@/hooks/getSubCategories";
import { useCatId } from "@/provider/CatIdProvider";
import React, { useState } from "react";
import SectionTitle from "./SectionTitle";

const Dua = () => {
  const { catId } = useCatId() || {};
  const subCategories = getSubCategories();
  const filteredSubCategories = subCategories.filter(
    (subCategory) => subCategory.cat_id === catId
  );

  return (
    <div
      className="w-full
     pb-44 delay-1000 transition duration-1000 ease-linear"
    >
      <div className="">
        {filteredSubCategories.map((subCategory, index) => (
          <SectionTitle
            key={index}
            subCategory={subCategory}
          />
        ))}
      </div>
    </div>
  );
};

export default Dua;
