import React from "react";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import { IoIosArrowRoundBack } from "react-icons/io";
import error from "../assets/eror.json";
import Lottie from "lottie-react";
const ErrorPage = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Plantly | Error</title>
      </Helmet>
      <div className="flex h-screen flex-col justify-center items-center">
        <div className="w-80 sm:w-150">
          <Lottie animationData={error} />
        </div>
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
