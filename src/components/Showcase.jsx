// Showcase.jsx
import React from "react";
import ShowcaseImage from "../assets/img/ShowcaseImage.png";

const Showcase = () => {
  return (
    <section
      className="relative rounded-2xl p-6 md:p-10 my-8 mx-auto max-w-[90%] 
                 pt-[140px] md:pt-[160px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${ShowcaseImage})` }}
    >
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">

        {/* MATN QISMI */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
            SEEDRA Basil Seeds for Indoor and Outdoor Planting
          </h1>

          <p className="text-xs md:text-sm text-gray-700 leading-relaxed font-medium">
            Be sure of our quality - the freshest batches of this season.
            Non-GMO, Heirloom — our seeds were tested and have the best
            germination ratings. Your easy growing experience is our guarantee.
          </p>

          {/* NARX */}
          <div className="flex justify-center md:justify-start items-center gap-2 mt-4">
            <span className="text-red-500">🔥</span>
            <span className="text-xl md:text-2xl font-bold text-gray-800">$12.56</span>
            <span className="line-through text-gray-400 text-xs md:text-sm">$15.56</span>
          </div>

          {/* TUGMALAR */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6 justify-center md:justify-start">
            <button className="px-5 py-2.5 md:px-6 md:py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition">
              Add to cart
            </button>
            <button className="px-5 py-2.5 md:px-6 md:py-3 border border-green-600 text-green-600 font-medium rounded-lg hover:bg-green-50 transition">
              Discover
            </button>
          </div>
        </div>

        {/* MOBILEDA KO‘RINADIGAN RASM */}
        <div className="relative flex-shrink-0 md:hidden">
          <img
            src={ShowcaseImage}
            alt="Product"
            className="w-32 h-auto object-contain mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
