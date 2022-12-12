import React from "react";
import Image from "next/image";
const UserCard = () => {
  return (
    <div className="bg-white box_shadow flex flex-row h-[112px] w-[740px] items-center justify-between rounded-[1em] px-[24px] py-[24px]">
      <div className="flex gap-3">
        <div className="rounded-[50%] w-fit h-fit overflow-hidden">
          <Image
            src="/assets/images/avatar0.png"
            width="64"
            height="64"
            alt="avatar from people"
          ></Image>
        </div>
        <div>
          <p className="font-semibold text-[1.4em]">Leonidas Esteban</p>
          <span>alllinks.co/leosteban.com</span>
        </div>
      </div>
      <div className="self-end">
        <Image
          className="hover_scale cursor-pointer"
          src="/assets/icons/edit-2-svgrepo-com.svg"
          width="22"
          height="22"
          alt="edit svg icon"
        ></Image>
      </div>
    </div>
  );
};

export default UserCard;
