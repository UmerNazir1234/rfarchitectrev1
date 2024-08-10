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
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
const Header = () => {
  const pathname = usePathname();
  const { toggle, open } = useTheme();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="bg-light  drop-shadow-lg relative z-50">
      <div className="flex items-center justify-between sm:h-28 h-24 page-width">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Link href={"/"}>
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
              <li key={item?.id}>
                {item?.links && item?.links?.length > 0 ? (
                  <div className="relative">
                    <button
                      className={`flex items-center justify-center gap-1 ${
                        pathname == "" ? "text-primary !font-bold" : ""
                      } font-semibold text-xl hover:text-primary`}
                      onClick={handleDropdownToggle}
                    >
                      <span className="">{item?.name}</span>
                      <span
                        className={`transform transition-transform duration-300 ${
                          dropdownOpen ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        <MdKeyboardArrowDown />
                      </span>
                    </button>
                    {dropdownOpen && (
                      <div
                        className={`fixed  z-50 inset-3 top-32 h-fit min text-black dropShadow rounded-xl p-8 border-white border transition-all duration-300 ease-in-out transform ${
                          dropdownOpen
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-5"
                        }`}
                      >
                        <div className="flex items-center justify-center my-4 border-b-2 border-white pb-10">
                          <Button
                            title="Services we offer"
                            classes="bg-transparent text-white"
                            enableIcons={true}
                            iconStyle="stroke-white"
                          />
                        </div>

                        <ul className="flex justify-between items-start gap-x-4 gap-y-10 flex-wrap pt-9 pb-12">
                          {item?.links.map((item) => {
                            return (
                              <li className="basis-[32%] group" key={item?.id}>
                                <div className="flex justify-between min-h-36 p-4 gap-2 group-hover:bg-white group-hover:shadow group-hover:rounded-lg">
                                  <div className="flex items-start justify-start gap-3">
                                    <div className="bg-white group-hover:bg-secondary p-2 rounded min-h-12 flex items-center justify-center">
                                      <Image
                                        src={`${item?.icon}`}
                                        alt={item?.title + "icon"}
                                        loading="lazy"
                                        width={30}
                                        height={30}
                                      />
                                    </div>
                                    <div>
                                      <h5 className="group-hover:text-primary">
                                        {item?.title}
                                      </h5>
                                      <p className="max-w-sm mt-1">
                                        {item?.description}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.link}
                    className={`${
                      pathname == item?.link ? "text-primary !font-bold" : ""
                    } font-semibold text-xl hover:text-primary`}
                  >
                    {item.name}
                  </Link>
                )}
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
          className={`fixed z-50 inset-0  bg-white transform transition-transform duration-300  ${
            open ? "translate-x-0" : "-translate-x-full"
          } xl:hidden`}
        >
          <ul className="flex items-center justify-center gap-10 flex-col p-5 h-dvh bg-white ">
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
