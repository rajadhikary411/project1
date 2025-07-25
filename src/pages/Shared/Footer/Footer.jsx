import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#1F1F1F] text-white text-center py-8 px-4">
            <div className="text-2xl font-medium mb-4">
                logo
            </div>
            <div className="flex justify-between items-center text-sm max-w-[1000px] mx-auto text-gray-300 flex-wrap">
                <span>Privacy policy</span>
                <span>© 2021 Copyright</span>
                <span>Terms and Conditions</span>
            </div>
        </footer>
    );
};

export default Footer;
