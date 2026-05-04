import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

const posts = [
  {
    id: 1,
    title: "My First Post",
    date: "2024-06-01",
    preview: "This is the preview of my first post."
  },
  {
    id: 2,
    title: "Another Day, Another Post",
    date: "2024-06-02",
    preview: "Here's a sneak peek at my second post."
  },
  {
    id: 3,
    title: "React Components are Fun!",
    date: "2024-06-03",
    preview: "Let's dive into the world of React components."
  }
];

function App() {
  return (
    <div className="App" style={{ maxWidth: "1000px", margin: "0 auto" }}>
      <header>
        <Header name="Sophie's Blog" />
      </header>

      <aside>
        <About
          image="/image.png"
          about="Welcome to my personal blog where I share my thoughts."
        />
      </aside>

      <ArticleList posts={posts} />
    </div>
  );
}

export default App;
