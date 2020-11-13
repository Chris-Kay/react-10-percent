import './Header.css'
import logo from './generic-logo.jpg'
import headerConfig from './config/header.json';

const getNavItems = () => {
    return (<ul className="menu-links">{headerConfig.map(listItem => 
        <li key={listItem.linkName}>{listItem.linkName}</li>)}
    </ul>)
}

const Header = () => {
  return (
    <header className="header">
        <div className="header-wrapper">
            <div className="header-content">
                <img className="logo" src={logo} alt="logo" />
                    {getNavItems()}
            </div>
        </div>
    </header>
  );
}

export default Header;
