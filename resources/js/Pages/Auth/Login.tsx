import React from "react";

import UserIcon from "../../Components/Icons/MaterialSymbolsPerson";
import LockIcon from "../../Components/Icons/MaterialSymbolsLock";

import lockLogo from "../../../images/lock-icon.svg";

import LoginCarousel from "../../Components/LoginCarousel";
import { Head } from "@inertiajs/react";

const LoginPage = () => {
    return (
        <>
            <Head title="vMAN - NNPC" />
            <section className=" max-w-[2000px] mx-auto w-full bg-green-800 max-h-screen flex flex-col lg:flex-row-reverse">
                <div className="bg-white flex flex-col justify-center h-[calc(100vh-300px)] gap-6 md:flex-grow lg:w-1/2 md:h-screen md:px-32">
                    <div className="px-4 flex items-center gap-4">
                        <div>
                            <img src={lockLogo} alt="Lock Icon" />
                        </div>
                        <h1 className="font-bold text-4xl">
                            <span className="text-yellow-600">v</span>
                            <span className="text-green-900">MAN</span>
                        </h1>
                    </div>
                    <form action="" className="px-4 my-4">
                        <h2 className="font-semibold text-xl">LOGIN</h2>
                        <div className="flex items-center gap-2 border-slate-600 border my-4 px-1 rounded-md">
                            <label htmlFor="" className="">
                                <span className="sr-only">Staff ID</span>
                                <UserIcon className="text-xl" />
                            </label>
                            <input
                                type="text"
                                placeholder="Staff ID"
                                className="py-2 w-full outline-none focus:outline-none"
                            />
                        </div>
                        <div className="flex items-center gap-2 border-slate-600 border my-4 px-1 rounded-md">
                            <label htmlFor="" className="">
                                <span className="sr-only">Password</span>
                                <LockIcon className="text-xl" />
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="py-2 w-full outline-none focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-2 mb-2">
                            <input
                                type="submit"
                                value="Login"
                                className="uppercase bg-green-900 text-white w-full py-2 my-4 font-bold rounded-md hover:shadow-lg cursor-pointer hover:bg-green-600 transition-colors duration-200 ease-in"
                            />
                            <a
                                href="/"
                                className="text-xs  md:text-sm text-green-900"
                            >
                                Contact support
                            </a>
                        </div>
                    </form>
                </div>
                <LoginCarousel className="lg:w-1/2 " />
            </section>
        </>
    );
};

export default LoginPage;
