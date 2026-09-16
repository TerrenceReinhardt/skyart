import { Link } from "react-router";

import "./Home.css";

function Home() {
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

                    <div className="hero-artwork">
                        <div className="hero-image-placeholder">
                            <span>Featured Artwork</span>
                        </div>

                        <div className="hero-artwork-info">
                            <div>
                                <h2>The Starry Night</h2>
                                <p>Vincent van Gogh</p>
                            </div>

                            <span>1889</span>
                        </div>
                    </div>
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
                        <article className="artwork-card">
                            <div className="artwork-placeholder artwork-tall">
                                Artwork
                            </div>

                            <h3>The Great Wave</h3>
                            <p>Katsushika Hokusai</p>
                            <span>1831</span>
                        </article>

                        <article className="artwork-card">
                            <div className="artwork-placeholder">
                                Artwork
                            </div>

                            <h3>Water Lilies</h3>
                            <p>Claude Monet</p>
                            <span>1906</span>
                        </article>

                        <article className="artwork-card">
                            <div className="artwork-placeholder artwork-tall">
                                Artwork
                            </div>

                            <h3>Girl with a Pearl Earring</h3>
                            <p>Johannes Vermeer</p>
                            <span>1665</span>
                        </article>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;