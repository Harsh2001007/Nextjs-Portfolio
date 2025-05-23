import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg" style={{ fontFamily: "ovo" }}>
        What I Offer ?
      </h4>
      <h2 className="text-center text-5xl" style={{ fontFamily: "ovo" }}>
        My Services
      </h2>

      <p
        className="text-center max-w-2xl mx-auto mt-5 mb-12"
        style={{ fontFamily: "ovo" }}
      >
        I am a frontend developer from India with 3 years of experience in web
        and app designing.
      </p>

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]  gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="border border-gray-500 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0px_#000] cursor-pointer hover:-translate-y-1 duration-500 hover:bg-pink-100 dark:hover:bg-darkHover bg:hover:shadow-white"
          >
            <Image src={icon} className="w-10" alt="" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
              {description}
            </p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5">
              Read More{" "}
              <Image src={assets.right_arrow} alt="" className="w-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
