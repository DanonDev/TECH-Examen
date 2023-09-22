import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Wave from '../Components/Wave.jsx';
import Image1 from '../../Assets/googleMaps/OsterUttrupVej.png';
import Image2 from '../../Assets/googleMaps/Krastrup.png';
import Image3 from '../../Assets/googleMaps/Sorup.png';
import Image4 from '../../Assets/googleMaps/OverKvert.png';
import Image5 from '../../Assets/googleMaps/Storvorde.png';
import Image6 from '../../Assets/googleMaps/Hou.png';

const RecyclingStations = () => {
    const [station, setStation] = useState([]);

    useEffect(() => {
        axios
            .get(
                'http://localhost:3000/orgs?attributes=id,name,address,zipcode,city'
            )
            .then((response) => {
                setStation(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const images = [Image1, Image2, Image3, Image4, Image5, Image6];

    return (
        <>
            <div className="w-full font-mulish bg-gradient-to-b from-main-light-green flex justify-center pt-20 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap:20 md:gap-40 gap-y-20">
                    {station.map((item, index) => (
                        <>
                            <Link to={`/orgs/${item.id}`}>
                                <div className="w-72 rounded-lg bg-main-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-text-green transition-all decoration-300 ease-in-out hover:scale-110 cursor-pointer">
                                    <img
                                        className="rounded-t-lg"
                                        src={images[index]}
                                        alt={item.title}
                                    />
                                    <div
                                        key={item.id}
                                        className="text-lg text-center pt-2 bg-main-white rounded-b-lg"
                                    >
                                        <p>{item.address}</p>
                                        <p className="font-extrabold text-xl ml-2 mr-2 text-main-dark-green">
                                            {item.name}
                                        </p>
                                        <p className="pb-7">
                                            {item.zipcode} {item.city}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </>
                    ))}
                </div>
            </div>
            <Wave />
        </>
    );
};

export default RecyclingStations;
