import React from "react";
import { useState } from "react";

const AdditionalInfo = () => {
  const [descriptionFlag, setDescriptionFlag] = useState(true);
  const [additionalInfoFlag, setAdditionalInfoFlag] = useState(false);
  const [reviewsFlag, setReviewsFlag] = useState(false);
  const [activeButton, setActiveButton] = useState(1);

  const hiddenInfoCss = "bg-gray-200 p-12 text-black";
  const btnCss = "px-8 py-4 border-t-4 font-semibold hover:bg-gray-200";

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
  return (
    <div>
      <div className="mt-10 mb-10">
        <div className="flex">
          <button
            onClick={() => {
              descriptionHandler();
              activeButtonHandler(1);
            }}
            className={`${btnCss} ${
              activeButton === 1
                ? "border-violet-700  bg-gray-200"
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
            className={`${btnCss} ${
              activeButton === 2
                ? "border-violet-700  bg-gray-200"
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
            className={`${btnCss} ${
              activeButton === 3
                ? "border-violet-700  bg-gray-200"
                : "bg-white border-white"
            }`}
          >
            Reviews
          </button>
        </div>

        {descriptionFlag ? (
          <div className={hiddenInfoCss}>
            <p>
              Elevate your ensemble with our chic light brown handbag. Its
              practical yet stylish design is ideal for organizing your
              essentials while on the go. Whether you're running errands or
              attending special events, this versatile accessory is sure to
              complement your look with ease.
            </p>
          </div>
        ) : null}

        {additionalInfoFlag ? (
          <div className={hiddenInfoCss}>
            <p>
              Crafted from premium light brown leather, this sophisticated
              handbag boasts a spacious main compartment with multiple pockets
              for your everyday essentials. Its lightweight design, weighing
              only 1.57 pounds, ensures effortless carrying, while the
              adjustable strap offers customizable comfort. Finished with
              stylish gold-tone hardware, this versatile accessory measures
              13.4”L x 6.5”W x 15.4”H, making it perfect for any occasion.
            </p>
          </div>
        ) : null}

        {reviewsFlag ? (
          <div className={hiddenInfoCss}>
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
    </div>
  );
};

export default AdditionalInfo;
