import { Link } from "react-router";
import { useEffect } from "react";

import ArtworkCard from "../../components/ArtworkCard/ArtworkCard";
import artworks from "../../data/artworks";

import "./Home.css";

function Home() {
    const featuredArtwork = artworks[0];
    useEffect(() => {
        document.title = "SkyArt | Digital Art Collection";
    }, []);

    return (
        <main className="home">

            <section className="hero">
                <div className="container hero-container">

                    <div className="hero-content">
                        <p className="hero-eyebrow">
                            Digital Art Collection
                        </p>

                        <h1 className="hero-title">
                            Art that
                            <span> transcends time.</span>
                        </h1>

                        <p className="hero-description">
                            Discover remarkable paintings, artists,
                            and stories from collections around the world.
                        </p>

                        <Link
                            to="/explore"
                            className="hero-button"
                        >
                            Explore the collection
                            <span aria-hidden="true">→</span>
                        </Link>
                    </div>


                    <Link
                        to={`/artwork/${featuredArtwork.id}`}
                        className="hero-artwork"
                    >
                        <div className="hero-image-container">
                            <img
                                src={featuredArtwork.image}
                                alt={featuredArtwork.title}
                                className="hero-image"
                            />
                        </div>

                        <div className="hero-artwork-info">
                            <div>
                                <h2>
                                    {featuredArtwork.title}
                                </h2>

                                <p>
                                    {featuredArtwork.artist}
                                </p>
                            </div>

                            <span>
                                {featuredArtwork.year}
                            </span>
                        </div>
                    </Link>

                </div>
            </section>


            <section className="featured section">
                <div className="container">

                    <div className="featured-header">
                        <div>
                            <p className="section-label">
                                Curated Selection
                            </p>

                            <h2 className="featured-title">
                                Works worth discovering.
                            </h2>
                        </div>

                        <Link
                            to="/explore"
                            className="featured-link"
                        >
                            View all works →
                        </Link>
                    </div>


                    <div className="featured-grid">
                        {artworks.slice(0, 6).map((artwork) => (
                            <ArtworkCard
                                key={artwork.id}
                                artwork={artwork}
                            />
                        ))}
                    </div>

                </div>
            </section>

        </main>
    );
}

export default Home;