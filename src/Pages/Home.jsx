import { use } from "react";
import { Link, useLoaderData } from "react-router";
import FeaturedGardeners from "../Components/FeaturedGardeners";
import HeroSection from "../Components/HeroSection";
import TrendingTips from "../Components/TrendingTips";
import React from "react";
import banner from "../assets/titleBanner.webp";
import { Helmet } from "react-helmet-async";
import { IoIosArrowRoundForward } from "react-icons/io";
const trendingTips = fetch(
  "https://plantly-server.vercel.app/trending-tips"
).then((res) => res.json());
const Home = () => {
  const gardeners = useLoaderData();
  const TipsData = use(trendingTips);
  console.log(TipsData);
  console.log(gardeners);
  return (
    <div className="dark:bg-[#0f172a]">
      <Helmet>
        <title>Plantly</title>
      </Helmet>
      <div className="max-w-[1420px] mx-auto px-5 ">
        <section className="mt-5 border-2 border-gray-200 rounded-2xl">
          <HeroSection></HeroSection>
        </section>
        <section className="mt-15">
          <FeaturedGardeners gardeners={gardeners}></FeaturedGardeners>
        </section>
        <section className="mt-15">
          <TrendingTips TipsData={TipsData}></TrendingTips>
        </section>
        <section>
          <div className="my-10">
            <div
              className="relative w-full h-120 sm:h-80 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url(${banner})`,
              }}
            >
              {/* Overlay */}
              <div className="absolute h-120 sm:h-80 inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center rounded-lg">
                {/* Text */}
                <div className="text-center text-white px-4 max-w-200 space-y-5">
                  <h1 className="text-2xl sm:text-3xl font-bold mb-2 leading-11">
                    🌿 Plantly Spring Fest 2025
                  </h1>
                  <p className="text-base font-text font-normal leading-8 mt-4">
                    Plantly invites all plant lovers, hobbyists, and green
                    thumbs to our biggest event of the year! Whether you're a
                    seasoned collector or just getting started with your plant
                    journey, this 3-day event is designed to inspire, educate,
                    and connect you with nature in exciting new ways.
                  </p>
                  <Link
                    className="bg-gradient-to-r from-[#33622a] py-2 to-[#94b834] text-white shadow-none rounded-lg justify-center mx-auto flex items-center w-[180px] gap-1"
                  >
                    <span>Registration</span>
                    <IoIosArrowRoundForward className="mt-1" size={26} />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
