import { useGetProductsQuery } from "../store/apis/productQueries";
import ProductDetails from "./ProductDetails";

function Layout1() {
  const { data: posts = [] , isFetching} = useGetProductsQuery({
    offset: 0,
    limit: 2,
  });

  if(isFetching){
    return <div>Loading...</div>
  }

  return (
    <div className="w-full h-screen">
      {posts.map((post: any, index: number) => (
        <div key={index} className="w-full h-1/2">
          <ProductDetails {...post} />
        </div>
      ))}
    </div>
  );
}

export default Layout1;
