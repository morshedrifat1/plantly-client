import React, { use } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { Slide, toast } from "react-toastify";

const UpdateTips = () => {
  const { user } = use(AuthContext);
  const oldTips = useLoaderData();
  const handleAddTips = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newTips = Object.fromEntries(formData.entries());
    fetch(`http://localhost:5000/update-tips/${oldTips._id}`,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(newTips)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.modifiedCount){
        toast.success("Update successful ", {
          autoClose: 3000,
          hideProgressBar: true,
          transition: Slide,
        });
      }

    })
  };
  return (
    <div className="dark:bg-[#0f172a] p-5">
      <div className="max-w-[1320px] mx-auto py-20">
        <Link
          className="bg-gradient-to-r from-[#33622a] to-[#94b834] text-white shadow-none py-1 rounded-lg justify-center mx-auto flex items-center w-[180px]"
          to={"/"}
        >
          <IoIosArrowRoundBack className="mt-1" size={30} />
          Back to home
        </Link>
        <div className="bg-[#f8fbfe] dark:bg-[#0b1120] p-5 md:p-20 mt-12 rounded-lg">
          <h1 className="font-heading text-3xl sm:text-4xl text-center text-heading font-bold">
            🌿 Update Your Tips
          </h1>
          <p className="font-text text-gray-500 text-base text-center max-w-[670px] mx-auto mt-5 leading-7">
            Have new advice, a better method, or an updated trick? Refresh your
            gardening tips to share the latest insights with the community and
            keep the knowledge growing strong.🌿
          </p>
          <form onSubmit={handleAddTips} className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="col-span-2 sm:col-span-1">
                <label className="label text-base dark:text-[#94a3b8] font-normal mt-1 font-text">
                  Title
                </label>
                <br />
                <input
                defaultValue={oldTips.title}
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
                defaultValue={oldTips.topic}
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
                  className="border font-text text-gray-700 dark:text-gray-300 border-gray-300 py-3 px-3  rounded-lg focus:border-gray-500 focus:outline-none w-full text-sm font-normal dark:bg-[#1e293b] dark:border-0 mt-1"
                  defaultValue={oldTips.workLevel}
                  name="workLevel"
                >
                  <option disabled={true} className="dark:text-[#94a3b8]">Select Level</option>
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
                  className="border font-text text-gray-700 dark:text-gray-300 border-gray-300 py-3 px-3  rounded-lg focus:border-gray-500 focus:outline-none w-full text-sm font-normal dark:bg-[#1e293b] dark:border-0 mt-1"
                  defaultValue={oldTips.category}
                  name="category"
                >
                  <option className="dark:text-[#94a3b8]" disabled={true}>
                    Select Category
                  </option>
                  <option>Composting</option>
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
                  className="border font-text text-gray-700 dark:text-gray-300 border-gray-300 py-3 px-3  rounded-lg focus:border-gray-500 focus:outline-none w-full text-sm font-normal dark:bg-[#1e293b] dark:border-0 mt-1"
                  defaultValue={oldTips.availability}
                  name="availability"
                >
                  <option disabled={true}>
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
                defaultValue={oldTips.photos}
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
                defaultValue={oldTips.description}
                  name="description"
                  type="text"
                  placeholder="Write Your Tips"
                  className="border font-text text-gray-700 dark:text-gray-300 border-gray-300 py-3 px-3 rounded-lg focus:border-gray-500 focus:outline-none w-full text-sm font-normal dark:bg-[#1e293b] dark:border-0 mt-1 h-20"
                />
              </div>
              <div className="col-span-2">
                <input
                  type="submit"
                  value="Update Tips"
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

export default UpdateTips;
