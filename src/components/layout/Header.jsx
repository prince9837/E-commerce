import React, { useContext} from "react";
import { Link, NavLink } from "react-router-dom";
import { IoHomeOutline, IoReorderThreeOutline } from "react-icons/io5";
import { GiShop } from "react-icons/gi";
import { IoIosContact, IoMdBook } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { ContextCart } from "../Context/CartContext";
import ResponsiveLinks from "../ui/ResponsiveLinks";

const Header = () => {
    const { setShowNavlinks } = useContext(ContextCart);


  const {cartCount} = useContext(ContextCart)
  const navLinks = [
    { title: "Home", path: "/", icon: <IoHomeOutline /> },
    { title: "Products", path: "/products", icon: <GiShop /> },
    { title: "About", path: "/about", icon: <IoMdBook /> },
    { title: "Contact", path: "/contact", icon: <IoIosContact /> },
  ];

  return (<>
    <header className="flex items-center justify-between xl:px-20 xl:py-4 shadow-lg px-2 py-2">
      <div className="text-2xl font-bold xl:hidden flex gap-2 items-center justify-center cursor-pointer">
        <span className="text-green-600">Shop</span>verse<IoReorderThreeOutline onClick={()=>setShowNavlinks(true)} className="xl:hidden flex text-4xl mt-2" />
      </div>

      <Link to="/" className="text-2xl font-bold xl:flex gap-2 items-center justify-center cursor-pointer hidden">
        <span className="text-green-600">Shop</span>verse<IoReorderThreeOutline className="xl:hidden flex text-4xl mt-2" />
      </Link>

      <nav>
        <ul className="xl:flex items-center gap-6 hidden">
          {navLinks.map((navLink, index) => (
            <li key={index} className="cursor-pointer">
              <NavLink
                className={({ isActive }) => {
                return `${
                  isActive && "border-b-green-500 border-b-3"
                } text-lg font-semibold flex items-center gap-1`
                }}
                to={navLink.path}
              >
                {navLink.title}
                <div className="text-lg font-semibold">{navLink.icon}</div>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-8">
        <Link className="relative" to="/cart">
          <BsCart2 className="text-2xl" />
          <div className="animate-bounce w-5 h-5 rounded-full bg-green-500 absolute top-[-11px] right-[-7px] flex items-center justify-center text-white">
            {cartCount}
          </div>
        </Link>
        <button className="bg-green-500 px-2 xl:px-4 py-1 xl:text-lg rounded text-white cursor-pointer hover:bg-green-600">
          Sigh In
        </button>
      </div>
    </header>
    <ResponsiveLinks />
    </>
  );
};

export default Header;
