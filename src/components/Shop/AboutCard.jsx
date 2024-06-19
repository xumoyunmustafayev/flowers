import { useContext, useEffect, useState } from "react";
import { AboutContext, ProductContext } from "../../App";
import { Data } from "../../data.js/data";
import { FaStar } from "react-icons/fa";
import { CiStar, CiHeart } from "react-icons/ci";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { LuMessageSquare } from "react-icons/lu";
import { Link } from "react-router-dom";

const AboutCard = () => {
  const { about } = useContext(AboutContext);
  const { product, setProduct } = useContext(ProductContext);
  const NotFound =
    "https://answers-afd.microsoft.com/static/images/image-not-found.jpg";
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("S");

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="mt-28 mb-11">
      <div className="flex mb-6 gap-2">
        <Link to="/">
          <h1 className="font-medium">Home / </h1>
        </Link>
        <Link to="/shop">
          <h1> Shop </h1>
        </Link>
      </div>
      {about && about.length > 0 ? (
        Data.map((item) => {
          if (item.id === about[0]) {
            return (
              <div key={item.id} className="flex items-center gap-16">
                <div className="w-[40%]">
                  {Array(4)
                    .fill()
                    .map((_, index) => (
                      <img
                        key={index}
                        src={item.image_url}
                        alt={`img-${index}`}
                        className="w-28 h-28 mb-3"
                      />
                    ))}
                </div>
                <div className="w-[100%]">
                  <img src={item.image_url} alt="img" className="w-96 h-96" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">{item.common_name}</h1>
                  <div>
                    <div className="flex items-center mb-2 justify-between">
                      <div className="flex gap-1 my-3">
                        <FaStar className="text-yellow-500 w-5 h-5 " />
                        <FaStar className="text-yellow-500 w-5 h-5 " />
                        <FaStar className="text-yellow-500 w-5 h-5 " />
                        <FaStar className="text-yellow-500 w-5 h-5 " />
                        <CiStar className="w-5 h-5" />
                      </div>
                      <p>19 Customer Review</p>
                    </div>
                    <hr />
                    <h1 className="text-lg font-medium">Short Description:</h1>
                    <p className="opacity-75">
                      The ceramic cylinder planters come with a wooden stand to
                      help elevate your plants off the ground. The ceramic
                      cylinder planters come with a wooden stand to help elevate
                      your plants off the ground.
                    </p>
                    <h1 className="text-lg font-medium">Size:</h1>
                    <div className="flex gap-3 my-4">
                      {["S", "M", "L", "XL"].map((size) => (
                        <p
                          key={size}
                          onClick={() => handleSizeChange(size)}
                          className={`py-2 px-4 rounded-full cursor-pointer transition-all ${
                            selectedSize === size
                              ? "bg-green-500 text-white border-green-500"
                              : "bg-green-100 text-green-500 border-green-200 hover:bg-green-500 hover:text-white hover:border-green-500"
                          }`}
                        >
                          {size}
                        </p>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 my-3">
                      <button
                        className="py-1 px-3 text-lg rounded-full bg-green-600 text-white hover:bg-green-700"
                        onClick={handleDecrement}
                      >
                        -
                      </button>
                      <p>{quantity}</p>
                      <button
                        className="py-1 px-3 rounded-full bg-green-600 text-white hover:bg-green-700"
                        onClick={handleIncrement}
                      >
                        +
                      </button>
                      <Link to="/shop/card">
                        <button
                          className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                          onClick={() => {
                            if (!product.includes(item.id)) {
                              setProduct([...product, item.id]);
                            }
                          }}
                        >
                          Buy now
                        </button>
                      </Link>
                      <button
                        className="px-5 py-2 border-green-500 rounded-lg border hover:bg-green-500 hover:text-white"
                        onClick={() => {
                          if (!product.includes(item.id)) {
                            setProduct([...product, item.id]);
                          }
                        }}
                      >
                        Add to cart
                      </button>
                      <p className="p-3 rounded-full border border-green-600 hover:bg-green-600 hover:text-white">
                        <CiHeart className="text-green-600 hover:text-white" />
                      </p>
                    </div>
                    <p>
                      <span className="opacity-60">SKU</span>: 1995751877966
                    </p>
                    <p>
                      <span className="opacity-60">Categories</span>: Potter
                      Plants
                    </p>
                    <p>
                      <span className="opacity-60">Tags</span>: Home, Garden,
                      Plants
                    </p>
                    <div className="flex gap-4 items-center">
                      <p className="font-medium opacity-55">
                        Share this products:
                      </p>
                      <FaFacebookF className="w-6 hover:text-blue-600" />
                      <FaTwitter className="w-6 hover:text-blue-400" />
                      <FaLinkedinIn className="w-6 hover:text-blue-700" />
                      <LuMessageSquare className="w-6 hover:text-green-600" />
                    </div>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })
      ) : (
        <div className="flex flex-col items-center justify-center">
          <img src={NotFound} alt="Not Found" className="w-96 h-60" />
          <p className="text-gray-500">No found image</p>
        </div>
      )}
    </div>
  );
};

export default AboutCard;
