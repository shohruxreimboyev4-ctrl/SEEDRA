import React from "react";
import bg_image from "../assets/img/bg_image.png";

const Tagline = () => {
  return (
    <section
      className="max-w-[90%] h-[104px] mx-auto rounded-xl flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${bg_image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#3B3A4D]">
          We sell seeds
        </h2>
        <p className="text-sm sm:text-base text-[#6B6E7B] font-medium">
          that always sprout and gardening supplies which never break
        </p>
      </div>
    </section>
  );
};

export default Tagline;
