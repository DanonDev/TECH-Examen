import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SortigTypes = () => {
    const { category_id } = useParams();
    const [detailTypes, setDetaiTypes] = useState({});

    useEffect(() => {
        const getData = async () => {
            try {
                const details = await axios.get(
                    `http://localhost:3000/category/details/${category_id}`
                );
                setDetaiTypes(details.data);
            } catch (error) {
                console.error('Error fetching detail data:', error);
            }
        };
        getData();
    }, [category_id]);

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className="w-full flex-col px-10 md:px-20 py-20">
            {detailTypes.types &&
                detailTypes.types.map((type) => (
                    <div
                        key={type.id}
                        className="font-mulish text-xl md:text-2xl"
                    >
                        <div>
                            {type.rules.is_allowed ? (
                                <div>
                                    <p>
                                        Vi modtager på genbrugsstationen:{' '}
                                        <span className="font-extrabold text-main-green">
                                            {type.title}
                                        </span>
                                    </p>
                                </div>
                            ) : (
                                <div>
                                    <p>
                                        Modtager ikke / ikke-godkendte type:{' '}
                                        <span className="font-extrabold text-text-red">
                                            {type.title}
                                        </span>
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            <button
                onClick={goBack}
                className="text-xl mt-10 text-main-white bg-main-dark-green p-3 w-44 rounded-xl transition-all duration-300 ease-in-out hover:scale-110 hover:font-bold"
            >
                Tilbage
            </button>
        </div>
    );
};

export default SortigTypes;
