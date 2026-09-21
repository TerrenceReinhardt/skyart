import starryNight from "../assets/images/artworks/starry-night.jpg";
import greatWave from "../assets/images/artworks/great-wave.jpg";
import waterLilies from "../assets/images/artworks/water-lilies.jpg";
import pearlEarring from "../assets/images/artworks/pearl-earring.jpg";
import persistenceMemory from "../assets/images/artworks/persistence-memory.jpg";
import birthOfVenus from "../assets/images/artworks/birth-of-venus.jpg";

import sunflowers from "../assets/images/artworks/sunflowers.jpg";
import irises from "../assets/images/artworks/irises.jpg";

import fineWindClearMorning from "../assets/images/artworks/fine-wind-clear-morning.jpg";
import ejiriSuruga from "../assets/images/artworks/ejiri-suruga.jpg";

import impressionSunrise from "../assets/images/artworks/impression-sunrise.jpg";
import womanWithParasol from "../assets/images/artworks/woman-with-parasol.jpg";

import theMilkmaid from "../assets/images/artworks/the-milkmaid.jpg";
import artOfPainting from "../assets/images/artworks/art-of-painting.jpg";

import theElephants from "../assets/images/artworks/the-elephants.jpg";
import metamorphosisNarcissus from "../assets/images/artworks/metamorphosis-narcissus.jpg";

import primavera from "../assets/images/artworks/primavera.jpg";
import annunciation from "../assets/images/artworks/annunciation.jpg";

const artworks = [
    {
        id: 1,
        title: "The Starry Night",
        artist: "Vincent van Gogh",
        artistId: 1,
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
        artistId: 2,
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
        artistId: 3,
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
        artistId: 4,
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
        artistId: 5,
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
        artistId: 6,
        year: "1485",
        image: birthOfVenus,
        movement: "Renaissance",
        medium: "Tempera on canvas",
        location: "Uffizi Gallery, Florence",
        description:
            "The Birth of Venus depicts the goddess Venus arriving at the shore after her birth from the sea. The painting is one of the most celebrated works associated with the Italian Renaissance.",
    },

    {
        id: 7,
        title: "Sunflowers",
        artistId: 1,
        artist: "Vincent van Gogh",
        year: "1888",
        image: sunflowers,
        movement: "Post-Impressionism",
        medium: "Oil on canvas",
        location: "National Gallery, London",
        description:
            "Sunflowers belongs to Vincent van Gogh's celebrated series of still-life paintings depicting sunflowers in a vase. The work demonstrates his distinctive use of color and expressive brushwork.",
    },
    {
        id: 8,
        title: "Irises",
        artistId: 1,
        artist: "Vincent van Gogh",
        year: "1889",
        image: irises,
        movement: "Post-Impressionism",
        medium: "Oil on canvas",
        location: "J. Paul Getty Museum, Los Angeles",
        description:
            "Irises was painted during Vincent van Gogh's stay at the asylum in Saint-Rémy. The composition transforms a garden of flowers into a vivid study of color, rhythm, and natural form.",
    },
    {
        id: 9,
        title: "Fine Wind, Clear Morning",
        artistId: 2,
        artist: "Katsushika Hokusai",
        year: "1831",
        image: fineWindClearMorning,
        movement: "Ukiyo-e",
        medium: "Woodblock print",
        location: "Various collections",
        description:
            "Fine Wind, Clear Morning presents Mount Fuji beneath a clear sky. The print belongs to Hokusai's Thirty-Six Views of Mount Fuji series.",
    },
    {
        id: 10,
        title: "Ejiri in Suruga Province",
        artistId: 2,
        artist: "Katsushika Hokusai",
        year: "1832",
        image: ejiriSuruga,
        movement: "Ukiyo-e",
        medium: "Woodblock print",
        location: "Various collections",
        description:
            "Ejiri in Suruga Province depicts travelers struggling against a powerful gust of wind while Mount Fuji remains calm in the distance.",
    },
    {
        id: 11,
        title: "Impression, Sunrise",
        artistId: 3,
        artist: "Claude Monet",
        year: "1872",
        image: impressionSunrise,
        movement: "Impressionism",
        medium: "Oil on canvas",
        location: "Musée Marmottan Monet, Paris",
        description:
            "Impression, Sunrise depicts the harbor of Le Havre through atmospheric light, loose brushwork, and reflections across the water.",
    },
    {
        id: 12,
        title: "Woman with a Parasol",
        artistId: 3,
        artist: "Claude Monet",
        year: "1875",
        image: womanWithParasol,
        movement: "Impressionism",
        medium: "Oil on canvas",
        location: "National Gallery of Art, Washington, D.C.",
        description:
            "Woman with a Parasol captures a figure outdoors in bright daylight, emphasizing movement, atmosphere, and the fleeting effects of natural light.",
    },
    {
        id: 13,
        title: "The Milkmaid",
        artistId: 4,
        artist: "Johannes Vermeer",
        year: "1658",
        image: theMilkmaid,
        movement: "Baroque",
        medium: "Oil on canvas",
        location: "Rijksmuseum, Amsterdam",
        description:
            "The Milkmaid depicts a domestic servant carefully pouring milk. Vermeer's treatment of light and everyday detail gives the quiet scene a remarkable sense of presence.",
    },
    {
        id: 14,
        title: "The Art of Painting",
        artistId: 4,
        artist: "Johannes Vermeer",
        year: "1668",
        image: artOfPainting,
        movement: "Baroque",
        medium: "Oil on canvas",
        location: "Kunsthistorisches Museum, Vienna",
        description:
            "The Art of Painting presents an artist working in his studio and is often interpreted as a reflection on painting, history, and artistic practice.",
    },
    {
        id: 15,
        title: "The Elephants",
        artistId: 5,
        artist: "Salvador Dalí",
        year: "1948",
        image: theElephants,
        movement: "Surrealism",
        medium: "Oil on canvas",
        location: "Private collection",
        description:
            "The Elephants uses elongated figures and dreamlike imagery characteristic of Salvador Dalí's Surrealist visual language.",
    },
    {
        id: 16,
        title: "Metamorphosis of Narcissus",
        artistId: 5,
        artist: "Salvador Dalí",
        year: "1937",
        image: metamorphosisNarcissus,
        movement: "Surrealism",
        medium: "Oil on canvas",
        location: "Tate, London",
        description:
            "Metamorphosis of Narcissus draws on the classical myth of Narcissus and uses visual transformation to explore perception and identity.",
    },
    {
        id: 17,
        title: "Primavera",
        artistId: 6,
        artist: "Sandro Botticelli",
        year: "1482",
        image: primavera,
        movement: "Renaissance",
        medium: "Tempera on panel",
        location: "Uffizi Gallery, Florence",
        description:
            "Primavera presents a complex gathering of mythological figures within an elaborate garden and is one of Botticelli's best-known works.",
    },
    {
        id: 18,
        title: "The Annunciation",
        artistId: 6,
        artist: "Sandro Botticelli",
        year: "1489",
        image: annunciation,
        movement: "Renaissance",
        medium: "Tempera on panel",
        location: "Uffizi Gallery, Florence",
        description:
            "The Annunciation depicts the encounter between the angel Gabriel and the Virgin Mary with Botticelli's characteristic graceful figures and linear composition.",
    },
];

export default artworks;