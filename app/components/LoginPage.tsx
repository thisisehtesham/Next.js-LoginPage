import React from "react";

function LoginPage() {
    return (
        <div className="flex justify-between">
            {/* LEFT SIDE */}
            <div className="flex flex-col gap-10">
                <div className="text-white text-6xl font-semibold font-['DM Sans'] pt-[32px]">
                    <h1>Generate</h1>
                    <h1 className="pt-4">Awesome Web</h1>
                    <h1 className="pt-4">Pages</h1>
                </div>
                <p className="text-white w-[363px] text-xl font-medium font-['DM Sans']">
                    The most important part of the <br /> Startup is the
                    samples. The
                    <br /> samples form a set of 25 usable <br /> pages you can
                    use as is or you can <br /> add new blocks.
                </p>
                <button className="bg-[#E93A7D] text-white rounded-full w-[157px] h-[50px]">
                    Learn More
                </button>
            </div>

            {/* RIGHT SIDE */}
            <div className="bg-white flex flex-col p-5 rounded-[10px] w-[470px] h-[600px] items-center">
                <p className="text-center text-violet-950 text-[42px] font-bold font-['DM Sans'] py-[24px]">
                    Sign Up Now
                </p>
                <input
                    className="my-2 border border-1 border-gray-100 p-3 rounded-full focus:outline-1 outline-blue-600 w-[330px] h-[50px]"
                    type="text"
                    placeholder="Your email"
                />
                <input
                    className="my-2 border border-1 border-gray-100 p-3 rounded-full focus:outline-1 outline-blue-600 w-[330px] h-[50px]"
                    type="password"
                    placeholder="Your password"
                />

                <div className="text-slate-900 text-opacity-40 text-base font-normal">
                    <div className="py-[20px]">
                        <input
                            type="checkbox"
                            name="ch"
                            id="ch"
                            className="mr-2 text-[#23DAC4]"
                        />
                        <span className="text-md font-['DM Sans'] ">
                            I agree to the Terms of Service.
                        </span>
                    </div>
                </div>

                <button className="bg-[#482BE7] my-2 py-2 text-lg font-bold text-white rounded-full hover:bg-[#2F1893] w-[330px] h-[50px]">
                    Sign in
                </button>
                <div className="flex items-center w-[328px] h-[26px] py-[20px]">
                    <hr className="flex-1 border-t-2 border-gray-300" />
                    <span className="mx-4 text-slate-900 text-opacity-40">
                        or
                    </span>
                    <hr className="flex-1 border-t-2 border-gray-300" />
                </div>
                <button className="bg-[#1EA1F1] my-2 py-2 text-lg font-bold text-white rounded-full hover:bg-[#1973af] w-[330px] h-[50px]">
                    Login via Twitter
                </button>
                <div className="flex py-[30px]">
                    <p className="text-slate-900 text-opacity-40 text-lg font-medium font-['DM Sans']">
                        Do you have an Account?
                    </p>
                    <p className="text-[#23DAC4] cursor-pointer pl-2">
                        Sign In
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
