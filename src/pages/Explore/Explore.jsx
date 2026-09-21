import { useMemo, useState, useEffect } from "react";

import ArtworkCard from "../../components/ArtworkCard/ArtworkCard";
import artworks from "../../data/artworks";

import "./Explore.css";

function Explore() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedMovement, setSelectedMovement] = useState("All");
    const [sortOrder, setSortOrder] = useState("default");

    useEffect(() => {
        document.title = "Explore | SkyArt";
    }, []);

    const movements = [
        "All",
        ...new Set(artworks.map((artwork) => artwork.movement)),
    ];

    const filteredArtworks = useMemo(() => {
        const results = artworks.filter((artwork) => {
            const search = searchTerm.toLowerCase().trim();

            const matchesSearch =
                artwork.title.toLowerCase().includes(search) ||
                artwork.artist.toLowerCase().includes(search);

            const matchesMovement =
                selectedMovement === "All" ||
                artwork.movement === selectedMovement;

            return matchesSearch && matchesMovement;
        });

        if (sortOrder === "oldest") {
            return [...results].sort(
                (a, b) => Number(a.year) - Number(b.year)
            );
        }

        if (sortOrder === "newest") {
            return [...results].sort(
                (a, b) => Number(b.year) - Number(a.year)
            );
        }

        if (sortOrder === "title") {
            return [...results].sort((a, b) =>
                a.title.localeCompare(b.title)
            );
        }

        return results;
    }, [searchTerm, selectedMovement, sortOrder]);

    function clearFilters() {
        setSearchTerm("");
        setSelectedMovement("All");
        setSortOrder("default");
    }

    return (
        <main className="explore-page">

            <section className="explore-hero">
                <div className="container">

                    <p className="section-label">
                        The Collection
                    </p>

                    <div className="explore-heading">
                        <h1>
                            Explore remarkable works.
                        </h1>

                        <p>
                            Browse paintings from different artists,
                            periods, and artistic movements.
                        </p>
                    </div>

                </div>
            </section>


            <section className="explore-content">
                <div className="container">

                    <div className="explore-controls">

                        <div className="explore-search">
                            <label htmlFor="artwork-search">
                                Search
                            </label>

                            <input
                                id="artwork-search"
                                type="search"
                                placeholder="Search by artwork or artist..."
                                value={searchTerm}
                                onChange={(event) =>
                                    setSearchTerm(event.target.value)
                                }
                            />
                        </div>


                        <div className="explore-select">
                            <label htmlFor="movement-filter">
                                Movement
                            </label>

                            <select
                                id="movement-filter"
                                value={selectedMovement}
                                onChange={(event) =>
                                    setSelectedMovement(event.target.value)
                                }
                            >
                                {movements.map((movement) => (
                                    <option
                                        key={movement}
                                        value={movement}
                                    >
                                        {movement}
                                    </option>
                                ))}
                            </select>
                        </div>


                        <div className="explore-select">
                            <label htmlFor="sort-order">
                                Sort by
                            </label>

                            <select
                                id="sort-order"
                                value={sortOrder}
                                onChange={(event) =>
                                    setSortOrder(event.target.value)
                                }
                            >
                                <option value="default">
                                    Featured
                                </option>

                                <option value="oldest">
                                    Oldest first
                                </option>

                                <option value="newest">
                                    Newest first
                                </option>

                                <option value="title">
                                    Title A–Z
                                </option>
                            </select>
                        </div>

                    </div>


                    <div className="explore-results-header">
                        <p>
                            <strong>
                                {filteredArtworks.length}
                            </strong>

                            {filteredArtworks.length === 1
                                ? " work"
                                : " works"}
                        </p>

                        {(searchTerm ||
                            selectedMovement !== "All" ||
                            sortOrder !== "default") && (
                            <button
                                type="button"
                                className="clear-filters"
                                onClick={clearFilters}
                            >
                                Clear filters
                            </button>
                        )}
                    </div>


                    {filteredArtworks.length > 0 ? (
                        <div className="explore-grid">
                            {filteredArtworks.map((artwork) => (
                                <ArtworkCard
                                    key={artwork.id}
                                    artwork={artwork}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="explore-empty">
                            <span>○</span>

                            <h2>
                                No artworks found.
                            </h2>

                            <p>
                                Try another artist, title,
                                or artistic movement.
                            </p>

                            <button
                                type="button"
                                onClick={clearFilters}
                            >
                                Clear filters →
                            </button>
                        </div>
                    )}

                </div>
            </section>

        </main>
    );
}

export default Explore;