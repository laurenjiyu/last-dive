# CS247G: Last Dive

This repository contains projects, assignments, and resources for the CS247G course at Stanford University. The repository serves as a collection of interactive experiences and game design explorations, including a React-based game application and HTML-based puzzles.

## Repository Purpose

This workspace is dedicated to:
- Exploring game design concepts and principles
- Creating interactive experiences that engage users
- Implementing various puzzle and game mechanics
- Experimenting with different interaction modalities

## Detailed Repository Breakdown

### Directory Structure

```
last-dive/
├── README.md                      # Main repository documentation
├── package.json                   # Node.js dependencies and scripts
├── package-lock.json              # Locked versions of dependencies
├── .gitignore                     # Git ignore configuration
├── public/                        # Public assets for React app
│   ├── index.html                 # Main HTML entry point
│   ├── favicon.ico                # Website favicon
│   ├── manifest.json              # PWA manifest
│   ├── robots.txt                 # Search engine configuration
│   ├── logo192.png                # React logo (192px)
│   ├── logo512.png                # React logo (512px)
│   └── assets/                    # Game assets
│       ├── villain.png            # Villain character image
│       ├── redroom.png            # Red room background
│       ├── exposition.png         # Exposition screen background
│       ├── kitchen-bg.png         # Kitchen background image
│       ├── openbook.jpg           # Open book image
│       ├── submarine.png          # Submarine image
│       └── book.jpeg              # Book image
├── src/                           # Source code for React app
│   ├── index.js                   # Main JavaScript entry point
│   ├── index.css                  # Global styles
│   ├── App.js                     # Main App component
│   ├── App.css                    # App-specific styles
│   ├── App.test.js                # App tests
│   ├── logo.svg                   # React logo SVG
│   ├── theme.js                   # Theme configuration
│   ├── reportWebVitals.js         # Performance reporting
│   ├── setupTests.js              # Test configuration
│   ├── components/                # Reusable React components
│   │   ├── GameContainer.jsx      # Container for game elements
│   │   ├── Padlock.jsx            # Padlock puzzle component
│   │   └── Timer.jsx              # Timer component
│   └── screens/                   # Game screen components
│       ├── StartScreen.jsx        # Initial game screen
│       ├── Exposition.jsx         # Story exposition screen
│       └── KitchenRoom.jsx        # Kitchen room gameplay screen
└── red-reveal-puzzles/            # Red reveal puzzle implementations
    ├── red-reveal.html            # Basic red reveal puzzle
    ├── red-reveal-interactive.html # Interactive customizable version
    ├── red-reveal-printable.html  # Printable version with filter template
    ├── red-reveal-crowded.html    # Dense field of letters version
    ├── red-reveal-scattered.html  # Scattered R, E, D letters version
    ├── red-reveal-ordered-scatter.html # Ordered but separated R-E-D version
    ├── red-reveal-printable-page.html # Full-page printable version
    └── red-reveal-image-export.html # Version with image export capability
```

### React Application Structure

The repository contains a React-based game application with the following key components:

#### Source Code (`src/`)

The `src/` directory contains the React application source code:

1. **Core Files**
   - `index.js`: The entry point for the React application
   - `App.js`: The main App component that handles routing between game screens
   - `theme.js`: Contains theme configuration for consistent styling

2. **Components (`src/components/`)**
   - `GameContainer.jsx`: A wrapper component that provides common game functionality
   - `Padlock.jsx`: Interactive padlock puzzle component
   - `Timer.jsx`: Component for tracking and displaying game time

3. **Game Screens (`src/screens/`)**
   - `StartScreen.jsx`: The initial screen players see when starting the game
   - `Exposition.jsx`: Provides story context and introduction
   - `KitchenRoom.jsx`: Interactive kitchen environment with puzzles and objects

#### Assets (`public/assets/`)

The `public/assets/` directory contains game graphics and media:

1. **Environment Assets**
   - `kitchen-bg.png`: Background image for the kitchen scene
   - `redroom.png`: Background for the red room scene
   - `exposition.png`: Background for the exposition/story screen

2. **Character Assets**
   - `villain.png`: Image of the game's antagonist

3. **Object Assets**
   - `submarine.png`: Submarine image used in puzzles or story
   - `book.jpeg`: Book object that can be interacted with
   - `openbook.jpg`: Open book showing content

### Red Reveal Puzzles

The `red-reveal-puzzles` directory contains HTML-based puzzles that use color properties to hide and reveal text.

#### File Descriptions

1. **red-reveal.html**
   - Basic implementation of the red reveal concept
   - Hides the word "RED" using cyan text among red/pink/yellow noise
   - Simple, focused demonstration of the core concept

2. **red-reveal-interactive.html**
   - Interactive version with customization features
   - Allows users to create their own hidden words/phrases
   - Includes a simulated red filter view
   - Contains explanatory sections about how the puzzle works

3. **red-reveal-printable.html**
   - Designed specifically for printing
   - Includes a printable red filter template on a separate page
   - Optimized layout for physical use

4. **red-reveal-crowded.html**
   - Creates a dense field of random letters
   - Hides multiple instances of "RED" throughout the field
   - Designed for a more challenging puzzle experience

5. **red-reveal-scattered.html**
   - Scatters individual R, E, and D letters randomly throughout the grid
   - Each letter is hidden independently among noise characters
   - Creates a different visual pattern when revealed

6. **red-reveal-ordered-scatter.html**
   - Places R, E, D letters in correct sequence but separated by noise
   - Creates multiple instances of the separated sequence
   - Balances order and chaos for an interesting reveal effect

7. **red-reveal-printable-page.html**
   - Full-page printable version with extensive customization
   - Allows adjustment of grid size, hidden word, and colors
   - Supports custom layout patterns
   - Optimized for standard letter-size printing

8. **red-reveal-image-export.html**
   - Adds functionality to capture the puzzle as a downloadable image
   - Supports PNG and JPEG export formats
   - Allows customization of dimensions and font size
   - Useful for sharing puzzles in digital formats

## Technologies Used

This repository utilizes various technologies:

### React Application
- **React**: Front-end JavaScript library for building user interfaces
- **CSS**: For styling components and screens
- **JavaScript (ES6+)**: For application logic and interactivity

### Red Reveal Puzzles
- **HTML**: For structure
- **CSS**: For styling and color manipulation
- **JavaScript**: For interactive features and dynamic content generation
- **html2canvas** library (in the image export version): For converting HTML to images

## Getting Started

### Prerequisites

- Node.js and npm (for React application)
- A modern web browser (Chrome, Firefox, Safari, or Edge recommended)
- Basic familiarity with web technologies for code exploration
- For physical puzzles: ability to print and access to red transparent materials

### Running the React Application

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/last-dive.git
   cd last-dive
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open your browser to `http://localhost:3000`

### Running the Red Reveal Puzzles

1. Navigate to the red-reveal-puzzles directory
2. Open any HTML file in your web browser:
   ```
   open red-reveal-puzzles/red-reveal.html    # On macOS
   start red-reveal-puzzles/red-reveal.html   # On Windows
   ```

## Game Overview

"Last Dive" is an interactive escape room-style game where players navigate through different environments, solve puzzles, and uncover a mysterious story. The game features:

- Multiple interconnected scenes
- Interactive objects and puzzles
- Time-based challenges
- Narrative-driven gameplay

## Contributing

This repository is primarily for course-related work, but contributions and improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## License

[Specify license information as appropriate]

## Acknowledgments

- CS247G course instructors and teaching staff
- Stanford University Computer Science Department
- [Any additional acknowledgments as appropriate]