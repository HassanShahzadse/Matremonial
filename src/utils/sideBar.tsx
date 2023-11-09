"use client"

import Link from 'next/link';
import { useState } from 'react';

const SideBar = ({ show }: any) => {
    //   const [show, setShow] = useState(false);

    return (
        <aside className={`sidebar ${show ? 'show' : null}`}>
            <nav className='nav'>
                <div>
                    <Link href='/' className='nav-logo'>
                        <i className={`fas fa-home-alt nav-logo-icon`}></i>
                        <span className='nav-logo-name'>Matrimonial</span>
                    </Link>

                    <div className='nav-list'>
                        <Link href='/dashboard' className='nav-link active'>
                            <i className='fas fa-tachometer-alt nav-link-icon'></i>
                            <span className='nav-link-name'>Dashboard</span>
                        </Link>
                        {/* <Link href='/home' className='nav-link'>
                            <i className='fas fa-hotel nav-link-icon'></i>
                            <span className='nav-link-name'>Hotel</span>
                        </Link> */}
                        <Link href='/aboutUs' className='nav-link'>
                            <i className='fas fa-image nav-link-icon'></i>
                            <span className='nav-link-name'>About us</span>
                        </Link>
                        {/* <Link href='/transaction' className='nav-link'>
      
        <i className='fas fa-dollar-sign nav-link-icon'></i>
        <span className='nav-link-name'>Transaction</span>
  
    </Link> */}
                    </div>
                </div>

                <Link href='/logout' className='nav-link'>

                    <i className='fas fa-sign-out nav-link-icon'></i>
                    <span className='nav-link-name'>Logout</span>

                </Link>
            </nav>
        </aside>
    );
};

export default SideBar;


