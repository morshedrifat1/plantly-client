import { useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router";
import LoadingSpiner from "../Components/LoadingSpiner";
import banner from "../assets/titleBanner.webp";
import React from "react";
import { Helmet } from "react-helmet-async";

const BrowseTips = () => {
  const [workLevel, setWorkLevel] = useState("");
  const [tips, setTips] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setLoader(true);
    let url = "https://plantly-server.vercel.app/tips";
    if (workLevel) {
      url = `https://plantly-server.vercel.app/tips?workLevel=${workLevel}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTips(data);
        setLoader(false);
      });
  }, [workLevel]);
  return (
    <>
      {loader ? (
        <LoadingSpiner></LoadingSpiner>
      ) : (
        <div className=" dark:bg-[#0f172a] sm:px-5">
          <Helmet>
            <title>Plantly | Tips</title>
          </Helmet>
          <div className="max-w-[1420px] mx-auto  pb-20">
            <div className="px-5 pt-10">
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
                      Browse Gardening Tips
                    </h1>
                    <p className="text-base font-text font-normal leading-8 mt-4">
                      Discover practical and eco-friendly tips to make your
                      gardening journey easier and more enjoyable.
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
            <div className="px-5">
              <div className="overflow-x-auto rounded-box border border-base-content/5 bg-[#fafcff] dark:bg-[#0b1120] mt-10">
              <div className="w-42 my-5 px-5">
                <form>
                  <select
                    onChange={(e) => setWorkLevel(e.target.value)}
                    required
                    className="border font-text text-gray-700 dark:text-gray-300 border-gray-300 py-3 px-3  rounded-lg focus:border-gray-500 focus:outline-none w-full text-sm font-normal dark:bg-[#1e293b] dark:border-0 mt-1"
                    defaultValue="Select Level"
                    name="workLevel"
                  >
                    <option disabled={true}>Select Level</option>
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                  </select>
                </form>
              </div>
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th className="dark:text-[#94a3b8] bg-[#f0f3f9] dark:bg-[#0b1123] text-gray-700 font-text whitespace-nowrap">
                      No
                    </th>
                    <th className="dark:text-[#94a3b8] bg-[#f0f3f9] dark:bg-[#0b1123] text-gray-700 font-text whitespace-nowrap">
                      Title
                    </th>
                    <th className="dark:text-[#94a3b8] bg-[#f0f3f9] dark:bg-[#0b1123] text-gray-700 font-text whitespace-nowrap">
                      Category
                    </th>
                    <th className="dark:text-[#94a3b8] bg-[#f0f3f9] dark:bg-[#0b1123] text-gray-700 font-text whitespace-nowrap">
                      Image
                    </th>
                    <th className="dark:text-[#94a3b8] bg-[#f0f3f9] dark:bg-[#0b1123] text-gray-700 font-text whitespace-nowrap">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {tips?.map((tip, index) => (
                    <tr key={index}>
                      <th className="dark:text-[#94a3b8] font-text whitespace-nowrap">
                        {index + 1}
                      </th>
                      <td className="dark:text-[#94a3b8] font-text whitespace-nowrap">
                        {tip.title}
                      </td>
                      <td className="dark:text-[#94a3b8] font-text whitespace-nowrap">
                        {tip.category}
                      </td>
                      <td className="dark:text-[#94a3b8] font-text whitespace-nowrap">
                        <img
                          className="w-10 h-10 object-cover rounded-lg"
                          src={tip.photos}
                          alt=""
                        />
                      </td>
                      <td className="whitespace-nowrap">
                        <Link to={`/tips/${tip._id}`}>
                          <button className="bg-gray-200/80 dark:bg-gray-200/10 p-2.5 rounded-xl cursor-pointer">
                            <MdOutlineRemoveRedEye size={20} />
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BrowseTips;
