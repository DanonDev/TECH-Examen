import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
            <div className="bg-main-green">
                <h1>{sectionDetails.title}</h1>
                <p>{sectionDetails.description}</p>
                <div>
                    {sectionDetails.categories &&
                        sectionDetails.categories.map((category) => (
                            <div key={category.id}>
                                <h2>{category.title}</h2>
                                <img
                                    src={category.image_filepath}
                                    alt={category.image_filename}
                                />
                                <img
                                    src={category.icon_filepath}
                                    alt={category.icon_filename}
                                />
                                {/* You can display other category information here */}
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
};

export default SortigDetails;
