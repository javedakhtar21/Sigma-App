import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faHeart,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const iconCss =
    "text-3xl hover:border-2 hover:border-violet-700 hover:rounded-full h-14 w-14 hover:text-violet-700";
  const outerDivCss = "flex flex-row gap-4 justify-around";
  return (
    <div>
      <div className={outerDivCss}>
        <div className="flex flex-initial w-36 p-2 justify-between items-center">
          <button className={iconCss}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <button className={iconCss}>
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>

        <div className="flex flex-initial w-72 p-2 justify-center items-center">
          <button className="font-bold text-3xl uppercase hover:text-violet-700 hover:underline">
            Sigma
          </button>
        </div>

        <div className="flex flex-initial w-36 p-2 justify-between items-center">
          <button className={iconCss}>
            <FontAwesomeIcon icon={faUser} />
          </button>
          <button className={iconCss}>
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
