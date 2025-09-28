import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
        <div className="w-screen flex flex-col gap-5">
          <div className="xl:w-screen xl:flex w-screen items-center xl:gap-30  bg-[#4e926b]">
            <img
              className="w-[500px] h-[300px] xl:h-[500px]"
              src="https://img.freepik.com/free-vector/flat-fabric-bag-illustrated_23-2149018827.jpg?t=st=1758479296~exp=1758482896~hmac=78138ec71b0f78bbff74403c185ff01182598b18ab81a38c53bc3feeeedb2e28&w=1480"
              alt=""
            />

            <div className="flex gap-4 flex-col xl:w-[50%] w-full px-5 pb-5">
              <h1 className="xl:text-4xl text-3xl text-green-400 font-bold">
                Everything You love, Delivered to your door
              </h1>
              <p className="text-gray-300">
                Discover a wide range of premium-quality products designed to
                make your life easier, smarter, and...{" "}
                <span className="xl:flex hidden">
                  more enjoyable. Whether you're shopping for yourself, your
                  home, or your business, we bring together innovation, style,
                  and value in every item.
                </span>
              </p>

              <Link to="/products">
                <button className="px-5 py-2 xl:px-10 xl:py-2 bg-green-500 text-white text-xl xl:text-xl rounded-lg cursor-pointer">
                  Explore Out Product
                </button>
              </Link>
            </div>
          </div>

          <blockquote class="xl:text-4xl text-3xl font-semibold text-gray-900 italic dark:text-white px-10 xl:px-50 mt-3">
            <span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-green-500">
              <span class="relative text-white dark:text-white-950">
                Categories
              </span>
            </span>
          </blockquote>

          <div className="flex items-center gap-8 xl:px-5 xl:py-5 px-6 py-2 w-screen flex-wrap xl:justify-center">
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
