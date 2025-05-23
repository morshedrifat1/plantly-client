import React from "react";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { useLoaderData } from "react-router";

const ExploreGardeners = () => {
  const gardeners = useLoaderData();
  return (
    <div className="dark:bg-[#0f172a]">
      <div className="max-w-[1420px] mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
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
              <div className="flex justify-between px-4 mt-3">
                <h1 className="font-text text-lg font-semibold">
                  {gardener.name}
                </h1>
                <div className="flex items-center gap-1 text-base font-semibold bg-[#e9ebef] dark:bg-[#212635] px-2 py-1  rounded-xl">
                  <MdOutlineTipsAndUpdates size={20} />
                  <span>{gardener.sharedTips}</span>
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
