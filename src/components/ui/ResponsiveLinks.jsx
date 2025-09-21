import { useContext } from "react";
import { GiShop } from "react-icons/gi";
import { IoIosContact, IoMdBook } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { ContextCart } from "../Context/CartContext";
import { RxCrossCircled } from "react-icons/rx";

const ResponsiveLinks = () => {
  const { showNavlinks, setShowNavlinks } = useContext(ContextCart);

  const navLinks = [
    { title: "Home", path: "/", icon: <IoHomeOutline /> },
    { title: "Products", path: "/products", icon: <GiShop /> },
    { title: "About", path: "/about", icon: <IoMdBook /> },
    { title: "Contact", path: "/contact", icon: <IoIosContact /> },
  ];
  return (
    <>
      {showNavlinks && (
        <div className="w-full xl:hidden h-[300px] flex gap-10 text-xl px-8 justify-center py-4 static top-[60px] duration-300">
           <RxCrossCircled
              onClick={() => setShowNavlinks(false)}
              className="absolute top-15 right-0 text-2xl cursor-pointer"
            />
          <nav>
            <ul className="flex flex-col items-center gap-10">
              {navLinks.map((navLink, index) => (
                <li key={index} className="cursor-pointer">
                  <NavLink
                    className={({ isActive }) => {
                      return `${
                        isActive && "border-b-green-500 border-b-3"
                      } text-2xl shadow-2xl font-semibold flex items-center gap-1`;
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
        </div>
      )}
    </>
  );
};

export default ResponsiveLinks;
