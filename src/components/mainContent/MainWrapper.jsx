import React from "react";
import Header from "../header/Header";
import Categories from "../categories/Categories";
import Dua from "../duas/Dua";

const MainWrapper = () => {
  return (
    <div className="w-[100%] flex flex-col justify-between gap-[27px]">
      <Header />
      <div className="flex gap-[33px]">
        <div className="bg-white w-[350px] overflow-hidden h-[80vh] rounded-[10px] overflow-y-auto border-[0.5px] border-[#E2E2E2]">
          <Categories />
        </div>

        <div className="w-[890px] h-[100vh] overflow-y-auto">
          <Dua />
        </div>

        <div className="bg-white w-[17%] h-[80vh] rounded-lg overflow-y-auto border-[0.5px] border-[#E2E2E2]">
          Settings
        </div>
      </div>
    </div>
  );
};

export default MainWrapper;
