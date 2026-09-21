import { useEffect } from "react";

import ArtistCard from "../../components/ArtistCard/ArtistCard";
import artists from "../../data/artists";

import "./Artists.css";

function Artists() {
    useEffect(() => {
        document.title = "Explore | SkyArt";
    }, []);
    return (
        <main className="artists-page">

            <section className="artists-hero">
                <div className="container">

                    <p className="section-label">
                        The Artists
                    </p>

                    <div className="artists-heading">

                        <h1>
                            Meet the minds behind the works.
                        </h1>

                        <p>
                            Discover the artists, movements, and
                            stories behind some of the world's
                            remarkable works of art.
                        </p>

                    </div>

                </div>
            </section>


            <section className="artists-content">
                <div className="container">

                    <div className="artists-results">
                        <span>
                            {artists.length}
                        </span>

                        {artists.length === 1
                            ? " artist"
                            : " artists"}
                    </div>


                    <div className="artists-grid">

                        {artists.map((artist) => (
                            <ArtistCard
                                key={artist.id}
                                artist={artist}
                            />
                        ))}

                    </div>

                </div>
            </section>

        </main>
    );
}

export default Artists;