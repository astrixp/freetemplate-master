"use client"
import React, { useState } from "react";
import { links } from "./Mylinks";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-2 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                if (link.submenu) {
                  heading !== link.name ? setHeading(link.name) : setHeading("");
                  setSubHeading("");
                }
              }}
            >
              <Link href={link.link || "#"}>{link.name}</Link>
              {link.submenu && (
                <>
                  <span className="text-sm md:hidden inline">
                    <FontAwesomeIcon
                      icon={heading === link.name ? faChevronUp : faChevronDown}
                    />
                  </span>
                  <span className="text-sm md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                    <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                </>
              )}
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute z-50 top-10 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                  </div>
                  <div className="bg-white p-5 grid grid-cols-3 gap-10">
                    {link?.sublinks?.map((mysublinks, index) => (
                      <div key={index}>
                        <h1 className="text-lg font-semibold">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink, index) => (
                          <li className="text-sm text-gray-600 my-2.5" key={index}>
                            <Link
                              href={slink.link}
                              className="hover:text-primary"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          {link.submenu && (
            <div className={`${heading === link.name ? "md:hidden" : "hidden"} z-50`}>
              {/* sublinks */}
              {link?.sublinks?.map((slinks, index) => (
                <div key={index}>
                  <div>
                    <h1
                      onClick={() =>
                        subHeading !== slinks.Head
                          ? setSubHeading(slinks.Head)
                          : setSubHeading("")
                      }
                      className="py-4 pl-7 font-semibold flex justify-between items-center md:pr-0 pr-5"
                    >
                      {slinks.Head}
                      <span className="text-xl md:mt-1 md:ml-2 inline">
                        <FontAwesomeIcon
                          icon={subHeading === slinks.Head ? faChevronUp : faChevronDown}
                        />
                      </span>
                    </h1>
                    <div
                      className={`${subHeading === slinks.Head ? "md:hidden" : "hidden"}`}
                    >
                      {slinks.sublink.map((slink, index) => (
                        <li className="py-3 pl-14" key={index}>
                          <Link href={slink.link}>{slink.name}</Link>
                        </li>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default NavLinks;
