import Logo from '../assets/logo.png'
import Navbar from './Navbar.jsx'
import NavMobile from './NavMobile.jsx'

import {FaBars} from "react-icons/fa";
import {BsArrowRight} from "react-icons/bs";
import {useState} from "react";

const Header = () => {
    const [navMobile, setNavMobile] = useState(false)
    return (
        <header className='py-4 mb-12 lg:mb-0 z-20 relative px-4 lg:px-0' data-aos='fade-down' data-aos-delay='1200' data-aos-duration='1000'>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-x-[120px]'>
                        {/*  Logo  */}
                        <a href="#">
                            <img src={Logo} alt="" height='50px' width='50px'/>
                        </a>

                        {/*  nav initially hidden - only show on large screen  */}
                        <div className='hidden lg:flex'>
                            <Navbar/>
                        </div>

                        {/*  Mobile nav - initially showing but hidden on large screen  */}
                        <div className={`${navMobile ? 'max-h-52' : 'max-h-0'} lg:hidden absolute top-24 bg-[#61bebc] w-full left-0 right-0 font-bold rounded transition-all overflow-hidden`}>
                            <NavMobile/>
                        </div>

                        {/*  Button  */}
                        <button className='btn btn-quaternary flex items-center gap-x-[20px] group'>
                            Request Demo <BsArrowRight
                            className='text-2xl text-[#9C69E2] group-hover:text-white transition'/>
                        </button>

                        {/*  Nav trigger button - only shows on mobile views  */}
                        <div onClick={() => setNavMobile(!navMobile)} className='lg:hidden text-2xl text-[#212353] cursor-pointer'>
                            <FaBars/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;