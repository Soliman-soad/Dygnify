import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Loan = () => {
    return (
        <>
         <Navbar/>
         <Outlet/>   
        </>
    );
};

export default Loan;