"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const page = () => {
    const routes = useRouter();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleToNavigate = () => {
        routes.push("/registration");
    }

    return (
        <div>
            <div className="min-h-screen flex items-center justify-center p-4">
                <form
                    // onSubmit={handleLoginSubmit}
                    className="w-full max-w-md bg-gray-800 p-6 rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-[1.02]"
                >
                    <h2 className="text-2xl font-semibold text-white mb-6 text-center animate-pulse">
                        Login to Your Account
                    </h2>

                    <div className="mb-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            onChange={handleLoginChange}
                            className="w-full p-3 rounded-xl bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                        />
                        {/* {errors.email && <p className="text-red-400 text-sm mt-1 ml-1">{errors.email}</p>} */}
                    </div>

                    <div className="mb-6">
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            onChange={handleLoginChange}
                            className="w-full p-3 rounded-xl bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                        />
                        {/* {errors.password && <p className="text-red-400 text-sm mt-1 ml-1">{errors.password}</p>} */}
                    </div>


                    <button
                        type="submit"
                        className="w-full py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Log In
                    </button>

                    <p className="mt-6 text-center text-gray-400 text-sm">
                        Don't have an account?{" "} <span onClick={handleToNavigate} className="text-green-400 hover:text-green-300 hover: cursor-pointer underline transition duration-200">Create one here</span>
                    </p>
                </form>
            </div>

        </div>
    )
}

export default page
