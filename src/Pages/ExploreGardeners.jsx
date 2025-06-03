import React from "react";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { Link, useLoaderData } from "react-router";
import banner from "../assets/titleBanner.webp";
import { IoIosArrowRoundBack, IoIosMale } from "react-icons/io";
import { Helmet } from "react-helmet-async";

const ExploreGardeners = () => {
  const gardeners = useLoaderData();
  return (
    <div className="dark:bg-[#0f172a]">
      <Helmet>
        <title>Plantly | Gardeners</title>
      </Helmet>
      <div className="max-w-[1420px] mx-auto pt-10 pb-20">
        <div className="px-5">
          <div
            className="relative w-full h-70 bg-cover bg-center rounded-lg"
            style={{
              backgroundImage: `url(${banner})`,
            }}
          >
            {/* Overlay */}
            <div className="absolute h-70 inset-0 bg-black/50 backdrop-blur-[2px] flex items-center justify-center rounded-lg">
              {/* Text */}
              <div className="text-center text-white px-4 max-w-120 space-y-5">
                <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                  Explore Gardeners
                </h1>
                <p className="text-base font-text font-normal leading-8 mt-4">
                  Passionate gardeners from around the world share their tips
                  and green journeys to help you grow better every day.
                </p>
                <Link
                  className="bg-gradient-to-r from-[#33622a] to-[#94b834] text-white shadow-none py-1 rounded-lg justify-center mx-auto flex items-center w-[180px]"
                  to={"/"}
                >
                  <IoIosArrowRoundBack className="mt-1" size={30} />
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 px-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
          {gardeners.map((gardener) => (
            <div className="cursor-pointer ">
              <div className="shadow rounded-lg border-2 border-base-200 relative pb-5 dark:bg-[#0b1120]">
                <div className="p-3">
                  <img
                    className="rounded-lg h-[200px] w-full object-cover"
                    src={gardener.image}
                    alt=""
                  />
                </div>
                <div className="mt-3">
                  <h1 className="font-text text-lg font-semibold px-4">
                    {gardener.name}
                  </h1>
                  <div className="flex gap-3 px-4 mt-2">
                    <div className="flex items-center gap-1 text-base font-semibold bg-[#e9ebef] dark:bg-[#212635] px-2 py-1  rounded-xl">
                    <span>{gardener.gender}</span>
                  </div>
                  <div className="flex items-center gap-1 text-base font-semibold bg-[#e9ebef] dark:bg-[#212635] px-2 py-1  rounded-xl">
                    Age:
                    <span>{gardener.age}</span>
                  </div>
                  <div className="flex items-center gap-1 text-base font-semibold bg-[#e9ebef] dark:bg-[#212635] px-2 py-1  rounded-xl">
                    Tips:
                    <span>{gardener.sharedTips}</span>
                  </div>
                  </div>
                </div>
                <div className="px-4 mt-3">
                  <p>{gardener.experiences}</p>
                </div>
                <span className="bg-gradient-to-r from-[#96bb35] via-[#437631] to-[#2e5a28] text-white px-3 py-1 rounded-full text-xs font-bold uppercase absolute top-5 right-5 cursor-pointer">
                  {gardener.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreGardeners;
