import React from "react";
import Image from "next/image";
const Profile = () => {
  return (
    <div className="flex flex-col items-center gap-[10px]">
      <div className="w-fit h-fit rounded-[50%] overflow-hidden">
        <Image
          src="/assets/images/avatar0.png"
          width="64"
          height="64"
          alt="avatar people"
        ></Image>
      </div>
      <p className="text-[16px] font-semibold">Leo Esteban</p>
    </div>
  );
};

export default Profile;
