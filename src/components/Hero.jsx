import Typewriter from 'typewriter-effect';

// importing hero data
import {heroData} from "../data.jsx";

const Hero = () => {
    // Destructure hero data
    const {title, subtitle,features, btnText, image} = heroData
    return (
        <section name='Home' className='h-screen mt-20'>
            <div className='container mx-auto h-full relative'>
                <div className='flex flex-col xl:flex-row items-center h-full md:py-24'>
                    {/*  Text  */}
                    <div className='text-center xl:text-left xl:absolute'>
                        <h1 className='h1 xl:max-w-[600px] mb-6 lg:mb-12' data-aos='fade-down'
                            data-aos-delay='400'>{title}</h1>
                        <p className='lead xl:max-w-[380px] mb-6 lg:mb-12' data-aos='fade-down'
                           data-aos-delay='500'>{subtitle}</p>
                        <button className='btn bg-amber-500 mb-8 xl:mb-12' data-aos='fade-down'
                                data-aos-delay='600'>{btnText}</button>
                    </div>
                    {/*  Images  */}
                    <div className='xl:absolute xl:-right-12 xl:bottom-24' data-aos='fade-up' data-aos-delay='700'>
                        <img src={image} alt="" height='1200px' width='700px'/>
                        <div className="absolute xl:-my-[455px] xl:-mx-[-30px] flex justify-center items-center">
                            <p className='xl:max-w-[600px] mb-6 lg:mb-12 text-[#223e42]/[75%] selection:bg-amber-200 font-bold text-lg' data-aos='zoom-in'
                               data-aos-delay='800'>
                                <Typewriter
                                    options={{
                                        strings: features,
                                        autoStart: true,
                                        loop: true,
                                        delay: 180,
                                        pauseFor: 3000
                                    }}
                                />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;