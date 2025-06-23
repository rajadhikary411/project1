import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between max-w-[1300px] mx-auto items-center font-poppins'>
            <div className='font-bold text-[43px]'>
                EduGrid
            </div>
            <div className='flex gap-8 font-medium text-[25px]'>
                <div>Home</div>
                <div>About</div>
                <div>Contact</div>
                <div>Blog</div>
                <div>All Classes</div>
            </div>
            <div className='flex font-medium text-[22px] font-dmsans gap-8'>
                <button className='border px-[46px] py-[11px] rounded-[30px]'>Sign Up</button>
                <button className='border px-[46px] py-[11px] rounded-[30px]'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;