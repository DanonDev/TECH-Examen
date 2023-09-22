import footerIMG from '../../Assets/footerIMG.png';
import { ArrowUpIcon } from '@heroicons/react/24/solid';

const Footer = () => {
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <footer className="flex flex-col items-center md:flex-row md:justify-around mt-auto font-mulish bg-main-dark-green">
            <section className="m-7 flex flex-col items-center text-center md:items-start md:text-start">
                <img className="w-48" src={footerIMG} />
                <p className="w-auto md:w-96 text-lg pt-7 text-main-white">
                    Vi arbejder for at informere om korrekt affaldssortering.
                    Ved at sortere hjælper du os, men også klimaet.
                </p>
                <br />
                <p className="text-2xl text-main-white opacity-30">
                    ©2023 Affaldsguiden.
                </p>
            </section>
            <div className="flex items-center mb-10 md:mt-28 md:mb-0">
                <p className="text-xl text-main-white">Tilbage til toppen</p>
                <button
                    onClick={scrollUp}
                    className="w-10 border-2 rounded-full ml-5 p-1 text-main-white opacity-30 transition duration-300 ease-in-out hover:text-main-green hover:opacity-100 hover:scale-110 hover:rotate-full"
                >
                    <ArrowUpIcon />
                </button>
            </div>
        </footer>
    );
};

export default Footer;
