import React, { useState, useEffect, useContext } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Data } from "../../data.js/data";

const SliderUI = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount === 2 ? 0 : prevCount + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCount(index);
  };

  return (
    <div className="mt-28">
      <div className="w-full overflow-hidden">
        <div
          className="mt-28 flex transition-transform duration-1000"
          style={{ transform: `translateX(-${count * 100}%)` }}
        >
          {Data.slice(0, 15).map((item) => {
            return (
              <div
                key={item.id}
                className="w-1/5 flex-shrink-0 px-2"
                onClick={() => setAbout([item.id])}
              >
                <div>
                  <img src={item.image_url} alt="img" className="w-full h-60" />
                  <p className="text-[#3D3D3D]">{item.common_name}</p>
                  <p className="text-green-500 font-bold">${item.price}.00</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              onClick={() => handleDotClick(i)}
              className={`h-2 w-2 rounded-full mx-1 cursor-pointer ${
                count === i ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderUI;
