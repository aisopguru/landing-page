import {pricingData} from "../data.jsx";
import {CheckIcon} from "@heroicons/react/16/solid/index.js";

const Prices = () => {
    const {title, subtitle, info} = pricingData
    return (
        <section name='Pricing' className='my-[70px] xl:my-[150px] bg-yellow-50 pt-[100px]' data-aos='fade-up'>
            <div className='container mx-auto'>
                <div className='text-center'>
                    <h2 className='h2 mb-6 xl:mb-5 font-bold text-xl lg:text-3xl' data-aos='fade-up'>{title}</h2>
                    <p className='lead font-extrabold text-2xl lg:text-5xl mx-auto mb-16 xl:mb-24'>{subtitle}</p>
                </div>
                <div className='grid lg:grid-cols-2'>
                    {info.map( item => {
                        const {name, price,type, supports, features} = item
                        return (
                            <div key={Math.random()} data-aos='fade-up' data-aos-delay='300'>
                                <div className='text-sky-900 m-4 p-16 rounded-xl shadow-2xl relative'>
                                    <span className='uppercase px-3 py-1 bg-indigo-200 to-indigo-900 rounded-2xl text-sm'>{name}</span>
                                    <div>
                                        <p className='text-6xl font-bold py-4 flex'>
                                            {price} <span
                                            className='text-xl text-slate-500 flex flex-col justify-end'>/sop</span>
                                        </p>
                                    </div>
                                    <p className='text-2xl py-4 text-slate-500'>{type}</p>

                                    <div className='text-xl'>
                                        <div>
                                            {supports.map(item => {
                                                return (
                                                    <p key={Math.random()} className='flex py-4'>
                                                        <CheckIcon className='w-8 mr-5 text-green-600'/>
                                                        {item}
                                                    </p>
                                                )
                                            })}
                                        </div>
                                        {features.map(item => {
                                            return (
                                                <p key={Math.random()} className='flex py-4'>
                                                    <CheckIcon className='w-8 mr-5 text-green-600'/>
                                                    {item}
                                                </p>
                                            )
                                        })}

                                        <button className={`${name==='standard' ? 'bg-gray-500' : 'bg-red-500'} w-full py-4 my-4 text-white`}>Get Started</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Prices;
