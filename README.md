# Paulo's Profile Website (v2.0)

Welcome to **Version 2.0** of my personal portfolio and playground! 

This project was initially inspired by [craftzdog's homepage](https://www.craftz.dog/) and his tutorial on React and Three.js ([video here](https://youtu.be/bSMZgXzC9AA)). Since then, it has evolved significantly into a highly customized, interactive showcase of my work, featuring a fully updated (yet similar) design system and unique interactive components.

## What's New in v2.0?

- **Refreshed Visual Identity**: A richer, warmer color palette, an active teal/cyan/purple glow ecosystem, and customized hobby chips.
- **Interactive "Tea Room" Playground**: Overhauled the static "Tweet Feeds" into a fully interactive game-dev-themed brewing terminal, boasting over 14 unique programming and K-Pop combinations (each with its own unique theme and animations).
- **Polished Glassmorphism**: Refined blurring, borders, and shadows on the Navbar, project cards, and bio sections.
- **Updated Works Roster**: Integrated recent full-stack and React application projects (ShopZada DWH, Bond Calculator, CSS Apply) with perfectly aligned 16:9 thumbnails.
- **Dependency Clean-up**: Pruned unused modules, safely migrated styling constraints, and updated Next.js to leverage the latest v12 build enhancements.

## The 3D Model 🍄

The interactive voxel/3D model featured on the site is still being kept as it is. (The original v1.0 version featured a *Yuna* from World of Final Fantasy by Robukan). 

## Technology Stack

- **Framework**: Next.js 12 / React 17
- **Styling UI Component Library**: Chakra UI v1
- **Animations**: Framer Motion
- **3D Rendering**: Three.js

## Running Locally

If you'd like to run this version locally:

```bash
# Clone the repository
git clone https://github.com/Shrxmy/profile.git

# Navigate into the directory
cd profile

# IMPORTANT: Install dependencies with legacy peer deps enabled 
# since this project adheres to React 17 + Chakra UI v1 compatibility.
npm install --legacy-peer-deps

# Start the Next.js development server
npm run dev
```

Visit `http://localhost:3000` to view the site.

## License & Credits

The code here was encoded by me (Paulo Tumabing). While the foundational structure started from an online tutorial, I have extensively modified to fit my style, adding features beyond the standard structure.

You are welcome to fork and learn from this code to build your own homepage! Just like my v1.0 notes, if you do fork it, please be sure to credit the original tutorial author `craftzdog` by linking him somewhere on your site. You don't have to credit me, but it is appreciated!

&copy; Paulo Tumabing. All Rights Reserved.
