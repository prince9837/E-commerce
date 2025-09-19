import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import CategoryCard from "../components/ui/CategoryCard";
import axios from "axios";

const Home = () => {
  const [categoryData, setcategoryData] = useState([]);
  const Url = "https://api.escuelajs.co/api/v1/categories";

  const fetchCategoryData = async () => {
    const res = await axios.get(Url);
    setcategoryData(res.data);
    // console.log(res.data);
  };

  useEffect(() => {
    fetchCategoryData();
  }, []);

  return (
    <>
      <section className="flex items-center py-10 flex-col">
        <div className="h-[50%] flex flex-col gap-5">
          <div className="flex w-screen items-center gap-30 relative">
            <img
              className="h-[300px] xl:h-[90%] w-screen"
              src="https://t3.ftcdn.net/jpg/02/84/32/52/360_F_284325273_ei2pxwlAyg4ghLOBINFPiF1LVubbfLpA.jpg"
              alt=""
            />

             <div className="absolute right-[0%] top-[17%] xl:right-[20%] xl:top-[20%] w-[200px] h-[200px] xl:w-[500px] xl:h-[300px] flex gap-4 flex-col">
            <h1 className="xl:text-4xl text-green-400 font-bold">
              Everything You love, Delivered to your door
            </h1>
            <p className="text-gray-300">
              Discover a wide range of premium-quality products designed to make
              your life easier, smarter, and... <span className="xl:flex hidden">more enjoyable. Whether you're
              shopping for yourself, your home, or your business, we bring
              together innovation, style, and value in every item.</span>
            </p>

            <Link to="/products">
              <button className="px-5 py-2 xl:px-10 xl:py-2 bg-green-500 text-white xl:text-xl rounded-lg cursor-pointer">
                Explore Out Product
              </button>
            </Link>
          </div>
          </div>

         

          <blockquote class="xl:text-4xl text-xl font-semibold text-gray-900 italic dark:text-white px-5 mt-3">
            <span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-green-500">
              <span class="relative text-white dark:text-white-950">
                Categories
              </span>
            </span>
          </blockquote>

          <div className="flex items-center gap-8 xl:px-5 xl:py-5 px-2 py-2 w-screen flex-wrap">
            {categoryData.map((ele) => {
              return (
                <CategoryCard key={ele.id} name={ele.name} img={ele.image} />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
