import React, { useState } from "react";
import data from "../../Data/hotProducts";
import AdditionalInfo from "./Additional-Details/AdditionalInfo";
import { Link } from "react-router-dom";

const Product30 = () => {
  const prodPriceOff = "20% OFF";
  const prodActualPrice = "200RS";
  const prodTempPrice = "500RS";
  const prodAvailStatus = "In stock";

  const headerCss = "h-40 bg-violet-600 py-8 mt-24 font-bold mb-24 text-white";
  const smallImgCss =
    "bg-orange-100 rounded-lg w-[150px] h-[150px] border-2 hover:border-violet-600 hover:cursor-pointer p-8";
  const smallImgDivCss = "flex w-[200px] flex-col gap-4 p-4";
  const largeImgCss =
    "w-[400px] h-[400px] transition-all ease-in-out delay-200";
  const largeImgDivCss =
    "bg-orange-100 rounded-lg w-[500px] h-[500px] flex justify-center items-center";
  const btnAddToCartCss =
    "transition-all ease-in delay-100 bg-white rounded-lg border-2 border-violet-600 text-violet-600 px-6 py-3 hover:bg-violet-600 hover:cursor-pointer hover:text-white";
  const btnBuyNowCss =
    "bg-violet-600 rounded-lg  text-white px-6 py-3 hover:bg-violet-700 hover:cursor-pointer";
  const quantityCss =
    "text-center w-16 h-12 border border-violet-600  focus:border-violet-600 rounded-lg";
  const sizeCss =
    "w-80 border h-12 border-violet-600  focus:border-violet-600 rounded-lg";
  const availCss = "text-green-800 bg-green-200 py-1 px-4 rounded-2xl";
  const priceDivCss = "flex items-center gap-4 mt-4 border-b-2 pb-4 mb-4";

  const [largeImageSrc, setLargeImageSrc] = useState();
  const imageHandler = (event) => {
    setLargeImageSrc(event.target.src);
  };
  return (
    <div className="m-4">
      {/* header code starts here */}
      <div className={headerCss}>
        <h1 className="ml-20 text-4xl">{data[29].title}</h1>
        <div className="ml-20 mt-10 flex gap-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <h1>{data[29].title}</h1>
        </div>
      </div>
      {/* header code ends here */}

      {/* small image code starts here */}
      <div className="flex flex-row gap-2 items-center">
        <div className={smallImgDivCss}>
          <div className="m-auto rounded-lg">
            <img
              src={data[29].image}
              alt={data[29].title}
              className={smallImgCss}
              onClick={imageHandler}
            />
          </div>
          <div className="m-auto rounded-lg">
            <img
              src={data[29].image}
              alt={data[29].title}
              className={smallImgCss}
              onClick={imageHandler}
            />
          </div>
          <div className="m-auto rounded-lg">
            <img
              src={data[29].image}
              alt={data[29].title}
              className={smallImgCss}
              onClick={imageHandler}
            />
          </div>
        </div>
        {/* small image code ends here */}

        {/* product image preview code starts here */}
        <div className={largeImgDivCss}>
          <img
            src={
              largeImageSrc == undefined
                ? "../../src/assets/images/no image.webp"
                : largeImageSrc
            }
            alt={data[29].title}
            className={largeImgCss}
          />
        </div>
        {/* product image preview code ends here */}

        <div className="3rd-section flex-1 p-4">
          <div className="flex gap-14 items-center">
            <h1 className="text-4xl font-thin">{data[29].title}</h1>
            <h1 className="bg-violet-600 text-white py-1 px-4 rounded-2xl">
              {prodPriceOff}
            </h1>
          </div>

          <div className={priceDivCss}>
            <h1 className="text-lg font-semibold">{prodActualPrice}</h1>
            <h1 className="text-gray-500 line-through">{prodTempPrice}</h1>
          </div>

          <div className=" flex flex-col gap-8 p-2">
            <div className="flex gap-4 items-center">
              <h1>Availability:</h1>
              <h1 className={availCss}>{prodAvailStatus}</h1>
            </div>

            <div>
              <h1>
                Versatile, comfortable, and chic! Three words that describe
                Bag-Brown by Elyssi.
              </h1>
            </div>

            <div className="flex gap-28 items-center">
              <div>
                <h1>Color:</h1>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-red-600"></div>
                <div className="w-8 h-8 rounded-full bg-green-600"></div>
                <div className="w-8 h-8 rounded-full bg-blue-600"></div>
                <div className="w-8 h-8 rounded-full bg-black"></div>
              </div>
            </div>

            <div className="flex gap-28 items-center">
              <div>
                <h1>Size</h1>
              </div>
              <div>
                <select name="prodSize" id="prodSize" className={sizeCss}>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
            </div>

            <div className="flex gap-[76px] items-center">
              <h1>Quantity:</h1>
              <input
                type="number"
                min="1"
                name="prodQuantity"
                id="prodQuantity"
                className={quantityCss}
              />
            </div>

            <div className="flex gap-12">
              <button className={btnAddToCartCss}>ADD TO CART</button>
              <button className={btnBuyNowCss}>BUY NOW</button>
            </div>
          </div>
        </div>
      </div>

      {/* code starts for table type  */}
      <AdditionalInfo />
    </div>
  );
};

export default Product30;