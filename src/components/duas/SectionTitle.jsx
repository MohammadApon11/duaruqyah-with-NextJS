import getduas from "@/hooks/getDuas";
import React from "react";
import MainSingleDua from "./MainSingleDua";

const SectionTitle = ({ subCategory }) => {
  const duas = getduas() || {};
  const { subcat_name_en, subcat_id } = subCategory || {};
  const filteredDuas = duas.filter((dua) => dua.subcat_id === subcat_id) || [];
  return (
    <>
      <div className="flex undefined mb-5 flex-row bg-white rounded-[10px] px-5 py-4 justify-start items-center ">
        <p className="font-medium leading-[25px] dark:text-dark-text text-ms">
          <span className="text-[#1FA45B]">Section:</span> {subcat_name_en}
        </p>
      </div>
      <div>
        {filteredDuas.map((dua, index) => (
          <MainSingleDua key={index} index={index} dua={dua} />
        ))}
      </div>
    </>
  );
};

export default SectionTitle;
