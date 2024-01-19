import {procedureData} from "../data.jsx";
const Procedure = () => {
    const {title, subtitle, procedure} = procedureData
    return (
        <section name='Platform' className='my-[70px] xl:my-[100px]' data-aos='fade-up'>
            <div className='container mx-auto'>
                <div className='text-center'>
                    <h2 className='h2 mb-6' data-aos='fade-up'>{title}</h2>
                    <p className='lead max-w-[585px] mx-auto mb-16 xl:mb-1'>{subtitle}</p>
                </div>
                <div className='grid grid-cols-1 xl:grid-cols-2 gap-[50px] xl:gap-y-[16px] xl:gap-x-0 p-10'>
                    {procedure.map((item) => {
                        const {image, title, subtitle, delay} = item
                        return (
                            <div
                                key={Math.random()}
                                className='w-full border-2 border-orange-200 rounded-[15px] max-w-[530px] h-[360px] xl:h-[250px] relative flex flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto'
                                data-aos='fade-up'
                                data-aos-delay={delay}
                            >
                                <div className="max-w-[120px] md:max-w-[230px] xl:max-w-[100%] xl:mr-5">
                                    <img src={image} alt=""/>
                                </div>
                                <div
                                    className="max-w-[220px] md:max-w-[450px] xl:max-w-[220px] md:mb-3 xl:mr-5 flex flex-col items-center xl:items-start">
                                    <h5 className="h3 mb-4 font-bold">{title}</h5>
                                    <p className="font-light italic gap-x-2 group">{subtitle}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Procedure;