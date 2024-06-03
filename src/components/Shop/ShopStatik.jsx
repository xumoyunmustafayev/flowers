import React, { useState, useEffect, useContext } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Data } from "../../data.js/data";
import { AboutContext } from "../../App";

const ShopStatik = () => {
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
  const { about, setAbout } = useContext(AboutContext);

  const [text, setText] = useState(1);

  return (
    <div className="mt-28">
      <div>
        <div className="flex gap-8 ">
          <h1
            onClick={() => setText(1)}
            className={
              text == 1
                ? "text-lg font-medium text-green-500 border-b-4 border-green-500 pb-2 duration-500 cursor-pointer"
                : "text-lg font-medium pb-2 duration-500 cursor-pointer"
            }
          >
            Product Description
          </h1>
          <h1
            onClick={() => setText(2)}
            className={
              text == 2
                ? "text-lg font-medium text-green-500 border-b-4 border-green-500 pb-2 duration-500 cursor-pointer"
                : "text-lg font-medium pb-2 duration-500 cursor-pointer"
            }
          >
            Reviews (19)
          </h1>
        </div>
        <hr />
        {text == 1 ? (
          <div>
            <p className="text-[#727272]">
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nam fringilla augue nec est tristique auctor. Donec non est at
              libero vulputate rutrum. Morbi ornare lectus quis justo gravida
              semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit
              id nulla. Pellentesque aliquet, sem eget laoreet ultrices, ipsum
              metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac
              tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus
              eget sagittis vulputate, sapien libero hendrerit est, sed commodo
              augue nisi non neque. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus
              nisi posuere nisl, in accumsan elit odio quis mi. Cras neque
              metus, consequat et blandit et, luctus a nunc. Etiam gravida
              vehicula tellus, in imperdiet ligula euismod eget. The ceramic
              cylinder planters come with a wooden stand to help elevate your
              plants off the ground.{" "}
            </p>
            <h1 className="font-medium text-base mt-3">Living Room:</h1>
            <p className="text-[#727272]">
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <h1 className="font-medium text-base mt-3">Dining Room:</h1>
            <p className="text-[#727272]">
              The benefits of houseplants are endless. In addition to cleaning
              the air of harmful toxins, they can help to improve your mood,
              reduce stress and provide you with better sleep. Fill every room
              of your home with houseplants and their restorative qualities will
              improve your life.
            </p>
            <h1 className="font-medium text-base mt-3">Office:</h1>
            <p className="text-[#727272]">
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        ) : (
          <div>
            <p className="text-[#727272]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur sequi ad, quod dicta vel eos quas pariatur culpa aut
              repudiandae inventore excepturi incidunt velit suscipit sit
              impedit cumque et sint! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aspernatur exercitationem provident nemo sint
              cumque officiis blanditiis numquam, repellendus veniam est
              explicabo ad ea vero recusandae temporibus at assumenda? Commodi,
              possimus?
            </p>
            <h1 className="font-medium text-base mt-3">Living Room:</h1>
            <p className="text-[#727272]">
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <h1 className="font-medium text-base mt-3">Dining Room:</h1>
            <p className="text-[#727272]">
              The benefits of houseplants are endless. In addition to cleaning
              the air of harmful toxins, they can help to improve your mood,
              reduce stress and provide you with better sleep. Fill every room
              of your home with houseplants and their restorative qualities will
              improve your life.
            </p>
            <h1 className="font-medium text-base mt-3">Office:</h1>
            <p className="text-[#727272]">
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        )}
      </div>
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

export default ShopStatik;
