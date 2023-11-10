import { useCatId } from "@/provider/CatIdProvider";
import React from "react";

const DuaName = ({ dua }) => {
  const { dua_name_en, dua_id } = dua;
  const { duaNameEn, setDuaNameEn } = useCatId();
  const isOpen = dua_name_en === duaNameEn;
  return (
    <>
      <div className="mt-2 cursor-pointer">
        <a onClick={() => setDuaNameEn(dua_name_en)} href={`#${dua_id}`}>
          <div className="flex flex-row ">
            <img
              src="/duaarrow.svg"
              className="-translate-y-1 mr-2"
              alt="dua"
            />

            <p
              className={`my-3 text-left w-[95%] text-[.8125rem] ${
                isOpen && "text-[#1FA45B]"
              }`}
            >
              {dua_name_en}
            </p>
          </div>
        </a>
      </div>
    </>
  );
};

export default DuaName;
