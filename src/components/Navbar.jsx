import {navigationData} from "../data.jsx";

const Navbar = () => {
    return (
        <nav>
            <ul className='flex gap-x-8'>
                {navigationData.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className='text-[#212353]' href={item.href}>
                                {item.name}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
};

export default Navbar;