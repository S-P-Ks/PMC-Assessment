import { useGetProductsQuery } from "../store/apis/productQueries";
import ProductDetails from "./ProductDetails";

function Layout3() {
  const { data: posts } = useGetProductsQuery({
    offset: 5,
    limit: 3,
  });

  return (
    <div className="w-full h-screen">
      <div className="w-full h-1/3">
        <ProductDetails id={"1"} name={"Product 1"} type={"Technology"} />
      </div>

      <div className="w-full h-1/3">
        <ProductDetails id={"1"} name={"Product 1"} type={"Technology"} />
      </div>

      <div className="w-full h-1/3">
        <ProductDetails id={"1"} name={"Product 1"} type={"Technology"} />
      </div>
    </div>
  );
}

export default Layout3;
