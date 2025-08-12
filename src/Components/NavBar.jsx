import React from "react";
import icon from "../assets/logo.jpg";

function NavBar() {
    return (
        <nav className="bg-white shadow-md px-6 py-3 flex items-center justify-between">
            <img src={icon} alt="AggreKart Icon" className="h-16 w-24 object-cover" />

            <div className="hidden md:flex items-center gap-6">
                <a href="#" className="text-black-600 hover:text-blue-600 transition">Home</a>
                <a href="#" className="text-black-600 hover:text-blue-600 transition">Shop Materials</a>
                <a href="#" className="text-black-600 hover:text-blue-600 transition">Sell on AggreKart</a>
                <a href="#" className="text-black-600 hover:text-blue-600 transition">How It Works</a>
                <a href="#" className="text-black-600 hover:text-blue-600 transition">Contact</a>
            </div>
            <div className="flex items-center gap-2">
                <select className="rounded-full bg-green-500 hover:bg-green-600 px-6 py-1.5 m-2 text-white">
                    <option>Buyer</option>
                </select>
                <select className="rounded-full bg-orange-400 hover:bg-amber-500 px-5 py-1.5 m-2 text-white ">
                    <option>Supplier</option>
                </select>
            </div>
        </nav>
    );
}

export default NavBar;