import Link from "next/link";
import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

function Login({}) {
  const [username, setUsername] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  function handleUserName(e) {
    setUsername(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) return;
    let formData = {
      identifier: username,
      password: password,
    };
    try {
      console.log(formData);
      const response = await axios.post(
        "https://storybuddybackend.onrender.com/api/auth/local",
        formData
      );
      const { jwt } = response.data;
      // Save the JWT token in a cookie
      Cookies.set("token", jwt, { path: "/" });
      console.log(jwt);

      // Optionally, you can also set the user data in state or context
      // For example, if you want to display the username or other user information
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle errors, show error messages, etc.
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-full pl-[16px] pr-[16px]">
        <div className="h-[150px] w-full fixed bg-[url('/assets/img/login-1.png')] bg-no-repeat bg-contain bg-right z-[-1]"></div>

        <div className="mt-[48px] flex-col justify-start items-start gap-1 flex">
          <div className="text-indigo-950 text-base font-normal font-['Poppins']">
            Hello!
          </div>
          <div className="text-indigo-950 text-2xl font-semibold font-['Poppins'] leading-9">
            Log into your account
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mt-[32px]">
            <div className=" text-indigo-950 text-xs font-normal font-['Poppins']">
              Email ID
            </div>
            <input
              onChange={handleUserName}
              type="email"
              className=" w-full h-10 mt-[6px] pl-[16px] pr-[16px] pt-[12px] pb-[12px] bg-white rounded-2xl border border-orange-200 focus:outline-none focus:border-orange-400"
              placeholder="Enter your Email ID"
            />
          </div>
          <div className="mt-[16px]">
            <div className=" text-indigo-950 text-xs font-normal font-['Poppins']">
              Password
            </div>
            <input
              onChange={handlePassword}
              type="password"
              className=" w-full h-10 mt-[6px] pl-[16px] pr-[16px] pt-[12px] pb-[12px] bg-white rounded-2xl border border-orange-200 focus:outline-none focus:border-orange-400"
              placeholder="Enter your Password"
            />
          </div>
          <div className="mt-[8px] text-right flex justify-end">
            <img
              src="./assets/icons/question-mark.png"
              className="w-4 h-4 p-[1.33px] justify-center items-center inline-flex"
            />
            <Link
              href="/forgot-password"
              className="text-indigo-950 text-xs font-normal font-['Poppins'] underline"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="mt-[32px] w-full">
            <button
              type="submit"
              className="w-full py-[11px] bg-amber-100 rounded-2xl border border-indigo-950 shadow-[1px_4px_0px_0px_rgba(39,25,74,1)] justify-center items-center inline-flex"
            >
              <div className="text-center text-indigo-950 text-xs font-semibold font-['Poppins']">
                Log in
              </div>
            </button>
          </div>
        </form>
        <div className="w-full mt-[16px] justify-center items-center gap-2 inline-flex">
          <div className="text-center text-neutral-400 text-xs font-normal font-['Open Sans']">
            OR
          </div>
        </div>
        <div className="mt-[16] w-full h-11">
          <button className="w-full h-10 bg-white rounded-2xl border border-indigo-950 shadow-[1px_4px_0px_0px_rgba(39,25,74,1)] items-center justify-center gap-2 flex">
            <img className="w-4 h-4" src="./assets/icons/google-icon.png" />
            <div className="text-indigo-950 text-xs font-medium font-['Poppins']">
              Log in with Google
            </div>
          </button>
        </div>
        <div className="w-full mt-[8px] h-4 justify-center items-center gap-2 flex">
          <div className="text-indigo-950 text-xs font-normal font-['Open Sans']">
            New here?
          </div>
          <Link
            href="/signup"
            className="text-sky-300 text-xs font-normal font-['Open Sans'] underline"
          >
            Sign Up
          </Link>
        </div>
      </div>
      <div className="h-[150px] bottom-0 left-0 w-full fixed bg-[url('/assets/img/login-2.png')] bg-no-repeat bg-contain bg-left-bottom z-[-1]"></div>
    </div>
  );
}

export default Login;
