import React from "react";

const UserRegister = () => {
  const bodyColor = "white";
  document.body.style.backgroundColor = bodyColor;

  const btnSignupCss =
    "text-white font-bold p-2 rounded-md bg-violet-700 w-[100] hover:bg-violet-800 hover:text-white transition bg delay-2";
  const inputCss =
    "w-[100] border-2 rounded-sm h-8 focus:outline-none focus:border-2 focus:border-violet-700";
  const headingCss =
    "text-center font-bold text-2xl decoration-4 underline";
  const labelCss = "text-black";
  const innerDivCss = "w-96 p-4 rounded-md border-2 border-violet-700";
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
              placeholder="Last name"
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

          <div className="text-right">
            <p>
              Already registered{" "}
              <span className="text-lg text-black font-bold hover:cursor-pointer hover:underline hover:text-violet-700">
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
