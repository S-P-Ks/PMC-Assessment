import React from "react";

interface Product {
  id: string;
  name: string;
  type: string;
}

const ProductDetails: React.FC<Product> = ({ id, name, type }) => {
  return (
    <div
      className={`w-full h-full bottom-0 left-0 right-0 bg-white py-4 shadow-md`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium">
              {id} : {name}
            </h2>
            <p className="text-gray-500">{type}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
