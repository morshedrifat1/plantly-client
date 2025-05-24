import { use, useState } from "react";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { LuClipboardPen } from "react-icons/lu";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import React from "react";
import { Helmet } from "react-helmet-async";

const TipsDetails = () => {
  const tips = useLoaderData();
  const { user } = use(AuthContext);
  const email = user?.email;
  const [likedUser, setLikedUser] = useState(tips?.likeTipsUser);
  const isLiked = likedUser.includes(email);
  const [like, setLike] = useState(tips?.likeTips);
  const handleLike = (id) => {
    if (isLiked) {
      return;
    }
    if (!isLiked) {
      const newLiked = {
        likeTipsUser: email,
      };
      fetch(`https://plantly-server.vercel.app/like-update/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newLiked),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setLike(like + 1);
          setLikedUser([...likedUser, email]);
        });
    }
  };
  return (
    <div className="dark:bg-[#0f172a]">
      <Helmet>
        <title>Plantly | Tips Details</title>
      </Helmet>
      <div className="max-w-[1020px] mx-auto p-5">
        <div className="cursor-pointer py-10">
          <div className="shadow rounded-lg border-2 border-base-200 relative pb-5 dark:bg-[#0b1120] bg-[#fbfcfd]">
            <div className="p-3">
              <img
                className="rounded-lg h-[400px] w-full object-cover"
                src={tips.photos}
                alt=""
              />
            </div>
            <div className="px-4 mt-3">
              <h1 className="font-text text-2xl font-semibold">{tips.title}</h1>
              <div className="flex gap-2 mt-3">
                <h1 className="flex items-center gap-1 text-sm font-medium bg-[#e9ebef] dark:bg-[#212635] px-2 py-1 rounded-full">
                  <LuClipboardPen size={19} />
                  <span className="font-heading">{tips.topic}</span>
                </h1>
                <h1 className="flex items-center gap-1 text-sm font-medium bg-[#e9ebef] dark:bg-[#212635] px-2 py-1 rounded-full">
                  <LiaPeopleCarrySolid size={20} />
                  <span className="font-heading">{tips.workLevel}</span>
                </h1>
              </div>
            </div>
            <div className="px-4 mt-3">
              <p className="font-heading font-base leading-7">
                {tips.description}
              </p>
              <div className="flex justify-between mt-3">
                <button
                  onClick={() => handleLike(tips._id)}
                  className="flex items-center gap-1 text-base font-semibold bg-[#e9ebef] dark:bg-[#212635] px-2 py-1  rounded-xl cursor-pointer"
                >
                  {isLiked?<BiSolidLike size={20} />:<BiLike size={20} />}
                  <span>{like}</span>
                </button>
                {/* <p className="text-red-500">{tips.likeTipsUser.length}</p> */}
              </div>
            </div>
            <span className="bg-gradient-to-r from-[#96bb35] via-[#437631] to-[#2e5a28] text-white px-3 py-1 rounded-full text-xs font-bold uppercase absolute top-5 right-5 cursor-pointer">
              {tips.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsDetails;
