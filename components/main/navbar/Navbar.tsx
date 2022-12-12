import React from "react";
import HomeButton from "./HomeButton";
import BrandName from "../../common/BrandName";
import Profile from "./Profile";
import LogoutButton from "./LogoutButton";
const Navbar = () => {
  return (
    <section className="bg-white-300 md:w-[180px] h-screen py-[36px] flex flex-col justify-between box_shadowed">
      <div className="flex flex-col justify-center items-center">
        <BrandName />
        <div className="mt-[40px]">
          <HomeButton />
        </div>
      </div>
      <div className="flex flex-col gap-[48px]">
        <Profile />
        <div className="w-full flex justify-center">
          <LogoutButton />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
