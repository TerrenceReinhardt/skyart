import { Routes, Route } from "react-router";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import Artwork from "./pages/Artwork/Artwork";
import Artists from "./pages/Artists/Artists";
import ArtistDetail from "./pages/ArtistDetail/ArtistDetail";
import Favorites from "./pages/Favorites/Favorites";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/artwork/:id" element={<Artwork />} />
                <Route path="/artists" element={<Artists />} />
                <Route path="/artist/:id" element={<ArtistDetail />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;