import react from "react";
import "./index.css";
import Home from "./routes/Home";
import Project from "./routes/Project";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Resume from "./routes/Resume";
//Route the pages into function using path
//import routes
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Home></Home> */}
      <Routes>
        <Route path="/" element={<About exact={true} />} />
        <Route path="/home" element={<Home exact={true} />} />
        <Route path="/project" element={<Project exact={true} />} />
        <Route path="/about" element={<About exact={true} />} />
        <Route path="/contact" element={<Contact exact={true} />} />
        <Route path="/resume" element={<Resume exact={true} />} />
      </Routes>
    </>
  );
}

export default App;
