import { useGetProductsQuery } from "../store/apis/productQueries";
import ProductDetails from "./ProductDetails";

function Layout1() {
  const { data: posts } = useGetProductsQuery({
    offset: 0,
    limit: 2,
  });

  return (
    <div className="w-full h-screen">
      <div className="w-full h-1/2">
        <ProductDetails id={"1"} name={"Product 1"} type={"Technology"} />
      </div>

      <div className="w-full h-1/2">
        <ProductDetails id={"1"} name={"Product 1"} type={"Technology"} />
      </div>
    </div>
  );
}

export default Layout1;
