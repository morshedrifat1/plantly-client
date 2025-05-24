import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdPhoneInTalk } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="bg-[#fafcff] dark:bg-[#0b1123]">
      <footer className="footer sm:footer-horizontal  text-base-content pt-10 px-5 max-w-[1420px] mx-auto rounded-lg">
        <aside className="w-80 md:w-90">
          <img className="w-40" src={logo} alt="" />
          <p className="leading-7 mt-2 text-base font-normal">
            Plantly is a modern platform connecting plant lovers, offering
            expert gardening tips, tools, and a thriving green community.
          </p>
        </aside>
        <nav className="space-y-.5">
          <h6 className="text-lg font-bold text-gray-900 dark:text-white">
            Gardening
          </h6>
          <Link className="link link-hover text-base">Resources</Link>
          <Link className="link link-hover text-base">About Us</Link>
          <Link className="link link-hover text-base">Contact</Link>
          <Link className="link link-hover text-base">Shop</Link>
        </nav>
        <nav className="space-y-.5">
          <h6 className="text-lg font-bold text-gray-900 dark:text-white">Legal</h6>
          <Link className="link link-hover text-base">Terms of Service</Link>
          <Link className="link link-hover text-base">Privacy policy</Link>
          <Link className="link link-hover text-base">Cookie policy</Link>
        </nav>
        <nav>
          <h6 className="text-lg font-bold text-gray-900 dark:text-white">Contact Us</h6>
          <div className="space-y-3">
            <p className="flex items-center gap-2 text-base ">
              <IoIosMail size={22} />
              hello@plantly.com
            </p>
            <p className="flex items-center gap-2 text-base ">
              <MdPhoneInTalk size={22} />
              01234567890
            </p>
            <p className="flex items-center gap-2 text-base ">
              <FiMapPin size={22} />
              Dhaka,Bangladesh
            </p>
          </div>
          <div className="flex gap-3 mt-3">
            <Link to={"https://facebook.com"} target="_blank">
              <FaFacebook size={24} />
            </Link>
            <Link to={"https://x.com/"} target="_blank">
              <BsTwitterX size={24} />
            </Link>
            <Link to={"https://www.github.com/"} target="_blank">
              <FaGithub size={24} />
            </Link>
          </div>
        </nav>
      </footer>
      <div className="bg-[#fafcff] dark:bg-[#0b1123]">
        <div className=" text-base-content pt-10 px-5 pb-5 max-w-[1420px] mx-auto rounded-lg">
          <hr className="text-gray-300" />
          <p className="text-center pt-5">
            Copyright © {new Date().getFullYear()} - All right reserved by
            Plantly Ltd
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
