import React, { useContext } from "react";
import { BsCart2 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { ContextCart } from "../Context/CartContext";

const ProductCardDetail = ({product }) => {
    const {images, title, description,price} = product;
  const navigate = useNavigate();

  const {addToCart} = useContext(ContextCart)

  return (
    <div className="flex gap-20 w-[1000px] mt-10">
      <img src={images?.[0]} alt="" width={400} />

      <div className="flex flex-col gap-3">
        <h2 className="font-bold text-xl">{title}</h2>
        <p className="text-gray-400">{description}</p>
        <p className="text-3xl font-bold ">
          price : <span className="text-green-600">${price}</span>
        </p>
        <button
          onClick={() => navigate(-1)}
          className="bg-green-500 py-2 rounded-lg text-lg text-white cursor-pointer hover:bg-green-600 duration-300 mt-3"
        >
          Go Back
        </button>
        <button
          onClick={() => addToCart(product)}
          className=" px-5 py-2 rounded-lg flex items-center justify-center gap-2 text-green-500 cursor-pointer hover:bg-green-600 hover:text-white border border-green-500  duration-300 mt-3"
        >
          Add to Cart <BsCart2/>
        </button>

      </div>
    </div>
  );
};

export default ProductCardDetail;
