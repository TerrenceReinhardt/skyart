import { NavLink } from "react-router";

import "./Navbar.css";

function Navbar() {
    return (
        <header className="navbar">
            <div className="container navbar-container">

                <NavLink
                    to="/"
                    className="navbar-brand"
                >
                    ARTELIER
                </NavLink>

                <nav className="navbar-links">
                    <NavLink to="/explore">
                        Explore
                    </NavLink>

                    <NavLink to="/artists">
                        Artists
                    </NavLink>

                    <NavLink to="/favorites">
                        Favorites
                    </NavLink>

                    <NavLink to="/about">
                        About
                    </NavLink>
                </nav>

            </div>
        </header>
    );
}

export default Navbar;