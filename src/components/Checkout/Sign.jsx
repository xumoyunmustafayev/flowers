import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Sign = ({ setHeddin }) => {
  const location = useLocation();
  const { selectedProducts = [] } = location.state || { selectedProducts: [] };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    streetAddress: "",
    apartment: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
    shipToDifferentAddress: false,
    orderNotes: "",
    paymentMethod: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [showErrors, setShowErrors] = useState(false);

  useEffect(() => {
    const validateForm = () => {
      return (
        formData.firstName &&
        formData.lastName &&
        formData.country &&
        formData.city &&
        formData.streetAddress &&
        formData.state &&
        formData.zip &&
        formData.email &&
        formData.phone &&
        formData.paymentMethod
      );
    };
    setIsFormValid(validateForm());
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      setShowErrors(true);
      return;
    }
    setHeddin(true);
  };

  const calculateSubtotal = () => {
    if (!selectedProducts.length) {
      return 0;
    }

    let subtotal = 0;
    selectedProducts.forEach((item) => {
      subtotal += item.price * item.quantity;
    });

    return subtotal.toFixed(2);
  };

  const shippingCost = 16;
  const subtotal = calculateSubtotal();
  const total = (parseFloat(subtotal) + shippingCost).toFixed(2);

  return (
    <div className="container mx-auto py-6 bg-gray-100">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:w-[65%] p-4 bg-white shadow-md rounded-md mb-6 lg:mb-0">
          <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between">
              <div className="mb-4 w-[46%]">
                <label className="block text-gray-700">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
                {showErrors && !formData.firstName && (
                  <p className="text-red-500 text-sm">First name is required</p>
                )}
              </div>
              <div className="mb-4 w-[46%]">
                <label className="block text-gray-700">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
                {showErrors && !formData.lastName && (
                  <p className="text-red-500 text-sm">Last name is required</p>
                )}
              </div>
            </div>
            <div className="flex justify-between">
              <div className="mb-4 w-[47%]">
                <label className="block text-gray-700">
                  Country / Region *
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                >
                  <option value="">Select a country / region</option>
                  <option value="uzb">Uzbekistan</option>
                  {/* Add your country options here */}
                </select>
                {showErrors && !formData.country && (
                  <p className="text-red-500 text-sm">Country is required</p>
                )}
              </div>
              <div className="mb-4 w-[47%]">
                <label className="block text-gray-700">Town / City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
                {showErrors && !formData.city && (
                  <p className="text-red-500 text-sm">City is required</p>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Street Address *</label>
              <div className="flex justify-between">
                <input
                  type="text"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded mt-1 w-[47%]"
                  placeholder="House number and street name"
                  required
                />
                <input
                  type="text"
                  name="apartment"
                  value={formData.apartment}
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded mt-1 w-[47%]"
                  placeholder="Apartment, suite, unit, etc. (optional)"
                />
                {showErrors && !formData.streetAddress && (
                  <p className="text-red-500 text-sm">
                    Street address is required
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-between">
              <div className="mb-4 w-[47%]">
                <label className="block text-gray-700">State *</label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                >
                  <option value="">Select a state</option>
                  <option value="california">California</option>
                  <option value="texas">Texas</option>
                  <option value="new-york">New York</option>
                  <option value="florida">Florida</option>
                </select>
                {showErrors && !formData.state && (
                  <p className="text-red-500 text-sm">State is required</p>
                )}
              </div>
              <div className="mb-4 w-[47%]">
                <label className="block text-gray-700">Zip *</label>
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
                {showErrors && !formData.zip && (
                  <p className="text-red-500 text-sm">Zip code is required</p>
                )}
              </div>
            </div>
            <div className="flex justify-between">
              <div className="mb-4 w-[47%]">
                <label className="block text-gray-700">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
                {showErrors && !formData.email && (
                  <p className="text-red-500 text-sm">Email is required</p>
                )}
              </div>
              <div className="mb-4 w-[47%]">
                <label className="block text-gray-700">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
                {showErrors && !formData.phone && (
                  <p className="text-red-500 text-sm">
                    Phone number is required
                  </p>
                )}
              </div>
            </div>
            <div className="mb-4">
              <input
                type="checkbox"
                id="ship-to-different-address"
                name="shipToDifferentAddress"
                checked={formData.shipToDifferentAddress}
                onChange={handleChange}
                className="mr-2"
              />
              <label
                htmlFor="ship-to-different-address"
                className="text-gray-700"
              >
                Ship to a different address?
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">
                Order Notes (optional)
              </label>
              <textarea
                name="orderNotes"
                value={formData.orderNotes}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Notes about your order, e.g. special notes for delivery."
              ></textarea>
            </div>
          </form>
        </div>
        <div className="w-full lg:w-[33%] p-4 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-semibold mb-4">Your Order</h2>
          {selectedProducts.map((item) => (
            <div
              key={item.id}
              className="h-[70px] flex items-center bg-[#FBFBFB] mb-[10px]"
            >
              <img
                src={item.image_url}
                alt="product"
                className="h-full w-[70px]"
              />
              <div className="ml-[11px] w-[140px]">
                <p className="text-[#3D3D3D] text-[16px] mb-[0px] font-medium">
                  {item.common_name}
                </p>
                <p className="text-[14px] text-[#949494] font-normal">
                  SKU:{" "}
                  <span className="text-[#727272] text-[14px]">{item.id}</span>
                </p>
              </div>
              <p className="text-[#727272] ml-[30px] text-[16px] w-[42px]">
                (x {item.quantity})
              </p>
              <p className="text-[#46A358] font-bold text-[18px] ml-[35px] w-[70px]">
                ${item.price * item.quantity}.00
              </p>
            </div>
          ))}
          <div className="flex justify-between py-2">
            <div>Subtotal</div>
            <div>${subtotal}</div>
          </div>
          <div className="flex justify-between py-2">
            <div>Shipping</div>
            <div>${shippingCost}.00</div>
          </div>
          <div className="flex justify-between font-semibold py-2">
            <div>Total</div>
            <p>${total}</p>
          </div>
          <div className="payment-method mt-4">
            <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
            <div className="mb-2">
              <input
                type="radio"
                id="paypal"
                name="paymentMethod"
                value="paypal"
                checked={formData.paymentMethod === "paypal"}
                onChange={handleChange}
                className="mr-2"
                required
              />
              <label htmlFor="paypal" className="text-gray-700">
                PayPal
              </label>
            </div>
            <div className="mb-2">
              <input
                type="radio"
                id="direct-bank-transfer"
                name="paymentMethod"
                value="direct-bank-transfer"
                checked={formData.paymentMethod === "direct-bank-transfer"}
                onChange={handleChange}
                className="mr-2"
                required
              />
              <label htmlFor="direct-bank-transfer" className="text-gray-700">
                Direct Bank Transfer
              </label>
            </div>
            <div className="mb-2">
              <input
                type="radio"
                id="cash-on-delivery"
                name="paymentMethod"
                value="cash-on-delivery"
                checked={formData.paymentMethod === "cash-on-delivery"}
                onChange={handleChange}
                className="mr-2"
                required
              />
              <label htmlFor="cash-on-delivery" className="text-gray-700">
                Cash on Delivery
              </label>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className={`w-full mt-4 p-2 ${
              isFormValid ? "bg-green-500" : "bg-green-500"
            } text-white font-semibold rounded`}
            // disabled={!isFormValid}
          >
            Place Order
          </button>
          {showErrors && !isFormValid && (
            <p className="text-red-500 text-sm mt-2">
              Please fill in all required fields
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sign;
