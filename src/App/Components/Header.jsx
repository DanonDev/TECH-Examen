import Logo from '../../Assets/logo.png';
import Login from '../../Assets/login.png';

const Header = () => {
    return (
        <>
            <div className="flex flex-row">
                <img src={Logo} />
                <a href="#">Forside</a>
                <a href="#">Sortering</a>
                <a href="#">Genbrugsstationer</a>
                <a href="#">Bestil beholder</a>
                <img src={Login} />
            </div>
        </>
    );
};

export default Header;

// <Link to="/home">Forside</Link>

// <Link to="/home">Sortering</Link>

// <Link to="/home">Genbrugsstationer</Link>

// <Link to="/home">Bestil beholder</Link>

// <Link to="/home">
//     <img src={Login} />
// </Link>
