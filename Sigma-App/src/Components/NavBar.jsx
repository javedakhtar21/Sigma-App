import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch} from "@fortawesome/free-solid-svg-icons";
const NavBar = () => {
  return (
    <div>
      <div className="border-2 border-black p-4 flex flex-row gap-4 justify-around">
        <div className="flex-initial w-48 bg-slate-400 p-2">
          <button>Search <FontAwesomeIcon icon="fa-solid faSearch" /></button>
          <button>Wishlist</button>
        </div>
        <div className="flex-initial w-72 bg-slate-400 p-2">
          <button>Sigma</button>
        </div>
        <div className="flex-initial w-48 bg-slate-400 p-2">
          <button>Account</button>
          <button>Cart</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
