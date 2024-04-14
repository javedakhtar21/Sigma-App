import React, { useState } from "react";
import data from "../../Data/hotProducts";

const Product1 = () => {
  const prodPriceOff = "20% OFF";
  const prodActualPrice = "200RS";
  const prodTempPrice = "500RS";
  const prodAvailStatus = "In stock";

  const [descriptionFlag, setDescriptionFlag] = useState(true);
  const [additionalInfoFlag, setAdditionalInfoFlag] = useState(false);
  const [reviewsFlag, setReviewsFlag] = useState(false);
  const [activeButton, setActiveButton] = useState(1);

  const activeButtonHandler = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  const descriptionHandler = () => {
    setDescriptionFlag(true);
    setAdditionalInfoFlag(false);
    setReviewsFlag(false);
  };

  const additionalInfoHandler = () => {
    setAdditionalInfoFlag(true);
    setDescriptionFlag(false);
    setReviewsFlag(false);
  };

  const reviewsHandler = () => {
    setReviewsFlag(true);
    setDescriptionFlag(false);
    setAdditionalInfoFlag(false);
  };

  const [largeImageSrc, setLargeImageSrc] = useState();
  const imageHandler = (event) => {
    setLargeImageSrc(event.target.src);
  };
  return (
    <div className="m-4">
      <div className="h-40 bg-violet-600 py-8 mt-24 font-bold mb-24 text-white">
        <h1 className="ml-20 text-4xl">Bag Brown</h1>
        <div className="ml-20 mt-10 flex gap-4">
          <a href="/home" className="hover:underline">
            Home
          </a>
          <h1>Bag Brown</h1>
        </div>
      </div>

      <div className="flex flex-row gap-2 items-center">
        <div className="flex w-[200px] flex-col gap-4 p-4">
          <div className="bg-red-400 m-auto rounded-lg">
            <img
              src={data[0].image}
              alt={data[0].title}
              className="bg-orange-100 rounded-lg w-[150px] h-[150px] border-2 hover:border-violet-600 hover:cursor-pointer p-8 "
              onClick={imageHandler}
            />
          </div>
          <div className="bg-red-400 m-auto rounded-lg">
            <img
              src={data[0].image}
              alt={data[0].title}
              className="bg-orange-100 rounded-lg w-[150px] h-[150px] border-2 hover:border-violet-600 hover:cursor-pointer p-8"
              onClick={imageHandler}
            />
          </div>
          <div className="bg-red-400 m-auto rounded-lg">
            <img
              src={data[0].image}
              alt={data[0].title}
              className="bg-orange-100 rounded-lg w-[150px] h-[150px] border-2 hover:border-violet-600 hover:cursor-pointer p-8"
              onClick={imageHandler}
            />
          </div>
        </div>
        <div className="bg-orange-100 rounded-lg w-[500px] h-[500px] flex justify-center items-center">
          <img
            src={
              largeImageSrc == undefined
                ? "../../src/assets/images/no image.webp"
                : largeImageSrc
            }
            alt={data[0].title}
            className="w-[400px] h-[400px] transition-all ease-in-out delay-200"
          />
        </div>

        <div className="3rd-section flex-1 p-4">
          <div className="flex gap-14 items-center">
            <h1 className="text-4xl font-thin">Brown Bag</h1>
            <h1 className="bg-violet-600 text-white py-1 px-4 rounded-2xl">
              {prodPriceOff}
            </h1>
          </div>

          <div className="flex items-center gap-4 mt-4 border-b-2 pb-4 mb-4">
            <h1 className="text-lg font-semibold">{prodActualPrice}</h1>
            <h1 className="text-gray-500 line-through">{prodTempPrice}</h1>
          </div>

          <div className=" flex flex-col gap-8 p-2">
            <div className="flex gap-4 items-center">
              <h1>Availability:</h1>
              <h1 className="text-green-800 bg-green-200 py-1 px-4 rounded-2xl">
                {prodAvailStatus}
              </h1>
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
                <select
                  name="prodSize"
                  id="prodSize"
                  className="w-80 border h-12 border-violet-600  focus:border-violet-600 rounded-lg"
                >
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
                className="text-center w-16 h-12 border border-violet-600  focus:border-violet-600 rounded-lg"
              />
            </div>

            <div className="flex gap-12">
              <button className="transition-all ease-in delay-100 bg-white rounded-lg border-2 border-violet-600 text-violet-600 px-6 py-3 hover:bg-violet-600 hover:cursor-pointer hover:text-white">
                ADD TO CART
              </button>
              <button className="bg-violet-600 rounded-lg  text-white px-6 py-3 hover:bg-violet-700 hover:cursor-pointer">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* code starts for table type  */}
      <div className="flex">
        <button
          onClick={() => {
            descriptionHandler();
            activeButtonHandler(1);
          }}
          className={`px-8 py-4 border-t-4 font-semibold ${
            activeButton === 1
              ? "border-violet-700  bg-gray-300"
              : "bg-white border-white"
          }`}
        >
          Description
        </button>

        <button
          onClick={() => {
            additionalInfoHandler();
            activeButtonHandler(2);
          }}
          className={`px-8 py-4 border-t-4 font-semibold ${
            activeButton === 2
              ? "border-violet-700  bg-gray-300"
              : "bg-white border-white"
          }`}
        >
          Additional Information
        </button>

        <button
          onClick={() => {
            reviewsHandler();
            activeButtonHandler(3);
          }}
          className={`px-8 py-4 border-t-4 font-semibold ${
            activeButton === 3
              ? "border-violet-700  bg-gray-300"
              : "bg-white border-white"
          }`}
        >
          Reviews
        </button>
      </div>

      {descriptionFlag ? (
        <div className={`bg-gray-300 p-12 text-black }`}>
          <p>
            Elevate your ensemble with our chic light brown handbag. Its
            practical yet stylish design is ideal for organizing your essentials
            while on the go. Whether you're running errands or attending special
            events, this versatile accessory is sure to complement your look
            with ease.
          </p>
        </div>
      ) : null}

      {additionalInfoFlag ? (
        <div className={`bg-gray-300 p-12 text-black}`}>
          <p>
            Crafted from premium light brown leather, this sophisticated handbag
            boasts a spacious main compartment with multiple pockets for your
            everyday essentials. Its lightweight design, weighing only 1.57
            pounds, ensures effortless carrying, while the adjustable strap
            offers customizable comfort. Finished with stylish gold-tone
            hardware, this versatile accessory measures 13.4”L x 6.5”W x 15.4”H,
            making it perfect for any occasion.
          </p>
        </div>
      ) : null}

      {reviewsFlag ? (
        <div className={`bg-gray-300 p-12 text-black `}>
          <p>
            Reviews dolor sit amet consectetur adipisicing elit. Quis non
            tenetur quisquam dolorum cum quod illum natus repellat quibusdam
            autem!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis non
            tenetur quisquam dolorum cum quod illum natus repellat quibusdam
            autem!
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Product1;
