import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
            <div className="flex justify-between items-center max-w-[1300px] mx-auto py-4 px-6 font-poppins">
                {/* Logo */}
                <div className="text-xl font-semibold text-gray-800">
                    logo
                </div>

                {/* Navigation Links */}
                <div className="flex gap-6 text-sm font-medium text-gray-800 uppercase">
                    <NavLink to="/" className="hover:text-black">Features</NavLink>
                    <NavLink to="/about" className="hover:text-black">Profile</NavLink>
                    <NavLink to="/contact" className="hover:text-black">Bestsellers</NavLink>
                    <NavLink to="/block" className="hover:text-black">Reviews</NavLink>
                    <NavLink to="/aa-classes" className="hover:text-black">About Us</NavLink>
                </div>

                {/* Buy Now Button */}
                <div>
                    <button className="bg-gray-800 text-white px-6 py-2 rounded-full text-sm hover:bg-black transition">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
