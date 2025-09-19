import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ui/ProductCard";
import Loader from "../components/ui/Loader";

const Products = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const url = "https://api.escuelajs.co/api/v1/products";

  const fetchProductData = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(url);
      console.log(res.data);
      setProductData(res.data);
    } catch (error) {
      console.log(error);
    }finally{
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <>
     <div className="flex flex-wrap gap-5 justify-center py-10">
      {productData.map((product) => (
        <ProductCard
        key={product.id}
        product={product}
        />
      ))}
    </div>
    {isLoading && <Loader/>}
    </>
   
  );
};

export default Products;
