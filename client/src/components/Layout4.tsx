import { useGetProductsQuery } from "../store/apis/productQueries";
import ProductDetails from "./ProductDetails";

function Layout4() {
  const { data: posts } = useGetProductsQuery({
    offset: 8,
    limit: 7,
  });

  return (
    <div className="w-full h-screen">
      <div className="w-full h-1/3">
        <ProductDetails id={"1"} name={"Product 1"} type={"Technology"} />
      </div>

      <div className="w-full h-1/3 flex">
        <div className="w-1/2">
          <ProductDetails id={"1"} name={"Product 1"} type={"Technology"} />
        </div>
        <div className="w-1/2">
          <ProductDetails id={"1"} name={"Product 1"} type={"Technology"} />
        </div>
      </div>

      <div className="w-full h-1/3 flex">
        <div className="w-1/3">
          <ProductDetails id={"1"} name={"Product 1"} type={"Technology"} />
        </div>
        <div className="w-1/3">
          <ProductDetails id={"1"} name={"Product 1"} type={"Technology"} />
        </div>
        <div className="w-1/3">
          <ProductDetails id={"1"} name={"Product 1"} type={"Technology"} />
        </div>
      </div>
    </div>
  );
}

export default Layout4;
