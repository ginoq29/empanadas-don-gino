import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Inicio", path: "/" },
    { name: "Menú", path: "/menu" },
    { name: "Nosotros", path: "/about" },
    { name: "Contacto", path: "/contact" },
  ];

  return (
    <nav className={`sticky top-0 z-50 bg-kraft border-b border-secondary/30 ${scrolled ? "shadow-md" : ""}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
  <img src="/src/assets/dongino.png" alt="Logo Don Gino" className="h-16 md:h-20 object-contain" />
  <div className="text-primary font-dancing text-3xl md:text-4xl">
    
  </div>
</Link>


          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`nav-link text-dark-brown hover:text-primary transition duration-300 font-lato ${
                  location === item.path ? "active" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://wa.me/51TU_NUMERO"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent/90 text-white py-2 px-4 rounded-md shadow-md transition duration-300 font-lato flex items-center"
            >
              <FaWhatsapp className="mr-2" /> Pedir Ahora
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-primary focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pb-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 text-dark-brown hover:text-primary font-lato ${
                  location === item.path ? "font-bold" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://wa.me/51TU_NUMERO"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 bg-accent hover:bg-accent/90 text-white py-2 px-4 rounded-md shadow-md text-center transition duration-300 font-lato flex items-center justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaWhatsapp className="mr-2" /> Pedir Ahora
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
