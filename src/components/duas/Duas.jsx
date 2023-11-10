import React from "react";

const Duas = ({ dua, cat_id }) => {
  const { dua_name_en,dua_id } = dua;
  return (
    <>
      <div className="mt-2 cursor-pointer">
        <div className="flex flex-row ">
          <img src="/duaarrow.svg" className="-translate-y-1 mr-2" alt="dua" />
          <a href={`#${dua_id}`}>
            <p className="my-3 text-left w-[95%] text-[.8125rem]">
              {dua_name_en}
            </p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Duas;
