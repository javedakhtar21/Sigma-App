import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import data from "../Data/hotProducts";
import Paging from "./Paging";
const HotProducts = () => {
  const outerDivCss =
    "m-8 rounded-md flex flex-col shadow-md justify-between gap-2 border-2 hover:border-violet-400 hover:shadow-lg";
  const imageDivCss = "relative bg-green-100 py-12 flex justify-center rounded";
  const labelCss =
    "text-red-600 font-semibold absolute top-2 right-3 bg-red-100 px-6 py-1 rounded-2xl";
  const textDivCss = "flex justify-between p-4";

  return (
    <div>
      <div className="grid grid-cols-4 mt-40">
        {data.map((product) => (
          <div className={outerDivCss} key={product.itemNo}>
            <div className={imageDivCss}>
              <div className={labelCss}>
                <h3>Hot</h3>
              </div>
              <img
                className="rounded-md h-[200px] w-[200px] bg-cover"
                src={product.image}
                alt="gucci black bag"
              />
            </div>

            <div className={textDivCss}>
              <div>
                <p>{product.title}</p>
              </div>
              <div className="text-violet-700 font-bold">
                <p>{product.price}</p>
              </div>
            </div>

            <div className="flex justify-around items-center gap-2 p-4">
              <button className="text-4xl text-black hover:text-violet-700">
                <FontAwesomeIcon icon={faCircleInfo} />
              </button>
              <button className="text-4xl text-black hover:text-violet-700">
                <FontAwesomeIcon icon={faCartShopping} />
              </button>
              <button className="text-4xl text-black hover:text-violet-700">
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <Paging data={data} itemsPerPage={4}/>
    </div>
  );
};

export default HotProducts;
