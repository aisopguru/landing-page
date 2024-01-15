import {procedureData} from "../data.jsx";

const Procedure = () => {
    const {title, subtitle, procedure} = procedureData
    return (
        <section className='my-[70px] xl:my-[150px]' data-aos='fade-up'>
            <div className='container mx-auto'>
                <div className='text-center'>
                    <h2 className='h2 mb-6 xl:mb-12' data-aos='fade-up'>{title}</h2>
                    <p className='lead max-w-[585px] mx-auto mb-16 xl:mb-24'>{subtitle}</p>
                </div>
                <div className='grid grid-cols-1 gap-[50px] xl:grid-cols-2'>
                    {procedure.map((item, index) => {
                        const {image, title, subtitle, position, delay} = item
                        return (
                            <div
                                key={index}
                                className='w-full border-4 max-w-[530px] h-[360px] relative flex flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto'
                                data-aos={position}
                                data-aos-delay={delay}
                            >
                                <div className="max-w-[120px] xl:mr-7 xl:max-w-[230px]" >
                                    <img src={image} alt=""/>
                                </div>
                                <div className="max-w-[220px]">
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