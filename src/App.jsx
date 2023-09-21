import './App.css';
import Header from './App/Components/Header.jsx';
import Footer from './App/components/Footer';
import PagesRouter, { StayOnTop } from './App/Router/PagesRouter';

function App() {
    return (
        <>
            <Header />
            <PagesRouter />
            <Footer />
            <StayOnTop />
        </>
    );
}

export default App;
