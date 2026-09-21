import { Link, useParams } from "react-router";
import { useEffect } from "react";
import ArtworkCard from "../../components/ArtworkCard/ArtworkCard";
import artists from "../../data/artists";
import artworks from "../../data/artworks";

import "./ArtistDetail.css";

function ArtistDetail() {
    const { id } = useParams();

    const artist = artists.find(
        (item) => item.id === Number(id)
    );

    useEffect(() => {
        if (artist) {
            document.title = `${artist.name} | SkyArt`;
        } else {
            document.title = "Artist Not Found | SkyArt";
        }
    }, [artist]);

    if (!artist) {
        return (
            <main className="artist-not-found">
                <div className="container">
                    <p className="section-label">
                        Artist not found
                    </p>

                    <h1>
                        This artist does not exist.
                    </h1>

                    <Link to="/artists">
                        Return to artists →
                    </Link>
                </div>
            </main>
        );
    }

    const artistArtworks = artworks.filter(
        (artwork) => artwork.artistId === artist.id
    );

    const featuredArtwork = artistArtworks[0];

    return (
        <main className="artist-detail-page">

            <section className="artist-profile">
                <div className="container">

                    <Link
                        to="/artists"
                        className="artist-back"
                    >
                        ← Back to artists
                    </Link>

                    <div className="artist-profile-layout">

                        <div className="artist-profile-visual">
                            {featuredArtwork ? (
                                <img
                                    src={featuredArtwork.image}
                                    alt={`Artwork by ${artist.name}`}
                                />
                            ) : (
                                <div className="artist-image-fallback">
                                    No artwork available
                                </div>
                            )}
                        </div>


                        <div className="artist-profile-content">

                            <p className="section-label">
                                {artist.movement}
                            </p>

                            <h1 className="artist-profile-name">
                                {artist.name}
                            </h1>

                            <p className="artist-profile-nationality">
                                {artist.nationality}
                            </p>


                            <div className="artist-profile-meta">

                                <div>
                                    <span>Born</span>
                                    <p>{artist.born}</p>
                                </div>

                                <div>
                                    <span>Died</span>
                                    <p>{artist.died}</p>
                                </div>

                                <div>
                                    <span>Nationality</span>
                                    <p>{artist.nationality}</p>
                                </div>

                                <div>
                                    <span>Movement</span>
                                    <p>{artist.movement}</p>
                                </div>

                            </div>


                            <div className="artist-biography">
                                <p className="artist-biography-label">
                                    About the artist
                                </p>

                                <p>
                                    {artist.description}
                                </p>
                            </div>

                        </div>

                    </div>

                </div>
            </section>


            <section className="artist-works section">
                <div className="container">

                    <div className="artist-works-header">

                        <div>
                            <p className="section-label">
                                Selected Works
                            </p>

                            <h2>
                                Works by {artist.name}.
                            </h2>
                        </div>

                        <span>
                            {artistArtworks.length}
                            {artistArtworks.length === 1
                                ? " work"
                                : " works"}
                        </span>

                    </div>


                    {artistArtworks.length > 0 ? (
                        <div className="artist-works-grid">

                            {artistArtworks.map((artwork) => (
                                <ArtworkCard
                                    key={artwork.id}
                                    artwork={artwork}
                                />
                            ))}

                        </div>
                    ) : (
                        <div className="artist-works-empty">
                            No works are currently available
                            for this artist.
                        </div>
                    )}

                </div>
            </section>

        </main>
    );
}

export default ArtistDetail;