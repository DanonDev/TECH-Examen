// import Wave from '../../Assets/homeImages/bg-wave-1.svg';
import Slider1 from '../../Assets/sliderImages/slider1.jpg';

const Home = () => {
    return (
        <div>
            <section className="">
                <img
                    className="w-full h-96 md:h-slider-desc object-cover"
                    src={Slider1}
                />
            </section>
            <div className="font-mulish text-md rounded-xl left-0 right-0 mr-auto ml-auto top-0 mt-section-mt-mob md:mt-section-mt-desc w-section-w-mobl h-36 md:w-section-w-desc md:h-section-h-desc absolute flex-col text-center bg-main-light-green shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <p className="text-2xl pb-5 md:pb-7 mt-5 md:pt-5">
                    Find og anmeld genbrugsstationer
                </p>
                <div className="flex w-full justify-center gap-5">
                    <button className="w-40 h-12 bg-main-dark-green rounded-md text-main-white transition duration-300 ease-out hover:scale-110 hover:font-bold">
                        Find station
                    </button>
                    <button className="w-40 h-12 bg-main-dark-green rounded-md text-main-white transition-all duration-300 ease-out hover:scale-110 hover:font-bold">
                        Log ind
                    </button>
                </div>
            </div>
            <section>
                <div>
                    <h1></h1>
                    <p></p>
                    <button></button>
                    <button></button>
                </div>
                <div>
                    <h1></h1>
                    <p></p>
                    <button></button>
                    <button></button>
                </div>
                {/* <img
                    className="w-full fixed bottom-wave-mobile md:bottom-wave z-[-1]"
                    src={Wave}
                    alt="Wave"
                ></img> */}
            </section>
        </div>
    );
};

export default Home;
