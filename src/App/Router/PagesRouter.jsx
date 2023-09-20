import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home.jsx';
import Sorting from '../Pages/Sorting.jsx';
import RecyclingStations from '../Pages/RecyclingStations.jsx';
import Order from '../Pages/Order.jsx';
import Login from '../Pages/Login.jsx';

const PagesRouter = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/sortering" element={<Sorting />} />
            <Route path="/genbrugsstationer" element={<RecyclingStations />} />
            <Route path="/bestil" element={<Order />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};

export default PagesRouter;
