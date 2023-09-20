import './App.css';
import Header from './App/Components/Header.jsx';
import Footer from './App/components/Footer';
import Wave from './App/Components/Wave';
import PagesRouter from './App/Router/PagesRouter';

function App() {
    return (
        <>
            <Header />
            <PagesRouter />
            <Wave />
            <Footer />
        </>
    );
}

export default App;
