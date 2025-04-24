
# 📰 React News App

A fully functional news application built with **React** and **React Router**, powered by the **NewsAPI**. Users can view the latest news, filter by category, and search for specific topics.

## 🚀 Features

- 🔍 Search for news using keywords
- 🗃️ Browse news by category (e.g., technology, sports, etc.)
- 🏠 Navigate between pages like Home, About, and News Feed
- 🧭 Persistent Navbar for navigation
- 🧾 Modular structure with reusable components (e.g., `Card`, `Navbar`)

## 📁 Project Structure

```
.
├── components
│   ├── About.jsx
│   ├── Card.jsx
│   ├── Home.jsx
│   └── Navbar.jsx
├── App.jsx
├── index.css
├── index.js
└── README.md
```

## 🧩 Tech Stack

- React (with Hooks)
- React Router DOM
- Fetch API
- NewsAPI.org

## 🔑 API Key

This project uses [NewsAPI.org](https://newsapi.org/) to fetch news. You must include your API key in the fetch URLs.

In the code:

```js
const response = await fetch(
  `https://newsapi.org/v2/everything?q=keyword&apiKey=YOUR_API_KEY`
);
```

Replace `YOUR_API_KEY` with your actual API key.

> Note: You can get a free API key by signing up at [https://newsapi.org](https://newsapi.org)

## 🧠 How Routing Works

React Router is used to navigate between the following pages:

- `/` → Displays fetched news using the `Card` component
- `/home` → Shows the Home page
- `/about` → Shows the About page

The `Navbar` component stays visible across all routes for seamless navigation.

## 🛠️ Running the App

### 1. Clone the repository

```bash
git clone https://github.com/your-username/react-news-app.git
cd react-news-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173/` (or another port if you're using Vite).

## 🙌 Acknowledgements

- [NewsAPI.org](https://newsapi.org/) for the free news data
- [React Router](https://reactrouter.com/) for navigation
- Built with ❤️ by Devesh Singh
