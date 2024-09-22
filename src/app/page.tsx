import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills /> {/* Added Skills Component */}
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
