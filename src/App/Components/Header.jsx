import Logo from '../../Assets/logo.png';
import Login from '../../Assets/login.png';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const Header = () => {
    let [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="fixed w-full md:pt-5">
                <nav className="bg-main-white font-mulish w-full flex flex-col items-center md:flex-row md:justify-around md:border-main-shadow md:border-t-2 pt-4">
                    <div className="w-44 flex justify-center">
                        <img src={Logo} alt="logo" className="w-fit" />
                    </div>
                    {/* menu btn (Mobile) */}
                    <div
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-12 h-12 absolute top-5 right-5 md:hidden cursor-pointer"
                    >
                        {isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
                    </div>
                    {/* nav links here */}
                    <ul
                        className={`text-xl md:text-base flex flex-col items-center mt-32 md:mt-0 md:flex md:p-0 md:static md:flex-row md:gap-20 absolute md:z-auto z-[-1] transition-all duration-500 ease-in-out ${
                            isOpen ? 'top-7' : 'top-[-400px]'
                        }`}
                    >
                        <li className="relative group pt-5 md:pt-0">
                            <a
                                href="#"
                                className="hover:text-main-green ransition-all duration-300"
                            >
                                Forside
                                <span className="hidden md:block bottom-14 absolute left-0 w-0 h-0.5 bg-main-green transition-all duration-300 origin-left group-hover:w-full" />
                            </a>
                        </li>
                        <li className="relative group pt-5 md:pt-0">
                            <a
                                href="#"
                                className="hover:text-main-green ransition-all duration-300"
                            >
                                Sortering
                                <span className="hidden md:block bottom-14 absolute left-0 w-0 h-0.5 bg-main-green transition-all duration-300 origin-left group-hover:w-full" />
                            </a>
                        </li>
                        <li className="relative group pt-5 md:pt-0">
                            <a
                                href="#"
                                className="hover:text-main-green ransition-all duration-300"
                            >
                                Genbrugsstationer
                                <span className="hidden md:block bottom-14 absolute left-0 w-0 h-0.5 bg-main-green transition-all duration-300 origin-left group-hover:w-full" />
                            </a>
                        </li>
                        <li className="relative group pt-5 md:pt-0 border-b-main-green">
                            <a
                                href="#"
                                className="hover:text-main-green ransition-all duration-300"
                            >
                                Bestil beholder
                                <span className="hidden md:block bottom-14 absolute left-0 w-0 h-0.5 bg-main-green transition-all duration-300 origin-left group-hover:w-full" />
                            </a>
                        </li>
                    </ul>
                    <div className="w-44 flex justify-center">
                        <img
                            src={Login}
                            alt="login"
                            className="w-14 cursor-pointer mt-5 md:m-0 transition duration-300 ease-in-out hover:rotate-small hover:scale-110 hover:border-2 rounded-full border-main-green"
                        />
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;
