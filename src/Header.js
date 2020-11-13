import './Header.css'
import logo from './generic-logo.jpg'
const Header = () => {
  return (
    <header className="header">
        <div className="header-wrapper">
            <div className="header-content">
                <img className="logo" src={logo} alt="logo" />
                <ul className="menu-links">
                    <li>one</li>
                    <li>two</li>
                    <li>three</li>
                    <li>four</li>
                </ul>
            </div>
        </div>
    </header>
  );
}

export default Header;
