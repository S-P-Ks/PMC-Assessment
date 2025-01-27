import { Children } from "react";
import { useGetProductsQuery } from "../store/apis/productQueries";
import ProductDetails from "./ProductDetails";

function Layout4() {
  const { data: posts, isFetching } = useGetProductsQuery({
    offset: 8,
    limit: 7,
  });

  if(isFetching){
    return <div>Loading...</div>
  }

  return (
    <div className="w-full h-screen">
      <div className="w-full h-1/3">
        <ProductDetails {...posts[0]}  />
      </div>

      <div className="w-full h-1/3 flex">
        <div className="w-1/2">
        <ProductDetails {...posts[1]}  />
        </div>
        <div className="w-1/2">
          <ProductDetails {...posts[2]}  />
        </div>
      </div>

      <div className="w-full h-1/3 flex">
        <div className="w-1/3">
          <ProductDetails {...posts[3]}  />
        </div>
        <div className="w-1/3">
          <ProductDetails {...posts[4]}  />
        </div>
        <div className="w-1/3">
          <ProductDetails {...posts[5]}  />
        </div>
      </div>
    </div>
  );
}

export default Layout4;
