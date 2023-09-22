import PapirSVG from '../../Assets/orderSVGs/papogpapir.svg';
import PlastSVG from '../../Assets/orderSVGs/water-bottle.svg';
import RestAfSVG from '../../Assets/orderSVGs/restaffald.svg';
import ToxinSVG from '../../Assets/orderSVGs/farligt.svg';
import Wave from '../Components/Wave';

const Order = () => {
    return (
        <div className="w-full font-mulish bg-gradient-to-b from-main-light-green">
            <div className="flex w-full justify-center pt-20 pb-20 md:pb-10">
                <div className=" bg-main-dark-green pl-44 rounded-l-xl">
                    <button className="mt-4 p-5 w-16 bg-main-white rounded-full">
                        1
                    </button>
                    <br></br>
                    <button className="mt-4 mr-4 p-5 w-16 bg-main-white rounded-full">
                        2
                    </button>
                </div>
                <div className="bg-bag-gray rounded-r-xl p-10">
                    <p className="text-lg pb-7">Trin 1</p>
                    <h1 className="text-3xl">Vælg type</h1>
                    <p className="text-lg pt-5">
                        Vælg den type container du vil bestille,<br></br> vores
                        containere er af meget høj kvalitet og holdbare,{' '}
                        <br></br> så du vil helt sikkert finde en bekvem
                        placering til dem
                    </p>
                    <div className="flex justify-center pt-5 bg-bag-gray">
                        <div className="">
                            <div className="p-3 bg-main-white m-4 rounded-xl">
                                <img
                                    className="w-28 h-28 bg-main-white"
                                    src={PapirSVG}
                                />
                            </div>
                            <div className="p-3 bg-main-white m-4 rounded-xl">
                                <img
                                    className="bg-main-white w-28 h-28"
                                    src={RestAfSVG}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="p-3 bg-main-white m-4 rounded-xl">
                                <img
                                    className="bg-main-white w-28 h-28"
                                    src={PlastSVG}
                                />
                            </div>
                            <div className="p-3 bg-main-white m-4 rounded-xl">
                                <img
                                    className="bg-main-white w-28 h-28"
                                    src={ToxinSVG}
                                />
                            </div>
                        </div>
                    </div>
                    <button className="float-right w-32 text-xl my-5 mr-16 bg-main-light-green border-2 p-3 border-main-dark-green rounded-xl">
                        Videre
                    </button>
                </div>
            </div>
            <Wave />
        </div>
    );
};

export default Order;
