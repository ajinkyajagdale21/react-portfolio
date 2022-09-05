import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { BlogPage } from "./components/BlogPage";
import { Nav } from "./components/Nav";
import { ProjectPage } from "./components/ProjectPage";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
    </div>
  );
}

export default App;
