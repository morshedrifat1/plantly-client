import { use, useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { IoIosArrowRoundBack } from "react-icons/io";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router";
import Swal from "sweetalert2";
import LoadingSpiner from "../Components/LoadingSpiner";
import { AuthContext } from "../Context/AuthContext";
import banner from "../assets/titleBanner.webp";
import React from "react";
import { Helmet } from "react-helmet-async";

const MyTips = () => {
  const { user } = use(AuthContext);
  const email = user?.email;
  const [myTips, setMyTips] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(true);
    fetch(`https://plantly-server.vercel.app/my-tips?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        setLoader(false);
        setMyTips(data);
      });
  }, [email]);

  const handleDelet = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://plantly-server.vercel.app/my-tips/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              setMyTips(myTips.filter((tip) => tip._id !== id));
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <>
      {loader ? (
        <LoadingSpiner></LoadingSpiner>
      ) : (
        <div className=" dark:bg-[#0f172a] sm:px-5">
          <Helmet>
        <title>Plantly | My Tips</title>
      </Helmet>
          <div className="max-w-[1420px] mx-auto pb-20 pt-10">
            <div className="p-5">
              <div>
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
                        My Gardening Tips
                      </h1>
                      <p className="text-base font-text font-normal leading-8 mt-4">
                        View and manage all the gardening tips you’ve shared.
                        Keep track of your ideas and inspire others.
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
            </div>
           <div className="px-5">
             <div className="overflow-x-auto rounded-box border border-base-content/5 bg-[#fafcff] dark:bg-[#0b1120] mt-10">
              <table className="table ">
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
                  {myTips.map((tip, index) => (
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
                      <td className="space-x-3 whitespace-nowrap">
                        <Link to={`/update-tips/${tip._id}`}>
                          <button className="bg-gray-200/80 dark:bg-gray-200/10 p-2.5 rounded-xl cursor-pointer">
                            <TbEdit size={20} />
                          </button>
                        </Link>
                        <button
                          onClick={() => handleDelet(tip._id)}
                          className="bg-gray-200/80 dark:bg-gray-200/10 p-2.5 rounded-xl cursor-pointer"
                        >
                          <AiOutlineDelete size={20} />
                        </button>
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

export default MyTips;
