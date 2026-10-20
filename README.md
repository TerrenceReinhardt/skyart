# SkyArt — Digital Art Gallery

SkyArt is a responsive digital art gallery developed using **React and Vite**. The application provides an interactive platform for discovering famous artworks, exploring influential artists, and creating personalized artwork collections.

The project focuses on modern frontend development practices, including reusable React components, dynamic routing, state management, responsive design, and browser-based data persistence.

## Features

- **Artwork Exploration:** Browse a curated collection of 18 artworks from six influential artists across different artistic movements.
- **Search and Filtering:** Search artworks by title or artist, filter by artistic movement, and sort by publication year or title.
- **Artwork Details:** View individual artworks with descriptions, artists, creation years, mediums, movements, and collection information.
- **Artist Profiles:** Explore artist biographies and discover their associated artworks through dynamically generated profile pages.
- **Favorites Collection:** Save and remove favorite artworks using React Context API, with localStorage persistence across browser sessions.
- **Responsive Design:** Enjoy layouts optimized for desktop, tablet, and mobile screens.
- **Dynamic Navigation:** Navigate between gallery sections using React Router, including active navigation indicators and dynamic browser titles.
- **Error Handling:** Display custom error pages for invalid routes and nonexistent artworks or artists.

## Technologies Used

| Technology | Purpose |
|---|---|
| React | Component-based frontend development |
| JavaScript (ES6+) | Application logic and interactivity |
| Vite | Development server and production build |
| React Router | Client-side routing and navigation |
| React Context API | Shared favorites state management |
| localStorage | Persistent browser storage |
| CSS3 | Responsive layouts and visual styling |
| HTML5 | Semantic page structure |

## Screenshots

Screenshots of the application will be added to showcase its interface and functionality.

Suggested screenshots:

- Homepage
- Artwork Explorer
- Artwork Detail
- Artist Profiles
- Favorites Collection

## Installation and Setup

Follow these steps to run SkyArt locally.

### 1. Clone the repository

```bash
git clone https://github.com/TerrenceReinhardt/skyart.git
```

### 2. Navigate to the project directory

```bash
cd skyart
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in the terminal, typically `http://localhost:5173`.

### 5. Build for production

```bash
npm run build
```

### 6. Preview the production build

```bash
npm run preview
```

## Project Structure

```text
src/
├── assets/
│   └── images/
│       └── artworks/
├── components/
│   ├── ArtistCard/
│   ├── ArtworkCard/
│   ├── Footer/
│   └── Navbar/
├── context/
│   ├── FavoritesContext.jsx
│   ├── favoritesContextStore.js
│   └── useFavorites.js
├── data/
│   ├── artists.js
│   └── artworks.js
├── pages/
│   ├── About/
│   ├── ArtistDetail/
│   ├── Artists/
│   ├── Artwork/
│   ├── Explore/
│   ├── Favorites/
│   ├── Home/
│   └── NotFound/
├── styles/
│   ├── global.css
│   └── variables.css
├── App.jsx
└── main.jsx
```

## Technical Highlights

**Reusable Components**

SkyArt uses reusable artwork and artist cards to maintain consistent interfaces across multiple pages while reducing duplicated code.

**Dynamic Routing**

React Router enables individual artwork and artist pages to render based on URL parameters, allowing multiple profiles and detail pages to share the same component structure.

**State Management**

React Context API provides shared favorites functionality across the application, while localStorage preserves selected artworks after browser refreshes.

**Client-Side Data Processing**

The artwork explorer implements interactive searching, filtering, and sorting using JavaScript array operations and React state.

## Future Improvements

- Integrate a museum or artwork API for a larger collection.
- Introduce pagination for browsing extensive artwork collections.
- Add more advanced filters for artwork periods and mediums.
- Improve artwork metadata and source attribution.
- Expand automated testing and accessibility validation.

## Author

**Terrence Reinhardt**

Frontend Developer

- [GitHub](https://github.com/TerrenceReinhardt)
- [SkyArt Repository](https://github.com/TerrenceReinhardt/skyart)

## Project Status

Core frontend development completed. Deployment and final production validation are in progress.