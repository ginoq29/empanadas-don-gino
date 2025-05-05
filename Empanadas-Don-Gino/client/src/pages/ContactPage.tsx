import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import SectionTitle from "@/components/ui/SectionTitle";

export default function ContactPage() {
  return (
    <section className="py-16 bg-white text-dark-brown px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <SectionTitle
          title="Contáctanos"
          subtitle="Haz tu pedido, haz una consulta o simplemente saluda"
        />

        <div className="mt-10 space-y-4 text-lg font-lato">
          <p>📍 Reparto a domicilio en Lima Metropolitana</p>
          <p>📞 WhatsApp: <a href="https://wa.me/51TU_NUMERO" className="text-accent underline" target="_blank" rel="noopener noreferrer">+51 TU_NUMERO</a></p>
          <p>✉️ Correo: <a href="mailto:empanadasdongino@gmail.com" className="text-accent underline">empanadasdongino@gmail.com</a></p>
          <p>🕒 Horario: Lunes a Sábado de 9:00 a.m. a 7:00 p.m.</p>
        </div>

        <div className="mt-8">
          <a
            href="https://wa.me/51TU_NUMERO?text=Hola%2C%20quiero%20hacer%20un%20pedido%20de%20empanadas%20Don%20Gino"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-full font-lato transition"
          >
            <FaWhatsapp size={20} /> Pedir por WhatsApp
          </a>
        </div>

        <div className="mt-10 flex justify-center gap-6 text-2xl text-accent">
          <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        </div>
      </div>
    </section>  
  );
}
