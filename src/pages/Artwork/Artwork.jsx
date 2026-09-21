import { Link, useParams } from "react-router";
import { useFavorites } from "../../context/FavoritesContext";

import artworks from "../../data/artworks";

import "./Artwork.css";

function Artwork() {
    const { id } = useParams();

    const artwork = artworks.find(
        (item) => item.id === Number(id)
    );

    const {
        toggleFavorite,
        isFavorite,
    } = useFavorites();

    const favorite = artwork
        ? isFavorite(artwork.id)
        : false;

    if (!artwork) {
        return (
            <main className="artwork-not-found">
                <div className="container">
                    <p className="section-label">
                        Artwork not found
                    </p>

                    <h1>
                        This artwork does not exist.
                    </h1>

                    <Link to="/explore">
                        Return to collection →
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="artwork-page">

            <section className="artwork-detail">
                <div className="container">

                    <Link
                        to="/"
                        className="artwork-back"
                    >
                        ← Back to collection
                    </Link>

                    <div className="artwork-detail-layout">

                        <div className="artwork-detail-visual">
                            <img
                                src={artwork.image}
                                alt={artwork.title}
                            />
                        </div>


                        <div className="artwork-detail-content">

                            <p className="section-label">
                                {artwork.movement}
                            </p>

                            <h1 className="artwork-detail-title">
                                {artwork.title}
                            </h1>

                            <p className="artwork-detail-artist">
                                {artwork.artist}
                            </p>


                            <div className="artwork-metadata">

                                <div>
                                    <span>Year</span>
                                    <p>{artwork.year}</p>
                                </div>

                                <div>
                                    <span>Medium</span>
                                    <p>{artwork.medium}</p>
                                </div>

                                <div>
                                    <span>Movement</span>
                                    <p>{artwork.movement}</p>
                                </div>

                                <div>
                                    <span>Collection</span>
                                    <p>{artwork.location}</p>
                                </div>

                            </div>


                            <div className="artwork-description">
                                <p className="artwork-description-label">
                                    About the artwork
                                </p>

                                <p>
                                    {artwork.description}
                                </p>
                            </div>


                            <button
                                type="button"
                                className={`favorite-button ${
                                    favorite ? "favorite-button-active" : ""
                                }`}
                                onClick={() => toggleFavorite(artwork)}
                            >
                                <span>
                                    {favorite ? "♥" : "♡"}
                                </span>

                                {favorite
                                    ? "Saved to favorites"
                                    : "Add to favorites"}
                            </button>

                        </div>

                    </div>

                </div>
            </section>

        </main>
    );
}

export default Artwork;