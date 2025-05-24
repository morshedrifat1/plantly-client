import React from "react";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import errorImg from "../assets/404.gif";
import { IoIosArrowRoundBack } from "react-icons/io";

const ErrorPage = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Plantly | Error</title>
      </Helmet>
      <div className="flex h-screen flex-col justify-center items-center">
        <img src={errorImg} alt="" />
          <Link
            className="bg-gradient-to-r from-[#33622a] to-[#94b834] text-white shadow-none py-1 rounded-lg justify-center mx-auto flex items-center w-[180px]"
            to={"/"}
          >
            <IoIosArrowRoundBack className="mt-1" size={30} />
            Back to home
          </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
