import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png'

const Navbar = () => {
    return (
        <div>
            <div>
                <img src={logo} className='mx-auto mt-5' alt="" />
            </div>
            <div >
                <ul className='flex '>
                    <li className='px-5 py-2 mr-5'><NavLink className={({ isActive, isPending }) =>
                      isActive
                        ? "active font-bold bg-[#8010FC] text-white p-2 rounded-md"
                        : isPending
                        ? "pending"
                        : ""} to="/">Personal details</NavLink></li>
                    <li className='px-5 py-2 mr-5'><NavLink className={({ isActive, isPending }) =>
                      isActive
                        ? "active font-bold"
                        : isPending
                        ? "pending"
                        : ""} to="/business">Business details</NavLink></li>
                    <li className='px-5 py-2 mr-5'><NavLink className={({ isActive, isPending }) =>
                      isActive
                        ? "active font-bold"
                        : isPending
                        ? "pending"
                        : ""} to="/loan-application">Loan Application details</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;