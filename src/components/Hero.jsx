import Typewriter from 'typewriter-effect';

// importing hero data
import {heroData} from "../data.jsx";

const Hero = () => {
    // Destructure hero data
    const {title, subtitle,features, btnText, image} = heroData
    return (
        <section className='lg:h-screen'>
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
                        <div className="absolute xl:-my-[460px] flex justify-center items-center">
                            <p className='xl:max-w-[600px] mb-6 lg:mb-12 text-[#4b5d68] font-bold text-lg' data-aos='fade-down'
                               data-aos-delay='500'>
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
                {/*<div className='flex gap-x-5'>*/}
                {/*    {*/}
                {/*        features.map((item, index) => {*/}
                {/*            return (*/}
                {/*                <a href="#" key={index}*/}
                {/*                   className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-emerald-800 dark:bg-emerald-700">*/}
                {/*                    <p className="mb-2 tracking-tight text-gray-900 dark:text-white">{item}</p>*/}
                {/*                </a>*/}
                {/*                // bg-[#9C69E2]*/}
                {/*            )*/}
                {/*        })*/}
                {/*    }*/}
                {/*</div>*/}
            </div>
        </section>
    );
};

export default Hero;