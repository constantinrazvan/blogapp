import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogsPage from "./pages/BlogsPage";
import CreatePost from "./pages/CreatePost";
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route path="/" element={<BlogsPage/>} />
              <Route path="/newBlog" element={<CreatePost/>} />
              <Route path="/blogPage" element={<BlogPage />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
