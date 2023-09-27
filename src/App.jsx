import Footer from "./components/Footer"
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom"
import Contact from "./pages/Contact"
import ServicePage from "./pages/ServicePage";
import About from "./pages/About";
import Properties from "./pages/Properties";
import Blog from "./pages/Blog";
import Home from "./pages/Home";

function App() {

  return (
    <div className="app font-jakarta">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App
