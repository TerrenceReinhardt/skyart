import { Link } from "react-router";

import "./ArtworkCard.css";

function ArtworkCard({ artwork }) {
    return (
        <article className="artwork-card">
            <Link to={`/artwork/${artwork.id}`}>

                <div className="artwork-image-container">
                    <img
                        src={artwork.image}
                        alt={artwork.title}
                        className="artwork-image"
                        loading="lazy"
                    />
                </div>

                <div className="artwork-info">
                    <h3>
                        {artwork.title}
                    </h3>

                    <p>
                        {artwork.artist}
                    </p>

                    <span>
                        {artwork.year}
                    </span>
                </div>

            </Link>
        </article>
    );
}

export default ArtworkCard;