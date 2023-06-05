import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <NavLink to={'/home'}>
                Home
            </NavLink>
            <NavLink to={'/about'}>
                About
            </NavLink>
        </nav>
    )
}

export default Navigation;

