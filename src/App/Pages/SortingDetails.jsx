import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

const SortigDetails = () => {
    const { section_id } = useParams();
    const [sectionDetails, setSectionDetails] = useState({});

    useEffect(() => {
        const getData = async () => {
            try {
                const details = await axios.get(
                    `http://localhost:3000/section/${section_id}`
                );
                setSectionDetails(details.data);
            } catch (error) {
                console.error('Error fetching detail data:', error);
            }
        };
        getData();
    }, [section_id]);

    return (
        <>
            <div className="font-mulish flex flex-col">
                <div className="mx-20 md:mx-44 mt-32 mb-20 rounded-xl text-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                    <div
                        style={{ backgroundColor: `#${sectionDetails.color}` }}
                        className="flex flex-col md:flex-row w-full justify-between items-center rounded-t-xl"
                    >
                        <h1 className="text-4xl m-5 md:m-0 md:pl-16 font-extrabold text-main-white">
                            {sectionDetails.title}
                        </h1>
                        <img
                            className="rounded-xl mb-5 md:mb-0 md:rounded-tr-xl md:rounded-none"
                            src={sectionDetails.filepath}
                        />
                    </div>
                    <div className="px-16 pb-10">
                        <div className="">
                            <p className="text-2xl mt-10 -mb-10 font-bold text-main-gray">
                                {sectionDetails.description} :
                            </p>
                            {sectionDetails.categories &&
                                sectionDetails.categories.map((category) => (
                                    <>
                                        <Link
                                            to={`/category/details/${category.id}`}
                                        >
                                            <div
                                                key={category.id}
                                                className="flex justify-center md:justify-between text-2xl text-main-dark-gray font-extrabold py-10 px-7 my-20 bg-main-light-gray rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                                            >
                                                <div className="flex flex-col md:flex-row items-center">
                                                    <img
                                                        src={
                                                            category.icon_filepath
                                                        }
                                                        alt={
                                                            category.icon_filename
                                                        }
                                                        className="w-32 rounded-3xl"
                                                    />
                                                    <h2 className="pt-5 md:pt-0 md:pl-10">
                                                        {category.title}
                                                    </h2>
                                                </div>
                                                <img
                                                    src={
                                                        category.image_filepath
                                                    }
                                                    alt={
                                                        category.image_filename
                                                    }
                                                    className="w-32 rounded-3xl hidden md:block"
                                                />
                                            </div>
                                        </Link>
                                    </>
                                ))}
                        </div>
                    </div>
                </div>
                <Link to="/sortering">
                    <div className="flex flex-col items-center mx-auto mb-14 md:-mt-7 cursor-pointer">
                        <ArrowLeftIcon className="w-14 transition-all duration-300 ease-in-out hover:scale-110 hover:mr-10" />
                        <p className="text-2xl pl-2">Tilbage til menuen</p>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default SortigDetails;
