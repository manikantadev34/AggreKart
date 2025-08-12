import React from "react";

function Home() {
    return (
        <div className="h-[70vh] w-full bg-[#7F7F7F] flex items-center">
            <div className="max-w-4xl px-10">
                <h1 className="text-white text-5xl font-bold leading-tight">
                    Your One-Stop <br />
                    Marketplace for <br />
                    Construction Materials
                </h1>
                <p className="text-gray-200 mt-4 text-lg">
                    Connect with trusted suppliers. Buy smarter, build faster.
                </p>
                <div className="mt-6 flex gap-4">
                    <button className="bg-orange-400 hover:bg-orange-500 text-black font-medium px-6 py-2 rounded-xl">
                        Shop Now
                    </button>
                    <button className="border border-white text-white font-medium px-6 py-2  hover:bg-white hover:text-gray-800 rounded-xl">
                        Sell on AggreKart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;