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
    },
    {
        id: 2,
        title: "The Great Wave off Kanagawa",
        artist: "Katsushika Hokusai",
        year: "1831",
        image: greatWave,
        movement: "Ukiyo-e",
    },
    {
        id: 3,
        title: "Water Lilies",
        artist: "Claude Monet",
        year: "1906",
        image: waterLilies,
        movement: "Impressionism",
    },
    {
        id: 4,
        title: "Girl with a Pearl Earring",
        artist: "Johannes Vermeer",
        year: "1665",
        image: pearlEarring,
        movement: "Baroque",
    },
    {
        id: 5,
        title: "The Persistence of Memory",
        artist: "Salvador Dalí",
        year: "1931",
        image: persistenceMemory,
        movement: "Surrealism",
    },
    {
        id: 6,
        title: "The Birth of Venus",
        artist: "Sandro Botticelli",
        year: "1485",
        image: birthOfVenus,
        movement: "Renaissance",
    },
];

export default artworks;