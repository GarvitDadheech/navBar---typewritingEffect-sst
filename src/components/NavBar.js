import React from 'react';
import '../styles/NavBar.css';
function NavBar() {
    return (
        <div className="navbar-container">
            <ul className="navbar-items-list">
                <li className='nav-item'>
                    {/* <FontAwesomeIcon icon="fa-solid fa-house" /> */}
                    <a href="#" className="link-tag">Home</a>
                </li>
                <li className='nav-item'>
                    <i></i>
                    <a href="#" className="link-tag">Projects</a>
                </li>
                <li className='nav-item'>
                    <i></i>
                    <a href="#" className="link-tag">Resume</a>
                </li>
                <li className='nav-item'>
                    <i></i>
                    <a href="#" className="link-tag">Contacts</a>
                </li>
            </ul>
        </div>
    );
}
export default NavBar;