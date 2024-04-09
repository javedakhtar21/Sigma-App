import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const HotProducts = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  let totalPages = Math.ceil(data.length / itemsPerPage);
  let indexOfLastItem = currentPage * itemsPerPage;
  let indexOfFirstItem = indexOfLastItem - itemsPerPage;
  let currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (currentPage < 1) {
    setCurrentPage(totalPages);
  } else if (currentPage > totalPages) {
    setCurrentPage(1);
  }

  const iconsDivCss='flex justify-around items-center gap-2 p-4';
  const iconsCss='text-4xl text-black hover:text-violet-700';
  const outerDivCss =
    "m-8 rounded-md flex flex-col shadow-md justify-between gap-2 border-2 hover:border-violet-400 hover:shadow-lg";
  const imageDivCss = "relative bg-green-100 py-12 flex justify-center rounded";
  const labelCss =
    "text-red-600 font-semibold absolute top-2 right-3 bg-red-100 px-6 py-1 rounded-2xl";
  const textDivCss = "flex justify-between p-4";
  const pageBtnCss = `p-2 bg-gray-300 font-bold cursor-pointer hover:bg-violet-700 hover:text-white px-4 "
  }`;

  return (
    <div>
      <div className="grid grid-cols-4 mt-40">
        {currentItems.map((product) => (
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

            <div className={iconsDivCss}>
              <button className={iconsCss}>
                <FontAwesomeIcon icon={faCircleInfo} />
              </button>
              <button className={iconsCss}>
                <FontAwesomeIcon icon={faCartShopping} />
              </button>
              <button className={iconsCss}>
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center m-8">
        <div className="flex justify-between gap-2">
          {currentItems.map((item) => {
            <h1 className={pageBtnCss}>{item}</h1>;
          })}

          {
            <button
              onClick={() => {
                handlePageChange(currentPage - 1);
              }}
              className={pageBtnCss}
            >
              Prev
            </button>
          }

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => {
                handlePageChange(i + 1);
              }}
              className={pageBtnCss}
            >
              {i + 1}
            </button>
          ))}

          {
            <button
              onClick={() => {
                handlePageChange(currentPage + 1);
              }}
              className={pageBtnCss}
            >
              Next
            </button>
          }
        </div>
      </div>
    </div>
  );
};

export default HotProducts;