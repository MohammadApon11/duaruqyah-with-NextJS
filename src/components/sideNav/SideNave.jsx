import React from "react";
import "./SideNav.css";
import Image from "next/image";
import img1 from "../../../public/sideNav/img1.png";
import img2 from "../../../public/sideNav/img2.png";
import img3 from "../../../public/sideNav/img3.png";
import img4 from "../../../public/sideNav/img4.png";
import img5 from "../../../public/sideNav/img5.png";
import img6 from "../../../public/sideNav/img6.png";
import img7 from "../../../public/sideNav/img7.png";
import img8 from "../../../public/sideNav/img8.png";
import img9 from "../../../public/sideNav/img9.png";

const SideNave = () => {
  const images = [img2, img3, img4, img5, img5, img6, img7, img8];
  return (
    <>
      <div className="w-[100px] flex flex-col justify-between bg-white rounded-3xl px-4 lg:h-[calc(93vh)] overflow-y-auto">
        <Image
          className="pt-[31px]"
          src={img1}
          alt="Dua_Logo"
          width={71}
          height={71}
        />
        <div className="flex flex-col items-center gap-[27px]">
          {images.map((img, i) => (
            <div key={i} className="p-[9px] rounded-full bg-[#E8F0F5]">
              <Image src={img} alt="Your alt text" width={20} height={20} />
            </div>
          ))}
        </div>
        <Image
          className="pb-[31px]"
          src={img9}
          alt="Support"
          width={150}
          height={150}
        />
      </div>
    </>
  );
};

export default SideNave;
