import { useGetProductsQuery } from "../store/apis/productQueries";
import ProductDetails from "./ProductDetails";

function Layout2() {
  const { data: posts  = [], isFetching} = useGetProductsQuery({
    offset: 2,
    limit: 3,
  });

  if(isFetching){
    return <div>Loading...</div>
  }

  return (
    <div className="w-full h-screen">
      <div className="w-full h-1/2">
        <ProductDetails {...posts[0]} />
      </div>

      <div className="w-full h-1/2 flex">
        <div className="w-1/2">
          <ProductDetails{...posts[1]}  />
        </div>
        <div className="w-1/2">
          <ProductDetails {...posts[2]} />
        </div>
      </div>
    </div>
  );
}

export default Layout2;
