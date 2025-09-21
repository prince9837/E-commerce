import { useContext } from "react";
import { ContextCart } from "../components/Context/CartContext.jsx";
import { AiOutlineCloseCircle, AiTwotoneCloseCircle } from "react-icons/ai";
import { MdOutlineImage, MdProductionQuantityLimits } from "react-icons/md";
import { LuIndianRupee } from "react-icons/lu";
import { CiFaceSmile } from "react-icons/ci";
import { GiClothes } from "react-icons/gi";

const Cart = () => {
  const { cart, removeFromCart, count, setCount } = useContext(ContextCart);
  // console.log(cart[0].title)
  return (
    <div className="w-[374px]">
      <div className="xl:flex hidden xl:w-screen items-center justify-between px-10 py-3 text-2xl font-bold shadow-green-200 shadow-lg">
        <p className="flex gap-2 items-center">Image<MdOutlineImage /></p>
        <p className="flex gap-2 items-center">Items<GiClothes /></p>
        <p className="flex gap-2 items-center">Quantity<MdProductionQuantityLimits /></p>
        <p className="flex gap-2 items-center">Price<LuIndianRupee /></p>
        <p className="flex gap-2 items-center">Remove<AiOutlineCloseCircle /></p>
      </div>
      {cart.length === 0 ? (
        <div className="h-[500px] w-[374px] xl:w-screen  flex items-center justify-center gap-3 text-red-500 text-4xl">Cart is empty... <CiFaceSmile className="text-5xl" /></div>
      ) : (
        cart.map((ele) => {
          return ( 
            <>
              <div className="flex flex-col xl:w-screen w-[374px] gap-5 items-center justify-between px-10 py-4 shadow hover:scale-102 duration-300">
                <div className="xl:flex items-center justify-between xl:w-screen w-[374px] px-10 py-6">
                  <div className="xl:flex items-center xl:gap-10">
                    <img src={ele?.images[0]} className="xl:w-[150px] w-[280px] rounded-lg" alt="" />
                    <div className="flex flex-col gap-2 mt-2">
                      <h2 className="xl:text-xl text-lg font-semibold text-green-500">
                        {ele?.title.slice(0,30)}
                      </h2>
                      <p className="text-gray-400">
                        {ele?.description.slice(0, 70) + "..."}
                      </p>
                      <p>{ele?.updatedAt}</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-center border-2 rounded font-extrabold h-[48px] w-[134px] mt-2">
                    <button
                      className="border-r-2 text-2xl px-4 py-2 cursor-pointer"
                      onClick={() => setCount(count - 1)}
                    >
                      -
                    </button>
                    <h1>{count}</h1>
                    <button
                      className="border-l-2 text-2xl px-4 py-2 cursor-pointer "
                      onClick={() => setCount(count + 1)}
                    >
                      +
                    </button>
                  </div>
                  <p className="text-2xl font-bold mt-2">${ele?.price}</p>
                  <button
                    className="text-red-500 text-2xl font-semibold cursor-pointer flex gap-2 items-center mt-2 border-2 rounded-lg px-5 py-2"
                    onClick={() => removeFromCart(ele.id)}
                  >
                    Remove <AiOutlineCloseCircle />
                  </button>
                </div>
              </div>
            </>
          );
        })
      )}
    </div>
  );
};

export default Cart;
