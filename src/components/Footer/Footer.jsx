import { Link } from "react-router";

import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-container">

                <div>
                    <Link
                        to="/"
                        className="footer-brand"
                    >
                        ARTELIER
                    </Link>

                    <p className="footer-description">
                        Discover remarkable works of art
                        from collections around the world.
                    </p>
                </div>

                <div className="footer-navigation">
                    <Link to="/explore">
                        Explore
                    </Link>

                    <Link to="/artists">
                        Artists
                    </Link>

                    <Link to="/favorites">
                        Favorites
                    </Link>

                    <Link to="/about">
                        About
                    </Link>
                </div>

            </div>

            <div className="container footer-bottom">
                <p>
                    © {new Date().getFullYear()} Artelier
                </p>

                <p>
                    Art Discovery Platform
                </p>
            </div>
        </footer>
    );
}

export default Footer;