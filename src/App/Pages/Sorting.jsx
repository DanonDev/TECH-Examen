import axios from 'axios';
import { useState, useEffect } from 'react';

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
        <div className="font-mulish">
            <div>
                <h1>
                    Din guide<br></br>
                    <span>til en sund affaldssortering</span>
                </h1>
                <input type="text" />
            </div>
            <div className="w-full flex flex-wrap">
                {data.map((item) => (
                    <div key={item.id} className="">
                        <img src={item.filepath} alt={item.filename} />
                        <div style={{ backgroundColor: `#${item.color}` }}>
                            <h2>{item.title}</h2>
                            {/* <p>Color: {item.color}</p> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sorting;
