# React Simple Movies

**React Simple Movies** is a web application built with React.js and Vite that allows users to browse and search for movies using The Movie Database (TMDb) API.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is designed to provide a simple interface for users to explore movies. It fetches data from the TMDb API and displays it in a user-friendly manner. The application utilizes modern React features and best practices, including code splitting and optimized API configurations.

## Features

- Fetches movie data from TMDb API
- Displays movies in a slider using React Swiper
- Efficient data fetching with SWR
- Modular and reusable components
- Client-side routing with React Router
- Code splitting for optimized performance

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/LuonVuiTuoiLV/react-simple-movies.git
   cd react-simple-movies
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure API Key:**

   - Obtain an API key from [The Movie Database (TMDb)](https://www.themoviedb.org/).
   - Create a `.env` file in the root directory and add your API key:

     ```
     VITE_TMDB_API_KEY=your_api_key_here
     ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

   The application will be accessible at `http://localhost:3000`.

## Usage

- **Browse Movies:** The homepage features a slider showcasing popular movies.
- **Search:** Use the search functionality to find movies by title.
- **View Details:** Click on a movie to view detailed information, including its overview, release date, and rating.

## Technologies Used

- **React.js:** JavaScript library for building user interfaces.
- **Vite:** Next-generation frontend tooling for fast development.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **SWR:** React Hooks library for data fetching.
- **React Swiper:** Slider component for React.
- **React Router:** Declarative routing for React applications.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

