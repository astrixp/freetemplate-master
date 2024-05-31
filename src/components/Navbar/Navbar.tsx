"use client"
import React, { useState } from "react";
// import Logo from "../../assets/Logo.png";
import NavLinks from "./NavLinks";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-[#f0f9fe] border-b-2">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <Image src="/logo.png" width={100} height={100} alt="logo" className="md:cursor-pointer" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <FontAwesomeIcon icon={open ? faTimes : faBars} />
          </div>
        </div>
        <ul className="md:flex hidden capitalize items-center gap-8 font-[Poppins]">
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className="md:block hidden">
        <button type="button" className="text-white bg-textColor rounded-md py-3 px-5">Login</button>

        </div>
        {/* Mobile nav */}
        <ul
          className={`md:hidden bg-white z-10 fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4 duration-500 ${open ? "left-0" : "left-[-100%]"
            }`}
        >
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <div className="py-5">
            <button type="button" className="text-white bg-textColor rounded-md py-3 px-5">Login</button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
