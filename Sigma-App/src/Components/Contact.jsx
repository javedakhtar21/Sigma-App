import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

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
            <div className="col-span-2 border border-gray-400 shadow-gray-400 shadow-md ">
              <h1 className="py-8 border-b-2 border-gray-200 text-4xl text-center font-serif w-[90%] mx-auto">
                Quick Contact
              </h1>
              <div className="py-3 ml-[5%] mt-[20%]">
                <p className="text-[20px] text-black font-semibold">EMAIL</p>
                <p className="text-[17px] text-gray-500">sigma1105@gmail.com</p>
              </div>
              <div className=" ml-[5%] mt-[8%]">
                <p className="text-[20px] text-black font-semibold">
                  PHONE NO.
                </p>
                <p className="text-[17px] text-gray-500">+91-7323827463</p>
              </div>
              <div className="ml-[5%] mt-[20%] mb-[15%]">
                <p className="text-[20px] text-black font-semibold">
                  FOLLOW US
                </p>
                <div className="flex gap-8 mt-4 text-3xl pb-4">
                  <button className="text-violet-700  hover:text-violet-800">
                    <FontAwesomeIcon icon={faFacebook} />
                  </button>
                  <button className="text-violet-700  hover:text-violet-800">
                    <FontAwesomeIcon icon={faTwitter} />
                  </button>
                  <button className="text-violet-700  hover:text-violet-800">
                    <FontAwesomeIcon icon={faGoogle} />
                  </button>
                  <button className="text-violet-700  hover:text-violet-800">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </button>
                  <button className="text-violet-700  hover:text-violet-800">
                    <FontAwesomeIcon icon={faInstagram} />
                  </button>
                </div>
              </div>
            </div>

            <div className="col-span-4 border border-gray-400 shadow-gray-400 shadow-md pt-[5%] pb-[5%]">
              <div className="mx-auto max-w-[95%]">
                <p className="text-xl pb-[5%]">
                  Any Questions? Contact us on Whatsapp or on our contact from
                  below.
                </p>

                <div className="grid grid-cols-2 gap-[3%]">
                  <div>
                  <label for="name">Name</label>
                  <br />
                  <input type="text" id="name" placeholder="Enter your name" className=" mt-2 w-[100%] text-[18px] p-[0.7rem]  appearance-none border border-gray-300 rounded-md focus:bg-gray-100"  />
                  </div>
                  <div>
                  <label for="email">Email address</label>
                  <br />
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-[100%] text-[18px] p-[0.7rem] mt-2  appearance-none border border-gray-300 rounded-md focus:bg-gray-100"
                  />
                  </div>
                </div>

                <div className="mt-[3%]">
                <label for="subject">Subject</label>
                  <br />
                  <input type="text" id="subject" placeholder="Enter your subject" className=" mt-2 w-[100%] text-[18px] p-[0.7rem]  appearance-none border border-gray-300 rounded-md focus:bg-gray-100"  />
                </div>

                <div className="mt-[3%]">
                  <label for="message">Message</label><br/>
                  <textarea placeholder='Enter your Message' rows='7' className="border  border-gray-300 rounded-md focus:bg-gray-100 w-[100%] text-[17px] p-[0.8rem]"></textarea>
                </div>

                <button className="mt-[3%] text-[18px] p-[0.8rem] border w-[15%] rounded-md bg-orange-600 text-white text-semibold hover:bg-orange-700">SUBMIT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
