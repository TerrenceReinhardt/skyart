import starryNight from "../assets/images/artworks/starry-night.jpg";
import greatWave from "../assets/images/artworks/great-wave.jpg";
import waterLilies from "../assets/images/artworks/water-lilies.jpg";
import pearlEarring from "../assets/images/artworks/pearl-earring.jpg";
import persistenceMemory from "../assets/images/artworks/persistence-memory.jpg";
import birthOfVenus from "../assets/images/artworks/birth-of-venus.jpg";

const artworks = [
    {
        id: 1,
        title: "The Starry Night",
        artist: "Vincent van Gogh",
        year: "1889",
        image: starryNight,
        movement: "Post-Impressionism",
        medium: "Oil on canvas",
        location: "Museum of Modern Art, New York",
        description:
            "The Starry Night depicts the view from Vincent van Gogh's room at the asylum in Saint-Rémy-de-Provence. Its swirling sky, luminous stars, and expressive brushwork have made it one of the most recognizable works of modern art.",
    },
    {
        id: 2,
        title: "The Great Wave off Kanagawa",
        artist: "Katsushika Hokusai",
        year: "1831",
        image: greatWave,
        movement: "Ukiyo-e",
        medium: "Woodblock print",
        location: "Various collections",
        description:
            "The Great Wave off Kanagawa presents an enormous wave rising above boats with Mount Fuji visible in the distance. It is one of the best-known works from Hokusai's Thirty-Six Views of Mount Fuji series.",
    },
    {
        id: 3,
        title: "Water Lilies",
        artist: "Claude Monet",
        year: "1906",
        image: waterLilies,
        movement: "Impressionism",
        medium: "Oil on canvas",
        location: "Art Institute of Chicago",
        description:
            "Water Lilies belongs to Claude Monet's extensive series inspired by the water garden at his home in Giverny. The work explores reflections, light, color, and the changing appearance of the natural environment.",
    },
    {
        id: 4,
        title: "Girl with a Pearl Earring",
        artist: "Johannes Vermeer",
        year: "1665",
        image: pearlEarring,
        movement: "Baroque",
        medium: "Oil on canvas",
        location: "Mauritshuis, The Hague",
        description:
            "Girl with a Pearl Earring portrays a young figure turning toward the viewer while wearing an exotic dress and a prominent pearl earring. The painting is celebrated for its subtle lighting and intimate expression.",
    },
    {
        id: 5,
        title: "The Persistence of Memory",
        artist: "Salvador Dalí",
        year: "1931",
        image: persistenceMemory,
        movement: "Surrealism",
        medium: "Oil on canvas",
        location: "Museum of Modern Art, New York",
        description:
            "The Persistence of Memory is a Surrealist painting known for its unusual landscape and melting clocks. The work explores themes associated with time, memory, dreams, and perception.",
    },
    {
        id: 6,
        title: "The Birth of Venus",
        artist: "Sandro Botticelli",
        year: "1485",
        image: birthOfVenus,
        movement: "Renaissance",
        medium: "Tempera on canvas",
        location: "Uffizi Gallery, Florence",
        description:
            "The Birth of Venus depicts the goddess Venus arriving at the shore after her birth from the sea. The painting is one of the most celebrated works associated with the Italian Renaissance.",
    },
];

export default artworks;