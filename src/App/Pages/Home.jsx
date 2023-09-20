// import Slider1 from '../../Assets/sliderImages/slider1.jpg';
import HomeOne from '../../Assets/homeImages/trashbin.png';
import HomeTwo from '../../Assets/homeImages/baskets.png';
import Carousel from '../Components/Carousel';

const Home = () => {
    return (
        <div className="font-mulish">
            <Carousel />
            <div className="text-md rounded-xl left-0 right-0 mr-auto ml-auto top-0 mt-section-mt-mob md:mt-section-mt-desc w-section-w-mobl h-section-h-mobl md:w-section-w-desc md:h-section-h-desc absolute flex-col text-center bg-main-light-green shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <p className=" text-xl md:text-2xl pb-5 md:pb-7 mt-5 md:pt-5">
                    Find og anmeld genbrugsstationer
                </p>
                <div className="flex w-full items-center md:flex-row justify-center gap-5">
                    <button className="w-32 md:w-40 h-12 bg-main-dark-green rounded-md text-main-white transition duration-300 ease-out hover:scale-110 hover:font-bold">
                        Find station
                    </button>
                    <button className="w-32 md:w-40 h-12 bg-main-dark-green rounded-md text-main-white transition-all duration-300 ease-out hover:scale-110 hover:font-bold">
                        Log ind
                    </button>
                </div>
            </div>
            <section className="flex flex-col items-center">
                <div className="p-10 mt-20 flex flex-col md:flex-row text-main-dark-green">
                    <div className="flex flex-col md:justify-center md:pr-40">
                        <h1 className="text-4xl md:text-5xl md:pb-7">
                            Her{' '}
                            <span className="selection:bg-main-light-green">
                                din guide til<br></br>
                                sortering
                            </span>
                        </h1>
                        <p className="py-5 text-xl max-w-lg">
                            Her kan du se hvordan du skal sortere og hvad der
                            skal i hvilke beholdere. Du får også tips og tricks
                            til, hvordan du gør det nemt at sortere hjemme hos
                            dig.
                        </p>
                        <div className="flex flex-row pt-5 pb-10 gap-5 text-lg">
                            <button className="bg-main-dark-green h-16 text-main-white rounded-md w-full transition-all duration-200 ease-in-out hover:font-bold">
                                Se affaldsguide
                            </button>
                            <button className="text-main-green border border-main-green rounded-md w-full transition-all duration-200 ease-in-out hover:font-bold">
                                Bestil storskrald
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            className="md:border-t-8 md:border-r-8 border-main-light-green rounded-xl bg-main-light-green"
                            src={HomeOne}
                        />
                    </div>
                </div>
                <div className="p-10 flex flex-col md:flex-row text-main-dark-green">
                    <h1 className="text-4xl pb-5 md:hidden">
                        Bestil din nye<br></br>
                        affaldsbeholder
                    </h1>
                    <img
                        className="md:border-b-8 md:border-l-8 border-main-light-green rounded-xl bg-main-light-green"
                        src={HomeTwo}
                    />
                    <div className="flex flex-col md:justify-center md:ml-40">
                        <h1 className="text-5xl hidden md:block md:pb-7">
                            Bestil din nye<br></br>
                            affaldsbeholder
                        </h1>
                        <p className="py-5 text-xl max-w-lg">
                            Du kan vælge type af affaldsbeholder her, samt
                            bestille dens levering direkte til din hjemmeadresse
                            !
                        </p>
                        <button className="text-xl bg-main-dark-green h-16 text-main-white rounded-md w-full md:w-44 md:mt-5 transition-all duration-200 ease-in-out hover:font-bold">
                            Bestil nu
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
