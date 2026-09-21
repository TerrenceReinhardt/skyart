import { Link, NavLink, useLocation } from "react-router";

import { useFavorites } from "../../context/FavoritesContext";

import "./Navbar.css";

function Navbar() {
    const location = useLocation();
    const { favorites } = useFavorites();

    const isExploreActive =
        location.pathname === "/explore" ||
        location.pathname.startsWith("/artwork/");

    const isArtistsActive =
        location.pathname === "/artists" ||
        location.pathname.startsWith("/artist/");

    return (
        <header className="navbar">
            <div className="container navbar-container">

                <Link
                    to="/"
                    className="navbar-logo"
                    aria-label="SkyArt home"
                >
                    SKYART
                </Link>

                <nav
                    className="navbar-navigation"
                    aria-label="Main navigation"
                >
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            isActive
                                ? "navbar-link active"
                                : "navbar-link"
                        }
                    >
                        Home
                    </NavLink>

                    <Link
                        to="/explore"
                        className={
                            isExploreActive
                                ? "navbar-link active"
                                : "navbar-link"
                        }
                    >
                        Explore
                    </Link>

                    <Link
                        to="/artists"
                        className={
                            isArtistsActive
                                ? "navbar-link active"
                                : "navbar-link"
                        }
                    >
                        Artists
                    </Link>

                    <NavLink
                        to="/favorites"
                        className={({ isActive }) =>
                            isActive
                                ? "navbar-link active"
                                : "navbar-link"
                        }
                    >
                        Favorites

                        {favorites.length > 0 && (
                            <span className="navbar-favorites-count">
                                {favorites.length}
                            </span>
                        )}
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive
                                ? "navbar-link active"
                                : "navbar-link"
                        }
                    >
                        About
                    </NavLink>
                </nav>

            </div>
        </header>
    );
}

export default Navbar;