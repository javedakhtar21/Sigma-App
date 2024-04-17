import React from 'react'
import { Link } from 'react-router-dom'

function userLogin() {

    const bodyColor = "white";
    document.body.style.backgroundColor = bodyColor;
  
    const btnLogInCss =
      "text-white font-bold p-2 rounded-md bg-violet-700 w-[100] hover:bg-violet-800 hover:text-white transition bg delay-2";
    const inputCss =
      "w-[100] border-2 rounded-sm h-8 focus:outline-none focus:border-2 focus:border-violet-700";
    const headingCss =
      "text-center font-bold text-2xl decoration-4 underline";
    const labelCss = "text-black";
    const innerDivCss = "w-96 p-4 rounded-md border-2 border-violet-700";
    const outerDivCss = "flex justify-center flex-col items-center p-4 h-screen";

  return (
    <>
    <div>
      <div className={outerDivCss}>
        <div className={innerDivCss}>
          <div className={headingCss}>
            <h2>Login</h2>
          </div>

          <div className="flex flex-col p-4 gap-2">
            
            <label htmlFor="email" className={labelCss}>
              Email :
            </label>
            <input
              type="text"
              className={inputCss}
              name="email"
              id="email"
              placeholder="Enter email"
            />

            <label htmlFor="psw" className={labelCss}>
              Password:
            </label>
            <input
              type="password"
              className={inputCss}
              name="psw"
              id="psw"
              placeholder="Enter password"
            />

            <button id="btnLogIn" className={btnLogInCss}>
              LogIn
            </button>
          </div>

          <div className="text-center">
            <p>
              Don't have an account?{" "}
              <span className="text-lg text-black font-bold hover:cursor-pointer hover:underline hover:text-violet-700">
              <Link to='/signup'>SignUp</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default userLogin;