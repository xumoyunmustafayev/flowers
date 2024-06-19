import { useEffect, useState } from "react";
import Better from "../../../public/assets/better.png";

const HomeHero = () => {
  const [translateX, setTranslateX] = useState(0);
  const slideCount = 3;
  const slideWidth = 100 / slideCount;

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX((prev) =>
        prev >= 100 - slideWidth ? 0 : prev + slideWidth
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [slideWidth]);

  const handleDotClick = (index) => {
    setTranslateX(index * slideWidth);
  };

  return (
    <div className="bg-[#fafafa] mt-28 px-7 relative overflow-hidden">
      <div className="relative">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            width: `${slideCount * 100}%`,
            transform: `translateX(-${translateX}%)`,
          }}
        >
          {[...Array(slideCount)].map((_, index) => (
            <div key={index} className="flex flex-col lg:flex-row w-full">
              <div className="p-10 w-full lg:w-[60%] text-center lg:text-left">
                <h1 className="opacity-85 font-medium text-xl lg:text-2xl">
                  Welcome to GreenShop
                </h1>
                <h1 className="text-4xl lg:text-6xl font-extrabold mt-4 lg:mt-6">
                  Let's Make A Better{" "}
                  <span className="text-[#46A358]">Planet</span>
                </h1>
                <p className="opacity-65 mt-4 lg:mt-6 text-base lg:text-lg">
                  We are an online plant shop offering a wide range of cheap and
                  <br className="hidden lg:block" />
                  trendy plants. Use our plants to create a unique Urban Jungle.
                  <br className="hidden lg:block" />
                  Order your favorite plants!
                </p>
                <button className="px-7 py-2 bg-[#46A358] rounded-lg font-medium mt-4 text-white">
                  SHOP NOW
                </button>
              </div>
              <div className="flex items-end justify-center w-full lg:w-[40%] mt-8 lg:mt-0">
                {/* <img
                  src={Better}
                  alt="Decorative plant"
                  className="w-28 h-28 lg:w-auto lg:h-auto lg:absolute lg:bottom-8 lg:left-auto lg:ml-auto"
                /> */}
                <img
                  src={Better}
                  alt="Decorative plant"
                  className="ml-auto hidden lg:block"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {[...Array(slideCount)].map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`cursor-pointer w-3 h-3 rounded-full ${
                translateX === index * slideWidth
                  ? "bg-[#46A358]"
                  : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
