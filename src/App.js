// App.js
import "./App.css";
import Header from "./components/header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import { Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import University from "./pages/University/university";
import Student from "./pages/University/student";
import Fact from "./pages/University/fact";
import Team from "./pages/Team";
import Universityy from "./pages/University/aboutUniversity/universityy";
import Footer from "./components/footer"; // 👈 Футерди импорт кылуу
function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/university" element={<University />} />
          <Route path="/university1" element={<Universityy />} />
          <Route path="/student" element={<Student />} />
          <Route path="/fact" element={<Fact />} />
        </Routes>
        <Footer/>
      </LanguageProvider>
    </div>
  );
}

export default App;
