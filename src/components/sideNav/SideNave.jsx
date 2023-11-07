import React from "react";
import "./SideNav.css";

const SideNave = () => {
  return (
    <>
      <div className="row-span-full hidden xl:block xl:z-[-1] 2xl:block 2xl:z-[-1] 3xl:block 3xl:z-[-16]">
        <div
          id="left-bar"
          className="w-[100px] flex flex-col gap-y-5 fixed overflow-hidden"
        >
          <div className="bg-white rounded-3xl px-4 dark:bg-dark-bg lg:h-[calc(93vh)] xl:h-[94vh] 2xl:h-[93vh] 3xl:h-[93vh] scrl-left pb-16">
            <div className="pt-7 mb-10 xl:mb-16 2xl:mb-16 3xl:mb-24 container cursor-pointer">
              <img src="/sideNav/img1.png" alt="" />
            </div>
            <div className="justify-center items-center cursor-pointer my-2 flex flex-row w-full rounded-lg group">
              <div className="w-1 rounded-tl-lg rounded-bl-lg "></div>
              <div className="p-2 flex flex-row justify-center items-center">
                <div className="bg-icon-bg dark:bg-dark-bg-dark bg-[#ebeef2] flex p-2 rounded-full items-center h-10 w-10 justify-center">
                  <img src="/sideNav/img2.png" alt="" />
                </div>
              </div>
            </div>
            <div className="justify-center items-center  cursor-pointer my-2 flex flex-row w-full rounded-lg group">
              <div className="w-1 rounded-tl-lg rounded-bl-lg "></div>
              <div className="p-2 flex flex-row justify-center items-center">
                <div className=" bg-icon-bg dark:bg-dark-bg-dark bg-[#ebeef2] flex p-2 rounded-full items-center h-10 w-10 justify-center">
                  <img src="/sideNav/img3.png" alt="" />
                </div>
              </div>
            </div>
            <div className="justify-center items-center  cursor-pointer my-2 flex flex-row w-full rounded-lg group">
              <div className="w-1 rounded-tl-lg rounded-bl-lg "></div>
              <div className="p-2 flex flex-row justify-center  items-center">
                <div className=" bg-icon-bg dark:bg-dark-bg-dark bg-[#ebeef2] flex p-2 rounded-full items-center h-10 w-10 justify-center">
                  <img src="/sideNav/img4.png" alt="" />
                </div>
              </div>
            </div>
            <div className="justify-center items-center  cursor-pointer my-2 flex flex-row w-full rounded-lg group">
              <div className="w-1 rounded-tl-lg rounded-bl-lg "></div>
              <div className="p-2 flex flex-row justify-center items-center">
                <div className=" bg-icon-bg dark:bg-dark-bg-dark bg-[#ebeef2] flex p-2 rounded-full items-center h-10 w-10 justify-center">
                  <img src="/sideNav/img5.png" alt="" />
                </div>
              </div>
            </div>
            <div className="justify-center items-center  cursor-pointer my-2 flex flex-row w-full rounded-lg group">
              <div className="w-1 rounded-tl-lg rounded-bl-lg "></div>
              <div className="p-2 flex flex-row justify-center items-center">
                <div className=" bg-icon-bg dark:bg-dark-bg-dark bg-[#ebeef2] flex p-2 rounded-full items-center h-10 w-10 justify-center">
                  <img src="/sideNav/img6.png" alt="" />
                </div>
              </div>
            </div>
            <div className="justify-center items-center  cursor-pointer my-2 flex flex-row w-full rounded-lg group">
              <div className="w-1 rounded-tl-lg rounded-bl-lg "></div>
              <div className="p-2 flex flex-row justify-center items-center">
                <div className=" bg-icon-bg dark:bg-dark-bg-dark bg-[#ebeef2] flex p-2 rounded-full items-center h-10 w-10 justify-center">
                  <img src="/sideNav/img7.png" alt="" />
                </div>
              </div>
            </div>
            <div>
              <div className="pt-6 xl:pt-16 2xl:pt-16 3xl:pt-24 pb-2 text-center">
                <button className="w-13 h-13 bg-primary drop-shadow-primary rounded-lg text-white text-sm">
                  <div className="flex justify-center items-center">
                    <p className="hidden">I want To support</p>
                    <img src="/sideNav/img9.png" alt="" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNave;
