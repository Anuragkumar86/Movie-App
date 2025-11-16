# 🎬 Movies & TV Shows Directory  
A fully responsive directory of movies & TV shows built with **Next.js App Router**, **TypeScript**, and **Tailwind CSS**.  
The project demonstrates clean UI, fast filtering, programmatic routing, ISR-ready data usage, and modern frontend best practices.

---

## 🚀 Live Demo  
👉 **Vercel URL**: _<your deployed link here>_

---

## 📦 GitHub Repository  
👉 **Repo URL**: _<your GitHub repo link here>_

---

## 📦 Loom Video Link  
👉 **Loom Video URL**: _<your GitHub repo link here>_

## 📊 Dataset

**Source:**  
https://gist.github.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4  

The dataset originally contained inconsistencies such as:
- Missing ratings  
- Mixed movie/series entries  
- Irregular genre formats  
- Duplicate / broken image URLs  

### 🔧 Data Cleaning Performed
- Removed invalid entries  
- Normalized `type` field (`movie` | `series`)  
- Fixed inconsistent genres  
- Ensured valid `slug`, `id`, and poster URLs  
- Added missing fields where needed  
- Converted into a clean `movies.json` file stored locally

---

## 🛠 Tech Stack

- **Next.js 16 (App Router)**
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **next-themes** for light/dark mode
- **Lucide Icons**
- **Vercel Hosting**
- **Static JSON dataset (no database)**

---

## 🎨 Design Inspiration

UI references taken from:

- **Awwwards** (modern typography, card shadows, spacing)
- **Dribbble** (minimalistic movie/show grid inspiration)
- **Letterboxd** (rating badge and list layout direction)

The goal was to create:
- Soft rounded UI  
- Smooth hover transitions  
- High readability in both light & dark mode  
- Responsive layout from mobile → desktop  

---

## ✨ Features

### ✔️ Home Page (App Router)
- Hero section  
- Dataset statistics  
- Top genres  
- Search bar  
- Filters (genre, type, min rating)  
- Sorting (year & rating, asc/desc)  
- Fully responsive layout  
- Dark/Light theme toggle  

### ✔️ Dynamic Movie Detail Page
`/movie/[slug]`  
- Poster  
- Metadata (year, type, rating, seasons)  
- Genre badges  
- Complete plot  
- Image gallery  

### ✔️ Reusable Components
- MovieCard  
- MovieList  
- SearchBar  
- FilterPanel  
- Navbar  
- Footer  
- ThemeToggle  

### ✔️ Clean Architecture
- `data/` for JSON dataset  
- `components/` for UI  
- `app/movie/[slug]/` for dynamic pages  
- Tailwind v4 + PostCSS pipeline configured  

---

<!-- ## ⚙️ Running Locally -->
<!-- 
```sh
npm install
npm run dev -->



###  💡 AI Prompts Used

Examples of real prompts used during development:

Prompt 1 — UI Component (Movie Card)

“Generate a responsive MovieCard component using Next.js, TypeScript, and Tailwind CSS. Include poster image, title, year, genres, rating badge, and smooth hover effects.”

Prompt 2 — Filter Panel & Search Logic

“Create a FilterPanel with props for genre, type (movie/series), minimum rating, and sorting. Use TypeScript for strong typing and Tailwind for styling, and ensure it integrates cleanly with search functionality.”

Prompt 3 — Dynamic Slug Page

“Build a dynamic movie detail page for /movie/[slug] using Next.js App Router. It should show poster, metadata, plot, genres, rating, and an image gallery. Use clean layout, responsive design, and TypeScript types.”



## 🚀 What I Would Improve With 2 More Days

Add a watchlist system using localStorage

Add actor pages and cast details

Add animations using Framer Motion