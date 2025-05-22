import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./ConponentCss/HeroSection.css";
import { Navigation } from "swiper/modules";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router";
import { Autoplay } from "swiper/modules";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
const FeaturedGardeners = ({ gardeners }) => {
  const swiperRef = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.update();
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="flex justify-between gap-5 items-center mb-10">
        <h1 className="text-xl sm:text-3xl flex-1 font-bold">
          Explore Active Gardeners
        </h1>
        <Link to={"/explore-gardeners"}>
          <button className="flex items-center gap-1 text-lg font-bold underline cursor-pointer">
            See All
            <GoArrowUpRight className="text-black" size={24} />
          </button>
        </Link>
      </div>

      <Swiper
        watchSlidesProgress={true}
        className="mySwiper"
        modules={[Autoplay, Navigation]}
        observer={true}
        spaceBetween={20}
        observeParents={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        ref={swiperRef}
      >
        {gardeners.map((gardener) => (
          <SwiperSlide>
            <div className="cursor-pointer">
              <div className="shadow rounded-lg border-2 border-base-200 relative pb-5">
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
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default FeaturedGardeners;
