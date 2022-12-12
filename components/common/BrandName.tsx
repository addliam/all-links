import React from "react";
import Link from "next/link";
import Image from "next/image";
const BrandName = () => {
  return (
    <div className="px-1 py-1">
      <Link href="/">
        <div className="flex flex-row gap-1">
          <div>
            <Image
              src="/assets/icons/drake-icon.svg"
              width="24"
              height="24"
              alt="main brand svg icon"
            ></Image>
          </div>
          <span className="text-[18px] font-medium">AllLinks</span>
        </div>
      </Link>
    </div>
  );
};

export default BrandName;
