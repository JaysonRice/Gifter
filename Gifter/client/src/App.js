import React from "react";
import "./App.css";
import { PostProvider } from "./providers/PostProvider";
import PostList from "./components/PostList";
import Search from "./components/Search";
import PostForm from "./components/PostForm";

function App() {
  return (
    <div className="App">
      <PostProvider>
        <Search />
        <PostForm />
        <PostList />
      </PostProvider>
    </div>
  );
}

export default App;