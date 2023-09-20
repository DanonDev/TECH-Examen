import './App.css';
import Header from './App/Components/Header.jsx';
import Footer from './App/components/Footer';
import Wave from './App/Components/Wave';
import PagesRouter from './App/Router/PagesRouter';

function App() {
    return (
        <>
            <Header />
            <div className="flex flex-col min-h-full">
                <PagesRouter />
                <Wave />
            </div>
            <Footer />
        </>
    );
}

export default App;
