// import react from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CoursesPagination from "./components/CoursesPagination";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <CoursesPagination/>
      <Services />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
