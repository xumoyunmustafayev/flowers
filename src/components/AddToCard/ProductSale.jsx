import { useContext, useEffect, useState } from "react";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";
import { ProductContext } from "../../App";
import { Data } from "../../data.js/data";
import { Link, useNavigate } from "react-router-dom";

const Basket = () => {
  const navigate = useNavigate();
  const { product, setProduct } = useContext(ProductContext);
  const [counts, setCounts] = useState({});

  const handleCheckout = () => {
    const selectedProducts = product
      .map((productId) => {
        const item = Data.find((dataItem) => dataItem.id === productId);
        if (item) {
          return { ...item, quantity: counts[productId] || 1 };
        }
        return null;
      })
      .filter(Boolean);

    navigate("/shop/checkout", { state: { selectedProducts } });
  };

  const increment = (itemId) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: (prevCounts[itemId] || 1) + 1,
    }));
  };

  const decrement = (itemId) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: prevCounts[itemId] > 1 ? prevCounts[itemId] - 1 : 1,
    }));
  };

  const handleDelete = (itemId) => {
    setProduct((prevProduct) => prevProduct.filter((id) => id !== itemId));
    setCounts((prevCounts) => {
      const newCounts = { ...prevCounts };
      delete newCounts[itemId];
      return newCounts;
    });
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const calculateSubtotal = () => {
    return product.reduce((total, itemId) => {
      const item = Data.find((item) => item.id === itemId);
      const count = counts[itemId] || 1;
      return total + item.price * count;
    }, 0);
  };

  const subtotal = calculateSubtotal();

  return (
    <div className="w-full mt-[120px]">
      <div className="flex mb-6 gap-2">
        <Link to="/">
          <h1 className="font-medium">Home / </h1>
        </Link>
        <Link to="/shop">
          <h1> Shop /</h1>
        </Link>
        <Link to="/shop/card">
          <h1>Shopping Cart</h1>
        </Link>
      </div>
      <div className="w-full flex items-start justify-between">
        <div>
          <div className="flex items-center">
            <p className="mr-[265px] text-[#3D3D3D] text-[16px] font-medium">
              Products
            </p>
            <p className="mr-[108px] text-[#3D3D3D] text-[16px] font-medium">
              Price
            </p>
            <p className="mr-[97px] text-[#3D3D3D] text-[16px] font-medium">
              Quantity
            </p>
            <p className="text-[#3D3D3D] text-[16px] font-medium">Total</p>
          </div>
          <hr className="w-full h-[0.3px] border-none my-[11px] bg-[#46A35880]" />
          {Data.map((item) => {
            return product.map((element) => {
              if (element === item.id) {
                return (
                  <div
                    key={item.id}
                    className="w-full bg-[#FBFBFB] mb-[10px] flex items-center h-[70px]"
                  >
                    <img
                      src={item.image_url}
                      alt="rasm"
                      className="mr-[14px] w-[70px] h-[70px]"
                    />
                    <div className="mr-[53px] w-48">
                      <p className="text-[#3D3D3D] text-[16px] font-medium">
                        {item.common_name}
                      </p>
                      <p className="text-[14px] text-[#949494] font-normal">
                        SKU: <span className="text-[#727272]">{item.id}</span>
                      </p>
                    </div>
                    <p className="text-[#727272] font-medium text-[16px]">
                      ${item.price}.00
                    </p>

                    <div className="ml-[92px] flex items-center">
                      <button
                        onClick={() => decrement(item.id)}
                        className="increment text-white w-[22px] h-[25px] rounded-[31px] flex items-center justify-center bg-[#46A358] hover:bg-[#357c44] active:bg-[#24542e] text-[20px]"
                      >
                        <HiMinusSm />
                      </button>
                      <p className="font-semibold ml-[15px] mr-[2px] text-[18px] w-[20px]">
                        {counts[item.id] || 1}
                      </p>
                      <button
                        onClick={() => increment(item.id)}
                        className="increment text-white w-[22px] h-[25px] rounded-[31px] flex items-center justify-center bg-[#46A358] hover:bg-[#357c44] active:bg-[#24542e] text-[20px]"
                      >
                        <HiPlusSm />
                      </button>
                    </div>
                    <p className="ml-[80px] text-[#46A358] font-bold text-[16px]">
                      ${item.price * (counts[item.id] || 1)}.00
                    </p>
                    <AiOutlineDelete
                      onClick={() => handleDelete(item.id)}
                      className="hover:text-red-600 hover:scale-150 ml-[60px] text-[23px] text-[#727272] hover:cursor-pointer hover:rotateRight"
                    />
                  </div>
                );
              }
              return null;
            });
          })}
        </div>
        <div className="w-[30%]">
          <div className="border-b-2 pb-2 w-full">
            <h1 className="text-lg font-medium mr-20">Cart Totals</h1>
          </div>
          <p className="text-[#3D3D3D] my-2">Coupon Apply</p>
          <div className="border flex">
            <input
              type="text"
              className="mx-4 my-2 w-[70%] outline-none"
              placeholder="Enter coupon code here..."
            />
            <button className="w-[30%] bg-green-500 text-white font-medium">
              Apply
            </button>
          </div>
          <div>
            <div className="flex justify-between items-center my-3">
              <h1 className="text-[#3D3D3D]">Subtotal</h1>
              <h1 className="text-lg font-medium ">${subtotal}.00</h1>
            </div>
            <div className="flex justify-between items-center my-3">
              <h1 className="text-[#3D3D3D]">Coupon Discount</h1>
              <h1>(-) 00.00</h1>
            </div>
            <div className="flex justify-between items-center my-3">
              <h1 className="text-[#3D3D3D]">Shipping </h1>
              <h1 className="text-lg font-medium ">$16.00</h1>
            </div>
            <h1 className="text-[12px] text-end text-green-600">
              View shipping charge
            </h1>
            <div className="flex justify-between items-center my-3">
              <h1>Total</h1>
              <h1 className="text-lg font-medium text-green-500 ">
                ${subtotal + 16}.00
              </h1>
            </div>
            <button
              className="w-full py-3 bg-green-600 text-white font-medium"
              onClick={handleCheckout}
            >
              Proceed To Checkout
            </button>
            <Link to="/">
              <button className="w-full py-3 hover:bg-green-100 text-green-600 mt-2 font-medium">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
