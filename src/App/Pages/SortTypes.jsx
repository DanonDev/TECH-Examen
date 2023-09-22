import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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

    return (
        <>
            {detailTypes.types &&
                detailTypes.types.map((type) => (
                    <li key={type.id}>
                        <h2>{type.title}</h2>
                        <p>
                            Is Allowed: {type.rules.is_allowed ? 'Yes' : 'No'}
                        </p>
                        <p>
                            Is Station: {type.rules.is_station ? 'Yes' : 'No'}
                        </p>
                        <p>Is Home: {type.rules.is_home ? 'Yes' : 'No'}</p>
                    </li>
                ))}
        </>
    );
};

export default SortigTypes;
