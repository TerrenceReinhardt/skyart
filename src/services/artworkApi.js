const API_BASE_URL = "https://api.artic.edu/api/v1";
const IIIF_BASE_URL = "https://www.artic.edu/iiif/2";

export async function getFeaturedArtworks(limit = 6) {
    const fields = [
        "id",
        "title",
        "artist_title",
        "date_display",
        "image_id",
        "is_public_domain",
    ].join(",");

    const response = await fetch(
        `${API_BASE_URL}/artworks?limit=${limit}&fields=${fields}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch artworks.");
    }

    const result = await response.json();

    return {
        artworks: result.data,
    };
}

export function getArtworkImageUrl(imageId, width = 843) {
    if (!imageId) {
        return null;
    }

    return `${IIIF_BASE_URL}/${imageId}/full/${width},/0/default.jpg`;
}