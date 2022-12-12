import React from "react";
import Image from "next/image";
const HomeButton = () => {
  return (
    <div className="flex flex-row items-center gap-2 px-3 py-2 bg-[#D3E5F9] hover:bg-[#c6ddf6] w-fit h-fit cursor-pointer rounded-[.7em]">
      <Image
        src="/assets/icons/home-svgrepo-com.svg"
        width="30"
        height="30"
        alt="menu svg icon"
      ></Image>
      <span className="text-lightBlue font-medium">Bio</span>
    </div>
  );
};

export default HomeButton;
