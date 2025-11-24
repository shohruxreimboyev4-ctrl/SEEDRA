import React, { useEffect, useState } from "react";
import axios from "axios";

import leaf from "../assets/svg/leaf.svg";
import card from "../assets/svg/card.svg";
import Foliage from "../assets/svg/Foliage.svg";
import Date_cake from "../assets/svg/Date_cake.svg";
import strawberry from "../assets/svg/strawberry.svg";
import Cutlery from "../assets/svg/Cutlery.svg";
import flower from "../assets/svg/flower.svg";

import qopcha from "../assets/img/qopcha.png";
import star from "../assets/svg/star.svg";

const Hero = () => {
  const [data, setData] = useState([]);
  const [likedItems, setLikedItems] = useState({});

  useEffect(() => {
    axios
      .get("https://68fa1f53ef8b2e621e7ed891.mockapi.io/api/avatar")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const toggleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const categories = [
    { img: leaf, text: "ALL" },
    { img: card, text: "BUNDLES" },
    { img: Foliage, text: "HERBS" },
    { img: Date_cake, text: "VEGETABLES" },
    { img: strawberry, text: "FRUITS" },
    { img: Cutlery, text: "SUPPLIES" },
    { img: flower, text: "FLOWERS" },
  ];

  return (
    <section className="px-4 py-8">
      <div className="w-[90%] mx-auto mb-10">

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
          <h2 className="text-[#1F2533] text-2xl sm:text-3xl lg:text-4xl font-bold">
            Our products.
          </h2>
          <button className="w-full sm:w-[155px] border-2 border-[#EFEFEF] text-[#359740] text-sm sm:text-base p-2.5 rounded-md hover:bg-emerald-100 cursor-pointer transition-all">
            View all (12)
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-2 sm:gap-3 mb-10">
          {categories.map((c, i) => (
            <div
              key={i}
              className="border-2 border-[#EFEFEF] p-2.5 rounded-md flex justify-center items-center gap-2 cursor-pointer hover:bg-emerald-100 transition-all min-w-[100px] sm:min-w-[120px]"
            >
              <img src={c.img} alt={c.text} />
              <p className="text-xs sm:text-sm">{c.text}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 place-items-center">
          {data.map((item) => (
            <div
              key={item.id}
              className="w-full max-w-[320px] border-2 border-gray-300 rounded-lg flex flex-col p-5 sm:p-7 relative"
            >
              <button
                onClick={() => toggleLike(item.id)}
                className="absolute top-3 right-3 text-lg transition-all"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill={likedItems[item.id] ? "#FFCF55" : "none"}
                  stroke="#FFCF55"
                  strokeWidth="2"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </button>

              <img src={qopcha} alt="" className="mb-2 w-full object-contain h-[180px] sm:h-[200px]" />

              <p className="flex items-center gap-2 text-gray-400 underline mb-2 text-sm">
                <span className="flex gap-1 items-center">
                  {[...Array(5)].map((_, i) => (
                    <img key={i} src={star} alt="" className="w-4 h-4" />
                  ))}
                </span>
                {item.rating}
              </p>

              <p className="text-sm sm:text-base font-semibold mb-3">{item.malumot}</p>

              <div className="flex items-center justify-between">
                <p className="text-xl sm:text-2xl font-bold text-[#1F2533]">$12.56</p>
                <button className="border-2 border-gray-300 text-[#359740] w-[39px] p-2 flex justify-center rounded-md cursor-pointer hover:bg-emerald-100 transition-all">
                  <i className="fa-solid fa-cart-shopping"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
