import {
 Link,Routes,Route
} from "react-router-dom";
import Home from "./components/home";


import "./App.css";
import Courses from "./components/courses";
import Contact from "./components/contact";



function App() {
  return (
    <div className="container">
      <nav>
        <ul>
          <Link to="/" class="list">
            Home
          </Link>
          <Link to="/course" class="list">
            Courses
          </Link>
          <Link to="/live" class="list">
            Live course
          </Link>
          <Link to="/contact" class="list">
            Contact
          </Link>
        </ul>
      </nav>

      {/* Defining routes path and rendering components as element */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
