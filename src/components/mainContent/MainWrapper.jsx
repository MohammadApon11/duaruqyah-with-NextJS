import React from "react";
import Header from "../header/Header";
import Categories from "../categories/Categories";

const MainWrapper = () => {
  return (
    <div className="w-[100%] flex flex-col justify-between gap-[27px]">
      <Header />
      <div className="flex justify-between gap-[33px]">
        {/* category section */}
        <div className="bg-white fixed w-[350px] overflow-hidden h-[80vh] rounded-[10px] overflow-y-auto border-[0.5px] border-[#E2E2E2]">
          <Categories />
        </div>
        {/* dua show section */}
        <div className="bg-white w-[55%] h-[100vh] overflow-y-auto">hey</div>
        {/* setting */}
        <div className="bg-white w-[17%] h-[80vh] rounded-lg overflow-y-auto border-[0.5px] border-[#E2E2E2]">
          Settings
        </div>
      </div>
    </div>
  );
};

export default MainWrapper;
