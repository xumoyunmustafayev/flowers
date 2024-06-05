import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../public/assets/LogoGreen.svg";
import { SlBasket } from "react-icons/sl";
import { HiOutlineLogout } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
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
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleModal = () => {
    dispatch(ToggleModal());
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="fixed z-10 bg-white w-full lg:w-[100%] xl:w-[1200px] top-0 shadow-md">
        <nav className="flex items-center justify-between px-4 py-4 lg:py-6 lg:px-0">
          <Link to="/">
            <img src={Logo} alt="Logo img" className="h-10 lg:h-12" />
          </Link>
          <div className="hidden lg:flex lg:gap-12">
            <ul className="flex gap-6 lg:gap-12">
              <li className="cursor-pointer">
                <NavLink to="/" exact activeClassName="font-bold">
                  Home
                </NavLink>
              </li>
              <li className="cursor-pointer">
                <NavLink to="/shop" activeClassName="font-bold">
                  Shop
                </NavLink>
              </li>
              <li className="cursor-pointer">
                <NavLink to="/care" activeClassName="font-bold">
                  Plant Care
                </NavLink>
              </li>
              <li className="cursor-pointer">
                <NavLink to="/blogs" activeClassName="font-bold">
                  Blogs
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex gap-4 lg:gap-6 items-center cursor-pointer">
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
                <button className="text-white gap-1 bg-[#1aad51] flex items-center py-2 px-3 lg:px-5 rounded-lg">
                  <HiOutlineLogout className="text-white w-5 h-5" />
                  <span className="hidden lg:block">Login</span>
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Link to="/login">
                <div className="gap-2 lg:gap-4 px-2 lg:px-4 rounded-lg flex items-center py-1 bg-[#1aad51]">
                  <p className="font-medium text-white hidden lg:block">User</p>
                  <UserButton />
                </div>
              </Link>
            </SignedIn>
          </div>
          <div className="lg:hidden">
            <AiOutlineMenu className="w-8 h-8" onClick={toggleMenu} />
          </div>
        </nav>
        {menuOpen && (
          <div className="lg:hidden fixed inset-0 bg-black bg-opacity-75 z-20">
            <div className="flex flex-col items-center bg-white h-full py-10">
              <AiOutlineClose className="w-8 h-8 mb-8" onClick={toggleMenu} />
              <ul className="flex flex-col gap-6">
                <li className="cursor-pointer">
                  <NavLink
                    to="/"
                    exact
                    activeClassName="font-bold"
                    onClick={toggleMenu}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="cursor-pointer">
                  <NavLink
                    to="/shop"
                    activeClassName="font-bold"
                    onClick={toggleMenu}
                  >
                    Shop
                  </NavLink>
                </li>
                <li className="cursor-pointer">
                  <NavLink
                    to="/care"
                    activeClassName="font-bold"
                    onClick={toggleMenu}
                  >
                    Plant Care
                  </NavLink>
                </li>
                <li className="cursor-pointer">
                  <NavLink
                    to="/blogs"
                    activeClassName="font-bold"
                    onClick={toggleMenu}
                  >
                    Blogs
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        )}
        <hr />
      </div>
      {isModalOpen && <SearchModal />}
    </div>
  );
};

const SearchModal = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-90 z-40">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
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
