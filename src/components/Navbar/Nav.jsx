import { NavLink } from "react-router-dom";
import Logo from "../../../public/assets/LogoGreen.svg";
import { SlBasket } from "react-icons/sl";
import { HiOutlineLogout } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";


const Nav = () => {
  return (
    <div>
      <nav className=" flex items-center justify-between">
        <img src={Logo} alt="Logo img" className="py-6" />
        <div>
          <ul className="flex gap-12 ">
            <li className=" cursor-pointer">
              <NavLink to="./">Home</NavLink>
            </li>
            <li className=" cursor-pointer">
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li className=" cursor-pointer">
              <NavLink to="/care">Plant Care</NavLink>
            </li>
            <li className=" cursor-pointer">
              <NavLink to="blogs">Blogs</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex gap-6 items-center cursor-pointer">
          <IoSearch className="w-6 h-6" />
          <div className="flex items-center relative">
            <SlBasket className="w-6 h-6" />
            <p className="p-[1px] bg-[#1aad51] rounded-full px-[6px] text-[10px] font-medium absolute right-[-7px] top-[-3px] text-white">
              1
            </p>
          </div>
          <button className="text-white gap-1 bg-[#1aad51] flex items-center py-2 px-5 rounded-lg">
            <HiOutlineLogout className="text-white  w-5 h-5 " />
            Login
          </button>
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default Nav;
