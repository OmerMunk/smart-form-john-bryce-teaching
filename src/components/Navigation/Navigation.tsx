import {NavLink} from "react-router-dom";
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className='main-navigation' >
            <NavLink to={'/home'}>
                Home
            </NavLink>
            <NavLink to={'/about-us'}>
                About Us
            </NavLink>
            <NavLink to={'/contact-us'}>
                Contact Us
            </NavLink>
            <NavLink to={'/kanye'}>
                Kanye
            </NavLink>
        </nav>
    )
}

export default Navigation;

