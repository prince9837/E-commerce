import React from "react";

import { Link} from "react-router-dom";

const ProductCard = ({ product }) => {
  const {images, title, description,price,id} = product;

  return (
    <Link to={`/products/${id}`} className="xl:w-[250px] w-[150px] justify-center xl:h-[450px] h-[325px] flex flex-col shadow-lg hover:shadow-2xl rounded-xl duration-300 cursor-pointer px-3">
      <img src={images[0]} alt="" className="w-full rounded-xl" />
      <div className="flex flex-col gap-1">
        <h2 className="font-bold">{title.slice(0,25)}</h2>
        <p className="text-gray-500 h-[50px]">{description.slice(0, 50) + "..."}</p>
      </div>
      <p className="mt-4 py-8 text-2xl font-semibold text-green-600">Price ${price}</p>
      
    </Link>
  );
};

export default ProductCard;
