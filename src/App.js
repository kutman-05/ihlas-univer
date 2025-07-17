import "./App.css";
import Header from "./components/header"; // "Header" чоң тамга менен
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import { Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import University from "./pages/University/university";
import Student from "./pages/University/student";
import Fact from "./pages/University/fact";
function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/university" element={<University />} />
          <Route path="/student" element={<Student />} />
          <Route path="/fact" element={<Fact />} />
        </Routes>
      </LanguageProvider>
    </div>
  );
}

export default App;
