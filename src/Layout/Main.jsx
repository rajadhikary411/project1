import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar />

            {/* Hero Section */}
            <div
                className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-4 bg-amber-300   "
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1559561854-9e6fa2c8ce3e?auto=format&fit=crop&w=1950&q=80')",
                }}
            >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-800 mb-6">
                    Keep Happy With Flower
                </h1>
                <p className="max-w-xl text-gray-700 text-base md:text-lg mb-8">
                    Create the perfect indoor jungle with our bold houseplants, blooming plants, hanging plants, and more!
                </p>
                <button className="bg-gray-800 hover:bg-black text-white px-8 py-3 rounded-full text-base md:text-lg transition">
                    Buy Now
                </button>
            </div>

            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;
