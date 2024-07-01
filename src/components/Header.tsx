"use client";
import Link from "next/link";
import { menuItems } from "@/dummyData/data";
import { Site } from "@/helpers/Site";
import Image from "next/image";
const Header = () => {
  // console.log(menuItems);
  return (
    <header className="flex items-center justify-between p-4 bg-light shadow-md h-[120px]">
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
      <nav className="flex-1 hidden md:flex justify-center space-x-6">
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
      <div>
        <Link
          href=""
          className="font-semibold text-white py-3 text-2xl leading-none px-8 bg-gradient-to-b from-primary to-primarylight rounded-full hover:bg-primarylight transition-all delay-75"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
};

export default Header;
