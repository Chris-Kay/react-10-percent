import './Header.css'
import headerConfig from './config/header.json';

const clickNav = () => {
    var nav = document.getElementById("myTopnav");
    if (nav.className === "topnav") {
        nav.className += " responsive";
    } else {
        nav.className = "topnav";
    }
  }

const getNavItems = () => {
    return (
        <div>
            <a href="#home" className="active">Home</a>
            {headerConfig.map(listItem =>
                <a className='menu-items' key={listItem.linkName}>{listItem.linkName}</a>)
            }
            <a className="icon" onClick={clickNav}>
                <i className="burger-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </i>
            </a>
        </div>
    )}



const Header = () => {
  return (
    <header className="topnav" id="myTopnav">
    {getNavItems()}
  </header>
  
  );
}

export default Header;
