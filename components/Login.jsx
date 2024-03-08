import React from "react";

function Login() {
  return (
    <div className="flex justify-center">
      <div className="h-[150px] w-full absolute bg-[url('/assets/img/login-1.png')] bg-no-repeat bg-contain bg-right"></div>
      <div className="w-[414px] pl-[16px] pr-[16px] bg-white">
        <div className="w-full pt-[48px] justify-start items-center gap-3 flex">
          <div className="px-4 py-1.5 bg-amber-100 rounded-lg border border-indigo-950 justify-center items-center gap-2.5 flex">
            <div className="text-center text-indigo-950 text-xs font-semibold font-['Poppins']">
              Log in
            </div>
          </div>
          <div className="text-center text-zinc-800 text-xs font-normal font-['Poppins']">
            Sign Up
          </div>
        </div>
        <div className="mt-[48px] flex-col justify-start items-start gap-1 flex">
          <div className="text-indigo-950 text-base font-normal font-['Poppins']">
            Hello!
          </div>
          <div className="text-indigo-950 text-2xl font-semibold font-['Poppins'] leading-9">
            Log into your account
          </div>
        </div>
        <div className="mt-[32px]">
          <div className=" text-indigo-950 text-xs font-normal font-['Poppins']">
            Email ID
          </div>
          <input
            className=" w-full h-10 mt-[6px] pl-[16px] pr-[16px] pt-[12px] pb-[12px] bg-white rounded-2xl border border-orange-200 focus:outline-none focus:border-orange-400"
            placeholder="Enter your Email ID"
          />
          {/* <div className=" text-zinc-500 text-xs font-normal font-['Poppins']"></div> */}
        </div>
        <div className="mt-[16px]">
          <div className=" text-indigo-950 text-xs font-normal font-['Poppins']">
            Password
          </div>
          <input
            className=" w-full h-10 mt-[6px] pl-[16px] pr-[16px] pt-[12px] pb-[12px] bg-white rounded-2xl border border-orange-200 focus:outline-none focus:border-orange-400"
            placeholder="Enter your Password"
          />
        </div>
        <div className="mt-[8px] text-right flex justify-end">
          <img
            src="./assets/icons/question-mark.png"
            className="w-4 h-4 p-[1.33px] justify-center items-center inline-flex"
          />
          <div className="text-indigo-950 text-xs font-normal font-['Poppins'] underline">
            Forgot Password?
          </div>
        </div>
        <div className="mt-[32px] w-full">
          <div className="w-full py-[11px] bg-amber-100 rounded-2xl border border-indigo-950 shadow-[1px_4px_0px_0px_rgba(39,25,74,1)] justify-center items-center inline-flex">
            <div className="text-center text-indigo-950 text-xs font-semibold font-['Poppins']">
              Log in
            </div>
          </div>
          {/* <div className="mt-[-20px]  h-10 bg-indigo-950 rounded-2xl border border-indigo-950" /> */}
        </div>
        <div className="w-full mt-[16px] justify-center items-center gap-2 inline-flex">
          <div className="text-center text-neutral-400 text-xs font-normal font-['Open Sans']">
            OR
          </div>
        </div>
        <div className="mt-[16] w-full h-11">
          <div className="w-full h-10 bg-white rounded-2xl border border-indigo-950 shadow-[1px_4px_0px_0px_rgba(39,25,74,1)] items-center justify-center gap-2 flex">
            <img className="w-4 h-4" src="./assets/icons/google-icon.png" />
            <div className="text-indigo-950 text-xs font-medium font-['Poppins']">
              Log in with Google
            </div>
          </div>
        </div>
      </div>
      <div className="h-[150px] bottom-0 left-0 w-full absolute bg-[url('/assets/img/login-2.png')] bg-no-repeat bg-contain bg-left-bottom"></div>
    </div>
  );
}

export default Login;
