import {footerData} from "../data.jsx";
import Copyright from "./Copyright.jsx";

const Footer = () => {
    const {logo, info, list1, list2, socialList, image} = footerData
    return (
        <footer name='Contact' className='bg-dots opacity-10 pt-5 lg:pt-20' data-aos='fade-up'>
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row text-center xl:text-left gap-y-12'>
                    <div className='w-[75%] lg:w-[45%] mx-auto flex flex-col items-center xl:items-start'>
                        <a href="#">
                            <img src={logo} alt="" height='250px' width='250px'/>
                        </a>
                        <div
                            className='max-w-[260px] mb-3 text-[#212353] font-bold flex items-center justify-between gap-x-3'>
                            <span>
                                {info[0].icon}
                            </span>
                            {info[0].address}
                        </div>
                        <div className='font-light mb-3 italic flex items-center justify-between gap-x-3'>
                            <span>
                                {info[1].icon}
                            </span>
                            {info[1].email}
                        </div>
                        <div className='font-light mb-5 italic flex items-center justify-between gap-x-3'>
                            <span>
                                {info[2].icon}
                            </span>
                            {info[2].phone}
                        </div>
                    </div>
                    <div className='flex flex-1 flex-col gap-y-14 xl:flex-row justify-between'>
                        <div>
                            <div className='font-extrabold text-[#212353] mb-8'>About</div>
                            <ul className='flex flex-col gap-y-4'>
                                {
                                    list1.map((item) => {
                                        const {name, href} = item
                                        return (
                                            <li key={Math.random()} className='link'>
                                                <a href={href}>{name}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div>
                            <div className='font-extrabold text-[#212353] mb-8'>Help</div>
                            <ul className='flex flex-col gap-y-4'>
                                {
                                    list2.map((item) => {
                                        const {name, href} = item
                                        return (
                                            <li key={Math.random()} className='link'>
                                                <a href={href}>{name}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div>
                            <div className='font-extrabold text-[#212353] mb-8'>Social Media</div>
                            <ul className='flex gap-y-4 gap-x-4 justify-center'>
                                {
                                    socialList.map((item) => {
                                        const {icon, href} = item
                                        return (
                                            <li key={Math.random()}
                                                className='w-12 h-12 bg-orange-300/[80%] flex justify-center rounded-full cursor-pointer hover:bg-orange-400 transition-all'>
                                                <a className='text-white text-2xl hover:text-white my-auto'
                                                   href={href}>{icon}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Copyright/>
        </footer>
    );
};

export default Footer;