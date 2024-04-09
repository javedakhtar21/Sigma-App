import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <>
      <div classname="mt-8">
        <div className="mt-[20px] mb-[20px] mx-auto max-w-[98%] py-[50px] bg-violet-700 text-white">
          <h1 className="font-bold font-serif text-white text-[50px] ml-[5%]">
            Contact Us
          </h1>
          <div className="text-xl font-semibold ml-[5%] pb-[50px]">
            <a href="/" className="px-1 hover:text-black">
              Home
            </a>
            <span>.</span>
            <span className="px-1 hover:text-black">Contact Us</span>
          </div>
        </div>

        <div className="max-w-[98%] mx-auto mt-[20px] mb-[20px]">
          <div className="grid grid-cols-6 gap-[80px]">
            <div className="col-span-2 border border-gray-400">
              <h1 className="py-8 border-b-2 border-gray-200 text-4xl text-center font-serif w-[90%] mx-auto">
                Quick Contact
              </h1>
              <div className="py-3 ml-[5%] mt-[10%]">
                <p className="text-[20px] text-black font-semibold">EMAIL</p>
                <p className="text-[17px] text-gray-500">sigma1105@gmail.com</p>
              </div>
              <div className=" ml-[5%] mt-[5%]">
                <p className="text-[20px] text-black font-semibold">PHONE NO.</p>
                <p className="text-[17px] text-gray-500">+91-7323827463</p>
              </div>
              <div className="ml-[5%] mt-[5%]">
                <p className="text-[20px] text-black font-semibold">FOLLOW US</p>
                <FontAwesomeIcon icon="fa-brands fa-facebook" />
              </div>

            </div>

            <div className="col-span-4 border border-gray-400">
              {/* Content for the second box */}
              Second Box
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
