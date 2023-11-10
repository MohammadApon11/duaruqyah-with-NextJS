"use client";
import Settings from "@/components/Settings/Settings";
import Header from "@/components/header/Header";
import MainWrapper from "@/components/mainContent/mainWrapper";
import SideNave from "@/components/sideNav/SideNave";
import { useState } from "react";

const Home = () => {
  const [isShow, setIsShow] = useState(false);

  const handleIsShow = () => {
    setIsShow(!isShow);
    console.log("clieck");
  };
  return (
    <div>
      <div className="px-10 pt-10 pb-0 grid grid-cols-12 fixed w-[100vw]">
        <div className="grid-col-1">
          <SideNave />
        </div>
        <div className="col-span-11">
          <MainWrapper handleIsShow={handleIsShow} />
        </div>
        <div
          id={`${isShow ? "setting_3" : "setting_2"}`}
          className={`w-[300px] h-[100vh] bg-white rounded-l-[32px] overflow-y-auto border-[0.5px] border-[rgb(226,226,226)]`}
        >
          <Settings handleIsShow={handleIsShow} />
        </div>
      </div>
    </div>
  );
};

export default Home;
