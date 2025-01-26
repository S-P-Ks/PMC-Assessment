import { useGetProductsQuery } from "../store/apis/productQueries";
import ProductDetails from "./ProductDetails";

function Layout2() {
  const { data: posts } = useGetProductsQuery({
    offset: 2,
    limit: 3,
  });

  return (
    <div className="w-full h-screen">
      <div className="w-full h-1/2">
        <ProductDetails id={"1"} name={"Product 1"} type={"Technology"} />
      </div>

      <div className="w-full h-1/2 flex">
        <div className="w-1/2">
          <ProductDetails id={"1"} name={"Product 1"} type={"Technology"} />
        </div>
        <div className="w-1/2">
          <ProductDetails id={"1"} name={"Product 1"} type={"Technology"} />
        </div>
      </div>
    </div>
  );
}

export default Layout2;
