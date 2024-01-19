import {consultData} from "../data.jsx";

const Consultations = () => {
    const {title, subtitle, points,image} = consultData
    return (
        <section name='Consultant' className='my-[30px] xl:mt-0'>
            <div className='container mx-auto'>
                <div
                    className='bg-[#b3d0bc]/[4%] rounded-[15px] min-h-[560px] px-12 pb-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left  xl:gap-x-[60px]  xl:pb-0'>
                    <div className='flex-1' data-aos='zoom-in-left'>
                        <img src={image} alt=""/>
                    </div>
                    <div className='flex-1 xl:pr-12 flex flex-col items-center xl:items-start'>
                        <h2 className='h2 mb-5' data-aos='fade-up' data-aos-delay='300'>{title}</h2>
                        <p className='lead mb-10' data-aos='fade-up' data-aos-delay='400'>{subtitle}</p>
                        {points.map((item) => {
                            const {title, subtitle} = item
                            return (
                                <div key={Math.random()} className='mb-5 md:max-w-[420px]' data-aos='fade-up' data-aos-delay='400'>
                                    <a href="#"
                                       className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                                        <p className="font-normal text-gray-700 dark:text-gray-400">{subtitle}</p>
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Consultations;