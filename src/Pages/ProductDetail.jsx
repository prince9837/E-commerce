import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCardDetail from "../components/ui/ProductCardDetail";
import Loader from "../components/ui/Loader";

const ProductDetail = () => {
  const [productData, setProductData] = useState({});

  const [isLoading, setIsLoading] = useState(false)

  const { productId } = useParams();
  console.log(productId)

  const url = `https://api.escuelajs.co/api/v1/products/${productId}`

  const singleProductData = async () => {
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
    singleProductData();
  }, []);

  return (
    <>
     <div className="flex items-center justify-center">
      <ProductCardDetail
        product = {productData}
      />
    </div>
     {isLoading && <Loader/>}
    </>
   
   
  );
};

export default ProductDetail;
