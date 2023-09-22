import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentSection from '../Components/Comments';
import Wave from '../Components/Wave';

const StationDetails = () => {
    const { id } = useParams();
    const [stationDetails, setStationDetails] = useState({});

    useEffect(() => {
        const getData = async () => {
            try {
                const details = await axios.get(
                    `http://localhost:3000/orgs/${id}`
                );
                setStationDetails(details.data);
            } catch (error) {
                console.error('Error fetching detail data:', error);
            }
        };
        getData();
    }, [id]);

    return (
        <>
            <div className="font-mulish flex flex-col items-center pt-20 pb-20">
                <div>
                    <div>
                        <iframe
                            className="w-96 md:auto"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d771.0866552701926!2d10.03007393068888!3d56.863739755740525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464eb5e46bb00931%3A0x19e4a39b73901dcc!2sM%C3%B8lholmvej%2020B%2C%209520%20Sk%C3%B8rping!5e0!3m2!1sen!2sdk!4v1695366660535!5m2!1sen!2sdk"
                            width="800"
                            height="600"
                            style={{ border: '0' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                    <div className="text-lg">
                        <h1 className="font-bold">{stationDetails.name}</h1>
                        <p>{stationDetails.address}</p>
                        <p>
                            {stationDetails.zipcode} {stationDetails.city}
                        </p>
                        <p>{stationDetails.country}</p>
                    </div>
                </div>
                <section>
                    <CommentSection />
                </section>
            </div>
            <Wave />
        </>
    );
};

export default StationDetails;
