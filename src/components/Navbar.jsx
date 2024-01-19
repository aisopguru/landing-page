import {navigationData} from "../data.jsx";
import {Link} from "react-scroll";

const Navbar = () => {
    return (
        <nav>
            <ul className='flex gap-x-8'>
                {navigationData.map(({name, duration, offset}) => {
                    return (
                        <li key={Math.random()} className='navLink'>
                            <Link className='text-base' to={name} smooth={true} duration={duration} offset={offset}>
                                {name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
};

export default Navbar;