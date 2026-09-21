import { Link } from "react-router";

import ArtworkCard from "../../components/ArtworkCard/ArtworkCard";
import { useFavorites } from "../../context/FavoritesContext";

import "./Favorites.css";

function Favorites() {
    const { favorites } = useFavorites();

    return (
        <main className="favorites-page">

            <section className="favorites-hero">
                <div className="container">

                    <p className="section-label">
                        Personal Collection
                    </p>

                    <div className="favorites-heading">
                        <div>
                            <h1>
                                Your favorite works.
                            </h1>

                            <p>
                                A personal collection of artworks
                                that caught your attention.
                            </p>
                        </div>

                        <span className="favorites-count">
                            {favorites.length}
                            {favorites.length === 1
                                ? " saved work"
                                : " saved works"}
                        </span>
                    </div>

                </div>
            </section>


            <section className="favorites-content">
                <div className="container">

                    {favorites.length > 0 ? (

                        <div className="favorites-grid">
                            {favorites.map((artwork) => (
                                <ArtworkCard
                                    key={artwork.id}
                                    artwork={artwork}
                                />
                            ))}
                        </div>

                    ) : (

                        <div className="favorites-empty">

                            <span className="favorites-empty-icon">
                                ♡
                            </span>

                            <h2>
                                Your collection is empty.
                            </h2>

                            <p>
                                Discover artworks you love and save
                                them here to build your own collection.
                            </p>

                            <Link
                                to="/explore"
                                className="favorites-explore"
                            >
                                Explore artworks
                                <span>→</span>
                            </Link>

                        </div>

                    )}

                </div>
            </section>

        </main>
    );
}

export default Favorites;