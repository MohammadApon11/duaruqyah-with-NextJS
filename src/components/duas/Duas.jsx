import React from "react";

const Duas = ({ dua, isOpen }) => {
  const { dua_name_en } = dua;
  return (
    <>
      <div className="mt-2 cursor-pointer">
        <div className="flex flex-row ">
          <img src="/duaarrow.svg" className="-translate-y-1 mr-2" alt="dua" />
          <p className="my-3 text-left w-[95%] text-[.8125rem]">
            {dua_name_en}
          </p>
        </div>
      </div>
    </>
  );
};

export default Duas;
