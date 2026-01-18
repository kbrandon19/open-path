import React from "react";
import Image from "next/image";
import Link from "next/link";

function header() {
  return (
    <div className=" w-full h-auto ">
      <div className=" fixed w-full top-0 z-10 py-4 px-38 text-black bg-white">
        {/* Container */}
        <div className="flex h-auto w-full flex-row justify-between  items-center">
          {/* Logo */}

          <div className="">
            <div className=" hidden md:block">
              <Image
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1768502260/Open%20Path/Logo2_v86wol.png`}
                alt="Logo"
                width={175}
                height={59}
              ></Image>
            </div>

            <div className=" md:hidden">
              <Image
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1768500804/Open%20Path/Logo-Symbol_byqms7.png`}
                alt="Logo"
                width={125}
                height={0}
                priority
              ></Image>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex w-auto h-auto flex-row gap-10 justify-between">
            {/* Mobile Menu */}
            <div className="flex md:hidden px-4 py-2 w-auto h-auto rounded-full flex-row items-center gap-2">
              Menu <div className="w-6 h-6 rounded-full bg-[#515151]"></div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex w-auto h-auto flex-row gap-4 items-center  text-md">
              <div>
                <Link href="/providers">Find A Provider</Link>
              </div>
              <div>About</div>
              <div>Contact</div>
              <div>FAQ</div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default header;
