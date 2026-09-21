import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState(() => {
        const savedFavorites = localStorage.getItem(
            "skyart-favorites"
        );

        return savedFavorites
            ? JSON.parse(savedFavorites)
            : [];
    });

    useEffect(() => {
        localStorage.setItem(
            "skyart-favorites",
            JSON.stringify(favorites)
        );
    }, [favorites]);

    function addFavorite(artwork) {
        setFavorites((currentFavorites) => {
            const alreadyExists = currentFavorites.some(
                (item) => item.id === artwork.id
            );

            if (alreadyExists) {
                return currentFavorites;
            }

            return [...currentFavorites, artwork];
        });
    }

    function removeFavorite(artworkId) {
        setFavorites((currentFavorites) =>
            currentFavorites.filter(
                (item) => item.id !== artworkId
            )
        );
    }

    function toggleFavorite(artwork) {
        const alreadyFavorite = favorites.some(
            (item) => item.id === artwork.id
        );

        if (alreadyFavorite) {
            removeFavorite(artwork.id);
        } else {
            addFavorite(artwork);
        }
    }

    function isFavorite(artworkId) {
        return favorites.some(
            (item) => item.id === artworkId
        );
    }

    return (
        <FavoritesContext.Provider
            value={{
                favorites,
                addFavorite,
                removeFavorite,
                toggleFavorite,
                isFavorite,
            }}
        >
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavorites() {
    return useContext(FavoritesContext);
}