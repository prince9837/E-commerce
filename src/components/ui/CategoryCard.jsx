import React from "react";

const CategoryCard = ({ img, name }) => {
  return (
    <div className=" flex flex-col gap-4 justify-center items-center ">
      <div className="xl:w-[200px] xl:h-[200px] w-[150px] h-[150px] flex rounded-full border-4 cursor-pointer border-green-500 p-2">

      <img className="w-full rounded-full" src={img} alt="" />
      </div>

     
        <p className="text-2xl font-bold">{name}</p>
        
      </div>
  
  );
};

export default CategoryCard;
