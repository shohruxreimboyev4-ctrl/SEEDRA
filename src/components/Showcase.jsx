import React from "react";
import { FaFire } from "react-icons/fa";
import ShowcaseImage from "../assets/img/ShowcaseImage.png";
import cilantro from "../assets/img/cilantro.png";

const Showcase = () => {
  return (
    <section
      className="
        relative rounded-2xl p-6 md:p-10 my-8 mx-auto max-w-[90%]
        pt-[140px] md:pt-[160px] mt-[100px]
        bg-cover bg-center bg-no-repeat
      "
      style={{ backgroundImage: `url(${ShowcaseImage})` }}
    >
      <div className="md:hidden mb-6">
        <img
          src={cilantro}
          alt="product"
          className="w-56 mx-auto object-contain"
        />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
        <div className="flex-1 text-center md:text-left space-y-4">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
            SEEDRA Basil Seeds for <br /> Indoor and Outdoor Planting
          </h1>

          <p className="text-xs md:text-sm text-gray-700 font-medium leading-relaxed">
            Be sure of our quality - the freshest batches of this season.
            Non-GMO, <br /> Heirloom — our seeds were tested and have the best
            germination ratings. <br /> Your easy growing experience is our guarantee.
          </p>

          <div className="flex justify-center md:justify-start items-center gap-2 mt-4">
            <FaFire className="text-red-500" />
            <span className="text-xl md:text-2xl font-bold text-gray-800">
              $12.56
            </span>
            <span className="line-through text-gray-400 text-xs md:text-sm">
              $15.56
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-6 justify-center md:justify-start">
            <button
              className="
                px-5 py-2.5 md:px-6 md:py-3 bg-green-600 text-white font-medium rounded-lg
                cursor-pointer transition-transform duration-200
                hover:bg-green-700 hover:-translate-y-1
              "
            >
              Add to cart
            </button>

            <button
              className="
                px-5 py-2.5 md:px-6 md:py-3 border border-green-600 text-green-600 font-medium rounded-lg
                cursor-pointer transition-transform duration-200
                hover:bg-green-50 hover:-translate-y-1
              "
            >
              Discover
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
