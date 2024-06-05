import { useState, useMemo, useContext } from "react";
import { Data } from "../../data.js/data";
import Banner from "../../../public/assets/banner.png";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { SlBasket } from "react-icons/sl";
import { IoSearch, IoChevronBackOutline } from "react-icons/io5";
import { GrFormNext } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { AboutContext, ProductContext } from "../../App";
import { Link } from "react-router-dom";

function valuetext(value) {
  return `${value}°C`;
}

const FlowersOption = () => {
  const [value, setValue] = useState([20, 37]);
  const [sale, setSale] = useState(1);
  const [sale1, setSale1] = useState(1);
  const [colorStates, setColorStates] = useState({});
  const [likeStates, setLikeStates] = useState({});
  const [sortType, setSortType] = useState("default");
  const { setAbout } = useContext(AboutContext);
  const { product, setProduct } = useContext(ProductContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const itemsPerPage = 9;

  const getFilteredData = () => {
    let filteredData;
    switch (sale) {
      case 1:
        filteredData = Data;
        break;
      case 2:
        filteredData = Data.slice(9, 18);
        break;
      case 3:
        filteredData = Data.slice(11, 21);
        break;
      default:
        filteredData = [];
    }

    const startIndex = (sale1 - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return filteredData.slice(startIndex, endIndex);
  };

  const filteredData = useMemo(() => getFilteredData(), [sale, sale1]);

  const sortedData = useMemo(() => {
    const data = [...filteredData];
    switch (sortType) {
      case "lowPrice":
        return data.sort((a, b) => a.price - b.price);
      case "highPrice":
        return data.sort((a, b) => b.price - a.price);
      case "middlePrice":
        return data.sort(
          (a, b) => Math.abs(a.price - 100) - Math.abs(b.price - 100)
        );
      default:
        return data;
    }
  }, [sortType, filteredData]);

  const totalPages = Math.ceil(
    sale === 1
      ? Data.length / itemsPerPage
      : sale === 2
      ? (18 - 9) / itemsPerPage
      : sale === 3
      ? (21 - 11) / itemsPerPage
      : 0
  );

  const handleBasketClick = (itemId) => {
    if (!product.includes(itemId)) {
      setProduct([...product, itemId]);
    }
    setColorStates((prev) => ({
      ...prev,
      [itemId]: true,
    }));
  };

  const handleLikeClick = (itemId) => {
    setLikeStates((prev) => ({
      ...prev,
      [itemId]: true,
    }));
  };

  return (
    <div className="mt-10 flex flex-col lg:flex-row justify-between gap-5">
      <div className="lg:w-1/4 mb-8 lg:mb-0">
        <div className="bg-gray-100 p-6">
          <div className="mb-8">
            <p className="text-2xl font-bold mb-5">Categories</p>
            <ul className="flex flex-col gap-5 text-gray-700">
              {[
                "House Plants",
                "Potter Plants",
                "Seeds",
                "Small Plants",
                "Big Plants",
                "Succulents",
                "Terrariums",
                "Gardening",
                "Accessories",
              ].map((category, index) => (
                <li
                  key={index}
                  className="flex justify-between text-lg items-center cursor-pointer hover:text-green-600"
                >
                  <span>{category}</span>
                  <span>(33)</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <p className="text-2xl font-bold mb-5">Price Range</p>
            <div className="flex flex-col gap-4 mb-8">
              <p className="text-lg">
                Price: <span className="text-green-600">$39 - $1230</span>
              </p>
              <Box sx={{ width: "100%" }}>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                />
              </Box>
              <button className="bg-green-600 text-white text-lg py-2 px-4 rounded-md hover:bg-green-500">
                Filter
              </button>
            </div>
          </div>

          <div>
            <p className="text-2xl font-bold mb-5">Size</p>
            <ul className="flex flex-col gap-5 text-gray-700">
              {["Small", "Medium", "Large"].map((size, index) => (
                <li
                  key={index}
                  className="flex justify-between text-lg items-center cursor-pointer hover:text-green-600"
                >
                  <span>{size}</span>
                  <span>(33)</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <img src={Banner} alt="Banner" className="mt-8" />
      </div>
      <div className="lg:w-3/4">
        <div className="flex justify-between items-center mb-8">
          <ul className="flex gap-6 cursor-pointer">
            {["All plants", "New Arrivals", "Sale"].map((tab, index) => (
              <li
                key={index}
                onClick={() => {
                  setSale(index + 1);
                  setSale1(1);
                }}
                className={
                  sale === index + 1
                    ? "text-green-600 font-medium border-b-4 pb-1 border-green-500 duration-500"
                    : ""
                }
              >
                {tab}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <p className="text-gray-700">Sort by:</p>
            <select
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1"
            >
              <option value="default">Default sorting</option>
              <option value="lowPrice">Low price</option>
              <option value="highPrice">High price</option>
              <option value="middlePrice">Middle price</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedData.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow-lg group relative transition-transform transform hover:scale-105"
            >
              <Link to="/shop">
                <img
                  onClick={() => setAbout([item.id])}
                  src={item.image_url}
                  alt="Flower"
                  className="h-40 w-full object-cover mb-4 rounded-md hover:opacity-75"
                />
              </Link>
              <div className="flex justify-center gap-3 absolute bottom-20 w-full opacity-0 group-hover:opacity-100 transition-opacity">
                <SlBasket
                  aria-label="Add to Basket"
                  className={`w-5 h-5 ${
                    colorStates[item.id] ? "text-green-500" : ""
                  }`}
                  onClick={() => handleBasketClick(item.id)}
                />
                <FaRegHeart
                  aria-label="Like"
                  className={`w-5 h-5 ${
                    likeStates[item.id] ? "text-green-500" : ""
                  }`}
                  onClick={() => handleLikeClick(item.id)}
                />
                <IoSearch className="w-5 h-5" />
              </div>
              <div className="text-center">
                <p className="text-lg">{item.common_name}</p>
                <h1 className="text-green-600 font-medium text-xl">
                  ${item.price}.00
                </h1>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 gap-3">
          {sale1 > 1 && (
            <button
              className="px-4 py-2 border rounded-md hover:bg-green-500 hover:text-white"
              onClick={() => setSale1(sale1 - 1)}
            >
              <IoChevronBackOutline />
            </button>
          )}
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setSale1(index + 1)}
              className={`px-4 py-2 border rounded-md ${
                sale1 === index + 1
                  ? "bg-green-500 text-white"
                  : "hover:bg-green-500 hover:text-white"
              }`}
            >
              {index + 1}
            </button>
          ))}
          {sale1 < totalPages && (
            <button
              className="px-4 py-2 border rounded-md hover:bg-green-500 hover:text-white"
              onClick={() => setSale1(sale1 + 1)}
            >
              <GrFormNext />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlowersOption;
