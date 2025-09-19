import { useContext } from "react";
import { ContextCart } from "../components/Context/CartContext.jsx";
import { AiTwotoneCloseCircle } from "react-icons/ai";
import { CiFaceSmile } from "react-icons/ci";

const Cart = () => {
  const { cart, removeFromCart, count, setCount } = useContext(ContextCart);
  // console.log(cart[0].title)
  return (
    <div>
      <div className="flex w-screen items-center justify-between px-10 py-6 text-2xl font-bold">
        <p>Image</p>
        <p>Brand</p>
        <p>Quantity</p>
        <p>Price</p>
        <p>Remove</p>
      </div>
      {cart.length === 0 ? (
        <div className="h-[500px] w-screen flex items-center justify-center gap-3 text-red-500 text-4xl">Cart is empty... <CiFaceSmile className="text-5xl" /></div>
      ) : (
        cart.map((ele) => {
          return (
            <>
              <div className="flex flex-col gap-5 items-center justify-between px-10 py-4 shadow">
                <div className="flex w-screen items-center justify-between px-10 py-6">
                  <div className="flex items-center gap-10 w-[400px]">
                    <img src={ele?.images[0]} className="w-[150px]" alt="" />
                    <div className="flex flex-col gap-2">
                      <h2 className="text-xl font-semibold text-green-500">
                        {ele?.title}
                      </h2>
                      <p className="text-gray-400">
                        {ele?.description.slice(0, 50) + "..."}
                      </p>
                      <p>{ele?.updatedAt}</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-center border-2 rounded font-extrabold h-[48px]">
                    <button
                      className="border-r-2 text-2xl px-4 py-2 cursor-pointer"
                      onClick={() => setCount(count - 1)}
                    >
                      -
                    </button>
                    <h1>{count}</h1>
                    <button
                      className="border-l-2 text-2xl px-4 py-2 cursor-pointer"
                      onClick={() => setCount(count + 1)}
                    >
                      +
                    </button>
                  </div>
                  <p className="text-2xl font-bold">${ele?.price}</p>
                  <button
                    className="text-red-500 text-2xl font-semibold cursor-pointer flex gap-2 items-center"
                    onClick={() => removeFromCart(ele.id)}
                  >
                    Remove <AiTwotoneCloseCircle />
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
