import getduas from "@/hooks/getDuas";
import getSubCategories from "@/hooks/getSubCategories";
import { useCatId } from "@/provider/CatIdProvider";
import React from "react";
import Duas from "./Duas";

const Dua = () => {
  const { catId } = useCatId() || {};
  const subCategories = getSubCategories();
  const filteredSubCategories = subCategories.filter(
    (subCategory) => subCategory.cat_id === catId
  );

  return (
    <div
      className="w-full
     pb-44"
    >
      <div className="">
        {filteredSubCategories.map((subCategory, index) => (
          <Duas  key={index} subCategory={subCategory} />
        ))}
      </div>
    </div>
  );
};

export default Dua;
