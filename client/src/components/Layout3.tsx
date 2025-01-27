import { useGetProductsQuery } from "../store/apis/productQueries";
import ProductDetails from "./ProductDetails";

function Layout3() {
  const { data: posts ,isFetching} = useGetProductsQuery({
    offset: 5,
    limit: 3,
  });
  
  if(isFetching){
    return <div>Loading...</div>
  }

  return (
    <div className="w-full h-screen">
      <div className="w-full h-1/3">
        <ProductDetails {...posts[0]}  />
      </div>

      <div className="w-full h-1/3">
        <ProductDetails {...posts[1]} />
      </div>

      <div className="w-full h-1/3">
        <ProductDetails {...posts[2]}  />
      </div>
    </div>
  );
}

export default Layout3;
