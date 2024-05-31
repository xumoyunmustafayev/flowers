import { useState } from "react";
import { Data } from "../../data.js/data";
import Banner from '../../../public/assets/banner.png'
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { SlBasket } from "react-icons/sl";
import { IoSearch } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";
import { GrFormNext } from "react-icons/gr";

import { FaRegHeart } from "react-icons/fa";




function valuetext(value) {
  return `${value}°C`;
}

const FlowersOption = () => {
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const [sale , setSale] = useState(1)
    const [sale1 , setSale1] = useState(1)
  return (
    <div className=" flex justify-between mt-10">
      <div className="w-[30%]">
        <div className=" bg-[--bg] pl-[18px] pb-[18px] pt-[14px] pr-[24px] w-[100%]">
          <div className="mb-[30px] ">
            <p className=" text-[20px] font-bold mb-[20px] ">Categories</p>
            <ul className="pl-[12px] flex flex-col gap-[20px] tex-[--second] ">
              <li
                className={`flex  cursor-pointer justify-between text-[18px] items-center`}
              >
                <span>House Plants</span>
                <span>(33)</span>
              </li>
              <li
                className={`flex cursor-pointer justify-between text-[18px] items-center`}
              >
                <span>Potter Plants</span>
                <span>(12)</span>
              </li>
              <li
                className={`flex cursor-pointer justify-between text-[18px] items-center`}
              >
                <span>Seeds</span>
                <span>(33)</span>
              </li>
              <li
                className={`flex cursor-pointer justify-between text-[18px] items-center`}
              >
                <span>Small Plants</span>
                <span>(33)</span>
              </li>
              <li
                className={`flex cursor-pointer justify-between text-[18px] items-center`}
              >
                <span>Big Plants</span>
                <span>(33)</span>
              </li>
              <li
                className={`flex cursor-pointer justify-between text-[18px] items-center`}
              >
                <span>Succulents</span>
                <span>(33)</span>
              </li>
              <li
                className={`flex cursor-pointer justify-between text-[18px] items-center`}
              >
                <span>Trerrariums</span>
                <span>(33)</span>
              </li>
              <li
                className={`flex cursor-pointer justify-between text-[18px] items-center`}
              >
                <span>Gardening</span>
                <span>(33)</span>
              </li>
              <li
                className={`flex cursor-pointer justify-between text-[18px] items-center`}
              >
                <span>Accessories</span>
                <span>(33)</span>
              </li>
            </ul>
          </div>

          <div>
            <p className=" text-[20px] justify-start items-start font-bold mb-[20px] ">
              Price Range
            </p>
            <div className="flex pl-[12px] gap-4 flex-col mb-[30px] w-[80%] ">
              <p className="text-[18px]">
                Price: <span className="text-[--primary] ">$39 - $1230</span>
              </p>
              <Box sx={{ width: 300 }}>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                />
              </Box>
              <p>
                {" "}
                <span className="bg-[--primary]  rounded-md text-white text-[18px] py-2 px-7 hover:opacity-70 ">
                  FIlter
                </span>
              </p>
            </div>
          </div>

          <div>
            <p className=" text-[20px] font-bold mb-[20px] ">Categories</p>
            <ul className="pl-[12px] flex flex-col gap-[20px] tex-[--second] ">
              <li
                className={`flex cursor-pointer justify-between text-[18px] items-center`}
              >
                <span>Small</span>
                <span>(33)</span>
              </li>
              <li
                className={`flex cursor-pointer justify-between text-[18px] items-center`}
              >
                <span>Medium</span>
                <span>(12)</span>
              </li>
              <li
                className={`flex cursor-pointer justify-between text-[18px] items-center`}
              >
                <span>Large</span>
                <span>(33)</span>
              </li>
            </ul>
          </div>
        </div>
        <img src={Banner} alt="img" />

        <div className="discount w-full  max-h-[470px] h-full"></div>
      </div>
      <div>
        <ul className="flex gap-10 cursor-pointer mb-10">
          <li
            onClick={() => setSale(1)}
            className={
              sale == 1 &&
              "text-green-600 font-medium border-b-4 pb-1 border-green-500 duration-500"
            }
          >
            All plants
          </li>
          <li
            onClick={() => setSale(2)}
            className={
              sale == 2 &&
              "text-green-600 font-medium border-b-4 pb-1 border-green-500 duration-500"
            }
          >
            New Arrivalix
          </li>
          <li
            onClick={() => setSale(3)}
            className={
              sale == 3 &&
              "text-green-600 font-medium border-b-4 pb-1 border-green-500 duration-500"
            }
          >
            Sale
          </li>
        </ul>
        <div className=" grid grid-cols-3 gap-10 mt-2">
          {sale == 1 &&
            Data.slice(0, 9).map((item) => {
              return (
                <div
                  key={item.id}
                  className="mb-12 cursor-pointer group relative duration-700"
                >
                  <img
                    src={item.image_url}
                    alt="Flower"
                    className="  w-56 h-56 mb-5 hover:opacity-75"
                  />
                  <div className="flex gap-3 absolute ml-[30%] justify-center z-[-1] group-hover:z-10 duration-200 group-hover:translate-y-[-50px]">
                    <SlBasket className="w-5 h-5" />
                    <FaRegHeart className="w-5 h-5" />
                    <IoSearch className="w-5 h-5" />
                  </div>
                  <div className="bg-white">
                    <p>{item.common_name}</p>
                    <h1 className="text-green-500 font-medium text-xl">
                      {" "}
                      ${item.price}.00
                    </h1>
                  </div>
                </div>
              );
            })}
          {sale == 2 &&
            Data.slice(9, 18).map((item) => {
              return (
                <div
                  key={item.id}
                  className="mb-12 cursor-pointer group relative duration-700"
                >
                  <img
                    src={item.image_url}
                    alt="Flower"
                    className="  w-56 h-56 mb-5 hover:opacity-75"
                  />
                  <div className="flex gap-3 absolute ml-[30%] justify-center z-[-1] group-hover:z-10 duration-200 group-hover:translate-y-[-50px]">
                    <SlBasket className="w-5 h-5" />
                    <FaRegHeart className="w-5 h-5" />
                    <IoSearch className="w-5 h-5" />
                  </div>
                  <div className="bg-white">
                    <p>{item.common_name}</p>
                    <h1 className="text-green-500 font-medium text-xl">
                      {" "}
                      ${item.price}.00
                    </h1>
                  </div>
                </div>
              );
            })}
          {sale == 3 &&
            Data.slice(11, 21).map((item) => {
              return (
                <div
                  key={item.id}
                  className="mb-12 cursor-pointer group relative duration-700"
                >
                  <img
                    src={item.image_url}
                    alt="Flower"
                    className="  w-56 h-56 mb-5 hover:opacity-75"
                  />
                  <div className="flex gap-3 absolute ml-[30%] justify-center z-[-1] group-hover:z-10 duration-200 group-hover:translate-y-[-50px]">
                    <SlBasket className="w-5 h-5" />
                    <FaRegHeart className="w-5 h-5" />
                    <IoSearch className="w-5 h-5" />
                  </div>
                  <div className="bg-white">
                    <p>{item.common_name}</p>
                    <h1 className="text-green-500 font-medium text-xl">
                      {" "}
                      ${item.price}.00
                    </h1>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="flex items-center justify-end gap-3 cursor-pointer">
          {sale1 !== 1 && (
            <p
              className="px-4 py-4 border rounded-md hover:bg-green-500 hover:text-white"
              onClick={() => setSale1(sale1 - 1)}
            >
              <IoChevronBackOutline />
            </p>
          )}
          <p
            onClick={() => setSale1(1)}
            className={
              sale1 == 1
                ? "px-4 py-3 border rounded-md bg-green-500 text-white"
                : "px-4 py-3 border rounded-md"
            }
          >
            1
          </p>
          <p
            onClick={() => setSale1(2)}
            className={
              sale1 == 2
                ? "px-4 py-3 border rounded-md bg-green-500 text-white"
                : "px-4 py-3 border rounded-md"
            }
          >
            2
          </p>
          <p
            onClick={() => setSale1(3)}
            className={
              sale1 == 3
                ? "px-4 py-3 border rounded-md bg-green-500 text-white"
                : "px-4 py-3 border rounded-md"
            }
          >
            3
          </p>
          <p
            onClick={() => setSale1(4)}
            className={
              sale1 == 4
                ? "px-4 py-3 border rounded-md bg-green-500 text-white"
                : "px-4 py-3 border rounded-md"
            }
          >
            4
          </p>

          {sale1 !== 4 && (
            <p
              className="px-4 py-4 border rounded-md hover:bg-green-500 hover:text-white"
              onClick={() => setSale1(sale1 + 1)}
            >
              <GrFormNext />
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlowersOption;
