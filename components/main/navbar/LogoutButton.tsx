import React from "react";
import Image from "next/image";
const LogoutButton = () => {
  return (
    <div className="flex gap-1 cursor-pointer text-[#717171] hover:text-[#505050]">
      <span className="text-[15px] font-medium">Logout</span>
      <div>
        <Image
          src="/assets/icons/logout-svgrepo-com.svg"
          width="22"
          height="22"
          alt="logout svg icon"
        ></Image>
      </div>
    </div>
  );
};

export default LogoutButton;
