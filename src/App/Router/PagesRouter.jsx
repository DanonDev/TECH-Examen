import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../Pages/Home.jsx';
import Sorting from '../Pages/Sorting.jsx';
import RecyclingStations from '../Pages/RecyclingStations.jsx';
import Order from '../Pages/Order.jsx';
import Login from '../Pages/Login.jsx';
import SortigDetails from '../Pages/SortingDetails.jsx';
import SortigTypes from '../Pages/SortTypes.jsx';
import StationDetails from '../Pages/StationsDetails.jsx';
import { useEffect } from 'react';

// Add default position "OnTop" when switching between pages
export const StayOnTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
};

// Router for navigation between pages
const PagesRouter = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/sortering" element={<Sorting />} />
            <Route path="/section/:section_id" element={<SortigDetails />} />
            <Route
                path="/category/details/:category_id"
                element={<SortigTypes />}
            />
            <Route path="/orgs/:id" element={<StationDetails />} />
            <Route path="/genbrugsstationer" element={<RecyclingStations />} />
            <Route path="/bestil" element={<Order />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};

export default PagesRouter;
