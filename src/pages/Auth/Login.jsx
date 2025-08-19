import React, { useState } from "react";
import LoginImage from "/src/assets/Login_image.png";
import Logo from "/src/assets/Logo.png";
import { useNavigate } from "react-router";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  // use state for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   Navigate
  const navigate = useNavigate();


  // function handle login
  function handleLogin() {
    if (email === "Admin" && password === "Admin") {
      console.log("ready to navigate the dashboard");
      navigate('/dashboard');

    } else {
      alert('Enter Valid username and Password');

    //   Resert Alerts
    setEmail('');
    setPassword('');
      
    }
  }

  return (
    <>
      <div className="login md:flex justify-between  text-white h-dvh md:overflow-y-hidden">
        <div className="login-left md:w-1/2 w-full py-5 px-10 bg-gradient-to-r from-black to-[#050517]">
          <h1 className="text-4xl font-semibold">
            Unlock Your Sales Potential
          </h1>
          <h1 className="text-[16px] font-normal py-3 text-white/80">
            Access real-time sales insights, track performance, and drive growth
            with <br /> the Prism Sales Dashboard.
          </h1>
          <img src={LoginImage} alt="" />
        </div>
        <div className="login-right bg-white md:w-1/2 w-full py-5 md:px-20 px-0 md:flex flex-col gap-10">
          <div className="logo px-8">
            <img src={Logo} alt="" className="w-[50px]"/>
          </div>
          <div className="logo-txt text-black p-10">
            <h2 className="md:text-5xl text-4xl font-bold">Welcome Admin!</h2>
            <p className="py-2 font-semibold pb-5 text-black/50">
              Login and fill the details enter inside the dashboard.
            </p>
            {/* Login place */}
            <div className="user flex flex-col">
              <label htmlFor="name" className="font-bold">
                Username
              </label>
              <input
                type="text"
                name="name"
                id=""
                placeholder="🧔🏻 Enter User Name"
                value={email} //Bind value of state
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-black/15 py-3 px-5 outline-none mt-3"
                maxLength={25}
              />
            </div>
            <div className="user-pwd flex flex-col pt-8">
              <label htmlFor="password" className="font-bold">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id=""
                placeholder="☝️ Password"
                value={password} //Bind thr value of passwprd
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-black/15 py-3 px-5 outline-none mt-3"
                maxLength={16}
              />
            </div>

            <div
              className="py-3 font-bold"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? "🙈 Hide" : "👁 Show"}
            </div>

            <input
              type="submit"
              value="Login"
              placeholder="Login"
              className="bg-black hover:bg-[#010c0f] text-white mt-5 py-3 px-20 w-full hover:cursor-pointer font-bold text-[19px]"
              onClick={(e) => {
                e.preventDefault(); // Prevents page reload on form submit
                handleLogin();
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
