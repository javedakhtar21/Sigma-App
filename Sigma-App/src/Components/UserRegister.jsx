import React from "react";

const UserRegister = () => {
  const bodyColor = "white";
  document.body.style.backgroundColor = bodyColor;

  const btnSignupCss =
    "text-black font-bold p-2 rounded-md bg-white w-[100] hover:bg-black hover:text-white transition bg delay-2";
  const inputCss =
    "w-[100] rounded-md h-8 focus:outline-none focus:border-r-8 border-black";
  const headingCss = "text-center text-white font-bold text-2xl decoration-4 underline";
  const labelCss = "text-white";
  const innerDivCss = "bg-violet-700 w-96 p-4 rounded-md";
  const outerDivCss = "flex justify-center flex-col items-center p-4 h-screen";
  return (
    <div>
      <div className={outerDivCss}>
        <div className={innerDivCss}>
          <div className={headingCss}>
            <h2>Sign Up</h2>
          </div>

          <div className="flex flex-col p-4 gap-2">
            <label htmlFor="fname" className={labelCss}>
              First name
            </label>
            <input
              type="text"
              className={inputCss}
              name="fname"
              id="fname"
              placeholder="First name"
            />

            <label htmlFor="lname" className={labelCss}>
              Last name
            </label>
            <input
              type="text"
              className={inputCss}
              name="lname"
              id="lname"
              placeholder="Lastt name"
            />

            <label htmlFor="email" className={labelCss}>
              Email address
            </label>
            <input
              type="text"
              className={inputCss}
              name="email"
              id="email"
              placeholder="Enter email"
            />

            <label htmlFor="psw" className={labelCss}>
              Password
            </label>
            <input
              type="text"
              className={inputCss}
              name="psw"
              id="psw"
              placeholder="Enter password"
            />

            <button id="btnSignup" className={btnSignupCss}>
              Sign Up
            </button>
          </div>

          <div className="text-right text-white">
            <p>
              Already registered{" "}
              <span className="text-lg text-black font-bold hover:cursor-pointer hover:underline">
                Sign in?
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
