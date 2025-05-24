import { use } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router";
import { Slide, toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContext";
import React from "react";
import { Helmet } from "react-helmet-async";

const ShareGardenTip = () => {
  const { user } = use(AuthContext);
  const handleAddTips = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const tips = Object.fromEntries(formData.entries());
    const likeTips = 0;
    const likeTipsUser = [];
    const tipsData = { ...tips, likeTips, likeTipsUser };

    fetch("https://plantly-server.vercel.app/tips", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tipsData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          e.target.reset();
          toast.success("Tips add successful ", {
            autoClose: 3000,
            hideProgressBar: true,
            transition: Slide,
          });
          e.target.reset();
        }
      });
  };
  return (
    <div className="dark:bg-[#0f172a] p-5">
      <Helmet>
        <title>Plantly | Share Tips</title>
      </Helmet>
      <div className="max-w-[1320px] mx-auto py-20">
        <div>
          <Link
            className="bg-gradient-to-r from-[#33622a] to-[#94b834] text-white shadow-none py-1 rounded-lg justify-center mx-auto flex items-center w-[180px]"
            to={"/"}
          >
            <IoIosArrowRoundBack className="mt-1" size={30} />
            Back to home
          </Link>
        </div>
        <div className="bg-[#f8fbfe] dark:bg-[#0b1120] px-5 md:p-20 mt-10 rounded-lg py-10">
          <h1 className="font-heading text-3xl sm:text-4xl text-center text-heading font-bold leading-11">
            🌱Share a Garden Tips
          </h1>
          <p className="font-text text-gray-500 text-base text-center max-w-[650px] mx-auto mt-5 leading-7">
            Encourage users to share their favorite gardening advice, tricks, or
            hacks—whether it's how to grow healthy tomatoes, keep pests away
            naturally, or make compost at home. A great way to build community
            knowledge and inspire green thumbs! 🌱
          </p>
          <form onSubmit={handleAddTips} className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="col-span-2 sm:col-span-1">
                <label className="label text-base dark:text-[#94a3b8] font-normal mt-1 font-text">
                  Title
                </label>
                <br />
                <input
                  required
                  name="title"
                  type="text"
                  placeholder="Plant Tips Title"
                  className="border font-text text-gray-700 dark:text-gray-300 border-gray-300 py-3 px-3 rounded-lg focus:border-gray-500 focus:outline-none w-full text-sm font-normal dark:bg-[#1e293b] dark:border-0 mt-1"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="label text-base dark:text-[#94a3b8] font-normal mt-1 font-text">
                  Plant Type/Topic
                </label>
                <br />
                <input
                  required
                  name="topic"
                  type="text"
                  placeholder="Enter Plant Type/Topic"
                  className="border font-text text-gray-700 dark:text-gray-300 border-gray-300 py-3 px-3 rounded-lg focus:border-gray-500 focus:outline-none w-full text-sm font-normal dark:bg-[#1e293b] dark:border-0 mt-1"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="label text-base dark:text-[#94a3b8] font-normal mt-1 font-text">
                  Difficulty Level
                </label>
                <br />
                <select
                  required
                  className="border font-text text-gray-700 dark:text-gray-300 border-gray-300 py-3 px-3  rounded-lg focus:border-gray-500 focus:outline-none w-full text-sm font-normal dark:bg-[#1e293b] dark:border-0 mt-1"
                  defaultValue=""
                  name="workLevel"
                >
                  <option value="" disabled className="dark:text-[#94a3b8]">
                    Select Level
                  </option>
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="label text-base dark:text-[#94a3b8] font-normal mt-1 font-text">
                  Category
                </label>
                <br />
                <select
                  required
                  className="border font-text text-gray-700 dark:text-gray-300 border-gray-300 py-3 px-3  rounded-lg focus:border-gray-500 focus:outline-none w-full text-sm font-normal dark:bg-[#1e293b] dark:border-0 mt-1"
                  defaultValue=""
                  name="category"
                >
                  <option value="" className="dark:text-[#94a3b8]" disabled>
                    Select Category
                  </option>
                  <option className="dark:text-[#94a3b8]">Composting</option>
                  <option>Plant Care</option>
                  <option>Vertical Gardening</option>
                </select>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="label text-base dark:text-[#94a3b8] font-normal mt-1 font-text">
                  Availability (Public or Hidden)
                </label>
                <br />
                <select
                  required
                  className="border font-text text-gray-700 dark:text-gray-300 border-gray-300 py-3 px-3  rounded-lg focus:border-gray-500 focus:outline-none w-full text-sm font-normal dark:bg-[#1e293b] dark:border-0 mt-1"
                  defaultValue=""
                  name="availability"
                >
                  <option value="" disabled className="dark:text-[#94a3b8]">
                    Availability (Public or Hidden)
                  </option>
                  <option>Public</option>
                  <option>Hidden</option>
                </select>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="label text-base dark:text-[#94a3b8] font-normal mt-1 font-text">
                  Images url
                </label>
                <br />
                <input
                  required
                  name="photos"
                  type="text"
                  placeholder="Enter photo URL"
                  className="border font-text text-gray-700 dark:text-gray-300 border-gray-300 py-3 px-3 rounded-lg focus:border-gray-500 focus:outline-none w-full text-sm font-normal dark:bg-[#1e293b] dark:border-0 mt-1"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="label text-base dark:text-[#94a3b8] font-normal mt-1 font-text">
                  Email
                </label>
                <br />
                <input
                  readOnly
                  name="email"
                  type="email"
                  placeholder="Enter Your Email"
                  defaultValue={user?.email}
                  className="border font-text text-gray-700 dark:text-gray-300 border-gray-300 py-3 px-3 rounded-lg focus:border-gray-500 focus:outline-none w-full text-sm font-normal dark:bg-[#1e293b] dark:border-0 mt-1"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="label text-base dark:text-[#94a3b8] font-normal mt-1 font-text">
                  Name
                </label>
                <br />
                <input
                  readOnly
                  name="name"
                  type="text"
                  placeholder="Enter Your Name"
                  defaultValue={user?.displayName}
                  className="border font-text text-gray-700 dark:text-gray-300 border-gray-300 py-3 px-3 rounded-lg focus:border-gray-500 focus:outline-none w-full text-sm font-normal dark:bg-[#1e293b] dark:border-0 mt-1"
                />
              </div>
              <div className="col-span-2">
                <label className="label text-base dark:text-[#94a3b8] font-normal mt-1 font-text">
                  Description
                </label>
                <br />
                <textarea
                  required
                  name="description"
                  type="text"
                  placeholder="Write Your Tips"
                  className="border font-text text-gray-700 dark:text-gray-300 border-gray-300 py-3 px-3 rounded-lg focus:border-gray-500 focus:outline-none w-full text-sm font-normal dark:bg-[#1e293b] dark:border-0 mt-1 h-20"
                />
              </div>
              <div className="col-span-2">
                <input
                  type="submit"
                  value="Add Tips"
                  className="text-white bg-gradient-to-r from-[#33622a] to-[#94b834] rounded-lg text-base py-2 flex items-center justify-center gap-2 mx-auto mt-5 w-[200px] cursor-pointer"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShareGardenTip;
