"use client";
import Link from "next/link";
import { menuItems } from "@/dummyData/data";
import { Site } from "@/helpers/Site";
import Image from "next/image";
import { CgMenuRight } from "react-icons/cg";
const Header = () => {
  // console.log(menuItems);
  return (
    <header className=" bg-light shadow-md">
      <div className=" flex items-center justify-between h-[120px] page-width">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Link href={Site?.url}>
              {Site?.logo ? (
                <Image
                  src={Site?.logo}
                  alt={Site?.name}
                  height={70}
                  width={162}
                  className="object-contain"
                />
              ) : (
                <span className="text-xl font-bold">{Site?.name}</span>
              )}
            </Link>
          </div>
        </div>
        <nav className="flex-1 hidden xl:flex justify-center space-x-6">
          <ul className="flex justify-center items-center gap-14">
            {menuItems?.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className="font-semibold  text-primary text-xl"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center justify-between gap-4">
          <Link href="" className="btn btn--primary">
            Get Started
          </Link>
          <CgMenuRight className="icon icon-menu !h-8 !w-8" />
        </div>
      </div>
    </header>
  );
};

export default Header;
