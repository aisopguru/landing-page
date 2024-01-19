import {ctaData} from "../data.jsx";

const CtaSection = () => {
    const {title, info, btnText1, btnText2} = ctaData
    return (
        <section name='Demo' className='my-[75px] lg:my-[0px] border-t-2' data-aos='fade-up'>
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row justify-between items-center'>
                    {/* Text */}
                    <div className='py-12 xl:py-24 text-center xl:text-left'>
                        <h2 className='h2 mb-5' data-aos='fade-up' data-aos-delay='300'>{title}</h2>
                        <ul className='xl:list-disc marker:text-orange-300 ml-7' data-aos='zoom-out' data-aos-delay='400'>
                            {
                                info.map((item) => {
                                    return (
                                        <li key={Math.random()} className='lead'>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    {/* Button */}
                    <div className='flex flex-col xl:flex-row gap-y-4 gap-x-[30px]'>
                        <button className='btn btn-secondary bg-red-400' data-aos='fade-up' data-aos-delay='400'>{btnText1}</button>
                        <button className='btn btn-quaternary text-white' data-aos='zoom-out' data-aos-delay='400'>
                            {btnText2}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;