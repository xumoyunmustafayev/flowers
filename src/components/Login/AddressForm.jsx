import React, { useState } from "react";

const AddressForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    street: "",
    apartment: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [sameAsBilling, setSameAsBilling] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key])
        newErrors[key] = `${key.replace(/^\w/, (c) =>
          c.toUpperCase()
        )} is required`;
    });
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted", formData);
    }
  };

  return (
    <div className=" bg-white rounded-md shadow-md p-6 w-full">
      <form onSubmit={handleSubmit}>
        <h2 className="text-lg font-semibold mb-4">
          Billing Address{" "}
          <span className="text-green-500 ml-2 cursor-pointer">Add</span>
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">First Name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1"
            />
            {errors.firstName && (
              <span className="text-red-500 text-sm">{errors.firstName}</span>
            )}
          </div>
          <div>
            <label className="block text-gray-700">Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1"
            />
            {errors.lastName && (
              <span className="text-red-500 text-sm">{errors.lastName}</span>
            )}
          </div>
          <div>
            <label className="block text-gray-700">Country / Region *</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1"
            >
              <option value="">Select a country / region</option>
              {/* Add more options here */}
            </select>
            {errors.country && (
              <span className="text-red-500 text-sm">{errors.country}</span>
            )}
          </div>
          <div>
            <label className="block text-gray-700">Town / City *</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1"
            />
            {errors.city && (
              <span className="text-red-500 text-sm">{errors.city}</span>
            )}
          </div>
          <div>
            <label className="block text-gray-700">Street Address *</label>
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1"
            />
            {errors.street && (
              <span className="text-red-500 text-sm">{errors.street}</span>
            )}
          </div>
          <div>
            <label className="block text-gray-700">
              Apartment, suite, unit, etc. (optional)
            </label>
            <input
              type="text"
              name="apartment"
              value={formData.apartment}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">State *</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1"
            >
              <option value="">Select a state</option>
              {/* Add more options here */}
            </select>
            {errors.state && (
              <span className="text-red-500 text-sm">{errors.state}</span>
            )}
          </div>
          <div>
            <label className="block text-gray-700">Zip *</label>
            <input
              type="file"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1"
            />
            {errors.zip && (
              <span className="text-red-500 text-sm">{errors.zip}</span>
            )}
          </div>
          <div>
            <label className="block text-gray-700">Email address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
          </div>
          <div>
            <label className="block text-gray-700">Phone Number *</label>
            <div className="flex mt-1">
              <select
                className="border-gray-300 border rounded-l-md shadow-sm py-1"
                name="phoneCode"
              >
                <option value="+966">+966</option>
              </select>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="flex-1 py-1 border block w-full border-gray-300 rounded-r-md shadow-sm"
              />
            </div>
            {errors.phone && (
              <span className="text-red-500 text-sm">{errors.phone}</span>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Save Address
        </button>
      </form>
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">
          Shipping Address{" "}
          <span className="text-green-500 ml-2 cursor-pointer">Add</span>
        </h2>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={sameAsBilling}
            onChange={() => setSameAsBilling(!sameAsBilling)}
            className="mr-2"
          />
          <span>Same as billing address</span>
        </div>
        {!sameAsBilling && (
          <p className="mt-4 text-gray-500">
            You have not set up this type of address yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default AddressForm;
