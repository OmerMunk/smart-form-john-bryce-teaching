import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <NavLink to={'/home'}>
                Home
            </NavLink>
            <NavLink to={'/about-us'}>
                About Us
            </NavLink>
            <NavLink to={'/contact-us'}>
                Contact Us
            </NavLink>
        </nav>
    )
}

export default Navigation;

