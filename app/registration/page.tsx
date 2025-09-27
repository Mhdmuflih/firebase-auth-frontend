"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const page = () => {

    const router = useRouter();

    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        password: "",
    });

    const handleToChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const handleToNavigate = ()=> {
        router.push("/login");
    }

    return (
        <div>
            <div className="min-h-screen flex items-center justify-center p-4">
                <form
                    // onSubmit={handleToSubmit}
                    className="w-full max-w-md bg-gray-800 p-6 rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-[1.02]"
                >
                    <h2 className="text-2xl font-semibold text-white mb-6 text-center animate-pulse">
                        Signup Form
                    </h2>

                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Enter Name"
                            name="name"
                            value={formData.name}
                            onChange={handleToChange}
                            className="w-full p-3 rounded-xl bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                        />
                        {/* {errors.name && <p className="text-red-400 text-sm mt-1 ml-1">{errors.name}</p>} */}
                    </div>

                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Enter Mobile"
                            name="mobile"
                            onChange={handleToChange}
                            className="w-full p-3 rounded-xl bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                        />
                        {/* {errors.mobile && <p className="text-red-400 text-sm mt-1 ml-1">{errors.mobile}</p>} */}
                    </div>

                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Enter Email"
                            name="email"
                            onChange={handleToChange}
                            className="w-full p-3 rounded-xl bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                        />
                        {/* {errors.email && <p className="text-red-400 text-sm mt-1 ml-1">{errors.email}</p>} */}
                    </div>

                    <div className="mb-6">
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            onChange={handleToChange}
                            className="w-full p-3 rounded-xl bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                        />
                        {/* {errors.password && <p className="text-red-400 text-sm mt-1 ml-1">{errors.password}</p>} */}
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Submit
                    </button>

                    <p className="mt-6 text-center text-gray-400 text-sm animate-fade-in">
                        Already have an account?{" "}<span onClick={handleToNavigate} className="text-white hover:text-green-300 hover: cursor-pointer underline transition duration-200"> Sign In </span>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default page
