import { Link } from "wouter";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark-brown text-off-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="font-dancing text-3xl text-gold mb-4">Empanadas Don Gino</div>
            <p className="font-lato max-w-xs text-off-white">Tradición y sabor en cada bocado. Empanadas premium gourmet hechas de manera artesanar con ingredientes de primera calidad.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-playfair text-gold text-lg mb-4">Enlaces</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="font-lato hover:text-gold transition duration-300">Inicio</Link></li>
                <li><Link href="/menu" className="font-lato hover:text-gold transition duration-300">Menú</Link></li>
                <li><Link href="/about" className="font-lato hover:text-gold transition duration-300">Nosotros</Link></li>
                <li><Link href="/contact" className="font-lato hover:text-gold transition duration-300">Contacto</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-playfair text-gold text-lg mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/legal" className="font-lato hover:text-gold transition duration-300">
                    Términos y Condiciones
                  </Link>
                </li>
                <li>
                  <Link href="/legal" className="font-lato hover:text-gold transition duration-300">
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <a
  href="https://forms.gle/xTHU7A3nM8E8xCT8A"
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm text-accent underline hover:text-accent/80 transition"
>
  Libro de Reclamaciones
</a>

                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-playfair text-gold text-lg mb-4">Contacto</h4>
              <ul className="space-y-2">
                <li className="font-lato text-off-white">+54 11 5678-9012</li>
                <li className="font-lato text-off-white">empanadasdongino@gmail.com</li>
                <li className="flex space-x-4 mt-4">
                  <a href="#" className="text-xl text-accent hover:text-gold transition duration-300">
                    <FaInstagram />
                  </a>
                  <a href="#" className="text-xl text-accent hover:text-gold transition duration-300">
                    <FaFacebook />
                  </a>
                  <a href="#" className="text-xl text-accent hover:text-gold transition duration-300">
                    <FaTwitter />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="font-lato text-sm text-off-white">&copy; {new Date().getFullYear()} Empanadas Don Gino. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
