import React from "react";

import { Link} from "react-router-dom";

const ProductCard = ({ product }) => {
  const {images, title, description,price,id} = product;

  return (
    <Link to={`/products/${id}`} className="w-[250px] justify-center h-[380px] flex flex-col p-3 shadow-lg hover:shadow-2xl rounded-xl duration-300 cursor-pointer px-3">
      <img src={images[0]} alt="" className="w-full rounded-xl" />
      <div className="flex flex-col gap-1">
        <h2 className="font-bold">{title.slice(0,25)}</h2>
        <p className="text-gray-500">{description.slice(0, 50) + "..."}</p>
      </div>
      <p className="mt-4 text-2xl font-semibold text-green-600">Price ${price}</p>
      
    </Link>
  );
};

export default ProductCard;
