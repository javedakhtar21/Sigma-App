import React from "react";
import { useState } from "react";

const NavBar2 = () => {
  const menuItemCss =
    "hover:text-violet-700 hover:font-bold hover:underline cursor-pointer font-semibold w-[100px]";
  const subMenuItemCss =
    "hover:text-violet-700 hover:font-semibold hover:cursor-pointer p-1";
  const subMenuHeadlineCss = "text-violet-700 font-bold underline mb-2";
  const subMenuItemDivcss = "flex flex-col w-40 p-2";
  const subMenuMainDivCss =
    "flex flex-row absolute -left-60 top-6 shadow-lg rounded-lg p-4 z-10 bg-white";
  const menuItemDivCss =
    "flex flex-row justify-between flex-initial w-[600px] gap-4";
  const menuItemMainDivCss = "p-2 flex flex-row justify-center mt-6";

  const [isHovered, setIsHovered] = useState(false);

  const mouseOverHandler = () => {
    setIsHovered(true);
  };

  const mouseOutHandler = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <div className={menuItemMainDivCss}>
        <ul className={menuItemDivCss}>
          <li className={menuItemCss}>Home</li>
          <li className={menuItemCss}>About</li>
          <div
            className="flex gap-4 justify-between items-center relative"
            onMouseOver={mouseOverHandler}
            onMouseOut={mouseOutHandler}
          >
            <li className={menuItemCss}>Collections </li>
            {isHovered ? (
              <div className={subMenuMainDivCss}>
                <div className={subMenuItemDivcss}>
                  <h3 className={subMenuHeadlineCss}>Man</h3>
                  <li className={subMenuItemCss}>Boots</li>
                  <li className={subMenuItemCss}>Blutcher Boot</li>
                  <li className={subMenuItemCss}>Chalsea Boot</li>
                  <li className={subMenuItemCss}>Chukka Boot</li>
                  <li className={subMenuItemCss}>Dress Boot</li>
                  <li className={subMenuItemCss}>Work Boot</li>
                </div>
                <div className={subMenuItemDivcss}>
                  <h3 className={subMenuHeadlineCss}>Woman</h3>
                  <li className={subMenuItemCss}>Accessories</li>
                  <li className={subMenuItemCss}>Belts</li>
                  <li className={subMenuItemCss}>Caps</li>
                  <li className={subMenuItemCss}>Laces</li>
                  <li className={subMenuItemCss}>Socks</li>
                </div>
                <div className={subMenuItemDivcss}>
                  <h3 className={subMenuHeadlineCss}>Kids</h3>
                  <li className={subMenuItemCss}>Shoes</li>
                  <li className={subMenuItemCss}>Derby Shoes</li>
                  <li className={subMenuItemCss}>Belts</li>
                  <li className={subMenuItemCss}>Caps</li>
                  <li className={subMenuItemCss}>Laces</li>
                  <li className={subMenuItemCss}>Socks</li>
                </div>
                <div className="flex w-48">
                  <img
                    src="https://cdn.pixabay.com/photo/2023/06/05/17/19/shopping-8042865_1280.png"
                    alt="man with shop bags"
                  />
                </div>
              </div>
            ) : null}
          </div>
          <li className={menuItemCss}>FAQ</li>
          <li className={menuItemCss}><a href="/contact">Contact</a></li>
          <li className={menuItemCss}>Login/SignUp</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar2;
