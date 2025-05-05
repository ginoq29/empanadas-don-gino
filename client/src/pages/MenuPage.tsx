import { motion } from "framer-motion";
import EmpanadaCard from "@/components/ui/EmpanadaCard";
import SectionTitle from "@/components/ui/SectionTitle";
import empanadas from "@/data/empanadas";

export default function MenuPage() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Título principal de boxes */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle 
            title="Elige tu Box de Empanadas Don Gino" 
            subtitle="Combina tus sabores favoritos o déjate sorprender" 
          />
        </motion.div>

        {/* Cajas de empanadas */}
        {/* Cajas de empanadas */}
<motion.div 
  className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10"
  initial="hidden"
  animate="visible"
  variants={staggerContainer}
>
  {/* Box Clásica */}
  <motion.div variants={fadeInUp} className="bg-kraft text-dark-brown rounded-xl p-6 shadow-lg">
    <h3 className="text-xl font-semibold font-lato mb-2">Box Clásica (6 unidades)</h3>
    <p className="mb-4">Ideal para 1 o 2 personas. Una experiencia gourmet para saborear en pareja.</p>
    <a
      href="https://wa.me/51TU_NUMERO?text=Hola%2C%20quiero%20pedir%20la%20Box%20Cl%C3%A1sica%20de%206%20empanadas.%20Mis%20sabores%20elegidos%20son%3A"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-full font-lato transition"
    >
      Elegir este Box
    </a>
    <a
      href="https://wa.me/51TU_NUMERO?text=Hola%2C%20quiero%20regalar%20una%20Box%20de%20empanadas%20Don%20Gino.%0ANombre%20del%20destinatario%3A%0ADedicatoria%20especial%3A%0ADirecci%C3%B3n%20de%20entrega%3A%0ABox%20elegida%3A%20Box%20Cl%C3%A1sica%20(6%20unidades)%0ASabores%3A"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-2 inline-block bg-accent hover:bg-accent/90 text-white py-2 px-4 rounded-full font-lato transition"
    >
      🎁 Regalar esta Box
    </a>
  </motion.div>

  {/* Box Compartida */}
  <motion.div variants={fadeInUp} className="bg-kraft text-dark-brown rounded-xl p-6 shadow-lg">
    <h3 className="text-xl font-semibold font-lato mb-2">Box Compartida (9 unidades)</h3>
    <p className="mb-4">Perfecta para probar varios sabores y compartir sin peleas.</p>
    <a
      href="https://wa.me/51TU_NUMERO?text=Hola%2C%20quiero%20pedir%20la%20Box%20Compartida%20de%209%20empanadas.%20Mis%20sabores%20elegidos%20son%3A"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-full font-lato transition"
    >
      Elegir este Box
    </a>
    <a
      href="https://wa.me/51TU_NUMERO?text=Hola%2C%20quiero%20regalar%20una%20Box%20de%20empanadas%20Don%20Gino.%0ANombre%20del%20destinatario%3A%0ADedicatoria%20especial%3A%0ADirecci%C3%B3n%20de%20entrega%3A%0ABox%20elegida%3A%20Box%20Compartida%20(9%20unidades)%0ASabores%3A"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-2 inline-block bg-accent hover:bg-accent/90 text-white py-2 px-4 rounded-full font-lato transition"
    >
      🎁 Regalar esta Box
    </a>
  </motion.div>

  {/* Box Familiar */}
  <motion.div variants={fadeInUp} className="bg-kraft text-dark-brown rounded-xl p-6 shadow-lg">
    <h3 className="text-xl font-semibold font-lato mb-2">Box Familiar (12 unidades)</h3>
    <p className="mb-4">Ideal para familias o pequeñas reuniones pero con mucho sabor.</p>
    <a
      href="https://wa.me/51TU_NUMERO?text=Hola%2C%20quiero%20pedir%20la%20Box%20Familiar%20de%2012%20empanadas.%20Mis%20sabores%20elegidos%20son%3A"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-full font-lato transition"
    >
      Elegir este Box
    </a>
    <a
      href="https://wa.me/51TU_NUMERO?text=Hola%2C%20quiero%20regalar%20una%20Box%20de%20empanadas%20Don%20Gino.%0ANombre%20del%20destinatario%3A%0ADedicatoria%20especial%3A%0ADirecci%C3%B3n%20de%20entrega%3A%0ABox%20elegida%3A%20Box%20Familiar%20(12%20unidades)%0ASabores%3A"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-2 inline-block bg-accent hover:bg-accent/90 text-white py-2 px-4 rounded-full font-lato transition"
    >
      🎁 Regalar esta Box
    </a>
  </motion.div>

  {/* The Big Box */}
  <motion.div variants={fadeInUp} className="bg-kraft text-dark-brown rounded-xl p-6 shadow-lg">
    <h3 className="text-xl font-semibold font-lato mb-2">The Big Box (24 unidades)</h3>
    <p className="mb-4">Nuestra caja estrella. Para regalar, celebrar o consentir a lo grande.</p>
    <a
      href="https://wa.me/51TU_NUMERO?text=Hola%2C%20quiero%20pedir%20la%20Big%20Box%20de%2024%20empanadas.%20Mis%20sabores%20elegidos%20son%3A"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-full font-lato transition"
    >
      Elegir este Box
    </a>
    <a
      href="https://wa.me/51TU_NUMERO?text=Hola%2C%20quiero%20regalar%20una%20Box%20de%20empanadas%20Don%20Gino.%0ANombre%20del%20destinatario%3A%0ADedicatoria%20especial%3A%0ADirecci%C3%B3n%20de%20entrega%3A%0ABox%20elegida%3A%20The%20Big%20Box%20(24%20unidades)%0ASabores%3A"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-2 inline-block bg-accent hover:bg-accent/90 text-white py-2 px-4 rounded-full font-lato transition"
    >
      🎁 Regalar esta Box
    </a>
  </motion.div>
</motion.div>


        {/* Sabores disponibles */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <SectionTitle 
            title="Nuestros Sabores Gourmet" 
            subtitle="Empanadas premium llenas de sabor, tradición y carácter. Elige tus favoritas para armar tu Box de empanadas." 
          />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {empanadas.map((empanada) => (
            <motion.div key={empanada.id} variants={fadeInUp}>
              <EmpanadaCard
                image={empanada.image}
                name={empanada.name}
                description={empanada.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
