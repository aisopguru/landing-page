import {Link} from "react-scroll";
import {navigationData} from "../data.jsx";

const NavMobile = () => {
    return (
        <ul className='flex flex-col px-6 py-8 gap-y-4'>
            {
                navigationData.map(({name, duration, offset}) => {
                    return (
                        <li key={Math.random()} className='navLinkMobile'>
                            <Link to={name} smooth={true} duration={duration} offset={offset}>
                                {name}
                            </Link>
                        </li>
                    )
                })
            }
        {/*  Button in mobile nav */}
            <div className='lg:hidden'>
            <button className='px-8 py-3 text-white bg-orange-400 w-full mb-4'>Sign in</button>
            <button className='px-8 py-3 text-white bg-red-600 w-full'>Sign up</button>
            </div>
            </ul>
            );
        };

export default NavMobile;