import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../public/assets/LogoGreen.svg";
import { SlBasket } from "react-icons/sl";
import { HiOutlineLogout } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToggleModal } from "../../redux/PaginationSlice";
import { ProductContext } from "../../App";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Nav = () => {
  const { product } = useContext(ProductContext);
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.pagination.modal);

  const toggleModal = () => {
    dispatch(ToggleModal());
  };

  return (
    <div>
      <div className="fixed z-10 bg-white block w-[1200px] top-0">
        <nav className="flex items-center justify-between">
          <Link to="/">
            <img src={Logo} alt="Logo img" className="py-6" />
          </Link>
          <div>
            <ul className="flex gap-12">
              <li className="cursor-pointer">
                <NavLink to="./">Home</NavLink>
              </li>
              <li className="cursor-pointer">
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li className="cursor-pointer">
                <NavLink to="/care">Plant Care</NavLink>
              </li>
              <li className="cursor-pointer">
                <NavLink to="blogs">Blogs</NavLink>
              </li>
            </ul>
          </div>
          <div className="flex gap-6 items-center cursor-pointer">
            <IoSearch className="w-6 h-6" onClick={toggleModal} />
            <div className="flex items-center relative">
              <Link to="/shop/card">
                <SlBasket className="w-6 h-6" />
              </Link>
              <p className="p-[1px] bg-[#1aad51] rounded-full px-[6px] text-[10px] font-medium absolute right-[-7px] top-[-3px] text-white">
                {product.length}
              </p>
            </div>

            <SignedOut>
              <SignInButton>
                <button className="text-white gap-1 bg-[#1aad51] flex items-center py-2 px-5 rounded-lg">
                  <HiOutlineLogout className="text-white w-5 h-5" />
                  Login
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <div className="gap-4 px-2 rounded-lg flex items-center py-1 bg-[#1aad51]">
                <p className="font-medium text-white">User</p>
                <UserButton />
              </div>
            </SignedIn>
          </div>
        </nav>
        <hr />
      </div>
      {isModalOpen && <SearchModal />}
    </div>
  );
};

const SearchModal = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-90 z-40">
      <div className="w-96 bg-white rounded-lg shadow-lg overflow-hidden">
        <input
          type="text"
          className="w-full p-4 border-b border-gray-200 focus:outline-none"
          placeholder="Search..."
        />
        <div className="overflow-y-auto max-h-80">
          <div className="flex items-center p-4">
            <p className="text-gray-600">No products found</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
