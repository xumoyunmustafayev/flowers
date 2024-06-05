import React, { useState, useEffect, useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { useLocation } from "react-router-dom";
import Think from "../../../public/assets/thank.png";
import { AboutContext, ProductContext } from "../../App";

const TrakModal = ({ setHeddin }) => {
  const { setProduct } = useContext(ProductContext);
  const { setAbout } = useContext(AboutContext);
  const Done =
    "https://intelligentonline.co.uk/wp-content/uploads/2018/07/shutterstock_142333726b.jpg";
  const [show, setShow] = useState(false);
  const location = useLocation();
  const { selectedProducts } = location.state || { selectedProducts: [] };

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setShow(false);
        setHeddin(false);
        setProduct([]);
        setAbout([]);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  const calculateSubtotal = (products) => {
    if (!products || products.length === 0) {
      return 0;
    }

    return products
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const calculateTotal = (products, shippingCost) => {
    const subtotal = parseFloat(calculateSubtotal(products));
    return (subtotal + shippingCost).toFixed(2);
  };

  const shippingCost = 16;
  const subtotal = calculateSubtotal(selectedProducts);
  const total = calculateTotal(selectedProducts, shippingCost);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80 z-40">
      <div className="w-[578px] bg-white rounded-lg shadow-lg overflow-hidden">
        {show ? (
          <img src={Done} alt="Done" className="w-full h-full object-cover" />
        ) : (
          <>
            <div className="bg-green-100">
              <div className="flex justify-end px-4 pt-3">
                <IoMdClose
                  className="w-6 h-6 cursor-pointer"
                  aria-label="Close"
                  onClick={() => setHeddin(false)}
                />
              </div>
              <div className="flex justify-center py-2">
                <img src={Think} alt="Thank you" className="w-20 h-20" />
              </div>
              <p className="text-center text-[#727272]">
                Your order has been received
              </p>
            </div>
            <hr />
            <OrderDetails
              selectedProducts={selectedProducts}
              shippingCost={shippingCost}
              total={total}
            />
            <div className="flex flex-col justify-center items-center px-5">
              <p className="text-[#727272] my-4 text-center">
                Your order is currently being processed. You will receive an
                order confirmation email shortly with the expected delivery date
                for your items.
              </p>
              <button
                className="px-4 py-2 rounded-md font-medium text-white mb-2 bg-green-600"
                onClick={() => setShow(true)}
              >
                Track your order
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const OrderDetails = ({ selectedProducts, shippingCost, total }) => (
  <>
    <div>
      <h1 className="px-5 py-2">Order Details</h1>
    </div>
    <div className="px-5">
      <div className="flex justify-between mb-5">
        <h1 className="text-[#3D3D3D]">Products</h1>
        <h1 className="text-[#3D3D3D] ml-32">Qty</h1>
        <h1 className="text-[#3D3D3D]">Subtotal</h1>
      </div>
      <hr />
      <div className="max-h-60 overflow-y-scroll hhhh">
        {selectedProducts.map((item) => (
          <div
            key={item.id}
            className="h-[70px] flex mt-3 justify-between items-center max-h bg-[#FBFBFB] mb-[10px]"
          >
            <div className="h-full flex">
              <img
                src={item.image_url}
                alt={item.common_name}
                className="h-full w-[70px]"
              />
              <div className="ml-[11px]  w-[140px]">
                <p className="text-[#3D3D3D] text-[16px] mb-[0px] font-medium">
                  {item.common_name}
                </p>
                <p className="text-[14px] text-[#949494] font-normal">
                  SKU:{" "}
                  <span className="text-[#727272] text-[14px]">{item.id}</span>
                </p>
              </div>
            </div>
            <p className="text-[#727272] ml-[30px] text-[16px] w-[42px]">
              (x {item.quantity})
            </p>
            <p className="text-[#46A358] font-bold text-[18px] ml-[35px] w-[70px]">
              ${item.price * item.quantity}.00
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-between w-full py-2 border mt-1 px-5">
          <div></div>
          <h1>Shipping</h1>
          <h1>${shippingCost.toFixed(2)}</h1>
        </div>
        <div className="flex justify-between w-full py-2 border mt-1 px-5">
          <div></div>
          <h1 className="font-medium">Total</h1>
          <h1 className="text-green-500">${total}</h1>
        </div>
      </div>
    </div>
  </>
);

export default TrakModal;
