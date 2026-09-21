import { Link } from "react-router";

import artworks from "../../data/artworks";
import artists from "../../data/artists";

import "./About.css";

function About() {
    return (
        <main className="about-page">

            <section className="about-hero">
                <div className="container">

                    <p className="section-label">
                        About SkyArt
                    </p>

                    <h1 className="about-title">
                        A digital space for
                        <span> timeless art.</span>
                    </h1>

                    <div className="about-introduction">

                        <p>
                            SkyArt is a digital art discovery
                            experience designed to make exploring
                            remarkable artworks simple, elegant,
                            and engaging.
                        </p>

                        <p>
                            Browse works from influential artists,
                            discover different artistic movements,
                            and create a personal collection of
                            pieces you want to revisit.
                        </p>

                    </div>

                </div>
            </section>


            <section className="about-statistics">
                <div className="container">

                    <div className="statistics-grid">

                        <div className="statistic">
                            <span>
                                {artworks.length}
                            </span>

                            <p>
                                Artworks
                            </p>
                        </div>

                        <div className="statistic">
                            <span>
                                {artists.length}
                            </span>

                            <p>
                                Artists
                            </p>
                        </div>

                        <div className="statistic">
                            <span>
                                {
                                    new Set(
                                        artworks.map(
                                            (artwork) =>
                                                artwork.movement
                                        )
                                    ).size
                                }
                            </span>

                            <p>
                                Movements
                            </p>
                        </div>

                    </div>

                </div>
            </section>


            <section className="about-philosophy section">
                <div className="container">

                    <div className="about-philosophy-layout">

                        <div>
                            <p className="section-label">
                                The Experience
                            </p>

                            <h2>
                                Discovery without distraction.
                            </h2>
                        </div>

                        <div className="about-philosophy-content">

                            <p>
                                SkyArt combines the atmosphere of a
                                contemporary gallery with the
                                accessibility of a modern digital
                                experience.
                            </p>

                            <p>
                                The interface places artwork at the
                                center while providing simple tools
                                for searching, filtering, learning
                                about artists, and saving favorite
                                works.
                            </p>

                            <Link to="/explore">
                                Explore the collection
                                <span>→</span>
                            </Link>

                        </div>

                    </div>

                </div>
            </section>

        </main>
    );
}

export default About;