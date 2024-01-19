import Logo from '../assets/logo.png'
import Navbar from './Navbar.jsx'
import NavMobile from './NavMobile.jsx'

import {FaBars} from "react-icons/fa";
import {useClickOutside} from "../utils.jsx";
import {useState} from "react";

const Header = () => {

    const [navMobile, setNavMobile] = useState(false)
    const mobileNav = useClickOutside( () => {
        setNavMobile(false)
    })

    return (
        <header className='py-2 mb-12 lg:mb-0 px-4 lg:px-0 w-screen h-[80px] z-10 bg-orange-50 fixed drop-shadow-lg' data-aos='fade-down' data-aos-delay='1200' data-aos-duration='1000'>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-x-[120px]'>

                        {/*  Logo  */}
                        <div>
                            <a href="#">
                                <img src={Logo} alt="" height='150px' width='150px'/>
                            </a>
                        </div>

                        {/*  nav initially hidden - only show on large screen  */}
                        <div className='hidden lg:flex'>
                            <Navbar/>
                        </div>

                        {/*  Mobile nav - initially showing but hidden on large screen  */}
                        <div
                            ref={mobileNav}
                            className={`${navMobile ? 'h-screen' : 'max-h-0'} lg:hidden absolute top-[80px] bg-black opacity-75 w-[50%] md:w-[35%] right-0 rounded transition-all overflow-scroll`}>
                            <NavMobile/>
                        </div>

                        {/*  Button in nav */}
                        <div className='hidden lg:flex gap-x-3 absolute right-[30px] top-[9px]'>
                            <button className='btn btn-quaternary text-white flex items-center gap-x-[20px] group'>Sign in</button>
                            <button className='btn btn-quaternary bg-red-400 text-white flex items-center gap-x-[20px] group'>Sign
                                up
                            </button>
                        </div>

                        {/*  Nav trigger button - only shows on mobile views  */}
                        <div onClick={() => setNavMobile(!navMobile)}
                             className='lg:hidden text-2xl text-[#212353] cursor-pointer absolute right-[30px] top-[25px]'>
                            <FaBars/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;