import { useEffect } from "react";
import { Link } from "react-router";

import "./NotFound.css";

function NotFound() {
    useEffect(() => {
        document.title = "Page Not Found | SkyArt";
    }, []);

    return (
        <main className="not-found-page">

            <div className="container not-found-container">

                <div className="not-found-code">
                    <span>4</span>
                    <span className="not-found-zero">○</span>
                    <span>4</span>
                </div>

                <p className="section-label">
                    Page Not Found
                </p>

                <h1>
                    This piece seems to be missing.
                </h1>

                <p className="not-found-description">
                    The page you're looking for may have been
                    moved, removed, or never existed in the
                    collection.
                </p>

                <div className="not-found-actions">

                    <Link
                        to="/"
                        className="not-found-primary"
                    >
                        Return home
                        <span>→</span>
                    </Link>

                    <Link
                        to="/explore"
                        className="not-found-secondary"
                    >
                        Explore artworks
                    </Link>

                </div>

            </div>

        </main>
    );
}

export default NotFound;