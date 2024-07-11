"use client";
import Link from "next/link";
import { menuItems } from "@/dummyData/data";
import { Site } from "@/helpers/Site";
import Image from "next/image";
import { CgMenuRight } from "react-icons/cg";
import Button from "./Button";
import { MdClose } from "react-icons/md";
import { usePathname } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";

const Header = () => {
  const pathname = usePathname();
  const { toggle, open } = useTheme();

  return (
    <header className="bg-light shadow-md">
      <div className="flex items-center justify-between sm:h-28 h-24 page-width">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Link href={Site?.url}>
              {Site?.logo ? (
                <Image
                  src={Site?.logo}
                  alt={`${Site?.name} + 'Logo' `}
                  height={70}
                  width={190}
                  className="object-contain max-sm:w-40 max-sm:h-auto"
                />
              ) : (
                <span className="text-5xl max-sm:text-2xl font-bold text-primary">
                  {Site?.name}
                </span>
              )}
            </Link>
          </div>
        </div>
        <nav className="flex-1 hidden xl:flex justify-center space-x-6 ">
          <ul className="flex justify-center items-center gap-14">
            {menuItems?.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className={`${
                    pathname == item?.link ? "text-primary !font-bold" : ""
                  } font-semibold text-xl hover:text-primary`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center justify-between  sm:gap-4 gap-2  ">
          <Button
            title="Get Started"
            classes="!capitalize bg-gradient-to-b from-primary to-primarylight !text-[22px] !px-12 max-sm:!px-4 max-sm:!py-2 max-sm:!text-xl max-sm:hidden"
          />
          <CgMenuRight
            className="icon icon-menu !h-10 !w-10 xl:hidden flex cursor-pointer"
            onClick={toggle}
          />
        </div>

        <nav
          className={`fixed z-50 inset-0 h-full w-full bg-white transform transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          } xl:hidden`}
        >
          <ul className="flex items-center justify-center gap-10 flex-col p-5 h-full">
            {menuItems?.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className={`${
                    pathname == item?.link ? "text-primary !font-bold" : ""
                  } font-semibold text-xl hover:text-primary`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <button className="absolute right-4 top-4" onClick={toggle}>
            <MdClose className="icon icon-close" />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
