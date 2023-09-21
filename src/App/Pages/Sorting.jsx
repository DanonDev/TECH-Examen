import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Waves from '../../Assets/waves.svg';

const Sorting = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3000/section')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching sort data:', error);
            });
    }, []);

    return (
        <div className="font-mulish flex flex-col items-center bg-gradient-to-b from-main-light-green">
            <div className="text-center text-3xl mt-20 md:mt-10">
                <h1 className="font-bold text-main-green leading-tight">
                    Din guide<br></br>
                    <span className="font-normal text-text-green">
                        til en sund affaldssortering
                    </span>
                </h1>
                <input
                    type="text"
                    placeholder="Søg på affald"
                    className="w-full text-lg pl-5 py-3 mt-5 mb-10 border-2 border-main-gray border-opacity-20 rounded-full outline-none focus:border-main-green"
                />
            </div>
            <div className="max-w-screen-2xl flex flex-wrap gap-10 justify-center pb-10">
                {data.map((section) => (
                    <>
                        <Link to={`/section/${section.id}`}>
                            <div
                                key={section.id}
                                className="text-center rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-all duration-300 ease-in-out hover:scale-110 hover:font-bold cursor-pointer"
                            >
                                <img
                                    className="w-52 rounded-t-2xl object-cover"
                                    src={section.filepath}
                                    alt={section.filename}
                                />
                                <div
                                    className="rounded-b-2xl h-10 text-center"
                                    style={{
                                        backgroundColor: `#${section.color}`,
                                    }}
                                >
                                    <p className="pt-1.5 text-main-white text-xl">
                                        {section.title}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </>
                ))}
            </div>
            <img className="min-w-full " src={Waves} />
        </div>
    );
};

export default Sorting;
