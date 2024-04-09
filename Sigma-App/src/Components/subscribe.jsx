import React from "react";
import Template from "../assets/images/Subscribe.jpg";

const subscribe = () => {
  const subscribeSection = {
    backgroundImage: `url(${Template})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <div
      className="container text-white p-4 mb-5 mx-auto max-w-full"
      style={subscribeSection}
    >
      <div className=" mx-auto ">
        <h1 className="pt-[50px] mx-auto text-center text-4xl font-medium font-serif">
          Let's keep in touch!
        </h1>

        <h3 className="py-[15px] text-center text-xl font-sans">
          Join our list and save 15% off on your first order.
        </h3>

        <div class="flex justify-center items-center py-[30px] gap-[8px]">
          <input
            type="text"
            placeholder="ENTER YOUR EMAIL ADDRESS "
            name="email"
            id="email"
            className="border shadow-2xl w-[60%] p-3 text-black focus:outline-none focus:border-2 focus:border-rose-600"
          />

          <button
            id="subscribe-btn"
            type="button"
            className="bg-gradient-to-r from-red-400 via-red-500 -to-red-600 rounded-lg h-12 p-3 text-white font-semibold hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 text-center w-[20%] text-xl"
          >
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default subscribe;
