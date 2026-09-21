import { Link } from "react-router";

import artworks from "../../data/artworks";

import "./ArtistCard.css";

function ArtistCard({ artist }) {
    const featuredArtwork = artworks.find(
        (artwork) => artwork.artistId === artist.id
    );

    return (
        <article className="artist-card">

            <Link to={`/artist/${artist.id}`}>

                <div className="artist-card-image">
                    {featuredArtwork && (
                        <img
                            src={featuredArtwork.image}
                            alt={`Artwork by ${artist.name}`}
                            loading="lazy"
                        />
                    )}

                    <span className="artist-card-number">
                        {String(artist.id).padStart(2, "0")}
                    </span>
                </div>

                <div className="artist-card-content">

                    <h2>
                        {artist.name}
                    </h2>

                    <div className="artist-card-meta">
                        <p>
                            {artist.nationality}
                        </p>

                        <span>
                            {artist.born} — {artist.died}
                        </span>
                    </div>

                    <p className="artist-card-movement">
                        {artist.movement}
                    </p>

                </div>

            </Link>

        </article>
    );
}

export default ArtistCard;