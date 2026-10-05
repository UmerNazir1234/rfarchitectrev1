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
import { useEffect, useState } from "react";
import {
  FiArrowRight,
  FiBookOpen,
  FiBriefcase,
  FiChevronDown,
  FiGrid,
  FiHome,
  FiInfo,
  FiMail,
  FiPackage,
} from "react-icons/fi";

const getMobileNavIcon = (name: string) => {
  switch (name) {
    case "Home":
      return <FiHome />;
    case "Solutions":
      return <FiGrid />;
    case "Products":
      return <FiPackage />;
    case "Work":
      return <FiBriefcase />;
    case "Industries":
      return <FiGrid />;
    case "Insights":
      return <FiBookOpen />;
    case "About":
      return <FiInfo />;
    case "Contact":
      return <FiMail />;
    default:
      return <FiMail />;
  }
};

const Header = () => {
  const pathname = usePathname();
  const { toggle, open } = useTheme();
  const [activeDropdownId, setActiveDropdownId] = useState<number | null>(null);
  const [mobileExpandedId, setMobileExpandedId] = useState<number | null>(null);
  const handleToggle = () => {
    toggle();
  };
  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      body.style.overflow = open ? "hidden" : "";
    }
  }, [open]);

  return (
    <>
      <header className="bg-light drop-shadow-lg relative z-50">
        <div className="flex items-center justify-between gap-5 sm:h-28 h-24 page-width">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Link href={"/"}>
                {Site?.logo ? (
                  <Image
                    src={Site?.logo}
                    alt={`${Site?.name} + 'Offical Logo' `}
                    height={90}
                    width={250}
                    className="w-[220px] object-contain max-sm:w-40 max-sm:h-auto 2xl:w-[250px]"
                  />
                ) : (
                  <span className="text-5xl max-sm:text-2xl font-bold text-primary">
                    {Site?.name}
                  </span>
                )}
              </Link>
            </div>
          </div>
          <nav className="hidden flex-1 justify-end xl:flex" aria-label="Main navigation">
            <ul className="flex items-center gap-5 2xl:gap-7">
              {menuItems?.filter((item) => item.name !== "Contact").map((item) => (
                <li key={item?.id}>
                  {item?.links && item?.links?.length > 0 ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveDropdownId(item.id)}
                      onMouseLeave={() => setActiveDropdownId(null)}
                    >
                      <button
                        className={`flex items-center justify-center gap-1 ${
                          pathname === item.link ||
                          item.links?.some((link) => pathname === link.link)
                            ? "text-primary !font-bold"
                            : ""
                        } font-semibold text-lg whitespace-nowrap hover:text-primary`}
                        onClick={() => setActiveDropdownId(item.id)}
                      >
                        <span className="">{item?.name}</span>
                        <span
                          className={`transform transition-transform duration-300 ${
                            activeDropdownId === item.id ? "rotate-180" : "rotate-0"
                          }`}
                        >
                          <MdKeyboardArrowDown aria-hidden="true" />
                        </span>
                      </button>
                      {activeDropdownId === item.id && (
                        <div
                          className={`fixed !z-50 inset-3 header-bg-custom top-[70px] h-fit min text-white rounded-xl  border-white border transition-all duration-300 ease-in-out transform ${
                            activeDropdownId === item.id
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 -translate-y-5"
                          }`}
                        >
                          <div className="p-8 relative">
                            <div className="absolute w-full h-full inset-0 z-10 custom-backdrop">
                              <span></span>
                            </div>
                            <div className="header-inside-color relative z-20">
                              <div className="flex items-center justify-center my-4 border-b-2 border-white pb-10 ">
                                <Button
                                  title={
                                    item.name === "Work"
                                      ? "Explore case studies"
                                      : `Explore ${item.name.toLowerCase()}`
                                  }
                                  href={item.link}
                                  classes="bg-transparent text-white"
                                  enableIcons={true}
                                  iconStyle="stroke-white"
                                />
                              </div>
                              <ul className="flex justify-between items-start gap-x-4 gap-y-10 flex-wrap pt-9 pb-12">
                                {item?.links.map((item) => {
                                  return (
                                    <li
                                      className="basis-[32%] group"
                                      key={item?.id}
                                    >
                                      <div className="flex items-center justify-center min-h-36 p-4 gap-2 group-hover:bg-white group-hover:shadow group-hover:rounded-lg">
                                        <Link
                                          href={item?.link}
                                          onClick={() => setActiveDropdownId(null)}
                                          className="block w-full"
                                        >
                                          <div className="flex items-start justify-start gap-3">
                                            <div
                                              className={`p-2 rounded  w-16 h-16 flex items-center justify-center `}
                                              style={{
                                                backgroundColor: `${
                                                  item?.iconBg || ""
                                                }`,
                                              }}
                                            >
                                              <span aria-hidden="true">{item?.icon}</span>
                                            </div>
                                            <div>
                                              <h5 className="group-hover:text-primary">
                                                {item?.title}
                                              </h5>
                                              <p className="max-w-sm mt-1 group-hover:text-primary">
                                                {item?.description}
                                              </p>
                                            </div>
                                          </div>
                                        </Link>
                                      </div>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.link}
                      className={`${
                        pathname == item?.link ? "text-primary !font-bold" : ""
                      } font-semibold text-lg whitespace-nowrap hover:text-primary`}
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
              title="Discuss Your Project"
              classes="!normal-case bg-gradient-to-b from-primary to-primarylight !text-xl !px-8 !py-4 whitespace-nowrap max-xl:hidden"
              href="/contact-us"
            />
            <button
              className=""
              type="button"
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => handleToggle()}
            >
              <CgMenuRight aria-hidden="true" className="icon icon-menu !h-10 !w-10 xl:hidden flex cursor-pointer" />
            </button>
          </div>
        </div>
      </header>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`fixed z-100 inset-0  bg-white transform transition-transform w-full h-full block duration-300  ${
          open ? "translate-x-0" : "-translate-x-full"
        } xl:hidden`}
      >
        <div className="flex h-dvh flex-col overflow-hidden bg-light">
          <div className="flex items-center justify-between border-b border-primary/10 px-5 py-4 sm:px-8">
            <Link href="/" onClick={handleToggle} aria-label="RF Technologies home">
              {Site?.logo ? (
                <Image
                  src={Site.logo}
                  alt={`${Site.name} logo`}
                  width={150}
                  height={56}
                  className="h-12 w-auto object-contain"
                />
              ) : (
                <span className="text-xl font-bold text-primary">{Site?.name}</span>
              )}
            </Link>
            <button
              type="button"
              aria-label="Close navigation"
              onClick={handleToggle}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/15 text-primary transition-colors hover:bg-primary/5 active:bg-primary/10"
            >
              <MdClose aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-5 sm:px-8 sm:py-8">
            <ul className="mx-auto flex max-w-xl flex-col gap-2">
              {menuItems?.map((item) => {
                const hasLinks = Boolean(item.links?.length);
                const isExpanded = mobileExpandedId === item.id;
                const isActive =
                  pathname === item.link ||
                  Boolean(item.links?.some((link) => pathname === link.link));
                const rowClasses = `flex min-h-14 w-full items-center gap-4 rounded-xl px-4 py-3 text-left text-lg font-semibold transition-colors active:bg-primary/10 ${
                  isActive
                    ? "bg-primary/5 text-primary"
                    : "text-primary hover:bg-primary/5"
                }`;

                return (
                  <li key={item.name}>
                    {hasLinks ? (
                      <div className="overflow-hidden rounded-xl border border-primary/10 bg-white shadow-sm">
                        <button
                          type="button"
                          aria-expanded={isExpanded}
                          aria-controls={`mobile-nav-group-${item.id}`}
                          onClick={() =>
                            setMobileExpandedId(isExpanded ? null : item.id)
                          }
                          className={rowClasses}
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary/15 text-primary">
                            <span aria-hidden="true">{getMobileNavIcon(item.name)}</span>
                          </span>
                          <span className="flex-1">{item.name}</span>
                          <FiChevronDown
                            aria-hidden="true"
                            className={`h-5 w-5 shrink-0 text-secondary transition-transform duration-300 ${
                              isExpanded ? "rotate-180" : "rotate-0"
                            }`}
                          />
                        </button>
                        <div
                          id={`mobile-nav-group-${item.id}`}
                          className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                            isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                          }`}
                        >
                          <div className="min-h-0 overflow-hidden">
                            <ul className="mx-4 mb-3 ml-8 border-l border-secondary/50 pl-3">
                              {item.links?.map((link) => (
                                <li key={link.id}>
                                  <Link
                                    href={link.link}
                                    onClick={handleToggle}
                                    aria-current={
                                      pathname === link.link ? "page" : undefined
                                    }
                                    className={`flex min-h-12 items-center gap-3 rounded-lg px-3 py-2 text-base transition-colors active:bg-primary/10 ${
                                      pathname === link.link
                                        ? "bg-primary/5 font-semibold text-primary"
                                        : "text-primary/80 hover:bg-primary/5 hover:text-primary"
                                    }`}
                                  >
                                    <FiArrowRight
                                      aria-hidden="true"
                                      className="h-4 w-4 shrink-0 text-secondary"
                                    />
                                    <span>{link.title}</span>
                                  </Link>
                                </li>
                              ))}
                              <li>
                                <Link
                                  href={item.link}
                                  onClick={handleToggle}
                                  aria-current={
                                    pathname === item.link ? "page" : undefined
                                  }
                                  className="flex min-h-12 items-center gap-3 rounded-lg px-3 py-2 text-base font-semibold text-primary transition-colors hover:bg-primary/5 active:bg-primary/10"
                                >
                                  <FiArrowRight
                                    aria-hidden="true"
                                    className="h-4 w-4 shrink-0 text-secondary"
                                  />
                                  <span>View all {item.name.toLowerCase()}</span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.link}
                        onClick={handleToggle}
                        aria-current={pathname === item.link ? "page" : undefined}
                        className={`${rowClasses} rounded-xl border border-transparent`}
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary/15 text-primary">
                          <span aria-hidden="true">{getMobileNavIcon(item.name)}</span>
                        </span>
                        <span className="flex-1">{item.name}</span>
                        {pathname === item.link && (
                          <span className="h-2 w-2 rounded-full bg-secondary" />
                        )}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="mx-auto mt-4 max-w-xl">
              <Button
                title="Discuss Your Project"
                href="/contact-us"
                classes="!capitalize bg-gradient-to-b from-primary to-primarylight !text-[22px] !px-12 max-sm:!px-4 max-sm:!py-2 max-sm:!text-xl w-full"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
