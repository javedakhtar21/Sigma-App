import React from "react";
import data from "../../Data/hotProducts";
const Product1 = () => {
  return (
    <div className="m-8">
      <div className="h-40 bg-gray-300 p-4 mt-24 font-bold text-4xl mb-24">
        <h1 className="ml-20 underline">Bag Brown</h1>
      </div>

      <div className="flex flex-row gap-4 border-2 border-black">
        <div className="flex w-[200px] flex-col gap-4 p-4 border-2 border-black">
          <div>
            <img
              src={data[0].image}
              alt={data[0].title}
              className="w-[150px] h-[150px]"
            />
          </div>
          <div>
            <img
              src={data[0].image}
              alt={data[0].title}
              className="w-[150px] h-[150px]"
            />
          </div>
          <div>
            <img
              src={data[0].image}
              alt={data[0].title}
              className="w-[150px] h-[150px]"
            />
          </div>
        </div>
        <div className="bg-orange-200 w-[500px] h-[500px] flex justify-center items-center border-2 border-black">
          <img
            src={data[0].image}
            alt={data[0].title}
            className="w-[300px] h-[300px]"
          />
        </div>
        <div className="border-2 border-black flex-1">
          <h1>Brown Bag</h1>
        </div>
      </div>
    </div>
  );
};

export default Product1;