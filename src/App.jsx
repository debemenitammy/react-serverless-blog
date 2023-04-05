import { Routes, Route } from "react-router-dom";
import BlogHome from "./BlogHome";
import BlogPost from "./BlogPost";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h2>My blog</h2>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<BlogHome />} />
          <Route path="/p/:page" element={<BlogHome />} />
          <Route path="/post/:slug" element={<BlogPost />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
